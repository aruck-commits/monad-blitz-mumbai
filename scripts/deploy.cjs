const ethers = require("hardhat").ethers;

async function main() {
  console.log("Starting deployment on Monad Testnet...");
  
  const AgentMarketplace = await ethers.getContractFactory("AgentMarketplace");
  const marketplace = await AgentMarketplace.deploy();
  await marketplace.waitForDeployment();

  console.log("==========================================");
  console.log("🎯 Contract deployed successfully!");
  console.log("📍 Address:", await marketplace.getAddress());
  console.log("==========================================");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });