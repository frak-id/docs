import { useSiweAuthenticate } from "@frak-labs/nexus-sdk/react";

/**
 * Define your custom Siwe button component
 */
export function SiweButton() {
    const {
        mutate: siweAuthent,
        isPending,
        error,
        data: result,
    } = useSiweAuthenticate();

    return (
        <>
            {error && <div>{error.message}</div>}
            <button
                type={"button"}
                onClick={() =>
                    siweAuthent({
                        siwe: {
                            statement: "Sign in to My App",
                            domain: "my-app.com",
                            expirationTimeTimestamp: Date.now() + 1000 * 60 * 5,
                        },
                        metadata: {
                            context: 'Authenticate on "My App"',
                        },
                    })
                }
                disabled={isPending}
            >
                {isPending ? "Loading..." : "Sign in with Siwe"}
            </button>
            {result && <div>Transaction hash: {result?.signature}</div>}
        </>
    );
}
