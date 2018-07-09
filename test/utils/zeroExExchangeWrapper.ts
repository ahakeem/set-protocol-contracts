import * as _ from "lodash";
import * as ethUtil from "ethereumjs-util";
import * as Web3 from "web3";
const web3 = new Web3();

import { OrderWithoutExchangeAddress } from '@0xproject/types';

import { BigNumber } from "bignumber.js";
import { Address, Bytes32, Bytes, UInt } from "../../types/common.js";
import { ZeroExOrderHeader } from "../../types/zeroEx";

import { 
  bufferAndLPad32,
  getNumBytesFromHex,
  getNumBytesFromBuffer,
  bufferArrayToHex,
  bufferAndLPad32BigNumber,
} from "./encoding";

export function generateStandardZeroExOrderBytesArray(
    zeroExOrder: OrderWithoutExchangeAddress,
    signature: Bytes,
    fillAmount: BigNumber,
): Bytes {
  const { makerAssetData, takerAssetData } = zeroExOrder;

  const makerAssetDataLength = getNumBytesFromHex(makerAssetData);
  const takerAssetDataLength = getNumBytesFromHex(makerAssetData);

  // Get signature length
  const signatureLength: BigNumber = getNumBytesFromHex(signature);
  
  // Get order length   
  const zeroExOrderBuffer = bufferZeroExOrder(zeroExOrder);
  const zeroExOrderLength = getNumBytesFromBuffer(zeroExOrderBuffer);

  // Generate the standard byte array
  return bufferArrayToHex(
    bufferOrderHeader(
      signatureLength,
      zeroExOrderLength,
      makerAssetDataLength,
      takerAssetDataLength,
    )
    .concat([bufferAndLPad32BigNumber(fillAmount)])
    .concat([ethUtil.toBuffer(signature)])
    .concat(zeroExOrderBuffer)
  );
}

export function bufferZeroExOrder(
  order: OrderWithoutExchangeAddress,
): Buffer[] {
  return [
      bufferAndLPad32(order.makerAddress),
      bufferAndLPad32(order.takerAddress),
      bufferAndLPad32(order.feeRecipientAddress),
      bufferAndLPad32(order.senderAddress),
      bufferAndLPad32BigNumber(order.makerAssetAmount),
      bufferAndLPad32BigNumber(order.takerAssetAmount),
      bufferAndLPad32BigNumber(order.makerFee),
      bufferAndLPad32BigNumber(order.takerFee),
      bufferAndLPad32BigNumber(order.expirationTimeSeconds),
      bufferAndLPad32BigNumber(order.salt),
      ethUtil.toBuffer(order.makerAssetData),
      ethUtil.toBuffer(order.takerAssetData),
  ];
}

function bufferOrderHeader(
  signatureLength: BigNumber,
  orderLength: BigNumber,
  makerAssetDataLength: BigNumber,
  takerAssetDataLength: BigNumber,
): Buffer[] {
    return [
      bufferAndLPad32BigNumber(signatureLength),
      bufferAndLPad32BigNumber(orderLength),
      bufferAndLPad32BigNumber(makerAssetDataLength),
      bufferAndLPad32BigNumber(takerAssetDataLength),
    ];
}
