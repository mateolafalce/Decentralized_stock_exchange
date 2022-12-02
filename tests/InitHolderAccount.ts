import * as anchor from "@project-serum/anchor";
import { DecentralizedExchange } from "../target/types/decentralized_exchange";
import { wallet, System, Stock } from "../tests/Account";
import { PublicKey } from '@solana/web3.js';


describe("Holder", () => {
  const program = anchor.workspace.DecentralizedExchange as anchor.Program<DecentralizedExchange>;
    it("Initialize", async () => {
      const [HolderPDA, _bump] = await PublicKey
      .findProgramAddress(
        [
            Stock.toBuffer(),
            wallet.publicKey.toBuffer(),
        ],
        program.programId
      )
      const tx = await program.methods.initHolderAccount()
      .accounts({
          decentralizedExchangeSystem: System,
          stockAccount: Stock,
          holderAccount: HolderPDA,
          stockAccountPda: Stock,
          from: wallet.publicKey,
          systemProgram: anchor.web3.SystemProgram.programId,
        }).rpc();
      const Holder = await program.account.holderAccount.fetch(HolderPDA);
      console.log("---------------------------------------------") 
      console.log("Your transaction signature", tx);
      console.log("---------------------------------------------")
      console.log("Holder PDA: ", HolderPDA.toBase58());
      console.log("---------------------------------------------")
      console.log("Bump Original: ", Holder.bumpOriginal.toString());
      console.log("---------------------------------------------")
      console.log("Your PublicKey: ", Holder.holderPubkey.toBase58());
      console.log("---------------------------------------------")
    });
})