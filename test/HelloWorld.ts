import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { deployContract } from "./HelloWorld.fixtures";

describe("HelloWorld", function () {
    describe('Deployment', function () {
        it("Should set the right owner", async function () {
            const { owner, contract } = await loadFixture(deployContract)

            expect(await contract.owner()).to.equal(owner.address);
        });
    });

    describe('Print', function() {
       it('Should print Hello World', async function() {
           const { contract } = await loadFixture(deployContract)

           expect((await contract.print())).to.equal('Hello World');
       });
    });
});
