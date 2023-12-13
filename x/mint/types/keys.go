package types

var (
	// MinterKey is the key to use for the keeper store.
	MinterKey = []byte{0x00}
	ParamsKey = []byte{0x01}

	// CoinAmountKey is the key to use for the coin amount store.
	CoinAmountKey = []byte{0x02}
)

const (
	// module name
	ModuleName = "mint"

	// StoreKey is the default store key for mint
	StoreKey = ModuleName

	// init mint coins amount by every block: (50*10^8)/6307200=792.7447996
	InitMintMEAmount = 792.7448

	InitOneYearMintAmount = 50_0000_0000.0

	// total blocks of one year: 24*60*60*365/5
	OneYearTotalBlocks = 6307200.0

	// total mint coins amount: 100*10^8*10^8
	TotalMintCoinsAmount = 100_0000_0000_00000000

	// 100*10^8*10^8
	TotalBaseCoinsAmount = 100_0000_0000_00000000
)
