import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "/.env" });
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    mumbai: {
      url: "https://polygon-mumbai.infura.io/v3/fecb9acc0c6f4f1693e2d416177b5317",
      accounts: [process.env.PRIV_KEY]
    },
  },
  etherscan: {
    apiKey: {
      polygonMumbai: 'WYV23GQSY66ACW5IDZNB54TIAKF3YKUPBW'
    }
  }
};
