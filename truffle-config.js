const HDWalletProvider = require("truffle-hdwallet-provider")
const infuraKey = '6c9fdf9ed3a64dd4b3519ee1609493e4'
// Test account with address 0x7E5F4552091A69125d5DfCb7b8C2659029395Bdf
const privateKey = "0000000000000000000000000000000000000000000000000000000000000001"

module.exports = {
  networks: {
    ropsten: {
      // provider: () => new HDWalletProvider(privateKey, `https://ropsten.infura.io/${infuraKey}`),
      provider: () => new HDWalletProvider(privateKey, `https://ropsten.infura.io/v3/${infuraKey}`),
      network_id: 3,       // Ropsten's id
      gas: 5500000,        // Ropsten has a lower block limit than mainnet
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
  }
}
