require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
const fs = require("fs");

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

if (!fs.existsSync("./network.config.js")) {
  throw new Error(
    "network.config.js is required. Check README.md for more info"
  );
}
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: require("./network.config"),
};
