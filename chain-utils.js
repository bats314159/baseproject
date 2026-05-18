// chain-utils.js - Solana chain interaction utilities

const { CHAINS } = require('./chain-config');

let _rpcRequestId = 0;

/**
 * Send a JSON-RPC request to Solana.
 * @param {string} rpcUrl - The Solana RPC endpoint URL.
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
 * Get the RPC URL for a Solana network.
 * @param {string} networkName - The network name ('mainnet', 'devnet', 'testnet').
 * @returns {string} - The RPC URL.
 */
function getRpcUrl(networkName) {
    const network = CHAINS[networkName];
    if (!network) {
        throw new Error(`Unknown Solana network: ${networkName}`);
    }
    return network.rpcUrl;
}

/**
 * Get the SOL balance for a public key on Solana.
 * @param {string} networkName - The network name ('mainnet', 'devnet', 'testnet').
 * @param {string} publicKey - The Solana public key / address to query.
 * @returns {Promise<number>} - The balance in lamports.
 */
async function getBalance(networkName, publicKey) {
    const rpcUrl = getRpcUrl(networkName);
    return rpcRequest(rpcUrl, 'getBalance', [publicKey]);
}

/**
 * Get the latest slot (block height) on Solana.
 * @param {string} networkName - The network name ('mainnet', 'devnet', 'testnet').
 * @returns {Promise<number>} - The latest slot number.
 */
async function getLatestSlot(networkName) {
    const rpcUrl = getRpcUrl(networkName);
    return rpcRequest(rpcUrl, 'getSlot', []);
}

/**
 * Get account info for a Solana public key.
 * @param {string} networkName - The network name ('mainnet', 'devnet', 'testnet').
 * @param {string} publicKey - The Solana public key to query.
 * @returns {Promise<object>} - The account information object.
 */
async function getAccountInfo(networkName, publicKey) {
    const rpcUrl = getRpcUrl(networkName);
    return rpcRequest(rpcUrl, 'getAccountInfo', [publicKey, { encoding: 'base64' }]);
}

/**
 * Get transaction details by signature on Solana.
 * @param {string} networkName - The network name ('mainnet', 'devnet', 'testnet').
 * @param {string} signature - The transaction signature.
 * @returns {Promise<object>} - The transaction object.
 */
async function getTransaction(networkName, signature) {
    const rpcUrl = getRpcUrl(networkName);
    return rpcRequest(rpcUrl, 'getTransaction', [signature, { encoding: 'json' }]);
}

/**
 * Get program accounts (all accounts owned by a program).
 * @param {string} networkName - The network name ('mainnet', 'devnet', 'testnet').
 * @param {string} programId - The program ID to query.
 * @returns {Promise<Array>} - Array of account objects.
 */
async function getProgramAccounts(networkName, programId) {
    const rpcUrl = getRpcUrl(networkName);
    return rpcRequest(rpcUrl, 'getProgramAccounts', [programId, { encoding: 'base64' }]);
}

/**
 * Convert lamports to SOL.
 * @param {number} lamports - The amount in lamports.
 * @returns {string} - The amount in SOL as a decimal string.
 */
function lamportsToSol(lamports) {
    const LAMPORTS_PER_SOL = 1000000000;
    const sol = lamports / LAMPORTS_PER_SOL;
    return sol.toString();
}

/**
 * Convert SOL to lamports.
 * @param {number} sol - The amount in SOL.
 * @returns {number} - The amount in lamports.
 */
function solToLamports(sol) {
    const LAMPORTS_PER_SOL = 1000000000;
    return Math.round(sol * LAMPORTS_PER_SOL);
}

module.exports = {
    rpcRequest,
    getRpcUrl,
    getBalance,
    getLatestSlot,
    getAccountInfo,
    getTransaction,
    getProgramAccounts,
    lamportsToSol,
    solToLamports,
};
