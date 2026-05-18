// chain-config.js - Solana network configurations

const CHAINS = {
    mainnet: {
        name: 'Solana Mainnet',
        rpcUrl: 'https://api.mainnet-beta.solana.com',
        wsUrl: 'wss://api.mainnet-beta.solana.com',
        explorerUrl: 'https://solscan.io',
        nativeCurrency: {
            name: 'Solana',
            symbol: 'SOL',
            decimals: 9,
        },
    },
    devnet: {
        name: 'Solana Devnet',
        rpcUrl: 'https://api.devnet.solana.com',
        wsUrl: 'wss://api.devnet.solana.com',
        explorerUrl: 'https://solscan.io?cluster=devnet',
        nativeCurrency: {
            name: 'Solana',
            symbol: 'SOL',
            decimals: 9,
        },
    },
    testnet: {
        name: 'Solana Testnet',
        rpcUrl: 'https://api.testnet.solana.com',
        wsUrl: 'wss://api.testnet.solana.com',
        explorerUrl: 'https://solscan.io?cluster=testnet',
        nativeCurrency: {
            name: 'Solana',
            symbol: 'SOL',
            decimals: 9,
        },
    },
};

module.exports = { CHAINS };
