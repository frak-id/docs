import { useDisplayModal } from "@frak-labs/nexus-sdk/react";

/**
 * Define your custom modal open button component
 */
export function MyCustomModalOpenButton() {
    const {
        mutate: displayModal,
        isPending,
        error,
        data: result,
    } = useDisplayModal();

    return (
        <>
            {error && <div>{error.message}</div>}
            <button
                type={"button"}
                onClick={() =>
                    displayModal({
                        steps: {
                            // Simple login with no SSO, nor customisation
                            login: { allowSso: false },
                            // Simple session opening, with no customisation
                            openSession: {},
                            // Send transaction
                            sendTransaction: {
                                tx: { to: "0xdeadbeef", data: "0xdeadbeef" },
                            },
                            // Success message with sharing options
                            final: {
                                action: {
                                    key: "sharing",
                                    options: {
                                        text: "Discover my super app website",
                                        link: "https://my-app.com",
                                    },
                                },
                            },
                        },
                    })
                }
                disabled={isPending}
            >
                {isPending ? "Loading..." : "Send tx"}
            </button>
            {result && (
                <div>
                    <p>Logged in with: {result.login.wallet}</p>
                    <p>Transaction hash: {result.sendTransaction.hash}</p>
                </div>
            )}
        </>
    );
}
