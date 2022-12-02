import * as anchor from "@project-serum/anchor";
import { DecentralizedExchange } from "../target/types/decentralized_exchange";
import { wallet, System, Stock, HolderPDA } from "../tests/Account";

describe("Ipo", () => {
  const program = anchor.workspace.DecentralizedExchange as anchor.Program<DecentralizedExchange>;
    it("Buying", async () => {
    const Account = await program.account.stockAccount.fetch(Stock)

      const tx = await program.methods.buyInInitialPublicOffering(
        new anchor.BN(90)
      )
      .accounts({
          decentralizedExchangeSystem: System,
          stockAccount: Stock,
          holderAccount: HolderPDA,
          stockAccountPda: Stock,
          from: wallet.publicKey,
          systemProgram: anchor.web3.SystemProgram.programId,
        }).rpc();
      let hundred = Account.totalSupply.toNumber();
      const Holder = await program.account.holderAccount.fetch(HolderPDA);
      const perct = (hundred * Holder.participation.toNumber()) / (hundred * (hundred))
      console.log("---------------------------------------------") 
      console.log("Your transaction signature: ", tx);
      console.log("---------------------------------------------")
      console.log("Holder PDA: ", HolderPDA.toBase58());
      console.log("---------------------------------------------")
      console.log("Bump Original: ", Holder.bumpOriginal.toString());
      console.log("---------------------------------------------")
      console.log("Total participation in the company: ", (perct * 100), "%");
      console.log("---------------------------------------------")
      console.log("Your PublicKey: ", Holder.holderPubkey.toBase58());
      console.log("---------------------------------------------")
    });
})