import { useWalletStatus } from "@frak-labs/nexus-sdk/react";

/**
 * Define a component displaying the current user wallet status
 */
export function MyWalletStatusComponent() {
    const { data: walletStatus, isPending, error } = useWalletStatus(); // [!code focus]

    return (
        <>
            {error && <div>{error.message}</div>}

            {(isPending || !walletStatus) && <div>Loading...</div>}

            {walletStatus?.key === "connected" && (
                <div>
                    <p>Connected to wallet {walletStatus.wallet}</p>
                    <p>
                        Session end:{" "}
                        {walletStatus.interactionSession?.endTimestamp}
                    </p>
                </div>
            )}
            {walletStatus?.key === "not-connected" && (
                <div>
                    <p>Not connected to a nexus wallet</p>
                </div>
            )}
        </>
    );
}
