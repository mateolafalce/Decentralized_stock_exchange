import * as anchor from "@project-serum/anchor";
const provider = anchor.AnchorProvider.env();
anchor.setProvider(provider);
export const wallet = provider.wallet as anchor.Wallet;

export const System = new anchor.web3.PublicKey(
    "4UcaPu7YLCk9vZc74wePKCtHfKxYKz9JAdFzTSqeURTC"
);

export const Stock = new anchor.web3.PublicKey(
    "3fdKayUKXJNekqyuJYQsaGSmKPRgheP4PbV5JdkLK7VV"
);

export const HolderPDA = new anchor.web3.PublicKey(
    "BZMBSwQEyUdacYhLxvG9QZXbm1K2XDowuVEs6yqf4hra"
);

export const SellPDA = new anchor.web3.PublicKey(
    "BkvxNLPGv2EGE7y6GM7tvvVXZ2LCtNBrsJZzW6fdJMKY"
);

export const BuyPDA = new anchor.web3.PublicKey(
    "F1nFJnSrD8wxnhmBSZtdZYVRUyf5XF5KwSAByquysfwS"
);