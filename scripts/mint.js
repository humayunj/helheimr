// hardhat script pattern

const hre = require("hardhat");

const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const OWNER_ADDRESS = process.env.OWNER_ADDRESS;

if (!CONTRACT_ADDRESS) {
  throw new Error(`CONTRACT_ADDRESS enivroment is required`);
}
if (!OWNER_ADDRESS) {
  throw new Error(`OWNER_ADDRESS enivroment is required`);
}

async function main() {
  const helheimr = await hre.ethers.getContractAt("Helheimr", CONTRACT_ADDRESS);
  console.log("Minting 1 token");
  for (let i = 0; i < 10; i++) {
    console.log(`Minting token ID: ${i + 1}`);
    await helheimr.mintTo(OWNER_ADDRESS);
  }

  console.log("Minted tokens to", OWNER_ADDRESS);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
