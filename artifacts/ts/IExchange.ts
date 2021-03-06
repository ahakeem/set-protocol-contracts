export const IExchange = 
{
  "contractName": "IExchange",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "components": [
            {
              "name": "makerAddress",
              "type": "address"
            },
            {
              "name": "takerAddress",
              "type": "address"
            },
            {
              "name": "feeRecipientAddress",
              "type": "address"
            },
            {
              "name": "senderAddress",
              "type": "address"
            },
            {
              "name": "makerAssetAmount",
              "type": "uint256"
            },
            {
              "name": "takerAssetAmount",
              "type": "uint256"
            },
            {
              "name": "makerFee",
              "type": "uint256"
            },
            {
              "name": "takerFee",
              "type": "uint256"
            },
            {
              "name": "expirationTimeSeconds",
              "type": "uint256"
            },
            {
              "name": "salt",
              "type": "uint256"
            },
            {
              "name": "makerAssetData",
              "type": "bytes"
            },
            {
              "name": "takerAssetData",
              "type": "bytes"
            }
          ],
          "name": "orders",
          "type": "tuple[]"
        },
        {
          "name": "takerAssetFillAmounts",
          "type": "uint256[]"
        },
        {
          "name": "signatures",
          "type": "bytes[]"
        }
      ],
      "name": "batchFillOrders",
      "outputs": [
        {
          "components": [
            {
              "name": "makerAssetFilledAmount",
              "type": "uint256"
            },
            {
              "name": "takerAssetFilledAmount",
              "type": "uint256"
            },
            {
              "name": "makerFeePaid",
              "type": "uint256"
            },
            {
              "name": "takerFeePaid",
              "type": "uint256"
            }
          ],
          "name": "totalFillResults",
          "type": "tuple"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "hash",
          "type": "bytes32"
        },
        {
          "name": "signerAddress",
          "type": "address"
        },
        {
          "name": "signature",
          "type": "bytes"
        }
      ],
      "name": "preSign",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "components": [
            {
              "name": "makerAddress",
              "type": "address"
            },
            {
              "name": "takerAddress",
              "type": "address"
            },
            {
              "name": "feeRecipientAddress",
              "type": "address"
            },
            {
              "name": "senderAddress",
              "type": "address"
            },
            {
              "name": "makerAssetAmount",
              "type": "uint256"
            },
            {
              "name": "takerAssetAmount",
              "type": "uint256"
            },
            {
              "name": "makerFee",
              "type": "uint256"
            },
            {
              "name": "takerFee",
              "type": "uint256"
            },
            {
              "name": "expirationTimeSeconds",
              "type": "uint256"
            },
            {
              "name": "salt",
              "type": "uint256"
            },
            {
              "name": "makerAssetData",
              "type": "bytes"
            },
            {
              "name": "takerAssetData",
              "type": "bytes"
            }
          ],
          "name": "leftOrder",
          "type": "tuple"
        },
        {
          "components": [
            {
              "name": "makerAddress",
              "type": "address"
            },
            {
              "name": "takerAddress",
              "type": "address"
            },
            {
              "name": "feeRecipientAddress",
              "type": "address"
            },
            {
              "name": "senderAddress",
              "type": "address"
            },
            {
              "name": "makerAssetAmount",
              "type": "uint256"
            },
            {
              "name": "takerAssetAmount",
              "type": "uint256"
            },
            {
              "name": "makerFee",
              "type": "uint256"
            },
            {
              "name": "takerFee",
              "type": "uint256"
            },
            {
              "name": "expirationTimeSeconds",
              "type": "uint256"
            },
            {
              "name": "salt",
              "type": "uint256"
            },
            {
              "name": "makerAssetData",
              "type": "bytes"
            },
            {
              "name": "takerAssetData",
              "type": "bytes"
            }
          ],
          "name": "rightOrder",
          "type": "tuple"
        },
        {
          "name": "leftSignature",
          "type": "bytes"
        },
        {
          "name": "rightSignature",
          "type": "bytes"
        }
      ],
      "name": "matchOrders",
      "outputs": [
        {
          "components": [
            {
              "components": [
                {
                  "name": "makerAssetFilledAmount",
                  "type": "uint256"
                },
                {
                  "name": "takerAssetFilledAmount",
                  "type": "uint256"
                },
                {
                  "name": "makerFeePaid",
                  "type": "uint256"
                },
                {
                  "name": "takerFeePaid",
                  "type": "uint256"
                }
              ],
              "name": "left",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "name": "makerAssetFilledAmount",
                  "type": "uint256"
                },
                {
                  "name": "takerAssetFilledAmount",
                  "type": "uint256"
                },
                {
                  "name": "makerFeePaid",
                  "type": "uint256"
                },
                {
                  "name": "takerFeePaid",
                  "type": "uint256"
                }
              ],
              "name": "right",
              "type": "tuple"
            },
            {
              "name": "leftMakerAssetSpreadAmount",
              "type": "uint256"
            }
          ],
          "name": "matchedFillResults",
          "type": "tuple"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "components": [
            {
              "name": "makerAddress",
              "type": "address"
            },
            {
              "name": "takerAddress",
              "type": "address"
            },
            {
              "name": "feeRecipientAddress",
              "type": "address"
            },
            {
              "name": "senderAddress",
              "type": "address"
            },
            {
              "name": "makerAssetAmount",
              "type": "uint256"
            },
            {
              "name": "takerAssetAmount",
              "type": "uint256"
            },
            {
              "name": "makerFee",
              "type": "uint256"
            },
            {
              "name": "takerFee",
              "type": "uint256"
            },
            {
              "name": "expirationTimeSeconds",
              "type": "uint256"
            },
            {
              "name": "salt",
              "type": "uint256"
            },
            {
              "name": "makerAssetData",
              "type": "bytes"
            },
            {
              "name": "takerAssetData",
              "type": "bytes"
            }
          ],
          "name": "order",
          "type": "tuple"
        },
        {
          "name": "takerAssetFillAmount",
          "type": "uint256"
        },
        {
          "name": "signature",
          "type": "bytes"
        }
      ],
      "name": "fillOrderNoThrow",
      "outputs": [
        {
          "components": [
            {
              "name": "makerAssetFilledAmount",
              "type": "uint256"
            },
            {
              "name": "takerAssetFilledAmount",
              "type": "uint256"
            },
            {
              "name": "makerFeePaid",
              "type": "uint256"
            },
            {
              "name": "takerFeePaid",
              "type": "uint256"
            }
          ],
          "name": "fillResults",
          "type": "tuple"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "components": [
            {
              "name": "makerAddress",
              "type": "address"
            },
            {
              "name": "takerAddress",
              "type": "address"
            },
            {
              "name": "feeRecipientAddress",
              "type": "address"
            },
            {
              "name": "senderAddress",
              "type": "address"
            },
            {
              "name": "makerAssetAmount",
              "type": "uint256"
            },
            {
              "name": "takerAssetAmount",
              "type": "uint256"
            },
            {
              "name": "makerFee",
              "type": "uint256"
            },
            {
              "name": "takerFee",
              "type": "uint256"
            },
            {
              "name": "expirationTimeSeconds",
              "type": "uint256"
            },
            {
              "name": "salt",
              "type": "uint256"
            },
            {
              "name": "makerAssetData",
              "type": "bytes"
            },
            {
              "name": "takerAssetData",
              "type": "bytes"
            }
          ],
          "name": "orders",
          "type": "tuple[]"
        }
      ],
      "name": "batchCancelOrders",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "components": [
            {
              "name": "makerAddress",
              "type": "address"
            },
            {
              "name": "takerAddress",
              "type": "address"
            },
            {
              "name": "feeRecipientAddress",
              "type": "address"
            },
            {
              "name": "senderAddress",
              "type": "address"
            },
            {
              "name": "makerAssetAmount",
              "type": "uint256"
            },
            {
              "name": "takerAssetAmount",
              "type": "uint256"
            },
            {
              "name": "makerFee",
              "type": "uint256"
            },
            {
              "name": "takerFee",
              "type": "uint256"
            },
            {
              "name": "expirationTimeSeconds",
              "type": "uint256"
            },
            {
              "name": "salt",
              "type": "uint256"
            },
            {
              "name": "makerAssetData",
              "type": "bytes"
            },
            {
              "name": "takerAssetData",
              "type": "bytes"
            }
          ],
          "name": "orders",
          "type": "tuple[]"
        },
        {
          "name": "takerAssetFillAmounts",
          "type": "uint256[]"
        },
        {
          "name": "signatures",
          "type": "bytes[]"
        }
      ],
      "name": "batchFillOrKillOrders",
      "outputs": [
        {
          "components": [
            {
              "name": "makerAssetFilledAmount",
              "type": "uint256"
            },
            {
              "name": "takerAssetFilledAmount",
              "type": "uint256"
            },
            {
              "name": "makerFeePaid",
              "type": "uint256"
            },
            {
              "name": "takerFeePaid",
              "type": "uint256"
            }
          ],
          "name": "totalFillResults",
          "type": "tuple"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "targetOrderEpoch",
          "type": "uint256"
        }
      ],
      "name": "cancelOrdersUpTo",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "components": [
            {
              "name": "makerAddress",
              "type": "address"
            },
            {
              "name": "takerAddress",
              "type": "address"
            },
            {
              "name": "feeRecipientAddress",
              "type": "address"
            },
            {
              "name": "senderAddress",
              "type": "address"
            },
            {
              "name": "makerAssetAmount",
              "type": "uint256"
            },
            {
              "name": "takerAssetAmount",
              "type": "uint256"
            },
            {
              "name": "makerFee",
              "type": "uint256"
            },
            {
              "name": "takerFee",
              "type": "uint256"
            },
            {
              "name": "expirationTimeSeconds",
              "type": "uint256"
            },
            {
              "name": "salt",
              "type": "uint256"
            },
            {
              "name": "makerAssetData",
              "type": "bytes"
            },
            {
              "name": "takerAssetData",
              "type": "bytes"
            }
          ],
          "name": "orders",
          "type": "tuple[]"
        },
        {
          "name": "takerAssetFillAmounts",
          "type": "uint256[]"
        },
        {
          "name": "signatures",
          "type": "bytes[]"
        }
      ],
      "name": "batchFillOrdersNoThrow",
      "outputs": [
        {
          "components": [
            {
              "name": "makerAssetFilledAmount",
              "type": "uint256"
            },
            {
              "name": "takerAssetFilledAmount",
              "type": "uint256"
            },
            {
              "name": "makerFeePaid",
              "type": "uint256"
            },
            {
              "name": "takerFeePaid",
              "type": "uint256"
            }
          ],
          "name": "totalFillResults",
          "type": "tuple"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "assetProxyId",
          "type": "bytes4"
        }
      ],
      "name": "getAssetProxy",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "components": [
            {
              "name": "makerAddress",
              "type": "address"
            },
            {
              "name": "takerAddress",
              "type": "address"
            },
            {
              "name": "feeRecipientAddress",
              "type": "address"
            },
            {
              "name": "senderAddress",
              "type": "address"
            },
            {
              "name": "makerAssetAmount",
              "type": "uint256"
            },
            {
              "name": "takerAssetAmount",
              "type": "uint256"
            },
            {
              "name": "makerFee",
              "type": "uint256"
            },
            {
              "name": "takerFee",
              "type": "uint256"
            },
            {
              "name": "expirationTimeSeconds",
              "type": "uint256"
            },
            {
              "name": "salt",
              "type": "uint256"
            },
            {
              "name": "makerAssetData",
              "type": "bytes"
            },
            {
              "name": "takerAssetData",
              "type": "bytes"
            }
          ],
          "name": "order",
          "type": "tuple"
        },
        {
          "name": "takerAssetFillAmount",
          "type": "uint256"
        },
        {
          "name": "signature",
          "type": "bytes"
        }
      ],
      "name": "fillOrKillOrder",
      "outputs": [
        {
          "components": [
            {
              "name": "makerAssetFilledAmount",
              "type": "uint256"
            },
            {
              "name": "takerAssetFilledAmount",
              "type": "uint256"
            },
            {
              "name": "makerFeePaid",
              "type": "uint256"
            },
            {
              "name": "takerFeePaid",
              "type": "uint256"
            }
          ],
          "name": "fillResults",
          "type": "tuple"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "validatorAddress",
          "type": "address"
        },
        {
          "name": "approval",
          "type": "bool"
        }
      ],
      "name": "setSignatureValidatorApproval",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "components": [
            {
              "name": "makerAddress",
              "type": "address"
            },
            {
              "name": "takerAddress",
              "type": "address"
            },
            {
              "name": "feeRecipientAddress",
              "type": "address"
            },
            {
              "name": "senderAddress",
              "type": "address"
            },
            {
              "name": "makerAssetAmount",
              "type": "uint256"
            },
            {
              "name": "takerAssetAmount",
              "type": "uint256"
            },
            {
              "name": "makerFee",
              "type": "uint256"
            },
            {
              "name": "takerFee",
              "type": "uint256"
            },
            {
              "name": "expirationTimeSeconds",
              "type": "uint256"
            },
            {
              "name": "salt",
              "type": "uint256"
            },
            {
              "name": "makerAssetData",
              "type": "bytes"
            },
            {
              "name": "takerAssetData",
              "type": "bytes"
            }
          ],
          "name": "orders",
          "type": "tuple[]"
        },
        {
          "name": "takerAssetFillAmount",
          "type": "uint256"
        },
        {
          "name": "signatures",
          "type": "bytes[]"
        }
      ],
      "name": "marketSellOrders",
      "outputs": [
        {
          "components": [
            {
              "name": "makerAssetFilledAmount",
              "type": "uint256"
            },
            {
              "name": "takerAssetFilledAmount",
              "type": "uint256"
            },
            {
              "name": "makerFeePaid",
              "type": "uint256"
            },
            {
              "name": "takerFeePaid",
              "type": "uint256"
            }
          ],
          "name": "totalFillResults",
          "type": "tuple"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "assetProxyId",
          "type": "bytes4"
        },
        {
          "name": "newAssetProxy",
          "type": "address"
        },
        {
          "name": "oldAssetProxy",
          "type": "address"
        }
      ],
      "name": "registerAssetProxy",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "hash",
          "type": "bytes32"
        },
        {
          "name": "signerAddress",
          "type": "address"
        },
        {
          "name": "signature",
          "type": "bytes"
        }
      ],
      "name": "isValidSignature",
      "outputs": [
        {
          "name": "isValid",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "components": [
            {
              "name": "makerAddress",
              "type": "address"
            },
            {
              "name": "takerAddress",
              "type": "address"
            },
            {
              "name": "feeRecipientAddress",
              "type": "address"
            },
            {
              "name": "senderAddress",
              "type": "address"
            },
            {
              "name": "makerAssetAmount",
              "type": "uint256"
            },
            {
              "name": "takerAssetAmount",
              "type": "uint256"
            },
            {
              "name": "makerFee",
              "type": "uint256"
            },
            {
              "name": "takerFee",
              "type": "uint256"
            },
            {
              "name": "expirationTimeSeconds",
              "type": "uint256"
            },
            {
              "name": "salt",
              "type": "uint256"
            },
            {
              "name": "makerAssetData",
              "type": "bytes"
            },
            {
              "name": "takerAssetData",
              "type": "bytes"
            }
          ],
          "name": "orders",
          "type": "tuple[]"
        },
        {
          "name": "makerAssetFillAmount",
          "type": "uint256"
        },
        {
          "name": "signatures",
          "type": "bytes[]"
        }
      ],
      "name": "marketBuyOrdersNoThrow",
      "outputs": [
        {
          "components": [
            {
              "name": "makerAssetFilledAmount",
              "type": "uint256"
            },
            {
              "name": "takerAssetFilledAmount",
              "type": "uint256"
            },
            {
              "name": "makerFeePaid",
              "type": "uint256"
            },
            {
              "name": "takerFeePaid",
              "type": "uint256"
            }
          ],
          "name": "totalFillResults",
          "type": "tuple"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "components": [
            {
              "name": "makerAddress",
              "type": "address"
            },
            {
              "name": "takerAddress",
              "type": "address"
            },
            {
              "name": "feeRecipientAddress",
              "type": "address"
            },
            {
              "name": "senderAddress",
              "type": "address"
            },
            {
              "name": "makerAssetAmount",
              "type": "uint256"
            },
            {
              "name": "takerAssetAmount",
              "type": "uint256"
            },
            {
              "name": "makerFee",
              "type": "uint256"
            },
            {
              "name": "takerFee",
              "type": "uint256"
            },
            {
              "name": "expirationTimeSeconds",
              "type": "uint256"
            },
            {
              "name": "salt",
              "type": "uint256"
            },
            {
              "name": "makerAssetData",
              "type": "bytes"
            },
            {
              "name": "takerAssetData",
              "type": "bytes"
            }
          ],
          "name": "order",
          "type": "tuple"
        },
        {
          "name": "takerAssetFillAmount",
          "type": "uint256"
        },
        {
          "name": "signature",
          "type": "bytes"
        }
      ],
      "name": "fillOrder",
      "outputs": [
        {
          "components": [
            {
              "name": "makerAssetFilledAmount",
              "type": "uint256"
            },
            {
              "name": "takerAssetFilledAmount",
              "type": "uint256"
            },
            {
              "name": "makerFeePaid",
              "type": "uint256"
            },
            {
              "name": "takerFeePaid",
              "type": "uint256"
            }
          ],
          "name": "fillResults",
          "type": "tuple"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "salt",
          "type": "uint256"
        },
        {
          "name": "signerAddress",
          "type": "address"
        },
        {
          "name": "data",
          "type": "bytes"
        },
        {
          "name": "signature",
          "type": "bytes"
        }
      ],
      "name": "executeTransaction",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "components": [
            {
              "name": "makerAddress",
              "type": "address"
            },
            {
              "name": "takerAddress",
              "type": "address"
            },
            {
              "name": "feeRecipientAddress",
              "type": "address"
            },
            {
              "name": "senderAddress",
              "type": "address"
            },
            {
              "name": "makerAssetAmount",
              "type": "uint256"
            },
            {
              "name": "takerAssetAmount",
              "type": "uint256"
            },
            {
              "name": "makerFee",
              "type": "uint256"
            },
            {
              "name": "takerFee",
              "type": "uint256"
            },
            {
              "name": "expirationTimeSeconds",
              "type": "uint256"
            },
            {
              "name": "salt",
              "type": "uint256"
            },
            {
              "name": "makerAssetData",
              "type": "bytes"
            },
            {
              "name": "takerAssetData",
              "type": "bytes"
            }
          ],
          "name": "order",
          "type": "tuple"
        }
      ],
      "name": "getOrderInfo",
      "outputs": [
        {
          "components": [
            {
              "name": "orderStatus",
              "type": "uint8"
            },
            {
              "name": "orderHash",
              "type": "bytes32"
            },
            {
              "name": "orderTakerAssetFilledAmount",
              "type": "uint256"
            }
          ],
          "name": "orderInfo",
          "type": "tuple"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "components": [
            {
              "name": "makerAddress",
              "type": "address"
            },
            {
              "name": "takerAddress",
              "type": "address"
            },
            {
              "name": "feeRecipientAddress",
              "type": "address"
            },
            {
              "name": "senderAddress",
              "type": "address"
            },
            {
              "name": "makerAssetAmount",
              "type": "uint256"
            },
            {
              "name": "takerAssetAmount",
              "type": "uint256"
            },
            {
              "name": "makerFee",
              "type": "uint256"
            },
            {
              "name": "takerFee",
              "type": "uint256"
            },
            {
              "name": "expirationTimeSeconds",
              "type": "uint256"
            },
            {
              "name": "salt",
              "type": "uint256"
            },
            {
              "name": "makerAssetData",
              "type": "bytes"
            },
            {
              "name": "takerAssetData",
              "type": "bytes"
            }
          ],
          "name": "order",
          "type": "tuple"
        }
      ],
      "name": "cancelOrder",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "components": [
            {
              "name": "makerAddress",
              "type": "address"
            },
            {
              "name": "takerAddress",
              "type": "address"
            },
            {
              "name": "feeRecipientAddress",
              "type": "address"
            },
            {
              "name": "senderAddress",
              "type": "address"
            },
            {
              "name": "makerAssetAmount",
              "type": "uint256"
            },
            {
              "name": "takerAssetAmount",
              "type": "uint256"
            },
            {
              "name": "makerFee",
              "type": "uint256"
            },
            {
              "name": "takerFee",
              "type": "uint256"
            },
            {
              "name": "expirationTimeSeconds",
              "type": "uint256"
            },
            {
              "name": "salt",
              "type": "uint256"
            },
            {
              "name": "makerAssetData",
              "type": "bytes"
            },
            {
              "name": "takerAssetData",
              "type": "bytes"
            }
          ],
          "name": "orders",
          "type": "tuple[]"
        },
        {
          "name": "takerAssetFillAmount",
          "type": "uint256"
        },
        {
          "name": "signatures",
          "type": "bytes[]"
        }
      ],
      "name": "marketSellOrdersNoThrow",
      "outputs": [
        {
          "components": [
            {
              "name": "makerAssetFilledAmount",
              "type": "uint256"
            },
            {
              "name": "takerAssetFilledAmount",
              "type": "uint256"
            },
            {
              "name": "makerFeePaid",
              "type": "uint256"
            },
            {
              "name": "takerFeePaid",
              "type": "uint256"
            }
          ],
          "name": "totalFillResults",
          "type": "tuple"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "components": [
            {
              "name": "makerAddress",
              "type": "address"
            },
            {
              "name": "takerAddress",
              "type": "address"
            },
            {
              "name": "feeRecipientAddress",
              "type": "address"
            },
            {
              "name": "senderAddress",
              "type": "address"
            },
            {
              "name": "makerAssetAmount",
              "type": "uint256"
            },
            {
              "name": "takerAssetAmount",
              "type": "uint256"
            },
            {
              "name": "makerFee",
              "type": "uint256"
            },
            {
              "name": "takerFee",
              "type": "uint256"
            },
            {
              "name": "expirationTimeSeconds",
              "type": "uint256"
            },
            {
              "name": "salt",
              "type": "uint256"
            },
            {
              "name": "makerAssetData",
              "type": "bytes"
            },
            {
              "name": "takerAssetData",
              "type": "bytes"
            }
          ],
          "name": "orders",
          "type": "tuple[]"
        },
        {
          "name": "makerAssetFillAmount",
          "type": "uint256"
        },
        {
          "name": "signatures",
          "type": "bytes[]"
        }
      ],
      "name": "marketBuyOrders",
      "outputs": [
        {
          "components": [
            {
              "name": "makerAssetFilledAmount",
              "type": "uint256"
            },
            {
              "name": "takerAssetFilledAmount",
              "type": "uint256"
            },
            {
              "name": "makerFeePaid",
              "type": "uint256"
            },
            {
              "name": "takerFeePaid",
              "type": "uint256"
            }
          ],
          "name": "totalFillResults",
          "type": "tuple"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "/*\n\n  Copyright 2018 ZeroEx Intl.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity ^0.4.24;\npragma experimental ABIEncoderV2;\n\nimport \"./IExchangeCore.sol\";\nimport \"./IMatchOrders.sol\";\nimport \"./ISignatureValidator.sol\";\nimport \"./ITransactions.sol\";\nimport \"./IAssetProxyDispatcher.sol\";\nimport \"./IWrapperFunctions.sol\";\n\ncontract IExchange is\n    IExchangeCore,\n    IMatchOrders,\n    ISignatureValidator,\n    ITransactions,\n    IAssetProxyDispatcher,\n    IWrapperFunctions\n{}\n",
  "sourcePath": "/Users/inje/Documents/repos/set-protocol-contracts/contracts/external/0x/Exchange/interfaces/IExchange.sol",
  "ast": {
    "absolutePath": "/Users/inje/Documents/repos/set-protocol-contracts/contracts/external/0x/Exchange/interfaces/IExchange.sol",
    "exportedSymbols": {
      "IExchange": [
        3895
      ]
    },
    "id": 3896,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 3875,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "580:24:31"
      },
      {
        "id": 3876,
        "literals": [
          "experimental",
          "ABIEncoderV2"
        ],
        "nodeType": "PragmaDirective",
        "src": "605:33:31"
      },
      {
        "absolutePath": "/Users/inje/Documents/repos/set-protocol-contracts/contracts/external/0x/Exchange/interfaces/IExchangeCore.sol",
        "file": "./IExchangeCore.sol",
        "id": 3877,
        "nodeType": "ImportDirective",
        "scope": 3896,
        "sourceUnit": 3930,
        "src": "640:29:31",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/inje/Documents/repos/set-protocol-contracts/contracts/external/0x/Exchange/interfaces/IMatchOrders.sol",
        "file": "./IMatchOrders.sol",
        "id": 3878,
        "nodeType": "ImportDirective",
        "scope": 3896,
        "sourceUnit": 3949,
        "src": "670:28:31",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/inje/Documents/repos/set-protocol-contracts/contracts/external/0x/Exchange/interfaces/ISignatureValidator.sol",
        "file": "./ISignatureValidator.sol",
        "id": 3879,
        "nodeType": "ImportDirective",
        "scope": 3896,
        "sourceUnit": 3979,
        "src": "699:35:31",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/inje/Documents/repos/set-protocol-contracts/contracts/external/0x/Exchange/interfaces/ITransactions.sol",
        "file": "./ITransactions.sol",
        "id": 3880,
        "nodeType": "ImportDirective",
        "scope": 3896,
        "sourceUnit": 3993,
        "src": "735:29:31",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/inje/Documents/repos/set-protocol-contracts/contracts/external/0x/Exchange/interfaces/IAssetProxyDispatcher.sol",
        "file": "./IAssetProxyDispatcher.sol",
        "id": 3881,
        "nodeType": "ImportDirective",
        "scope": 3896,
        "sourceUnit": 3874,
        "src": "765:37:31",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/inje/Documents/repos/set-protocol-contracts/contracts/external/0x/Exchange/interfaces/IWrapperFunctions.sol",
        "file": "./IWrapperFunctions.sol",
        "id": 3882,
        "nodeType": "ImportDirective",
        "scope": 3896,
        "sourceUnit": 4147,
        "src": "803:33:31",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 3883,
              "name": "IExchangeCore",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 3929,
              "src": "864:13:31",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IExchangeCore_$3929",
                "typeString": "contract IExchangeCore"
              }
            },
            "id": 3884,
            "nodeType": "InheritanceSpecifier",
            "src": "864:13:31"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 3885,
              "name": "IMatchOrders",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 3948,
              "src": "883:12:31",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IMatchOrders_$3948",
                "typeString": "contract IMatchOrders"
              }
            },
            "id": 3886,
            "nodeType": "InheritanceSpecifier",
            "src": "883:12:31"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 3887,
              "name": "ISignatureValidator",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 3978,
              "src": "901:19:31",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ISignatureValidator_$3978",
                "typeString": "contract ISignatureValidator"
              }
            },
            "id": 3888,
            "nodeType": "InheritanceSpecifier",
            "src": "901:19:31"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 3889,
              "name": "ITransactions",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 3992,
              "src": "926:13:31",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ITransactions_$3992",
                "typeString": "contract ITransactions"
              }
            },
            "id": 3890,
            "nodeType": "InheritanceSpecifier",
            "src": "926:13:31"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 3891,
              "name": "IAssetProxyDispatcher",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 3873,
              "src": "945:21:31",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IAssetProxyDispatcher_$3873",
                "typeString": "contract IAssetProxyDispatcher"
              }
            },
            "id": 3892,
            "nodeType": "InheritanceSpecifier",
            "src": "945:21:31"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 3893,
              "name": "IWrapperFunctions",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 4146,
              "src": "972:17:31",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IWrapperFunctions_$4146",
                "typeString": "contract IWrapperFunctions"
              }
            },
            "id": 3894,
            "nodeType": "InheritanceSpecifier",
            "src": "972:17:31"
          }
        ],
        "contractDependencies": [
          3873,
          3929,
          3948,
          3978,
          3992,
          4146
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": false,
        "id": 3895,
        "linearizedBaseContracts": [
          3895,
          4146,
          3873,
          3992,
          3978,
          3948,
          3929
        ],
        "name": "IExchange",
        "nodeType": "ContractDefinition",
        "nodes": [],
        "scope": 3896,
        "src": "838:154:31"
      }
    ],
    "src": "580:413:31"
  },
  "legacyAST": {
    "absolutePath": "/Users/inje/Documents/repos/set-protocol-contracts/contracts/external/0x/Exchange/interfaces/IExchange.sol",
    "exportedSymbols": {
      "IExchange": [
        3895
      ]
    },
    "id": 3896,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 3875,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "580:24:31"
      },
      {
        "id": 3876,
        "literals": [
          "experimental",
          "ABIEncoderV2"
        ],
        "nodeType": "PragmaDirective",
        "src": "605:33:31"
      },
      {
        "absolutePath": "/Users/inje/Documents/repos/set-protocol-contracts/contracts/external/0x/Exchange/interfaces/IExchangeCore.sol",
        "file": "./IExchangeCore.sol",
        "id": 3877,
        "nodeType": "ImportDirective",
        "scope": 3896,
        "sourceUnit": 3930,
        "src": "640:29:31",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/inje/Documents/repos/set-protocol-contracts/contracts/external/0x/Exchange/interfaces/IMatchOrders.sol",
        "file": "./IMatchOrders.sol",
        "id": 3878,
        "nodeType": "ImportDirective",
        "scope": 3896,
        "sourceUnit": 3949,
        "src": "670:28:31",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/inje/Documents/repos/set-protocol-contracts/contracts/external/0x/Exchange/interfaces/ISignatureValidator.sol",
        "file": "./ISignatureValidator.sol",
        "id": 3879,
        "nodeType": "ImportDirective",
        "scope": 3896,
        "sourceUnit": 3979,
        "src": "699:35:31",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/inje/Documents/repos/set-protocol-contracts/contracts/external/0x/Exchange/interfaces/ITransactions.sol",
        "file": "./ITransactions.sol",
        "id": 3880,
        "nodeType": "ImportDirective",
        "scope": 3896,
        "sourceUnit": 3993,
        "src": "735:29:31",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/inje/Documents/repos/set-protocol-contracts/contracts/external/0x/Exchange/interfaces/IAssetProxyDispatcher.sol",
        "file": "./IAssetProxyDispatcher.sol",
        "id": 3881,
        "nodeType": "ImportDirective",
        "scope": 3896,
        "sourceUnit": 3874,
        "src": "765:37:31",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/inje/Documents/repos/set-protocol-contracts/contracts/external/0x/Exchange/interfaces/IWrapperFunctions.sol",
        "file": "./IWrapperFunctions.sol",
        "id": 3882,
        "nodeType": "ImportDirective",
        "scope": 3896,
        "sourceUnit": 4147,
        "src": "803:33:31",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 3883,
              "name": "IExchangeCore",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 3929,
              "src": "864:13:31",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IExchangeCore_$3929",
                "typeString": "contract IExchangeCore"
              }
            },
            "id": 3884,
            "nodeType": "InheritanceSpecifier",
            "src": "864:13:31"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 3885,
              "name": "IMatchOrders",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 3948,
              "src": "883:12:31",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IMatchOrders_$3948",
                "typeString": "contract IMatchOrders"
              }
            },
            "id": 3886,
            "nodeType": "InheritanceSpecifier",
            "src": "883:12:31"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 3887,
              "name": "ISignatureValidator",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 3978,
              "src": "901:19:31",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ISignatureValidator_$3978",
                "typeString": "contract ISignatureValidator"
              }
            },
            "id": 3888,
            "nodeType": "InheritanceSpecifier",
            "src": "901:19:31"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 3889,
              "name": "ITransactions",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 3992,
              "src": "926:13:31",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ITransactions_$3992",
                "typeString": "contract ITransactions"
              }
            },
            "id": 3890,
            "nodeType": "InheritanceSpecifier",
            "src": "926:13:31"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 3891,
              "name": "IAssetProxyDispatcher",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 3873,
              "src": "945:21:31",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IAssetProxyDispatcher_$3873",
                "typeString": "contract IAssetProxyDispatcher"
              }
            },
            "id": 3892,
            "nodeType": "InheritanceSpecifier",
            "src": "945:21:31"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 3893,
              "name": "IWrapperFunctions",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 4146,
              "src": "972:17:31",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IWrapperFunctions_$4146",
                "typeString": "contract IWrapperFunctions"
              }
            },
            "id": 3894,
            "nodeType": "InheritanceSpecifier",
            "src": "972:17:31"
          }
        ],
        "contractDependencies": [
          3873,
          3929,
          3948,
          3978,
          3992,
          4146
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": false,
        "id": 3895,
        "linearizedBaseContracts": [
          3895,
          4146,
          3873,
          3992,
          3978,
          3948,
          3929
        ],
        "name": "IExchange",
        "nodeType": "ContractDefinition",
        "nodes": [],
        "scope": 3896,
        "src": "838:154:31"
      }
    ],
    "src": "580:413:31"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.0",
  "updatedAt": "2018-07-13T21:55:38.410Z"
}