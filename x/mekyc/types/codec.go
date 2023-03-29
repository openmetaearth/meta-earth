package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgNewRegion{}, "mekyc/NewRegion", nil)
	cdc.RegisterConcrete(&MsgRemoveRegion{}, "mekyc/RemoveRegion", nil)
	cdc.RegisterConcrete(&MsgNewKyc{}, "mekyc/NewKyc", nil)
	cdc.RegisterConcrete(&MsgRemoveKyc{}, "mekyc/RemoveKyc", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgNewRegion{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgRemoveRegion{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgNewKyc{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgRemoveKyc{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
