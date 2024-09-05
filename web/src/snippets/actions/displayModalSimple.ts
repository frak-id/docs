import { displayModal } from "@frak-labs/nexus-sdk/actions";
import { nexusClient } from "../core/client-full.ts";

/**
 * Trigger the open of a modal that will perform:
 *  1. Login (Skipped if already logged in)
 *  2. Open a session (Skipped if already opened)
 *  3. Display a success message with sharing link options
 */
const results = await displayModal(nexusClient, {
    steps: {
        // Simple login with no SSO, nor customisation
        login: { allowSso: false },
        // Simple session opening, with no customisation
        openSession: {},
        // Success message with sharing options
        success: {
            sharing: {
                text: "Discover my super app website",
                link: "https://my-app.com",
            },
        },
    },
});

console.log("Login step - wallet", results.login.wallet);
console.log("Open session step - start + end", {
    start: results.openSession.startTimestamp,
    end: results.openSession.endTimestamp,
});
