import { BigInt } from "@graphprotocol/graph-ts"
import {
  PowerIndexPool,
  Approval,
  LOG_CALL,
  LOG_CALL_VOTING,
  LOG_COMMUNITY_FEE,
  LOG_EXIT,
  LOG_JOIN,
  LOG_SWAP,
  SetDynamicWeight,
  SetWeightPerSecondBounds,
  Transfer
} from "../generated/PowerIndexPool/PowerIndexPool"
import { Approval_, LOG_CALL_, LOG_CALL_VOTING_, LOG_COMMUNITY_FEE_,
  LOG_EXIT_, LOG_JOIN_, LOG_SWAP_, SetDynamicWeight_, SetWeightPerSecondBounds_, 
  Transfer_ } from "../generated/schema"

export function handleApproval(event: Approval): void {
  let entity = Approval_.load(event.params.owner.toHex())

  if (entity == null) {
    entity = new Approval_(event.params.owner.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value
  entity.save()
}

export function handleLOG_CALL(event: LOG_CALL): void {
  let entity = LOG_CALL_.load(event.params.sig.toHex())

  if (entity == null) {
    entity = new LOG_CALL_(event.params.sig.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.sig = event.params.sig
  entity.caller = event.params.caller
  entity.data = event.params.data
  entity.save()
}

export function handleLOG_CALL_VOTING(event: LOG_CALL_VOTING): void {
  let entity = LOG_CALL_VOTING_.load(event.params.voting.toHex())

  if (entity == null) {
    entity = new LOG_CALL_VOTING_(event.params.voting.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.voting = event.params.voting
  entity.success = event.params.success
  entity.inputSig = event.params.inputSig
  entity.inputData = event.params.inputData
  entity.outputData = event.params.outputData
  entity.save()
}

export function handleLOG_COMMUNITY_FEE(event: LOG_COMMUNITY_FEE): void {
  let entity = LOG_COMMUNITY_FEE_.load(event.params.caller.toHex())

  if (entity == null) {
    entity = new LOG_COMMUNITY_FEE_(event.params.caller.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.caller = event.params.caller
  entity.receiver = event.params.receiver
  entity.token = event.params.token
  entity.tokenAmount = event.params.tokenAmount
  entity.save()
}

export function handleLOG_EXIT(event: LOG_EXIT): void {
  let entity = LOG_EXIT_.load(event.params.caller.toHex())

  if (entity == null) {
    entity = new LOG_EXIT_(event.params.caller.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.caller = event.params.caller
  entity.tokenOut = event.params.tokenOut
  entity.tokenAmountOut = event.params.tokenAmountOut
  entity.save()
}

export function handleLOG_JOIN(event: LOG_JOIN): void {
  let entity = LOG_JOIN_.load(event.params.caller.toHex())

  if (entity == null) {
    entity = new LOG_JOIN_(event.params.caller.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.caller = event.params.caller
  entity.tokenIn = event.params.tokenIn
  entity.tokenAmountIn = event.params.tokenAmountIn
  entity.save()
}

export function handleLOG_SWAP(event: LOG_SWAP): void {
  let entity = LOG_SWAP_.load(event.params.caller.toHex())

  if (entity == null) {
    entity = new LOG_SWAP_(event.params.caller.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.tokenIn = event.params.tokenIn
  entity.tokenOut = event.params.tokenOut
  entity.tokenAmountIn = event.params.tokenAmountIn
  entity.tokenAmountOut = event.params.tokenAmountOut
  entity.save()
}

export function handleSetDynamicWeight(event: SetDynamicWeight): void {
  let entity = SetDynamicWeight_.load(event.params.token.toHex())

  if (entity == null) {
    entity = new SetDynamicWeight_(event.params.token.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.token = event.params.token
  entity.fromDenorm = event.params.fromDenorm
  entity.targetDenorm = event.params.targetDenorm
  entity.fromTimestamp = event.params.fromTimestamp
  entity.targetTimestamp = event.params.targetTimestamp
  entity.save()
}

export function handleSetWeightPerSecondBounds(
  event: SetWeightPerSecondBounds
): void {
  let entity = SetWeightPerSecondBounds_.load(event.params.minWeightPerSecond.toHex())

  if (entity == null) {
    entity = new SetWeightPerSecondBounds_(event.params.minWeightPerSecond.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.minWeightPerSecond = event.params.minWeightPerSecond
  entity.maxWeightPerSecond = event.params.maxWeightPerSecond
  entity.save()
}

export function handleTransfer(event: Transfer): void {
  let entity = Transfer_.load(event.params.from.toHex())

  if (entity == null) {
    entity = new Transfer_(event.params.from.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value
  entity.save()
}
