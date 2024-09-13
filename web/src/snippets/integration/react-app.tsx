import { useDisplayModal, useWalletStatus } from "@frak-labs/nexus-sdk/react";
import { NexusProvider } from "./NexusProvider";

// [!region app]
function App() {
    return (
        <NexusProvider>
            <h1>My Nexus Powered app</h1>
            <WalletStatus />
            <LoginButton />
        </NexusProvider>
    );
}
export default App;
// [!endregion app]

// [!region wallet-status]
/**
 * Simple wallet status component
 */
function WalletStatus() {
    const { data: walletStatus, isLoading, error } = useWalletStatus();

    if (isLoading) return <div>Loading wallet status...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            Wallet status:{" "}
            {walletStatus?.key === "connected" ? "Connected" : "Not connected"}
        </div>
    );
}
// [!endregion wallet-status]

// [!region login-button]
/**
 * Simple login with nexus button
 */
function LoginButton() {
    const { mutate: displayModal, isPending } = useDisplayModal();

    const handleLogin = () => {
        displayModal({
            steps: {
                login: {},
                success: {
                    metadata: {
                        description: "Successfully logged in!",
                    },
                },
            },
        });
    };

    return (
        <button onClick={handleLogin} disabled={isPending} type={"button"}>
            {isPending ? "Logging in..." : "Login with Nexus"}
        </button>
    );
}

// [!endregion login-button]
