import * as anchor from "@project-serum/anchor";
import { DecentralizedExchange } from "../target/types/decentralized_exchange";
import { wallet, System, Stock, BuyPDA } from "../tests/Account";

describe("Cancel Buy Offer", () => {
  const program = anchor.workspace.DecentralizedExchange as anchor.Program<DecentralizedExchange>;
    it("...", async () => {

      const tx = await program.methods.cancelBuy(
        new anchor.BN(7000)
      )
      .accounts({
          decentralizedExchangeSystem: System,
          stockAccount: Stock,
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
        console.log("Buy amount: ", buyOffer.sellOrBuyAmount.toString());
        console.log("---------------------------------------------")
        console.log("To a price of: ", buyOffer.price.toString());
        console.log("---------------------------------------------")
        console.log("Your PublicKey: ", buyOffer.pubkey.toBase58());
        console.log("---------------------------------------------")
    });
})