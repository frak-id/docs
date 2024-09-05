import {
    type NexusWalletSdkConfig,
    createIFrameNexusClient,
    createIframe,
} from "@frak-labs/nexus-sdk/core";
import type { NexusClient } from "@frak-labs/nexus-sdk/core";

const config: NexusWalletSdkConfig = {
    walletUrl: "https://nexus.frak.id",
    metadata: {
        name: "My app title",
    },
    domain: "my-app.com",
};

// Create the iFrame and the associated FrakClient
async function createClient(): Promise<NexusClient> {
    // Create the iFrame that will be used for the communication with the nexus wallet
    const iframe = await createIframe({
        walletBaseUrl: config.walletUrl,
    });
    if (!iframe) {
        throw new Error("Could not create the iframe");
    }

    // Build the client
    const client = createIFrameNexusClient({ config: config, iframe });

    // Wait for it to be ready
    await client.waitForConnection;

    // And then return it
    return client;
}

// Create the client and use it
export const nexusClient = await createClient();
