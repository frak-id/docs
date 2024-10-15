/**
 * Represents the sidebar for the Wallet SDK documentation.
 */
export const walletSdkSidebar = [
    {
        text: "Introduction",
        items: [
            { text: "Overview", link: "/wallet-sdk/overview" },
            { text: "Getting Started", link: "/wallet-sdk/getting-started" },
        ],
    },
    {
        text: "Core Concepts",
        link: "/wallet-sdk/core-concepts",
        items: [
            {
                text: "Configuration",
                link: "/wallet-sdk/core-concepts/configuration",
            },
            {
                text: "Interactions",
                link: "/wallet-sdk/core-concepts/interactions",
            },
            {
                text: "Delegated Sessions",
                link: "/wallet-sdk/core-concepts/delegated-sessions",
            },
            {
                text: "Rewards and Campaigns",
                link: "/wallet-sdk/core-concepts/rewards-and-campaigns",
            },
        ],
    },
    {
        text: "Integration Guide",
        items: [
            {
                text: "React",
                link: "/wallet-sdk/integration-guide/react",
            },
            {
                text: "Vanilla JS",
                link: "/wallet-sdk/integration-guide/vanilla-js",
            },
            {
                text: "Server-side",
                link: "/wallet-sdk/integration-guide/server",
            },
            {
                text: "Shopify",
                link: "/wallet-sdk/integration-guide/shopify",
            },
        ],
    },
    {
        text: "API Reference",
        items: [
            {
                text: "Actions",
                items: [
                    {
                        text: "watchWalletStatus",
                        link: "/wallet-sdk/api/actions/watchWalletStatus",
                    },
                    {
                        text: "openSso",
                        link: "/wallet-sdk/api/actions/openSso",
                    },
                    {
                        text: "sendInteraction",
                        link: "/wallet-sdk/api/actions/sendInteraction",
                    },
                    {
                        text: "sendTransaction",
                        link: "/wallet-sdk/api/actions/sendTransaction",
                    },
                    {
                        text: "siweAuthenticate",
                        link: "/wallet-sdk/api/actions/siweAuthenticate",
                    },
                    {
                        text: "displayModal",
                        link: "/wallet-sdk/api/actions/displayModal",
                    },
                ],
            },
            {
                text: "React",
                items: [
                    {
                        text: "NexusConfigProvider",
                        link: "/wallet-sdk/api/react/NexusConfigProvider",
                    },
                    {
                        text: "NexusIFrameClientProvider",
                        link: "/wallet-sdk/api/react/NexusIFrameClientProvider",
                    },
                    {
                        text: "useNexusConfig",
                        link: "/wallet-sdk/api/react/useNexusConfig",
                    },
                    {
                        text: "useNexusClient",
                        link: "/wallet-sdk/api/react/useNexusClient",
                    },
                    {
                        text: "useWalletStatus",
                        link: "/wallet-sdk/api/react/useWalletStatus",
                    },
                    {
                        text: "useOpenSso",
                        link: "/wallet-sdk/api/react/useOpenSso",
                    },
                    {
                        text: "useSendInteraction",
                        link: "/wallet-sdk/api/react/useSendInteraction",
                    },
                    {
                        text: "useSendTransaction",
                        link: "/wallet-sdk/api/react/useSendTransaction",
                    },
                    {
                        text: "useSiweAuthenticate",
                        link: "/wallet-sdk/api/react/useSiweAuthenticate",
                    },
                    {
                        text: "useDisplayModal",
                        link: "/wallet-sdk/api/react/useDisplayModal",
                    },
                    {
                        text: "useReferralInteraction",
                        link: "/wallet-sdk/api/react/useReferralInteraction",
                    },
                ],
            },
            {
                text: "Core Functions",
                items: [
                    {
                        text: "createIFrameNexusClient",
                        link: "/wallet-sdk/api/core/createIFrameNexusClient",
                    },
                ],
            },
            {
                text: "Interactions",
                items: [
                    {
                        text: "PressInteractionEncoder",
                        link: "/wallet-sdk/api/interactions/PressInteractionEncoder",
                    },
                    {
                        text: "ReferralInteractionEncoder",
                        link: "/wallet-sdk/api/interactions/ReferralInteractionEncoder",
                    },
                ],
            },
            {
                text: "Types",
                items: [
                    {
                        text: "NexusWalletSdkConfig",
                        link: "/wallet-sdk/api/types/NexusWalletSdkConfig",
                    },
                    {
                        text: "NexusClient",
                        link: "/wallet-sdk/api/types/NexusClient",
                    },
                    {
                        text: "IFrameRpcSchema",
                        link: "/wallet-sdk/api/types/IFrameRpcSchema",
                    },
                    {
                        text: "LifecycleRpcSchema",
                        link: "/wallet-sdk/api/types/LifecycleRpcSchema",
                    },
                    {
                        text: "DisplayModalType",
                        link: "/wallet-sdk/api/types/DisplayModalType",
                    },
                ],
            },
        ],
    },
    { text: "Under the hood", link: "/wallet-sdk/under-the-hood" },
];
