import * as anchor from "@project-serum/anchor";
import { DecentralizedExchange } from "../target/types/decentralized_exchange";
import { wallet, System, Stock, HolderPDA, SellPDA } from "../tests/Account";

describe("Cancel Sell Offer", () => {
  const program = anchor.workspace.DecentralizedExchange as anchor.Program<DecentralizedExchange>;
    it("...", async () => {

      const tx = await program.methods.cancelSell(
        new anchor.BN(7000)
      )
      .accounts({
          decentralizedExchangeSystem: System,
          stockAccount: Stock,
          holderAccount: HolderPDA,
          sellOffer: SellPDA,
          stockAccountPda: Stock,
          from: wallet.publicKey,
          systemProgram: anchor.web3.SystemProgram.programId,
        }).rpc();
      const sellOffer = await program.account.sellOrBuyAccount.fetch(SellPDA);
      console.log("---------------------------------------------") 
      console.log("Your transaction signature: ", tx);
      console.log("---------------------------------------------")
      console.log("Sell PDA: ", SellPDA.toBase58());
      console.log("---------------------------------------------")
      console.log("Your PublicKey: ", sellOffer.pubkey.toBase58());
      console.log("---------------------------------------------")

    });
})