// hardhat script pattern

const hre = require("hardhat");

const OPENSEA_REGISTRY = process.env.OPENSEA_REGISTRY;
if (!OPENSEA_REGISTRY) {
  throw new Error(`OPENSEA_REGISTRY enivroment variable is required`);
}

async function main() {
  const Helheimr = await hre.ethers.getContractFactory("Helheimr");
  const helheimr = await Helheimr.deploy(OPENSEA_REGISTRY);

  await helheimr.deployed();

  console.log("Helheimr deployed to:", helheimr.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
