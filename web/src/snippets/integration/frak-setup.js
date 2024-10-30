// [!region config]
// Top level Frak SDK config
const frakConfig = {
    walletUrl: "https://wallet.frak.id",
    metadata: {
        // Your app name (will be displayed on some modals and in the SSO)
        name: "Your App Name",
        // You can also setup custom styles here
    },
    domain: window.location.host,
};
// [!endregion config]

// [!region reward-modal-config]
// Configure the modal that will be displayed when a user can receive a reward and isn't logged with Frak
// All the modal customisation options can be found here: https://docs.frak.id/wallet-sdk/api/types/DisplayModalType
//  The `login` and `openSession` steps are required
const rewardModalConfig = {
    steps: {
        login: {
            allowSso: true,
            ssoMetadata: {
                logoUrl: "https://your-domain.com/assets/logo.svg",
                homepageLink: "https://your-domain.com/",
            },
        },
        openSession: {},
        final: {
            action: { key: "reward" },
        },
    },
    metadata: {
        lang: "en",
    },
};
// [!endregion reward-modal-config]

// [!region shared-modal-config]
// Configure the modal that will be displayed when a user can want to share your product
// All the modal customisation options can be found here: https://docs.frak.id/wallet-sdk/api/actions/displayModal#full-flow
//  The `login`, `openSession` and `final` with `sharing` action steps are required
const sharedModalConfig = {
    steps: {
        login: {
            allowSso: true,
            ssoMetadata: {
                logoUrl: "https://your-domain.com/assets/logo.svg",
                homepageLink: "https://your-domain.com/",
            },
        },
        openSession: {},
        final: {
            action: {
                key: "sharing",
                options: {
                    // Title that will be displayed on the system sharing modal  (optional)
                    popupTitle: "Share this with your friends",
                    // The text that will be shared with the link (optional)
                    text: `Discover this awesome article from ${frakConfig.metadata.name}!`,
                    // The link that will be shared (optional, default to the current page)
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

// [!region modal-share]
// Helper function to display the shared modal
function modalShare() {
    window.NexusSDK.displayModal(
        window.FrakSetup.frakClient,
        sharedModalConfig
    );
}
// [!endregion modal-share]

// [!region watch-wallet-status]
// Watch the wallet status, and store the wallet token in the session storage, to ensure proper purchase tracking
function watchWalletStatus() {
    const SESSION_STORAGE_KEY = "frak-wallet-interaction-token";
    window.NexusSDK.watchWalletStatus(window.FrakSetup.frakClient, (status) => {
        if (status.key === "connected") {
            sessionStorage.setItem(SESSION_STORAGE_KEY, status.interactionToken);
        } else {
            sessionStorage.removeItem(SESSION_STORAGE_KEY);
        }
    }).catch(() => {
        sessionStorage.removeItem(SESSION_STORAGE_KEY);
    });
}
// [!endregion watch-wallet-status]

// [!region setup-referral]
// Setup the referral listener on the Frak client
function setupReferral() {
    window.NexusSDK.referralInteraction(window.FrakSetup.frakClient, {
        modalConfig: rewardModalConfig,
    }).then((referral) => {
        console.log("referral result", referral);
    });
}
// [!endregion setup-referral]

// [!region setup-client]
// Function that will setup the Frak client
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

// Expose the Frak setup to the window object
window.FrakSetup = { frakConfig, modalShare };
// [!endregion setup-client]

// [!region DOMContentLoaded]
// On the page load, setup the Frak client and watch the wallet status and referral state
document.addEventListener("DOMContentLoaded", () => {
    setupFrakClient().then((frakClient) => {
        if (!frakClient) {
            console.error("Failed to create Frak client");
            return;
        }

        window.FrakSetup.frakClient = frakClient;

        // Once loaded, watch the wallet status and the referral state
        watchWalletStatus();
        setupReferral();
    });
});
// [!endregion DOMContentLoaded]
