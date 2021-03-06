// To deploy to Rinkeby
// npx hardhat run scripts/deploy.js --network rinkeby
async function main() {
  const keyboardsContractFactory = await hre.ethers.getContractFactory("Keyboards");
  const keyboardsContract = await keyboardsContractFactory.deploy();
  await keyboardsContract.deployed();

  console.log("The keyboards contract is deployed!", keyboardsContract.address)

  const keyboards = await keyboardsContract.getKeyboards();
  console.log("We got the keyboards!", keyboards);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

// Log
// The string keyboards contract is deployed! 0xFe04f12E508d8A4d7512cF4A011046bCc9A57269
// The struct keyboards contract is deployed! 0x9A7964EecD6AE7Ee69eece70E9a84DB5Fd6Fe351
// The tipping keyboards contract is deployed! 0x36Fecb442a85AA212B0d2F712f13e866a22e235b
// Events contract is deployed! 0x2A68b7E5419E47013f1060FEF315798c413d5d42 