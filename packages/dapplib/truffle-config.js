require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace person bone tooth figure render remember million inflict kiwi bridge genre'; 
let testAccounts = [
"0x89a5a16dbe8dbb6539952219678597b8b6ed70585b9eb41231dc49685ba2c2fa",
"0x64b6540bb19ff2c993f2a364a33a7ed800324855691d49a51cb81a5bf8b34885",
"0x1d58bf9084cddf75010aabc62df26ef8072c463d5b1f6fb62cb56d9a7f868634",
"0x56cdf47a0c968a2486d90b3c2194ed668148a602d24a185b6d73b8d905fcfae6",
"0x8da6d2fbb3175c8afeb6f081162077d79a7d905121967dc05f18d4bb7fb6e05b",
"0x022838bbba636c2827d20a3d3e2c788d99939f3949efa8e448c260a3ecebb564",
"0x37fe3ce20ad7089a7517a7f7d501a42d4eb25d1d2901f330c91f6ea9013d4b56",
"0x59ef3f8db3fec045e10005c20d36de6b350c229917b3d72281d08fb3d9400a3f",
"0x5c379c8c722314b7fc3c4872793d2a488522ed45fa989d0e34b130d094dca8c1",
"0x1fe1e5dfb2d541870895410aa7abf422c8ae66e68a3c63f61dbf22d30fd6a9fe"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

