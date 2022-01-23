const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Helheimr", function () {
  let contract;
  let accounts;
  before(async () => {
    const Contract = await ethers.getContractFactory("Helheimr");
    contract = await Contract.deploy(
      `0xf57b2c51ded3a29e6891aba85459d600256cf3ac`
    );
    await contract.deployed();
    accounts = await ethers.getSigners();
  });
  it("should mint 10 tokens", async function () {
    for (let i = 1; i <= 10; i++) {
      await contract.mintTo(accounts[0].address); // owner address
    }
    const blnc = await contract.balanceOf(accounts[0].address);
    expect(blnc.toString()).be.equal(BigInt(10).toString());
  });
  it("should validate the tokenURI", async () => {
    expect(await contract.tokenURI(BigInt(1))).to.equal(
      `https://helheimr.herokuapp.com/token/${1}`
    );
  });
});
