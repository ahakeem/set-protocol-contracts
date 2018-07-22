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

import { CoreModifiers } from "../lib/CoreSharedModifiers.sol";
import { CoreState } from "../lib/CoreState.sol";
import { Issue } from "./lib/Issue.sol";


/**
 * @title Core Issuance
 * @author Set Protocol
 *
 * The CoreIssuance contract contains public set token operations
 */
contract CoreIssuance is
    CoreState,
    CoreModifiers
{
    /* ============ Events ============ */

    event IssuanceComponentDeposited(
        address indexed _setToken,
        address indexed _component,
        uint _quantity
    );

    /* ============ Public Functions ============ */

    /**
     * Exchanges components for Set Tokens
     *
     * @param  _setAddress   Address of set to issue
     * @param  _quantity     Quantity of set to issue
     */
    function issue(
        address _setAddress,
        uint _quantity
    )
        external
        isValidSet(_setAddress)
        isPositiveQuantity(_quantity)
        isNaturalUnitMultiple(_quantity, _setAddress)
    {
        // Run issueInternal
        issueInternal(msg.sender, _setAddress, _quantity);
    }

    /**
     * Function to convert Set Tokens into underlying components
     *
     * @param _setAddress   The address of the Set token
     * @param _quantity     The number of tokens to redeem
     */
    function redeem(
        address _setAddress,
        uint _quantity
    )
        external
        isValidSet(_setAddress)
        isPositiveQuantity(_quantity)
        isNaturalUnitMultiple(_quantity, _setAddress)
    {
        Issue.redeem(
            state,
            _setAddress,
            _quantity
        );
    }

    /**
     * Composite method to redeem and withdraw with a single transaction
     *
     * Normally, you should expect to be able to withdraw all of the tokens.
     * However, some have central abilities to freeze transfers (e.g. EOS). _toWithdraw
     * allows you to optionally specify which component tokens to transfer
     * back to the user. The rest will remain in the vault under the users' addresses.
     *
     * @param _setAddress   The address of the Set token
     * @param _quantity     The number of tokens to redeem
     * @param _toWithdraw   Mask of indexes of tokens to withdraw
     */
    function redeemAndWithdraw(
        address _setAddress,
        uint _quantity,
        uint _toWithdraw
    )
        external
        isValidSet(_setAddress)
        isPositiveQuantity(_quantity)
        isNaturalUnitMultiple(_quantity, _setAddress)
    {
        Issue.redeemAndWithdraw(
            state,
            _setAddress,
            _quantity,
            _toWithdraw
        );
    }

    /* ============ Internal Functions ============ */

    /**
     * Exchanges components for Set Tokens, accepting any owner
     *
     * @param  _owner        Address to issue set to
     * @param  _setAddress   Address of set to issue
     * @param  _quantity     Quantity of set to issue
     */
    function issueInternal(
        address _owner,
        address _setAddress,
        uint _quantity
    )
        internal
    {
        Issue.execute(
            state,
            _owner,
            _setAddress,
            _quantity
        );
    }
}
