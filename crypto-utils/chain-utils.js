const RPC_URLS = {
  ink: 'https://rpc-gel-sepolia.inkonchain.com', // Example Ink endpoint
  base: 'https://mainnet.base.org'
};

async function getBalance(chain, address) {
  const response = await fetch(RPC_URLS[chain], {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      jsonrpc: '2.0',
      method: 'eth_getBalance',
      params: [address, 'latest'],
      id: 1
    })
  });
  const data = await response.json();
  return data.result;
}

async function getBlockNumber(chain) {
  const response = await fetch(RPC_URLS[chain], {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      jsonrpc: '2.0',
      method: 'eth_blockNumber',
      params: [],
      id: 1
    })
  });
  const data = await response.json();
  return data.result;
}

function hexWeiToEth(hex) {
  const wei = BigInt(hex);
  return Number(wei) / 1e18; // Simple conversion
}

module.exports = { getBalance, getBlockNumber, hexWeiToEth };
