import * as anchor from "@project-serum/anchor";
import { DecentralizedExchange } from "../target/types/decentralized_exchange";
import { wallet, Stock } from "../tests/Account";
import { PublicKey } from '@solana/web3.js';

describe("Buy Account", () => {
  const program = anchor.workspace.DecentralizedExchange as anchor.Program<DecentralizedExchange>;
    it("...", async () => {
    const [BuyPDA, _bump] = await PublicKey
    .findProgramAddress(
      [
          anchor.utils.bytes.utf8.encode("Buy Account"),
          Stock.toBuffer(),
          wallet.publicKey.toBuffer(),
      ],
      program.programId
    )
      const tx = await program.methods.initBuyAccount()
      .accounts({
          stockAccount: Stock,
          buyOffer: BuyPDA,
          stockAccountPda: Stock,
          from: wallet.publicKey,
          systemProgram: anchor.web3.SystemProgram.programId,
        }).rpc();
      const Buy = await program.account.sellOrBuyAccount.fetch(BuyPDA);
      console.log("---------------------------------------------") 
      console.log("Your transaction signature: ", tx);
      console.log("---------------------------------------------")
      console.log("Buy PDA: ", BuyPDA.toBase58());
      console.log("---------------------------------------------")
      console.log("Bump Original: ", Buy.bumpOriginal.toString());
      console.log("---------------------------------------------")
      console.log("Buying amount: ", Buy.sellOrBuyAmount.toString());
      console.log("---------------------------------------------")
      console.log("To a price of: ", Buy.price.toString());
      console.log("---------------------------------------------")
      console.log("Your PublicKey: ", Buy.pubkey.toBase58());
      console.log("---------------------------------------------")
    });
})