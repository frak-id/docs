import {
    type NexusWalletSdkConfig,
    createIFrameNexusClient,
    createIframe,
} from "@frak-labs/nexus-sdk/core";
import type { NexusClient } from "@frak-labs/nexus-sdk/core";

const nexusConfig: NexusWalletSdkConfig = {
    // The current url for the wallet sdk
    walletUrl: "https://wallet.frak.id",
    // The content id on which this sdk will be used
    contentId: "0xdeadbeef",
    // The content title, this will be displayed to the user during a few registration steps
    contentTitle: "My content dApp title",
};

// Create the iFrame and the associated FrakClient
async function createClient(): Promise<NexusClient> {
    // Create the iFrame that will be used for the communication with the nexus wallet
    const iframe = await createIframe({
        walletBaseUrl: nexusConfig.walletUrl,
    });
    if (!iframe) {
        throw new Error("Could not create the iframe");
    }

    // Build the client
    const client = createIFrameNexusClient({ config: nexusConfig, iframe });

    // Wait for it to be ready
    await client.waitForConnection;

    // And then return it
    return client;
}

// Create the client and use it
export const nexusClient = await createClient();
