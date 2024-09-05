import { watchWalletStatus } from "@frak-labs/nexus-sdk/actions";
import type { WalletStatusReturnType } from "@frak-labs/nexus-sdk/core";
import { nexusClient } from "../core/client-full.ts";

/**
 * Startup the wallet status listener
 */
await watchWalletStatus(nexusClient, (status: WalletStatusReturnType) => {
    if (status.key === "connected") {
        console.log("Wallet connected:", status.wallet);
        console.log("Current interaction session:", status.interactionSession);
    } else {
        console.log("Wallet not connected");
    }
});
