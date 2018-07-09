export const IVault = 
{
  "contractName": "IVault",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "_tokenAddress",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_quantity",
          "type": "uint256"
        }
      ],
      "name": "withdrawTo",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_tokenAddress",
          "type": "address"
        },
        {
          "name": "_quantity",
          "type": "uint256"
        }
      ],
      "name": "incrementTokenOwner",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_tokenAddress",
          "type": "address"
        },
        {
          "name": "_quantity",
          "type": "uint256"
        }
      ],
      "name": "decrementTokenOwner",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_tokenAddress",
          "type": "address"
        }
      ],
      "name": "getOwnerBalance",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
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
  "source": "/*\n    Copyright 2018 Set Labs Inc.\n\n    Licensed under the Apache License, Version 2.0 (the \"License\");\n    you may not use this file except in compliance with the License.\n    You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n    Unless required by applicable law or agreed to in writing, software\n    distributed under the License is distributed on an \"AS IS\" BASIS,\n    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n    See the License for the specific language governing permissions and\n    limitations under the License.\n*/\n\npragma solidity 0.4.24;\n\n/**\n * @title IVault\n * @author Set Protocol\n *\n * The IVault interface provides a light-weight, structured way to interact with the Vault\n * contract from another contract.\n */\ninterface IVault {\n\n    /*\n     * Withdraws user's unassociated tokens to user account. Can only be\n     * called by authorized core contracts.\n     *\n     * @param  _tokenAddress   The address of the ERC20 token\n     * @param  _to             The address to transfer token to\n     * @param  _quantity       The number of tokens to transfer\n     */\n    function withdrawTo(\n        address _tokenAddress,\n        address _to,\n        uint _quantity\n    )\n        external;\n\n    /*\n     * Increment quantity owned of a token for a given address. Can\n     * only be called by authorized core contracts.\n     *\n     * @param  _owner           The address of the token owner\n     * @param  _tokenAddress    The address of the ERC20 token\n     * @param  _quantity        The number of tokens to attribute to owner\n     */\n    function incrementTokenOwner(\n        address _owner,\n        address _tokenAddress,\n        uint _quantity\n    )\n        external;\n\n    /*\n     * Decrement quantity owned of a token for a given address. Can only\n     * be called by authorized core contracts.\n     *\n     * @param  _owner           The address of the token owner\n     * @param  _tokenAddress    The address of the ERC20 token\n     * @param  _quantity        The number of tokens to deattribute to owner\n     */\n    function decrementTokenOwner(\n        address _owner,\n        address _tokenAddress,\n        uint _quantity\n    )\n        external;\n\n    /*\n     * Get balance of particular contract for owner.\n     *\n     * @param  _owner           The address of the token owner\n     * @param  _tokenAddress    The address of the ERC20 token\n     */\n    function getOwnerBalance(\n        address _owner,\n        address _tokenAddress\n    )\n        external\n        returns (uint256);\n}\n",
  "sourcePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/core/interfaces/IVault.sol",
  "ast": {
    "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/core/interfaces/IVault.sol",
    "exportedSymbols": {
      "IVault": [
        2892
      ]
    },
    "id": 2893,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2855,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "597:23:20"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": "@title IVault\n@author Set Protocol\n * The IVault interface provides a light-weight, structured way to interact with the Vault\ncontract from another contract.",
        "fullyImplemented": false,
        "id": 2892,
        "linearizedBaseContracts": [
          2892
        ],
        "name": "IVault",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 2864,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdrawTo",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2862,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2857,
                  "name": "_tokenAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 2864,
                  "src": "1182:21:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2856,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1182:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2859,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 2864,
                  "src": "1213:11:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2858,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1213:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2861,
                  "name": "_quantity",
                  "nodeType": "VariableDeclaration",
                  "scope": 2864,
                  "src": "1234:14:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2860,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1234:4:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1172:82:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 2863,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1271:0:20"
            },
            "scope": 2892,
            "src": "1153:119:20",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 2873,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "incrementTokenOwner",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2871,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2866,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 2873,
                  "src": "1659:14:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2865,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1659:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2868,
                  "name": "_tokenAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 2873,
                  "src": "1683:21:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2867,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1683:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2870,
                  "name": "_quantity",
                  "nodeType": "VariableDeclaration",
                  "scope": 2873,
                  "src": "1714:14:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2869,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1714:4:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1649:85:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 2872,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1751:0:20"
            },
            "scope": 2892,
            "src": "1621:131:20",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 2882,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "decrementTokenOwner",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2880,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2875,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 2882,
                  "src": "2141:14:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2874,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2141:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2877,
                  "name": "_tokenAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 2882,
                  "src": "2165:21:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2876,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2165:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2879,
                  "name": "_quantity",
                  "nodeType": "VariableDeclaration",
                  "scope": 2882,
                  "src": "2196:14:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2878,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2196:4:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2131:85:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 2881,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2233:0:20"
            },
            "scope": 2892,
            "src": "2103:131:20",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 2891,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "getOwnerBalance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2887,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2884,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 2891,
                  "src": "2475:14:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2883,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2475:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2886,
                  "name": "_tokenAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 2891,
                  "src": "2499:21:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2885,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2499:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2465:61:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 2890,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2889,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2891,
                  "src": "2561:7:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2888,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2561:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2560:9:20"
            },
            "scope": 2892,
            "src": "2441:129:20",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 2893,
        "src": "800:1772:20"
      }
    ],
    "src": "597:1976:20"
  },
  "legacyAST": {
    "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/core/interfaces/IVault.sol",
    "exportedSymbols": {
      "IVault": [
        2892
      ]
    },
    "id": 2893,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2855,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "597:23:20"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": "@title IVault\n@author Set Protocol\n * The IVault interface provides a light-weight, structured way to interact with the Vault\ncontract from another contract.",
        "fullyImplemented": false,
        "id": 2892,
        "linearizedBaseContracts": [
          2892
        ],
        "name": "IVault",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 2864,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdrawTo",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2862,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2857,
                  "name": "_tokenAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 2864,
                  "src": "1182:21:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2856,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1182:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2859,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 2864,
                  "src": "1213:11:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2858,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1213:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2861,
                  "name": "_quantity",
                  "nodeType": "VariableDeclaration",
                  "scope": 2864,
                  "src": "1234:14:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2860,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1234:4:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1172:82:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 2863,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1271:0:20"
            },
            "scope": 2892,
            "src": "1153:119:20",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 2873,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "incrementTokenOwner",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2871,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2866,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 2873,
                  "src": "1659:14:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2865,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1659:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2868,
                  "name": "_tokenAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 2873,
                  "src": "1683:21:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2867,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1683:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2870,
                  "name": "_quantity",
                  "nodeType": "VariableDeclaration",
                  "scope": 2873,
                  "src": "1714:14:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2869,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1714:4:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1649:85:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 2872,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1751:0:20"
            },
            "scope": 2892,
            "src": "1621:131:20",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 2882,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "decrementTokenOwner",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2880,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2875,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 2882,
                  "src": "2141:14:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2874,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2141:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2877,
                  "name": "_tokenAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 2882,
                  "src": "2165:21:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2876,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2165:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2879,
                  "name": "_quantity",
                  "nodeType": "VariableDeclaration",
                  "scope": 2882,
                  "src": "2196:14:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2878,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2196:4:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2131:85:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 2881,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2233:0:20"
            },
            "scope": 2892,
            "src": "2103:131:20",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 2891,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "getOwnerBalance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2887,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2884,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 2891,
                  "src": "2475:14:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2883,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2475:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2886,
                  "name": "_tokenAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 2891,
                  "src": "2499:21:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2885,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2499:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2465:61:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 2890,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2889,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2891,
                  "src": "2561:7:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2888,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2561:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2560:9:20"
            },
            "scope": 2892,
            "src": "2441:129:20",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 2893,
        "src": "800:1772:20"
      }
    ],
    "src": "597:1976:20"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.0",
  "updatedAt": "2018-07-08T01:11:15.197Z"
}