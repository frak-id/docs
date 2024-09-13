import {
    NexusConfigProvider,
    NexusIFrameClientProvider,
} from "@frak-labs/nexus-sdk/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { PropsWithChildren } from "react";

const queryClient = new QueryClient();

const nexusConfig = {
    walletUrl: "https://nexus.frak.id",
    metadata: {
        name: "Your App Name",
        // Add any custom CSS if needed
    },
    // The domain will be automatically set to window.location.host
};

export function NexusProvider({ children }: PropsWithChildren) {
    return (
        <NexusConfigProvider config={nexusConfig}>
            <NexusIFrameClientProvider>
                <QueryClientProvider client={queryClient}>
                    {children}
                </QueryClientProvider>
            </NexusIFrameClientProvider>
        </NexusConfigProvider>
    );
}
