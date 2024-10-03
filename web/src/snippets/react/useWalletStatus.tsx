import { useWalletStatus } from "@frak-labs/nexus-sdk/react";

/**
 * Define a component displaying the current user wallet status
 */
export function WalletStatus() {
    const { data: walletStatus, isPending } = useWalletStatus(); // [!code focus]

    return (
        <>
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
                    <p>Not connected to a frak wallet</p>
                </div>
            )}
        </>
    );
}
