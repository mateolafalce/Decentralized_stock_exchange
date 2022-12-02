import * as anchor from "@project-serum/anchor";
import { DecentralizedExchange } from "../target/types/decentralized_exchange";
import { wallet, Stock, HolderPDA } from "../tests/Account";
import { PublicKey } from '@solana/web3.js';

describe("Sell Offer", () => {
  const program = anchor.workspace.DecentralizedExchange as anchor.Program<DecentralizedExchange>;
    it("Offering", async () => {
    const [SellOfferPDA, _bump] = await PublicKey
    .findProgramAddress(
      [
          anchor.utils.bytes.utf8.encode("Sell Account"),
          Stock.toBuffer(),
          wallet.publicKey.toBuffer(),
      ],
      program.programId
    )
      const tx = await program.methods.initSellAccount()
      .accounts({
          stockAccount: Stock,
          sellOffer: SellOfferPDA,
          stockAccountPda: Stock,
          from: wallet.publicKey,
          systemProgram: anchor.web3.SystemProgram.programId,
        }).rpc();
      const sellOffer = await program.account.sellOrBuyAccount.fetch(SellOfferPDA);
      console.log("---------------------------------------------") 
      console.log("Your transaction signature: ", tx);
      console.log("---------------------------------------------")
      console.log("Sell PDA: ", SellOfferPDA.toBase58());
      console.log("---------------------------------------------")
      console.log("Bump Original: ", sellOffer.bumpOriginal.toString());
      console.log("---------------------------------------------")
      console.log("Selling amount: ", sellOffer.sellOrBuyAmount.toString());
      console.log("---------------------------------------------")
      console.log("To a price of: ", sellOffer.price.toString());
      console.log("---------------------------------------------")
      console.log("Your PublicKey: ", sellOffer.pubkey.toBase58());
      console.log("---------------------------------------------")
    });
})