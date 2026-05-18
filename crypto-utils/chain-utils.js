// crypto-utils/chain-utils.js - Solana interaction utilities

const RPC_URLS = {
  mainnet: 'https://api.mainnet-beta.solana.com',
  devnet: 'https://api.devnet.solana.com',
  testnet: 'https://api.testnet.solana.com',
};

async function getBalance(network, address) {
  const response = await fetch(RPC_URLS[network], {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      jsonrpc: '2.0',
      method: 'getBalance',
      params: [address],
      id: 1
    })
  });
  const data = await response.json();
  return data.result;
}

async function getBlockNumber(network) {
  const response = await fetch(RPC_URLS[network], {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      jsonrpc: '2.0',
      method: 'getSlot',
      params: [],
      id: 1
    })
  });
  const data = await response.json();
  return data.result;
}

function lamportsToSol(lamports) {
  const LAMPORTS_PER_SOL = 1_000_000_000;
  return (lamports / LAMPORTS_PER_SOL).toString();
}

module.exports = { getBalance, getBlockNumber, lamportsToSol };
