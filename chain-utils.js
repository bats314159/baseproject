// chain-utils.js - Solana network interaction utilities

const { CHAINS } = require('./chain-config');

let _rpcRequestId = 0;

/**
 * Send a JSON-RPC request to Solana.
 * @param {string} rpcUrl - The RPC endpoint URL.
 * @param {string} method - The JSON-RPC method name (e.g., 'getBalance', 'getSlot').
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
 * Get the RPC URL for a Solana cluster defined in chain-config.js.
 * @param {string} clusterName - The cluster name (e.g., 'mainnet', 'devnet', 'testnet').
 * @returns {string} - The RPC URL.
 */
function getRpcUrl(clusterName) {
    const chain = CHAINS[clusterName];
    if (!chain) {
        throw new Error(`Unknown cluster: ${clusterName}`);
    }
    return chain.rpcUrl;
}

/**
 * Get the SOL balance for a wallet address on a given Solana cluster.
 * @param {string} clusterName - The cluster name (e.g., 'mainnet', 'devnet', 'testnet').
 * @param {string} address - The wallet address (base58 format) to query.
 * @returns {Promise<number>} - The balance in lamports.
 */
async function getBalance(clusterName, address) {
    const rpcUrl = getRpcUrl(clusterName);
    return rpcRequest(rpcUrl, 'getBalance', [address]);
}

/**
 * Get the latest block number (slot) on a given Solana cluster.
 * @param {string} clusterName - The cluster name (e.g., 'mainnet', 'devnet', 'testnet').
 * @returns {Promise<number>} - The latest slot number.
 */
async function getBlockNumber(clusterName) {
    const rpcUrl = getRpcUrl(clusterName);
    return rpcRequest(rpcUrl, 'getSlot', []);
}

/**
 * Get transaction details by signature on a given Solana cluster.
 * @param {string} clusterName - The cluster name (e.g., 'mainnet', 'devnet', 'testnet').
 * @param {string} txSignature - The transaction signature.
 * @returns {Promise<object>} - The transaction object.
 */
async function getTransaction(clusterName, txSignature) {
    const rpcUrl = getRpcUrl(clusterName);
    return rpcRequest(rpcUrl, 'getTransaction', [txSignature, { encoding: 'json' }]);
}

/**
 * Get account information for a given address on a Solana cluster.
 * @param {string} clusterName - The cluster name (e.g., 'mainnet', 'devnet', 'testnet').
 * @param {string} address - The wallet address (base58 format).
 * @returns {Promise<object>} - The account info object.
 */
async function getAccountInfo(clusterName, address) {
    const rpcUrl = getRpcUrl(clusterName);
    return rpcRequest(rpcUrl, 'getAccountInfo', [address, { encoding: 'jsonParsed' }]);
}

/**
 * Convert lamports to SOL.
 * @param {number} lamports - The amount in lamports.
 * @returns {string} - The amount in SOL as a decimal string.
 */
function lamportsToSol(lamports) {
    const LAMPORTS_PER_SOL = 1_000_000_000;
    const sol = lamports / LAMPORTS_PER_SOL;
    return sol.toString();
}

/**
 * Convert SOL to lamports.
 * @param {number} sol - The amount in SOL.
 * @returns {number} - The amount in lamports.
 */
function solToLamports(sol) {
    const LAMPORTS_PER_SOL = 1_000_000_000;
    return Math.floor(sol * LAMPORTS_PER_SOL);
}

module.exports = {
    rpcRequest,
    getRpcUrl,
    getBalance,
    getBlockNumber,
    getTransaction,
    getAccountInfo,
    lamportsToSol,
    solToLamports,
};
