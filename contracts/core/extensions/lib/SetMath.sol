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

import { SafeMath } from "zeppelin-solidity/contracts/math/SafeMath.sol";


/**
 * @title Issue
 * @author Set Protocol
 *
 * Issue
 */
library SetMath {
    // Use SafeMath library for all uint256 arithmetic
    using SafeMath for uint256;

    /* ============ Private Functions ============ */

    /**
     * Function to calculate the transfer value of a component given quantity of Set
     *
     * @param _componentUnits   The units of the component token
     * @param _naturalUnit      The natural unit of the Set token
     * @param _quantity         The number of tokens being redeem
     */
    function calculateTransferValue(
        uint _componentUnits,
        uint _naturalUnit,
        uint _quantity
    )
        pure
        public
        returns (uint)
    {
        return _quantity.div(_naturalUnit).mul(_componentUnits);
    }
}
