import * as anchor from "@project-serum/anchor";
import { DecentralizedExchange } from "../target/types/decentralized_exchange";
import { wallet, System } from "../tests/Account";
import { PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';


describe("Creating Stock Account", () => {
  const program = anchor.workspace.DecentralizedExchange as anchor.Program<DecentralizedExchange>;
    it("Created", async () => {
      const [StockPDA, _bump] = await PublicKey
      .findProgramAddress(
        [
          anchor.utils.bytes.utf8.encode("Stock Account"),
          wallet.publicKey.toBuffer(),
        ],
        program.programId
      )
      const tx = await program.methods.createStock(
        "Hardly Company",
        "A hardly compñy focused",
        new anchor.BN(100000000),
        true,
        new anchor.BN(124568),
        new anchor.BN(1672027228),
        new anchor.BN(1026)
      )
      .accounts({
          decentralizedExchangeSystem: System,
          stockAccount: StockPDA,
          from: wallet.publicKey,
          systemProgram: anchor.web3.SystemProgram.programId,
        }).rpc();
      const Account = await program.account.stockAccount.fetch(StockPDA)
      console.log("---------------------------------------------") 
      console.log("Your transaction signature: ", tx);
      console.log("---------------------------------------------")
      console.log("PDA: ", StockPDA.toBase58());
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
      console.log("Price to go public: ", (Account.priceToGoPublic.toNumber() / LAMPORTS_PER_SOL).toString(), "SOL")
      console.log("---------------------------------------------")
    });
})