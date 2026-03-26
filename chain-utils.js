// chain-utils.js - EVM chain interaction utilities

const { CHAINS } = require('./chain-config');

let _rpcRequestId = 0;

/**
 * Send a JSON-RPC request to an EVM chain.
 * @param {string} rpcUrl - The RPC endpoint URL.
 * @param {string} method - The JSON-RPC method name.
 * @param {Array} params - The parameters for the JSON-RPC method.
 * @returns {Promise<*>} - The result from the JSON-RPC response.
 */
async function rpcRequest(rpcUrl, method, params = []) {
    const id = ++_rpcRequestId;
    const response = await fetch(rpcUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ jsonrpc: '2.0', id, method, params }),
    });
    if (!response.ok) {
        throw new Error(`RPC request failed: ${response.status} ${response.statusText}`);
    }
    const json = await response.json();
    if (json.error) {
        throw new Error(`RPC error: ${json.error.message}`);
    }
    return json.result;
}

/**
 * Get the chain ID from a chain name defined in chain-config.js.
 * @param {string} chainName - The chain name (e.g. 'base', 'ink').
 * @returns {number} - The chain ID.
 */
function getChainId(chainName) {
    const chain = CHAINS[chainName];
    if (!chain) {
        throw new Error(`Unknown chain: ${chainName}`);
    }
    return chain.chainId;
}

/**
 * Get the RPC URL for a chain defined in chain-config.js.
 * @param {string} chainName - The chain name (e.g. 'base', 'ink').
 * @returns {string} - The RPC URL.
 */
function getRpcUrl(chainName) {
    const chain = CHAINS[chainName];
    if (!chain) {
        throw new Error(`Unknown chain: ${chainName}`);
    }
    return chain.rpcUrl;
}

/**
 * Get the ETH balance for an address on a given chain.
 * @param {string} chainName - The chain name (e.g. 'base', 'ink').
 * @param {string} address - The wallet address to query.
 * @returns {Promise<string>} - The balance in wei as a hex string.
 */
async function getBalance(chainName, address) {
    const rpcUrl = getRpcUrl(chainName);
    return rpcRequest(rpcUrl, 'eth_getBalance', [address, 'latest']);
}

/**
 * Get the latest block number on a given chain.
 * @param {string} chainName - The chain name (e.g. 'base', 'ink').
 * @returns {Promise<string>} - The block number as a hex string.
 */
async function getBlockNumber(chainName) {
    const rpcUrl = getRpcUrl(chainName);
    return rpcRequest(rpcUrl, 'eth_blockNumber', []);
}

/**
 * Get transaction details by hash on a given chain.
 * @param {string} chainName - The chain name (e.g. 'base', 'ink').
 * @param {string} txHash - The transaction hash.
 * @returns {Promise<object>} - The transaction object.
 */
async function getTransaction(chainName, txHash) {
    const rpcUrl = getRpcUrl(chainName);
    return rpcRequest(rpcUrl, 'eth_getTransactionByHash', [txHash]);
}

/**
 * Get the transaction receipt for a given transaction hash on a given chain.
 * @param {string} chainName - The chain name (e.g. 'base', 'ink').
 * @param {string} txHash - The transaction hash.
 * @returns {Promise<object>} - The transaction receipt object.
 */
async function getTransactionReceipt(chainName, txHash) {
    const rpcUrl = getRpcUrl(chainName);
    return rpcRequest(rpcUrl, 'eth_getTransactionReceipt', [txHash]);
}

/**
 * Convert a hex wei value to a human-readable ETH string.
 * @param {string} hexWei - The balance in hex wei (e.g. '0x1a2b3c').
 * @returns {string} - The balance in ETH as a decimal string.
 */
function hexWeiToEth(hexWei) {
    const WEI_PER_ETH = BigInt('1000000000000000000');
    const wei = BigInt(hexWei);
    const integerPart = wei / WEI_PER_ETH;
    const remainder = wei % WEI_PER_ETH;
    if (remainder === 0n) {
        return integerPart.toString();
    }
    const decimalPart = remainder.toString().padStart(18, '0').replace(/0+$/, '');
    return `${integerPart}.${decimalPart}`;
}

module.exports = {
    rpcRequest,
    getChainId,
    getRpcUrl,
    getBalance,
    getBlockNumber,
    getTransaction,
    getTransactionReceipt,
    hexWeiToEth,
};
