import * as anchor from "@project-serum/anchor";
import { DecentralizedExchange } from "../target/types/decentralized_exchange";
import { wallet } from "./Account";
import { PublicKey } from '@solana/web3.js';

describe("Creating System Account", () => {
  const program = anchor.workspace.DecentralizedExchange as anchor.Program<DecentralizedExchange>;
    it("Created", async () => {
      const [SystemPDA, _bump] = await PublicKey
      .findProgramAddress(
        [
          anchor.utils.bytes.utf8.encode("System Account"),
        ],
        program.programId
      )
      const tx = await program.methods.initializeDecentralizedExchangeSystem()
      .accounts({
          decentralizedExchangeSystem: SystemPDA,
          user: wallet.publicKey,
          systemProgram: anchor.web3.SystemProgram.programId,
        }).rpc();
      const SystemAccount = await program.account.systemExchangeAccount.fetch(SystemPDA);
      console.log("---------------------------------------------")
      console.log("PDA: ", SystemPDA.toBase58());
      console.log("---------------------------------------------") 
      console.log("Your transaction signature: ", tx);
      console.log("---------------------------------------------") 
      console.log("Bump original: ", SystemAccount.bumpOriginal.toString());
      console.log("---------------------------------------------") 
      console.log("Total compnies: ", SystemAccount.totalStockCompanies.toString());
      console.log("---------------------------------------------") 
      console.log("Historical exchanges: ", SystemAccount.historicalExchanges.toString());
      console.log("---------------------------------------------") 
      console.log("Total Holders: ", SystemAccount.totalHolders.toString());
      console.log("---------------------------------------------")
    });
})