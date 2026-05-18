// chain-config.js - Supported chain network configurations

const CHAINS = {
    base: {
        chainId: 8453,
        name: 'Base',
        rpcUrl: 'https://mainnet.base.org',
        wsUrl: 'wss://mainnet.base.org',
        explorerUrl: 'https://basescan.org',
        nativeCurrency: {
            name: 'Ether',
            symbol: 'ETH',
            decimals: 18,
        },
    },
    ink: {
        chainId: 57073,
        name: 'Ink',
        rpcUrl: 'https://rpc-gel.inkonchain.com',
        wsUrl: 'wss://ws-gel.inkonchain.com',
        explorerUrl: 'https://explorer.inkonchain.com',
        nativeCurrency: {
            name: 'Ether',
            symbol: 'ETH',
            decimals: 18,
        },
    },
    monad: {
        chainId: 143,
        name: 'Monad',
        rpcUrl: 'https://rpc.monad.xyz',
        wsUrl: 'wss://rpc.monad.xyz',
        explorerUrl: 'https://monadvision.com',
        nativeCurrency: {
            name: 'Monad',
            symbol: 'MON',
            decimals: 18,
        },
    },
};

module.exports = { CHAINS };
