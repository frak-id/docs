import { openSso } from "@frak-labs/nexus-sdk/actions";
import type { SsoMetadata } from "@frak-labs/nexus-sdk/core";
import { nexusClient } from "../core/client-full.ts";

/**
 * Build the SSO metadata
 */
const metadata: SsoMetadata = {
    logoUrl: "https://my-app.com/logo.png",
    homepageLink: "https://my-app.com",
    links: {
        confidentialityLink: "https://my-app.com/confidentiality",
        helpLink: "https://my-app.com/help",
        cguLink: "https://my-app.com/cgu",
    },
};

/**
 * Trigger an sso opening with redirection
 */
await openSso(nexusClient, {
    redirectUrl: "https://my-app.com/nexus-sso",
    metadata,
});

/**
 * Trigger an sso opening within a popup with direct exit
 */
await openSso(nexusClient, {
    directExit: true,
    metadata,
});
