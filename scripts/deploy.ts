//token 0x7E68F741A6967cDd5186853099517ee724902363
import { ethers, hardhatArguments } from 'hardhat';
import * as Config from './config';
async function main() {
  await Config.initConfig();
  const network = hardhatArguments.network ? hardhatArguments.network : 'dev';

  const [deployer] = await ethers.getSigners();
 
  const Token = await ethers.getContractFactory("VNIToken");
  const token = await Token.deploy();
  console.log('GamePlay ddd address: ', token.address);
  // await token.deployed();
  // Config.setConfig(network + '.VNI', token.address);

  // const Ico = await ethers.getContractFactory("FLPCrowdSale");
  // const ico = await Ico.deploy(1000,1000,'0xC75493780144EE4eb21921A6CC3b2511847C9782', '0xA2E23A5FB2bC40815b5bFf0bE9196b920C3A049e');
  // await ico.deployed();
  // console.log('ICO address: ', ico.address);
  // Config.setConfig(network + '.ico', ico.address);

  // const GamePlay = await ethers.getContractFactory("GamePlay");
  // const gamePlay = await GamePlay.deploy('0xA2E23A5FB2bC40815b5bFf0bE9196b920C3A049e');
  // console.log('GamePlay ddd address: ', gamePlay.address);
  // Config.setConfig(network + '.gameplay', gamePlay.address);


  // await Config.updateConfig();


  // const data = {
  //   address: token.address,
  //   abi: JSON.parse(token.interface.format('json'))
  // }

  //This writes the ABI and address to the mktplace.json
  //fs.writeFileSync('./src/Token.json', JSON.stringify(data))
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
