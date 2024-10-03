import type { SsoMetadata } from "@frak-labs/nexus-sdk/core";
import { useOpenSso } from "@frak-labs/nexus-sdk/react";

/**
 * Build the SSO metadata
 */
// biome-ignore format: It would move the code focus to the wrong line
const metadata: SsoMetadata = { // [!code focus]
    logoUrl: "https://my-app.com/logo.png",
    homepageLink: "https://my-app.com",
    links: {
        confidentialityLink: "https://my-app.com/confidentiality",
        helpLink: "https://my-app.com/help",
        cguLink: "https://my-app.com/cgu",
    },
};

/**
 * Define your SSO button component
 */
// biome-ignore format: It would move the code focus to the wrong line
export function MySsoButton() {
    const { mutate: openSso, isPending, error } = useOpenSso(); // [!code focus]

    return (
        <>
            {error && <div>{error.message}</div>}
            <button
                type={"button"}
                onClick={() =>
                    openSso({
                        metadata,
                        directExit: true,
                    })
                }
                disabled={isPending}
            >
                {isPending ? "Loading..." : "Login to Frak with SSO"}
            </button>
        </>
    );
}
