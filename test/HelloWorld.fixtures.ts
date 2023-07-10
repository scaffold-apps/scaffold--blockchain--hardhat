import { ethers } from "hardhat";

export async function deployContract() {
    const [owner, otherAccount] = await ethers.getSigners();
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const contract = await HelloWorld.deploy();

    return { owner, otherAccount, contract }
}