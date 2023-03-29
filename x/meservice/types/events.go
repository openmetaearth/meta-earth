package types

// staking module event types
const (
	EventTypeDoDeposit       = "deposit"
	EventTypeDoWithdraw      = "withdraw"
	EventTypeDoFixedDeposit  = "fixed deposit"
	EventTypeDoFixedWithDraw = "fixed withdraw"
	EventTypeDoAgToAc        = "ag to ac"
	EventTypeKycNew          = "kyc new"
	EventTypeBonusNew        = "bonus new"
	EventTypeBonusRetrieve   = "bonus retrieve"

	AttributeKeyAccount   = "account address"
	AttributeKeyRegionId  = "region id"
	AttributeKeyRole      = "kyc role type"
	AttributeKeyExecTime  = "exec time"
	AttributeKeyAmount    = "amount"
	AttributeKeyStartTime = "start time"
	AttributeKeyEndTime   = "end time"
	AttributeKeyPeriod    = "fixed deposit period"
	AttributeKeyPrincipal = "principal"
	AttributeKeyInterest  = "fixed deposit interest"
	AttributeKeyAgAmount  = "ag amount"
	AttributeKeyAcAmount  = "ac amount"
	AttributeKeySender    = "sender"
	AttributeKeyReceiver  = "receiver"
	AttributeKeyDenom     = "denomination"

	AttributeKeyBonusStartEpoch = "start epoch"
	AttributeKeyBonusAmount     = "amount"
	AttributeKeyTerm            = "term"

	AttributeValueCategory = ModuleName

	AttributeApplyEvent      = "apply_event"
	AttributeApplyAction     = "apply_action"
	AttributeApplyData       = "apply_data"
	AttributeApplyError      = "apply_error"
	AttributeApplyResult     = "apply_result"
	AttributeApplyEventError = "apply_event_error"

	AttributeAddress  = "address"
	AttributeSender   = "sender"
	AttributeReceiver = "receiver"
	AttributeError    = "error"
)
