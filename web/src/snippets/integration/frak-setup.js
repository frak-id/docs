// [!region config]
const frakConfig = {
    walletUrl: "https://wallet.frak.id",
    metadata: {
        name: "Your App Name",
    },
    domain: window.location.host,
};
// [!endregion config]

// [!region reward-modal-config]
const rewardModalConfig = {
    steps: {
        login: {
            allowSso: true,
            ssoMetadata: {
                logoUrl: "https://your-domain.com/assets/logo.svg",
                homepageLink: "https://your-domain.com/",
            },
        },
        openSession: {
        },
        final: {
            action: { key: "reward" },
        },
    },
    metadata: {
        lang: "fr",
    },
};
// [!endregion reward-modal-config]

// [!region shared-modal-config]
const sharedModalConfig = {
    steps: {
        login: {
            allowSso: true,
            ssoMetadata: {
                logoUrl: "https://your-domain.com/assets/logo.svg",
                homepageLink: "https://your-domain.com/",
            },
        },
        openSession: {
        },
        final: {
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
    metadata: {
        lang: "fr",
    },
};
// [!endregion shared-modal-config]

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

window.FrakSetup = { frakConfig, modalShare };
// [!endregion setup-client]

// [!region watch-wallet-status]
function watchWalletStatus() {
    const SESSION_STORAGE_KEY = "frak-wallet-interaction-token";
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
    window.NexusSDK.displayModal(window.FrakSetup.frakClient, sharedModalConfig);
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
        setupReferral();
    });
});
// [!endregion DOMContentLoaded]

// [!region setup-referral]
function setupReferral() {
    window.NexusSDK.referralInteraction(window.FrakSetup.frakClient, {
        rewardModalConfig,
    }).then((referral) => {
        console.log("referral result", referral);
    });
}
// [!endregion setup-referral]

// [!region DOMContentLoaded-referral]
function setupReferral() { // [!code focus]
    window.NexusSDK.referralInteraction(window.FrakSetup.frakClient, { // [!code focus]
        rewardModalConfig, // [!code focus]
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
