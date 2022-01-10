require("@nomiclabs/hardhat-waffle");

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      chainId: 1337 // see: https://hardhat.org/metamask-issue.html
    },
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/XXX`,
      accounts: [``]
    }
  }
};
