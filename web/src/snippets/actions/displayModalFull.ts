import { displayModal } from "@frak-labs/nexus-sdk/actions";
import { generateSiweNonce, parseSiweMessage } from "viem/siwe";
import { nexusClient } from "../core/client-full.ts";

/**
 * Trigger the open of a modal that will perform:
 *  1. Login (Skipped if already logged in)
 *  2. Open a session (Skipped if already opened)
 *  3. Authenticate via SIWE
 *  4. Send a transaction
 *  5. Display a success message with sharing link options
 */
const results = await displayModal(nexusClient, {
    steps: {
        // Login step
        login: {
            allowSso: true,
            ssoMetadata: {
                logoUrl: "https://my-app.com/logo.png",
                homepageLink: "https://my-app.com",
                links: {
                    confidentialityLink: "https://my-app.com/confidentiality",
                    helpLink: "https://my-app.com/help",
                    cguLink: "https://my-app.com/cgu",
                },
            },
            metadata: {
                title: "Login on My-App",
                description: "Please login to continue",
            },
        },
        // Simple session opening, with no customisation
        openSession: {
            metadata: {
                title: "Open a session",
                description: "Please open a session to continue",
            },
        },
        // Siwe authentication
        siweAuthenticate: {
            siwe: {
                domain: "my-app.com",
                uri: "https://my-app.com/",
                nonce: generateSiweNonce(),
                version: "1",
            },
            metadata: {
                title: "Authenticate with SIWE",
                description: "Please authenticate with SIWE to continue",
            },
        },
        // Send batched transaction
        sendTransaction: {
            tx: [
                { to: "0xdeadbeef", data: "0xdeadbeef" },
                { to: "0xdeadbeef", data: "0xdeadbeef" },
            ],
            metadata: {
                title: "Send a transaction",
                description: "Please send a transaction to continue",
            },
        },
        // Success message with sharing options
        success: {
            sharing: {
                text: "Discover my super app website",
                link: "https://my-app.com",
            },
        },
    },
    metadata: {
        context: "My-app overkill flow",
        header: {
            title: "My-App",
            icon: "https://my-app.com/logo.png",
        },
    },
});

console.log("Login step - wallet", results.login.wallet);
console.log("Open session step - start + end", {
    start: results.openSession.startTimestamp,
    end: results.openSession.endTimestamp,
});
console.log("Siwe authentication step - signature + message", {
    signature: results.siweAuthenticate.signature,
    siweMessage: parseSiweMessage(results.siweAuthenticate.message),
});
console.log("Send tx step - hash", results.sendTransaction.hash);
