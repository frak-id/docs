import type { NexusWalletSdkConfig } from "@frak-labs/nexus-sdk/core";
import {
    NexusConfigProvider,
    NexusIFrameClientProvider,
} from "@frak-labs/nexus-sdk/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const nexusConfig: NexusWalletSdkConfig = {
    // The current url for the wallet sdk
    // For testnet you can use the following url: "https://nexus-dev.frak.id"
    walletUrl: "https://nexus.frak.id",
    // Some metadata about your app that will be displayed to the end users when interacting with his wallet
    metadata: {
        name: "My app title",
    },
    // Your domain
    domain: "my-app.com",
};

// biome-ignore format: It would move the code focus to the wrong line
export function App() {
    return (
        <NexusConfigProvider config={nexusConfig}> // [!code focus]
            <NexusIFrameClientProvider> // [!code focus]
                <QueryClientProvider client={queryClient}>
                    {/** ... */}
                </QueryClientProvider>{" "} // [!code focus]
            </NexusIFrameClientProvider>{" "} // [!code focus]
        </NexusConfigProvider>
    );
}
