import * as anchor from "@project-serum/anchor";
import { DecentralizedExchange } from "../target/types/decentralized_exchange";
import { Stock } from "./Account";
import { LAMPORTS_PER_SOL } from '@solana/web3.js';


describe("Creating System Account", () => {
  const program = anchor.workspace.DecentralizedExchange as anchor.Program<DecentralizedExchange>;
    it("Created", async () => {


      const Account = await program.account.stockAccount.fetch(Stock)
      console.log("---------------------------------------------")
      console.log("PDA: ", Stock.toBase58());
      console.log("---------------------------------------------")
      console.log("Initials: ", Account.initials.toString())
      console.log("---------------------------------------------") 
      console.log("Name: ", Account.name);
      console.log("---------------------------------------------")
      console.log("Description: ", Account.description);
      console.log("---------------------------------------------")
      console.log("Total stock supply: ", Account.totalSupply.toNumber().toString())
      console.log("---------------------------------------------")
      console.log("Dividens: ", Account.dividends)
      console.log("---------------------------------------------")
      console.log("Dividens payment period: ", Account.dividendPaymentPeriod.toNumber().toString())
      console.log("---------------------------------------------")
      console.log("Date to go public: ", Account.dateToGoPublic.toNumber().toString())
      console.log("---------------------------------------------")
      console.log("Price to go public: ", (Account.priceToGoPublic.toNumber()/ LAMPORTS_PER_SOL))
      console.log("---------------------------------------------")
    });
})