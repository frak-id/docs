import type { NexusWalletSdkConfig } from "@frak-labs/nexus-sdk/core";

// Create the config for the Frak Wallet SDK
export const nexusConfig: NexusWalletSdkConfig = {
    // The current url for the wallet sdk
    // For testnet you can use the following url: "https://wallet-dev.frak.id"
    walletUrl: "https://wallet.frak.id",
    // Some metadata about your app that will be displayed to the end users when interacting with his wallet
    metadata: {
        name: "My app title",
    },
    // Your domain
    domain: "my-app.com",
};
