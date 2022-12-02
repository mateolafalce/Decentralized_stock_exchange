import * as anchor from "@project-serum/anchor";
const provider = anchor.AnchorProvider.env();
anchor.setProvider(provider);
export const wallet = provider.wallet as anchor.Wallet;

export const System = new anchor.web3.PublicKey(
    "CKNx7ENVVCyYYNkiwAWqvHs13opQVveVpiC1yUfamr3N"
);

export const Stock = new anchor.web3.PublicKey(
    "GNXKwmJNntBn3EHMMxDgrCyhKfZ1yeVALmwrt41MyGQf"
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