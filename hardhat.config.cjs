const hre = require("hardhat");
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.20",
  networks: {
    monadTestnet: {
      url: "https://testnet-rpc.monad.xyz/",
      chainId: 10143,
      accounts: ["76edbb5fb44fac7e5e16bf41c1b71601c284c65a57e51a0a8c5c04a37b615074"],
    },
  },
};