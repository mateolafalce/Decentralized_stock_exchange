import * as anchor from "@project-serum/anchor";
import { DecentralizedExchange } from "../target/types/decentralized_exchange";
import { wallet, System, Stock, HolderPDA, BuyPDA } from "../tests/Account";

describe("Buy Offer", () => {
  const program = anchor.workspace.DecentralizedExchange as anchor.Program<DecentralizedExchange>;
    it("Offering", async () => {

      const tx = await program.methods.buyOffer(
        new anchor.BN(1),
        new anchor.BN(69)
      )
      .accounts({
          decentralizedExchangeSystem: System,
          stockAccount: Stock,
          holderAccount: HolderPDA,
          buyOffer: BuyPDA,
          stockAccountPda: Stock,
          buyPda: BuyPDA,
          from: wallet.publicKey,
          systemProgram: anchor.web3.SystemProgram.programId,
        }).rpc();
      const buyOffer = await program.account.sellOrBuyAccount.fetch(BuyPDA);
      console.log("---------------------------------------------") 
      console.log("Your transaction signature: ", tx);
      console.log("---------------------------------------------")
      console.log("Buy PDA: ", BuyPDA.toBase58());
      console.log("---------------------------------------------")
      console.log("Buying amount: ", buyOffer.sellOrBuyAmount.toString());
      console.log("---------------------------------------------")
      console.log("To a price of: ", buyOffer.price.toString());
      console.log("---------------------------------------------")
      console.log("Your PublicKey: ", buyOffer.pubkey.toBase58());
      console.log("---------------------------------------------")
    });
})