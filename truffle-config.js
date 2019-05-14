const HDWalletProvider = require("truffle-hdwallet-provider")
const infuraKey = '6c9fdf9ed3a64dd4b3519ee1609493e4'
// Test account with address 0x7E5F4552091A69125d5DfCb7b8C2659029395Bdf
const privateKey = "0000000000000000000000000000000000000000000000000000000000000001"
const mnemonic = "castle practice twin frown episode lady syrup timber guitar liar slender hammer sauce wedding thumb"

module.exports = {
  networks: {
    ropsten: {
      provider: () => new HDWalletProvider(privateKey, `https://ropsten.infura.io/v3/${infuraKey}`),
      // provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/${infuraKey}`),
      network_id: 3,       // Ropsten's id
      gas: 5500000,        // Ropsten has a lower block limit than mainnet
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
    compilers: {
      solc: {
        evmVersion: 'petersburg',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200  // Optimize for how many times you intend to run the code
          }
        },
        version: "0.5.8"
      }
    }
  }
}
