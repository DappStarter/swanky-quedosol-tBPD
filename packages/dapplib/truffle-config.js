require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict roast fortune street name reward stereo prosper hunt opinion swallow giant'; 
let testAccounts = [
"0x279ee8ba6207e6c43227aca55a622fe6dfe8f5f57792876bd44b91aa3958778c",
"0x1fd80b1bce22be49f035ef749f90ec8bc24cb96a969ad3a454856817e3d55776",
"0xcd1078b112859912bdaa1e66814681c8f8492856b4eac33ece60beaa6ba188ac",
"0xc5cf642239a48e3b382cb7f81fabefc734fd032ac7e4bc5f19e9b566edc402aa",
"0x5ce0251a5252a9f64c135bb3052710496fc6c58a9a722214776313abd5030078",
"0x66597bd0577aa5d6e7e20a7e55c557e187b85e42cf50d03173154d2bdaaec4bd",
"0x9524ac83901c0fdceab56bf7ed0231676b33163b768190d4f545e1d021bae9dc",
"0x1e20ecef540e9388354a5af39a039c94b8f709065c04d084807bf97f8ee9a06f",
"0xde1f9e5205732e95f583d926227639772bf2c14677de18f414323f51bd2d0c94",
"0xd90774a10446d1e389b24737b07a34aaa1aa44bf76df1a1e7c94e60f45924426"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


