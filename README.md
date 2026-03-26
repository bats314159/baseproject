# baseproject

A general-purpose JavaScript utility library with multi-chain EVM support.

## Supported Chains

| Chain | Chain ID | RPC URL |
|-------|----------|---------|
| Base  | 8453     | https://mainnet.base.org |
| Ink   | 57073    | https://rpc-gel.inkonchain.com |

## Chain Utilities

The `chain-utils.js` module provides helper functions for interacting with any supported EVM chain.

```js
const { getBalance, getBlockNumber, hexWeiToEth } = require('./chain-utils');

// Get ETH balance on Ink chain
const balanceHex = await getBalance('ink', '0xYourAddress');
console.log(hexWeiToEth(balanceHex), 'ETH');

// Get latest block number on Base chain
const blockHex = await getBlockNumber('base');
console.log(parseInt(blockHex, 16));
```

Chain network details (RPC URLs, chain IDs, explorer URLs) are defined in `chain-config.js`. The default chain is configured in `config.js`.
