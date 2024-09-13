import { siweAuthenticate } from "@frak-labs/nexus-sdk/actions";
import { parseSiweMessage } from "viem/siwe";
import { nexusClient } from "../core/client-full.ts";

/**
 * Send a transaction
 */
const { signature, message } = await siweAuthenticate(nexusClient, {
    siwe: {
        statement: "Sign in to My App",
        domain: "my-app.com",
        expirationTimeTimestamp: Date.now() + 1000 * 60 * 5,
    },
    metadata: {
        header: {
            title: "Sign in",
        },
        context: "Sign in to My App",
    },
});
console.log("Parsed final message:", parseSiweMessage(message));
console.log("Siwe signature:", signature);
