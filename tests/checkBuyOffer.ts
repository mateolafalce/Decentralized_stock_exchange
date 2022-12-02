import * as anchor from "@project-serum/anchor";
import { DecentralizedExchange } from "../target/types/decentralized_exchange";
import { BuyPDA } from "../tests/Account";

describe("Check buy offer", () => {
  const program = anchor.workspace.DecentralizedExchange as anchor.Program<DecentralizedExchange>;
    it("...", async () => {
      const Account = await program.account.sellOrBuyAccount.fetch(BuyPDA)
      console.log("---------------------------------------------")
      console.log("PDA: ", BuyPDA.toBase58());
      console.log("---------------------------------------------") 
      console.log("bump: ", Account.bumpOriginal.toString());
      console.log("---------------------------------------------")
      console.log("Sell amount: ", Account.sellOrBuyAmount.toString());
      console.log("---------------------------------------------")
      console.log("Price: ", Account.price.toString())
      console.log("---------------------------------------------")
      console.log("Pubkey: ", Account.pubkey.toBase58())
      console.log("---------------------------------------------")
    })
})