package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// RegionKeyPrefix is the prefix to retrieve all Region
	RegionKeyPrefix = "Region/value/"
)

// RegionKey returns the store key to retrieve a Region from the index fields
func RegionKey(
	regionId string,
) []byte {
	var key []byte

	regionIdBytes := []byte(regionId)
	key = append(key, regionIdBytes...)
	key = append(key, []byte("/")...)

	return key
}
