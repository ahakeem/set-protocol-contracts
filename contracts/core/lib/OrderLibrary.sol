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
 * @title OrderLibrary
 * @author Set Protocol
 *
 * The Order Library contains functions for checking validation and hashing of Orders.
 *
 */

library OrderLibrary {
    using SafeMath for uint256;

    /* ============ Constants ============ */
    string constant ROUNDING_ERROR_TOO_LARGE = "Rounding error too large.";

    /* ============ Structs ============ */

    /**
     * Struct containing all parameters for the issuance order
     *
     * @param  setAddress                   Set the maker wants to mint
     * @param  makerAddress                 Address of maker of the Issuance Order
     * @param  makerToken                   Address of token maker wants to exchange for filling issuance order
     * @param  relayerAddress               Address of relayer
     * @param  relayerToken                 Token relayer wants to be compensated in
     * @param  quantity                     Amount of Sets maker is looking to mint
     * @param  makerTokenAmount             Amount of makerToken to be used to fill the order
     * @param  expiration                   Timestamp marking when the order expires
     * @param  relayerTokenAmount           Amount of tokens relayer wants to be compensated
     * @param  salt                         Random number used to create unique orderHash
     * @param  requiredComponents           Components to be acquired by taker's exchange orders
     * @param  requiredComponentAmounts     Amounts of each component to be acquired by exchange order
     * @param  orderHash                    Unique order identifier used to log information about the order in the protocol
     */
    struct IssuanceOrder {
        address setAddress;                 // _addresses[0]
        address makerAddress;               // _addresses[1]
        address makerToken;                 // _addresses[2]
        address relayerAddress;             // _addresses[3]
        address relayerToken;               // _addresses[4]
        uint256 quantity;                   // _values[0]
        uint256 makerTokenAmount;           // _values[1]
        uint256 expiration;                 // _values[2]
        uint256 relayerTokenAmount;         // _values[3]
        uint256 salt;                       // _values[4]
        address[] requiredComponents;       // _requiredComponents
        uint[] requiredComponentAmounts;    // _requiredComponentAmounts
        bytes32 orderHash;
    }

    /* ============ Internal Functions ============ */

    /**
     * Create hash of order parameters
     *
     * @param  _addresses                   [setAddress, makerAddress, makerToken, relayerAddress, relayerToken]
     * @param  _values                      [quantity, makerTokenAmount, expiration, relayerTokenAmount, salt]
     * @param  _requiredComponents          Components to be acquired by exchange order
     * @param  _requiredComponentAmounts    Amounts of each component to be acquired by exchange order
     */
    function generateOrderHash(
        address[5] _addresses,
        uint[5] _values,
        address[] _requiredComponents,
        uint[] _requiredComponentAmounts
    )
        internal
        pure
        returns(bytes32)
    {
        // Hash the order parameters
        return keccak256(
            abi.encodePacked(
                _addresses[0],              // setAddress
                _addresses[1],              // makerAddress
                _addresses[2],              // makerToken
                _addresses[3],              // relayerAddress
                _addresses[4],              // relayerToken
                _values[0],                 // quantity
                _values[1],                 // makerTokenAmount
                _values[2],                 // expiration
                _values[3],                 // relayerTokenAmount
                _values[4],                 // salt
                _requiredComponents,        // _requiredComponents
                _requiredComponentAmounts   // _requiredComponentAmounts
            )
        );
    }

    /**
     * Validate order signature
     *
     * @param  _orderHash       Hash of issuance order
     * @param  _signerAddress   Address of Issuance Order signer
     * @param  _v               v element of ECDSA signature
     * @param  _r               r element of ECDSA signature
     * @param  _s               s element of ECDSA signature
     */
    function validateSignature(
        bytes32 _orderHash,
        address _signerAddress,
        uint8 _v,
        bytes32 _r,
        bytes32 _s
    )
        internal
        pure
        returns(bool)
    {
        // Public address returned by ecrecover function
        address recAddress;

        // Ethereum msg prefix
        bytes memory msgPrefix = "\x19Ethereum Signed Message:\n32";

        // Find what address signed the order
        recAddress = ecrecover(
            keccak256(abi.encodePacked(msgPrefix, _orderHash)),
            _v,
            _r,
            _s
        );

        return recAddress == _signerAddress;
    }

    function getPartialAmount(
        uint principal,
        uint numerator,
        uint denominator
    )
        internal
        returns (uint256)
    {
        uint remainder = mulmod(principal, numerator, denominator);
        if (remainder == 0) {
            return principal.mul(numerator).div(denominator);
        }

        uint errPercentageTimes1000000 = remainder.mul(1000000).div(numerator.mul(principal));

        require(errPercentageTimes1000000 < 1000, ROUNDING_ERROR_TOO_LARGE);
        return principal.mul(numerator).div(denominator);
    }
}
