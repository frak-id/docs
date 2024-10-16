// [!region config]
const frakConfig = {
    walletUrl: "https://wallet.frak.id",
    metadata: {
        name: "Your App Name",
    },
    domain: window.location.host,
};
// [!endregion config]

// [!region modal-config]
const modalConfig = {
    steps: {
        login: {
            metadata: {
                description:
                    "I want to receive my gains directly in my wallet by sharing this product",
                primaryActionText: "Create my wallet in 30 sec",
                secondaryActionText: "I already have a wallet",
            },
            allowSso: true,
            ssoMetadata: {
                logoUrl: "https://your-domain.com/assets/logo.svg",
                homepageLink: "https://your-domain.com/",
            },
        },
        openSession: {
            metadata: {
                description:
                    "I want to receive my gains directly in my wallet by sharing this product",
            },
        },
        final: {
            metadata: {
                description:
                    "Your wallet has been created to receive your reward for purchases.\n" +
                    "To find your wallet, go to [wallet.frak.id](https://wallet.frak.id).",
            },
            action: { key: "reward" },
        },
    },
};
// [!endregion modal-config]

// [!region setup-client]
function setupFrakClient() {
    return new Promise((resolve) => {
        window.NexusSDK.createIframe({
            walletBaseUrl: frakConfig.walletUrl,
        }).then((iframe) => {
            if (!iframe) {
                console.error("Failed to create Frak iframe");
                resolve(null);
            }

            resolve(
                window.NexusSDK.createIFrameNexusClient({
                    config: frakConfig,
                    iframe,
                })
            );
        });
    });
}

window.FrakSetup = { frakConfig };
// [!endregion setup-client]

// [!region watch-wallet-status]
function watchWalletStatus() {
    const SESSION_STORAGE_KEY = "frak-wallet-address";
    window.NexusSDK.watchWalletStatus(window.FrakSetup.frakClient, (status) => {
        if (status.key === "connected") {
            sessionStorage.setItem(SESSION_STORAGE_KEY, status.wallet);
        } else {
            sessionStorage.removeItem(SESSION_STORAGE_KEY);
        }
    }).catch(() => {
        sessionStorage.removeItem(SESSION_STORAGE_KEY);
    });
}
// [!endregion watch-wallet-status]

// [!region modal-share]
function modalShare() {
    const configShare = {
        ...modalConfig,
        steps: {
            ...modalConfig.steps,
            final: {
                metadata: {
                    description: "Get rewarded for sharing with your friends",
                },
                action: {
                    key: "sharing",
                    options: {
                        popupTitle: "Share this with your friends",
                        text: `Discover this awesome article from ${window.FrakSetup.frakConfig.metadata.name}!`,
                        link: window.location.href,
                    },
                },
            },
        },
    };
    window.NexusSDK.displayModal(window.FrakSetup.frakClient, configShare);
}
// [!endregion modal-share]

// [!region DOMContentLoaded]
document.addEventListener("DOMContentLoaded", () => {
    setupFrakClient().then((frakClient) => {
        if (!frakClient) {
            console.error("Failed to create Frak client");
            return;
        }

        window.FrakSetup.frakClient = frakClient;

        watchWalletStatus();
    });
});
// [!endregion DOMContentLoaded]

// [!region DOMContentLoaded-referral]
function setupReferral() { // [!code focus]
    window.NexusSDK.referralInteraction(window.FrakSetup.frakClient, { // [!code focus]
        modalConfig, // [!code focus]
    }).then((referral) => { // [!code focus]
        console.log("referral result", referral); // [!code focus]
    }); // [!code focus]
} // [!code focus]

document.addEventListener("DOMContentLoaded", () => {
    setupFrakClient().then((frakClient) => {
        if (!frakClient) {
            console.error("Failed to create Frak client");
            return;
        }

        window.FrakSetup.frakClient = frakClient;

        watchWalletStatus();
        setupReferral(); // [!code focus]
    });
});
// [!endregion DOMContentLoaded-referral]
