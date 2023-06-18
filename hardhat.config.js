require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-truffle5");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-deploy");


module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
      forking: {
        url: `https://goerli.infura.io/v3/d8200853cc4c4001956d0c1a2d0de540`,
      },
      initialBaseFeePerGas: 0
    },
    hardhat: {
      blockGasLimit: 12000000
    },
    mainnet: {
      url: process.env.WEB3_API,
      accounts: [process.env.PRIV]
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  },
  solidity: {
    compilers: [
      {
        version: "0.8.4",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },
      {
        version: "0.5.17",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },
      {
        version: "0.5.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },
      {
        version: "0.4.16",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },
      {
        version: "0.4.18",
        settings: {
          optimizer: {
            enabled: false,
            runs: 0
          }
        }
      },
      {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },
    ]
  },
  namedAccounts: {
    deployer: {
        default: 0,
    },
    feeCollector:{
        default: 1,
    }
  },
  paths: {
    tests: "tests",
  },
};