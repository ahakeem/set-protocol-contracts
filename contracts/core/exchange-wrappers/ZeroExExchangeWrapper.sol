/*
    Copyright 2018 Set Labs Inc.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

pragma solidity 0.4.24;
pragma experimental "ABIEncoderV2";

import { SafeMath } from "zeppelin-solidity/contracts/math/SafeMath.sol";
import { ZeroExOrderDataHandler as OrderHandler } from "./lib/ZeroExOrderDataHandler.sol";
import { LibBytes } from "../../external/LibBytes.sol";
import { LibOrder as ZeroExOrder } from "../../external/0x/Exchange/libs/LibOrder.sol";
import { LibFillResults as ZeroExFillResults } from "../../external/0x/Exchange/libs/LibFillResults.sol";
import { IExchange as ZeroExExchange } from "../../external/0x/Exchange/interfaces/IExchange.sol";
import { ERC20Wrapper as ERC20 } from "../../core/lib/ERC20Wrapper.sol";
import { IERC20 } from "../../lib/IERC20.sol";



/**
 * @title ZeroExExchangeWrapper
 * @author Set Protocol
 *
 * The ZeroExExchangeWrapper contract wrapper to interface with 0x V2
 */
contract ZeroExExchangeWrapper
{
    using SafeMath for uint256;

    /* ============ State Variables ============ */

    address public ZERO_EX_EXCHANGE;
    address public ZERO_EX_PROXY;
    address public SET_PROXY;


    /* ============ Constructor ============ */

    constructor(
        address _zeroExExchange,
        address _zeroExProxy,
        address _setProxy
    )
        public
    {
        ZERO_EX_EXCHANGE = _zeroExExchange;
        ZERO_EX_PROXY = _zeroExProxy;
        SET_PROXY = _setProxy;
    }


    /* ============ Public Functions ============ */


    // The purpose of this function is to decode the order data and execute the trade
    // TODO - We are currently assuming no taker fee. Add in taker fee going forward
    function exchange(
        address _tradeOriginator,
        bytes _orderData
    )
        external
        // returns (address)
    {
        

        // Loop through order data and perform each order

        // Approve the taker token for transfer to the Set Vault
        fillZeroExOrder(_orderData);

        // return 1;
    }

    /* ============ Getters ============ */

    /* ============ Private ============ */
    function fillZeroExOrder(
        bytes _zeroExOrderData
    )
        private
        // returns (ZeroExFillResults.FillResults memory)
        // returns (ZeroExOrder.Order memory)
        // returns (address)
    {
        uint256 takerAssetFillAmount = OrderHandler.parseTakerAssetFillAmount(_zeroExOrderData);
        bytes memory signature = OrderHandler.sliceSignature(_zeroExOrderData);
        ZeroExOrder.Order memory order = OrderHandler.parseZeroExOrder(_zeroExOrderData);

        address makerToken = OrderHandler.parseERC20TokenAddress(order.makerAssetData);

        // Ensure the maker token is allowed to be approved to the ZeroEx proxy
        ERC20.ensureAllowance(
            makerToken,
            address(this),
            ZERO_EX_PROXY,
            order.makerAssetAmount
        );

        // ZeroExFillResults.FillResults memory fillResults = 
        //     ZeroExExchange(ZERO_EX_EXCHANGE).fillOrKillOrder(
        //         order,
        //         takerAssetFillAmount,
        //         signature
        //     );

        // // Taker Asset must be filled completely
        // require(fillResults.takerAssetFilledAmount == takerAssetFillAmount);

        // // Ensure the taker token is allowed to be approved to the TransferProxy
        // address takerToken = OrderHandler.parseERC20TokenAddress(order.takerAssetData);
        // ERC20.ensureAllowance(
        //     takerToken,
        //     address(this),
        //     ZERO_EX_PROXY,
        //     order.takerAssetAmount
        // );

        // return fillResults;
    }
}