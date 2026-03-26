const config = {
    timeZone: 'UTC',
    calculatorOptions: {
        enableScientific: true,
        precision: 10
    },
    chain: {
        defaultChain: 'base',
        supportedChains: ['base', 'ink'],
    },
};

module.exports = config;