import type { NexusWalletSdkConfig } from "@frak-labs/nexus-sdk/core";

// Create the config for the Nexus Wallet SDK
export const nexusConfig: NexusWalletSdkConfig = {
    // The current url for the wallet sdk
    walletUrl: "https://wallet.frak.id",
    // The content id on which this sdk will be used
    contentId: "0xdeadbeef",
    // The content title, this will be displayed to the user during a few registration steps
    contentTitle: "My content dApp title",
};
