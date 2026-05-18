const { getBalance, getBlockNumber, hexWeiToEth } = require('./chain-utils');

(async () => {
    try {
        // Replace with a real wallet address to see a balance!
        const address = '0x0000000000000000000000000000000000000000'; 

        // Get ETH balance on Ink chain
        const balanceHex = await getBalance('ink', address);
        console.log('Ink Balance:', hexWeiToEth(balanceHex), 'ETH');

        // Get latest block number on Base chain
        const blockHex = await getBlockNumber('base');
        console.log('Base Block Height:', parseInt(blockHex, 16));
    } catch (error) {
        console.error('Error running script:', error);
    }
})();
