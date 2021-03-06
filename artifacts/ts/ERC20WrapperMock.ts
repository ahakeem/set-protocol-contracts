export const ERC20WrapperMock = 
{
  "contractName": "ERC20WrapperMock",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "_token",
          "type": "address"
        },
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
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
          "name": "_token",
          "type": "address"
        },
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_quantity",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b50610587806100206000396000f30060806040526004361061004b5763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663927da1058114610050578063e1f21c6714610086575b600080fd5b34801561005c57600080fd5b5061007061006b366004610358565b6100a8565b60405161007d91906104c0565b60405180910390f35b34801561009257600080fd5b506100a66100a13660046103a5565b6100bf565b005b60006100b58484846100cf565b90505b9392505050565b6100ca838383610178565b505050565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815260009073ffffffffffffffffffffffffffffffffffffffff85169063dd62ed3e906101269086908690600401610479565b602060405180830381600087803b15801561014057600080fd5b505af1158015610154573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506100b5919081019061040e565b6040517f095ea7b300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84169063095ea7b3906101cc9085908590600401610494565b602060405180830381600087803b1580156101e657600080fd5b505af11580156101fa573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525061021e91908101906103e8565b506102276102f3565b608060405190810160405280604281526020017f417070726f76656420746f6b656e20646f6573206e6f742072657475726e206e81526020017f756c6c206f722074727565206f6e207375636365737366756c20617070726f7681526020017f652e0000000000000000000000000000000000000000000000000000000000008152509015156102ed576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102e491906104af565b60405180910390fd5b50505050565b6000803d801561030a57602081146103135761031f565b6001915061031f565b60206000803e60005191505b50600114919050565b60006100b882356104d8565b60006100b882516104f4565b60006100b882356104f1565b60006100b882516104f1565b60008060006060848603121561036d57600080fd5b60006103798686610328565b935050602061038a86828701610328565b925050604061039b86828701610328565b9150509250925092565b6000806000606084860312156103ba57600080fd5b60006103c68686610328565b93505060206103d786828701610328565b925050604061039b86828701610340565b6000602082840312156103fa57600080fd5b60006104068484610334565b949350505050565b60006020828403121561042057600080fd5b6000610406848461034c565b610435816104d8565b82525050565b6000610446826104d4565b80845261045a8160208601602086016104f9565b61046381610525565b9093016020019392505050565b610435816104f1565b60408101610487828561042c565b6100b8602083018461042c565b604081016104a2828561042c565b6100b86020830184610470565b602080825281016100b8818461043b565b602081016104ce8284610470565b92915050565b5190565b73ffffffffffffffffffffffffffffffffffffffff1690565b90565b151590565b60005b838110156105145781810151838201526020016104fc565b838111156102ed5750506000910152565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016905600a265627a7a723058207d8329d14ff26b441611371bcc75b2f25caeae5172ad4cb65cfcf1c6bca4deb16c6578706572696d656e74616cf50037",
  "deployedBytecode": "0x60806040526004361061004b5763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663927da1058114610050578063e1f21c6714610086575b600080fd5b34801561005c57600080fd5b5061007061006b366004610358565b6100a8565b60405161007d91906104c0565b60405180910390f35b34801561009257600080fd5b506100a66100a13660046103a5565b6100bf565b005b60006100b58484846100cf565b90505b9392505050565b6100ca838383610178565b505050565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815260009073ffffffffffffffffffffffffffffffffffffffff85169063dd62ed3e906101269086908690600401610479565b602060405180830381600087803b15801561014057600080fd5b505af1158015610154573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506100b5919081019061040e565b6040517f095ea7b300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84169063095ea7b3906101cc9085908590600401610494565b602060405180830381600087803b1580156101e657600080fd5b505af11580156101fa573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525061021e91908101906103e8565b506102276102f3565b608060405190810160405280604281526020017f417070726f76656420746f6b656e20646f6573206e6f742072657475726e206e81526020017f756c6c206f722074727565206f6e207375636365737366756c20617070726f7681526020017f652e0000000000000000000000000000000000000000000000000000000000008152509015156102ed576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102e491906104af565b60405180910390fd5b50505050565b6000803d801561030a57602081146103135761031f565b6001915061031f565b60206000803e60005191505b50600114919050565b60006100b882356104d8565b60006100b882516104f4565b60006100b882356104f1565b60006100b882516104f1565b60008060006060848603121561036d57600080fd5b60006103798686610328565b935050602061038a86828701610328565b925050604061039b86828701610328565b9150509250925092565b6000806000606084860312156103ba57600080fd5b60006103c68686610328565b93505060206103d786828701610328565b925050604061039b86828701610340565b6000602082840312156103fa57600080fd5b60006104068484610334565b949350505050565b60006020828403121561042057600080fd5b6000610406848461034c565b610435816104d8565b82525050565b6000610446826104d4565b80845261045a8160208601602086016104f9565b61046381610525565b9093016020019392505050565b610435816104f1565b60408101610487828561042c565b6100b8602083018461042c565b604081016104a2828561042c565b6100b86020830184610470565b602080825281016100b8818461043b565b602081016104ce8284610470565b92915050565b5190565b73ffffffffffffffffffffffffffffffffffffffff1690565b90565b151590565b60005b838110156105145781810151838201526020016104fc565b838111156102ed5750506000910152565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016905600a265627a7a723058207d8329d14ff26b441611371bcc75b2f25caeae5172ad4cb65cfcf1c6bca4deb16c6578706572696d656e74616cf50037",
  "sourceMap": "179:441:52:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;179:441:52;;;;;;;",
  "deployedSourceMap": "179:441:52:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;211:216;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;211:216:52;;;;;;;;;;;;;;;;;;;;;;;;;433:185;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;433:185:52;;;;;;;;;;;211:216;342:7;372:48;395:6;403;411:8;372:22;:48::i;:::-;365:55;;211:216;;;;;;:::o;433:185::-;562:49;583:6;591:8;601:9;562:20;:49::i;:::-;433:185;;;:::o;1720:249:47:-;1908:54;;;;;1878:7;;1908:31;;;;;;:54;;1940:11;;1953:8;;1908:54;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1908:54:47;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1908:54:47;;;;;;;101:4:-1;97:9;90:4;84;80:15;76:31;69:5;65:43;126:6;120:4;113:20;0:138;1908:54:47;;;;;;;;2589:291;2727:50;;;;;:29;;;;;;:50;;2757:8;;2767:9;;2727:50;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2727:50:47;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;2727:50:47;;;;;;;101:4:-1;97:9;90:4;84;80:15;76:31;69:5;65:43;126:6;120:4;113:20;0:138;2727:50:47;;;;;;;;;;2813:14;:12;:14::i;:::-;2841:22;;;;;;;;;;;;;;;;;;;;;;;;;;;;2792:81;;;;;;;;;;;;;;;;;;;;;;;;;;;2589:291;;;:::o;3094:852::-;3169:4;;3353:14;3430:57;;;;3539:4;3534:220;;;;3346:497;;3430:57;3472:1;3457:16;;3430:57;;3534:220;3639:4;3634:3;3629;3614:30;3736:3;3730:10;3715:25;;3346:497;-1:-1:-1;3938:1:47;3923:16;;3094:852;-1:-1:-1;3094:852:47:o;5:118:-1:-;;72:46;110:6;97:20;72:46;;130:116;;205:36;233:6;227:13;205:36;;253:118;;320:46;358:6;345:20;320:46;;378:122;;456:39;487:6;481:13;456:39;;507:491;;;;645:2;633:9;624:7;620:23;616:32;613:2;;;661:1;658;651:12;613:2;696:1;713:53;758:7;738:9;713:53;;;703:63;;675:97;803:2;821:53;866:7;857:6;846:9;842:22;821:53;;;811:63;;782:98;911:2;929:53;974:7;965:6;954:9;950:22;929:53;;;919:63;;890:98;607:391;;;;;;1005:491;;;;1143:2;1131:9;1122:7;1118:23;1114:32;1111:2;;;1159:1;1156;1149:12;1111:2;1194:1;1211:53;1256:7;1236:9;1211:53;;;1201:63;;1173:97;1301:2;1319:53;1364:7;1355:6;1344:9;1340:22;1319:53;;;1309:63;;1280:98;1409:2;1427:53;1472:7;1463:6;1452:9;1448:22;1427:53;;1503:257;;1615:2;1603:9;1594:7;1590:23;1586:32;1583:2;;;1631:1;1628;1621:12;1583:2;1666:1;1683:61;1736:7;1716:9;1683:61;;;1673:71;1577:183;-1:-1;;;;1577:183;1767:263;;1882:2;1870:9;1861:7;1857:23;1853:32;1850:2;;;1898:1;1895;1888:12;1850:2;1933:1;1950:64;2006:7;1986:9;1950:64;;2037:110;2110:31;2135:5;2110:31;;;2105:3;2098:44;2092:55;;;2154:292;;2252:35;2281:5;2252:35;;;2304:6;2299:3;2292:19;2316:63;2372:6;2365:4;2360:3;2356:14;2349:4;2342:5;2338:16;2316:63;;;2411:29;2433:6;2411:29;;;2391:50;;;2404:4;2391:50;;2232:214;-1:-1;;;2232:214;2453:110;2526:31;2551:5;2526:31;;2570:294;2706:2;2691:18;;2720:61;2695:9;2754:6;2720:61;;;2792:62;2850:2;2839:9;2835:18;2826:6;2792:62;;2871:294;3007:2;2992:18;;3021:61;2996:9;3055:6;3021:61;;;3093:62;3151:2;3140:9;3136:18;3127:6;3093:62;;3172:273;3296:2;3310:47;;;3281:18;;3371:64;3281:18;3421:6;3371:64;;3452:193;3560:2;3545:18;;3574:61;3549:9;3608:6;3574:61;;;3531:114;;;;;3652:88;3723:12;;3707:33;3747:128;3827:42;3816:54;;3799:76;3882:79;3951:5;3934:27;4103:92;4176:13;4169:21;;4152:43;4289:268;4354:1;4361:101;4375:6;4372:1;4369:13;4361:101;;;4442:11;;;4436:18;4423:11;;;4416:39;4397:2;4390:10;4361:101;;;4477:6;4474:1;4471:13;4468:2;;;-1:-1;;4542:1;4524:16;;4517:27;4338:219;4565:97;4653:2;4633:14;4649:7;4629:28;;4613:49",
  "source": "pragma solidity 0.4.24;\npragma experimental \"ABIEncoderV2\";\n\nimport { ERC20Wrapper } from \"../../lib/ERC20Wrapper.sol\";\n\n// Mock contract implementation of OrderLibrary functions\ncontract ERC20WrapperMock {\n    function allowance(\n        address _token,\n        address _owner,\n        address _spender\n    )\n        public\n        returns (uint256)\n    {\n        return ERC20Wrapper.allowance(_token, _owner, _spender);\n    }\n\n    function approve(\n        address _token,\n        address _spender,\n        uint256 _quantity\n    )\n        public\n    {\n        ERC20Wrapper.approve(_token, _spender, _quantity);\n    }\n}\n",
  "sourcePath": "/Users/inje/Documents/repos/set-protocol-contracts/contracts/mocks/lib/ERC20WrapperMock.sol",
  "ast": {
    "absolutePath": "/Users/inje/Documents/repos/set-protocol-contracts/contracts/mocks/lib/ERC20WrapperMock.sol",
    "exportedSymbols": {
      "ERC20WrapperMock": [
        5167
      ]
    },
    "id": 5168,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 5126,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:52"
      },
      {
        "id": 5127,
        "literals": [
          "experimental",
          "ABIEncoderV2"
        ],
        "nodeType": "PragmaDirective",
        "src": "24:35:52"
      },
      {
        "absolutePath": "/Users/inje/Documents/repos/set-protocol-contracts/contracts/lib/ERC20Wrapper.sol",
        "file": "../../lib/ERC20Wrapper.sol",
        "id": 5129,
        "nodeType": "ImportDirective",
        "scope": 5168,
        "sourceUnit": 4866,
        "src": "61:58:52",
        "symbolAliases": [
          {
            "foreign": 5128,
            "local": null
          }
        ],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 5167,
        "linearizedBaseContracts": [
          5167
        ],
        "name": "ERC20WrapperMock",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 5147,
              "nodeType": "Block",
              "src": "355:72:52",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5142,
                        "name": "_token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5131,
                        "src": "395:6:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5143,
                        "name": "_owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5133,
                        "src": "403:6:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5144,
                        "name": "_spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5135,
                        "src": "411:8:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 5140,
                        "name": "ERC20Wrapper",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4865,
                        "src": "372:12:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_ERC20Wrapper_$4865_$",
                          "typeString": "type(library ERC20Wrapper)"
                        }
                      },
                      "id": 5141,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "allowance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4774,
                      "src": "372:22:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_address_$_t_address_$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address,address,address) view returns (uint256)"
                      }
                    },
                    "id": 5145,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "372:48:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 5139,
                  "id": 5146,
                  "nodeType": "Return",
                  "src": "365:55:52"
                }
              ]
            },
            "documentation": null,
            "id": 5148,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5136,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5131,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 5148,
                  "src": "239:14:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5130,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "239:7:52",
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
                  "id": 5133,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 5148,
                  "src": "263:14:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5132,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "263:7:52",
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
                  "id": 5135,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 5148,
                  "src": "287:16:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5134,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "287:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "229:80:52"
            },
            "payable": false,
            "returnParameters": {
              "id": 5139,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5138,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5148,
                  "src": "342:7:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5137,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "342:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "341:9:52"
            },
            "scope": 5167,
            "src": "211:216:52",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5165,
              "nodeType": "Block",
              "src": "552:66:52",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5160,
                        "name": "_token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5150,
                        "src": "583:6:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5161,
                        "name": "_spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5152,
                        "src": "591:8:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5162,
                        "name": "_quantity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5154,
                        "src": "601:9:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 5157,
                        "name": "ERC20Wrapper",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4865,
                        "src": "562:12:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_ERC20Wrapper_$4865_$",
                          "typeString": "type(library ERC20Wrapper)"
                        }
                      },
                      "id": 5159,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "approve",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4849,
                      "src": "562:20:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 5163,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "562:49:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5164,
                  "nodeType": "ExpressionStatement",
                  "src": "562:49:52"
                }
              ]
            },
            "documentation": null,
            "id": 5166,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5155,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5150,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 5166,
                  "src": "459:14:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5149,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "459:7:52",
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
                  "id": 5152,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 5166,
                  "src": "483:16:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5151,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "483:7:52",
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
                  "id": 5154,
                  "name": "_quantity",
                  "nodeType": "VariableDeclaration",
                  "scope": 5166,
                  "src": "509:17:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5153,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "509:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "449:83:52"
            },
            "payable": false,
            "returnParameters": {
              "id": 5156,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "552:0:52"
            },
            "scope": 5167,
            "src": "433:185:52",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 5168,
        "src": "179:441:52"
      }
    ],
    "src": "0:621:52"
  },
  "legacyAST": {
    "absolutePath": "/Users/inje/Documents/repos/set-protocol-contracts/contracts/mocks/lib/ERC20WrapperMock.sol",
    "exportedSymbols": {
      "ERC20WrapperMock": [
        5167
      ]
    },
    "id": 5168,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 5126,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:52"
      },
      {
        "id": 5127,
        "literals": [
          "experimental",
          "ABIEncoderV2"
        ],
        "nodeType": "PragmaDirective",
        "src": "24:35:52"
      },
      {
        "absolutePath": "/Users/inje/Documents/repos/set-protocol-contracts/contracts/lib/ERC20Wrapper.sol",
        "file": "../../lib/ERC20Wrapper.sol",
        "id": 5129,
        "nodeType": "ImportDirective",
        "scope": 5168,
        "sourceUnit": 4866,
        "src": "61:58:52",
        "symbolAliases": [
          {
            "foreign": 5128,
            "local": null
          }
        ],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 5167,
        "linearizedBaseContracts": [
          5167
        ],
        "name": "ERC20WrapperMock",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 5147,
              "nodeType": "Block",
              "src": "355:72:52",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5142,
                        "name": "_token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5131,
                        "src": "395:6:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5143,
                        "name": "_owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5133,
                        "src": "403:6:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5144,
                        "name": "_spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5135,
                        "src": "411:8:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 5140,
                        "name": "ERC20Wrapper",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4865,
                        "src": "372:12:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_ERC20Wrapper_$4865_$",
                          "typeString": "type(library ERC20Wrapper)"
                        }
                      },
                      "id": 5141,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "allowance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4774,
                      "src": "372:22:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_address_$_t_address_$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address,address,address) view returns (uint256)"
                      }
                    },
                    "id": 5145,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "372:48:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 5139,
                  "id": 5146,
                  "nodeType": "Return",
                  "src": "365:55:52"
                }
              ]
            },
            "documentation": null,
            "id": 5148,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5136,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5131,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 5148,
                  "src": "239:14:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5130,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "239:7:52",
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
                  "id": 5133,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 5148,
                  "src": "263:14:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5132,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "263:7:52",
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
                  "id": 5135,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 5148,
                  "src": "287:16:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5134,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "287:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "229:80:52"
            },
            "payable": false,
            "returnParameters": {
              "id": 5139,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5138,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5148,
                  "src": "342:7:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5137,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "342:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "341:9:52"
            },
            "scope": 5167,
            "src": "211:216:52",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5165,
              "nodeType": "Block",
              "src": "552:66:52",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5160,
                        "name": "_token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5150,
                        "src": "583:6:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5161,
                        "name": "_spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5152,
                        "src": "591:8:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5162,
                        "name": "_quantity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5154,
                        "src": "601:9:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 5157,
                        "name": "ERC20Wrapper",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4865,
                        "src": "562:12:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_ERC20Wrapper_$4865_$",
                          "typeString": "type(library ERC20Wrapper)"
                        }
                      },
                      "id": 5159,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "approve",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4849,
                      "src": "562:20:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 5163,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "562:49:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5164,
                  "nodeType": "ExpressionStatement",
                  "src": "562:49:52"
                }
              ]
            },
            "documentation": null,
            "id": 5166,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5155,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5150,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 5166,
                  "src": "459:14:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5149,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "459:7:52",
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
                  "id": 5152,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 5166,
                  "src": "483:16:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5151,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "483:7:52",
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
                  "id": 5154,
                  "name": "_quantity",
                  "nodeType": "VariableDeclaration",
                  "scope": 5166,
                  "src": "509:17:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5153,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "509:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "449:83:52"
            },
            "payable": false,
            "returnParameters": {
              "id": 5156,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "552:0:52"
            },
            "scope": 5167,
            "src": "433:185:52",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 5168,
        "src": "179:441:52"
      }
    ],
    "src": "0:621:52"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.0",
  "updatedAt": "2018-07-13T21:55:38.432Z"
}