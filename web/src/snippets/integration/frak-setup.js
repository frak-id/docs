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

// [!region modal-config]
// Configure base modal info that will be displayed when a user can receive a reward or want to share
// All the modal customisation options can be found here: https://docs.frak.id/wallet-sdk/api/types/DisplayModalType
const baseModalConfig = {
    login: {
        allowSso: true,
        ssoMetadata: {
            logoUrl: "https://your-domain.com/assets/logo.svg",
            homepageLink: "https://your-domain.com/",
        },
    },
    metadata: {
        lang: "en",
    },
};
// [!endregion modal-config]

// [!region sharing-config]
// Configure the info that will be sent via the sharing link
// All the modal customisation options can be found here: https://docs.frak.id/wallet-sdk/api/actions/displayModal#full-flow
const sharingConfig = {
    // Title that will be displayed on the system sharing modal  (optional)
    popupTitle: "Share this with your friends",
    // The text that will be shared with the link (optional)
    text: "Discover our product!",
    // The link that will be shared (optional, default to the current page)
    link: window.location.href,
};
// [!endregion sharing-config]

// [!region modal-share]
// Helper function to display the shared modal
function modalShare() {
    if (!window.FrakSetup.modalBuilder) {
        console.error("Frak modal builder not ready yet");
        return;
    }
    window.FrakSetup.modalBuilder.sharing(sharingConfig).display();
}
// [!endregion modal-share]

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

        // Create our modal builder
        const modalBuilder = window.NexusSDK.modalBuilder(
            frakClient,
            baseModalConfig
        );

        // Save the Frak client and modal builder to the window object
        window.FrakSetup.frakClient = frakClient;
        window.FrakSetup.modalBuilder = modalBuilder;

        // Once loaded, listen to the referral state
        window.NexusSDK.referralInteraction(frakClient, {
            modalConfig: modalBuilder.reward().params,
        }).then((referral) => {
            console.log("referral result", referral);
        });
    });
});
// [!endregion DOMContentLoaded]
