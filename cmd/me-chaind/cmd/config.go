package cmd

import (
	"encoding/json"
	"fmt"
	"path/filepath"
	"strings"

	"github.com/mitchellh/mapstructure"
	"gopkg.in/yaml.v2"

	tmcli "github.com/cometbft/cometbft/libs/cli"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/server"

	tmcfg "github.com/cometbft/cometbft/config"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/server/config"
	"github.com/spf13/cobra"
)

const (
	configFileName = "config.toml"
	appFileName    = "app.toml"
)

func AppTomlCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "app.toml [key] [value]",
		Short: "Create or query an `~/.xxx/config/apptoml` file",
		Args:  cobra.RangeArgs(0, 2),
		RunE: func(cmd *cobra.Command, args []string) error {
			return runConfigCmd(cmd, append([]string{appFileName}, args...))
		},
	}
	cmd.Flags().StringP(tmcli.OutputFlag, "o", "text", "Output format (text|json)")
	return cmd
}

func ConfigTomlCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "config.toml [key] [value]",
		Short: "Create or query an `~/.xxx/config/config.toml` file",
		Args:  cobra.RangeArgs(0, 2),
		RunE: func(cmd *cobra.Command, args []string) error {
			return runConfigCmd(cmd, append([]string{configFileName}, args...))
		},
	}
	cmd.Flags().StringP(tmcli.OutputFlag, "o", "text", "Output format (text|json)")
	return cmd
}

func runConfigCmd(cmd *cobra.Command, args []string) error {
	serverCtx := server.GetServerContextFromCmd(cmd)
	clientCtx := client.GetClientContextFromCmd(cmd)

	operatorConfig, err := newConfig(args[0], serverCtx)
	if err != nil {
		return err
	}

	// is len(args) == 1, get config file content
	if len(args) == 1 {
		return operatorConfig.output(clientCtx)
	}

	// 2. is len(args) == 2, get config key value
	if len(args) == 2 {
		return output(clientCtx, serverCtx.Viper.Get(args[1]))
	}

	serverCtx.Viper.Set(args[1], args[2])
	configPath := filepath.Join(serverCtx.Viper.GetString(flags.FlagHome), "config")
	if err = operatorConfig.save(configPath); err != nil {
		return err
	}
	return nil
}

type cmdConfig interface {
	output(clientCtx client.Context) error
	save(configPath string) error
}

var (
	_ cmdConfig = &appTomlConfig{}
	_ cmdConfig = &configTomlConfig{}
)

type appTomlConfig struct {
	clientCtx *server.Context
	config    *config.Config
}

func (a *appTomlConfig) output(clientCtx client.Context) error {
	return output(clientCtx, a.config)
}

func (a *appTomlConfig) save(configPath string) error {
	if err := a.clientCtx.Viper.Unmarshal(a.config); err != nil {
		return err
	}
	configPath = filepath.Join(configPath, appFileName)
	config.WriteConfigFile(configPath, a.config)
	return nil
}

type configTomlConfig struct {
	clientCtx *server.Context
	config    *tmcfg.Config
}

func (c *configTomlConfig) output(clientCtx client.Context) error {
	return output(clientCtx, c.config)
}

func (c *configTomlConfig) save(configPath string) error {
	if err := c.clientCtx.Viper.Unmarshal(c.config); err != nil {
		return err
	}
	configPath = filepath.Join(configPath, configFileName)
	tmcfg.WriteConfigFile(configPath, c.config)
	return nil
}

func newConfig(configName string, clientCtx *server.Context) (cmdConfig, error) {
	switch configName {
	case appFileName:
		var configData = config.Config{}
		if err := clientCtx.Viper.Unmarshal(&configData); err != nil {
			return nil, err
		}
		return &appTomlConfig{config: &configData, clientCtx: clientCtx}, nil
	case configFileName:
		var configData = tmcfg.Config{}
		if err := clientCtx.Viper.Unmarshal(&configData); err != nil {
			return nil, err
		}
		return &configTomlConfig{config: &configData, clientCtx: clientCtx}, nil
	default:
		return nil, fmt.Errorf("invalid config file: %s, (support: %v)", configName, strings.Join([]string{appFileName, configFileName}, "/"))
	}
}

func output(clientCtx client.Context, content interface{}) error {
	var mapData interface{}
	if err := mapstructure.Decode(content, &mapData); err != nil {
		return err
	}
	data, err := json.MarshalIndent(mapData, "", "  ")
	if err != nil {
		return err
	}
	return PrintOutput(clientCtx, data)
}

func PrintOutput(ctx client.Context, out []byte) error {
	if ctx.OutputFormat == "text" {
		// handle text format by decoding and re-encoding JSON as YAML
		var j interface{}
		err := json.Unmarshal(out, &j)
		if err != nil {
			return err
		}

		out, err = yaml.Marshal(j)
		if err != nil {
			return err
		}
		return ctx.PrintBytes(out)
	} else {
		return ctx.PrintBytes(out)
	}
}
