/**
 * Represents the sidebar for the Nexus Wallet SDK documentation.
 */
export const nexusSdkSidebar = [
    {
        text: "Introduction",
        items: [
            { text: "Overview", link: "/nexus-sdk/overview" },
            { text: "Getting Started", link: "/nexus-sdk/getting-started" },
        ],
    },
    {
        text: "Core Concepts",
        link: "/nexus-sdk/core-concepts",
        items: [
            {
                text: "Configuration",
                link: "/nexus-sdk/core-concepts/configuration",
            },
            {
                text: "Interactions",
                link: "/nexus-sdk/core-concepts/interactions",
            },
            {
                text: "Delegated Sessions",
                link: "/nexus-sdk/core-concepts/delegated-sessions",
            },
            {
                text: "Rewards and Campaigns",
                link: "/nexus-sdk/core-concepts/rewards-and-campaigns",
            },
        ],
    },
    {
        text: "Integration Guide",
        link: "/nexus-sdk/integration-guide",
        items: [
            { text: "React", link: "/nexus-sdk/integration-guide/react" },
            {
                text: "Vanilla JS",
                link: "/nexus-sdk/integration-guide/vanilla-js",
            },
            {
                text: "Server-side",
                link: "/nexus-sdk/integration-guide/server-side",
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
                        link: "/nexus-sdk/api/actions/watchWalletStatus",
                    },
                    { text: "openSso", link: "/nexus-sdk/api/actions/openSso" },
                    {
                        text: "sendInteraction",
                        link: "/nexus-sdk/api/actions/sendInteraction",
                    },
                    {
                        text: "sendTransaction",
                        link: "/nexus-sdk/api/actions/sendTransaction",
                    },
                    {
                        text: "siweAuthenticate",
                        link: "/nexus-sdk/api/actions/siweAuthenticate",
                    },
                    {
                        text: "displayModal",
                        link: "/nexus-sdk/api/actions/displayModal",
                    },
                ],
            },
            {
                text: "React",
                items: [
                    {
                        text: "NexusConfigProvider",
                        link: "/nexus-sdk/api/react-providers/NexusConfigProvider",
                    },
                    {
                        text: "NexusIFrameClientProvider",
                        link: "/nexus-sdk/api/react-providers/NexusIFrameClientProvider",
                    },
                    {
                        text: "useNexusConfig",
                        link: "/nexus-sdk/api/react-hooks/useNexusConfig",
                    },
                    {
                        text: "useNexusClient",
                        link: "/nexus-sdk/api/react-hooks/useNexusClient",
                    },
                    {
                        text: "useWalletStatus",
                        link: "/nexus-sdk/api/react-hooks/useWalletStatus",
                    },
                    {
                        text: "useDisplayModal",
                        link: "/nexus-sdk/api/react-hooks/useDisplayModal",
                    },
                    {
                        text: "useSendInteraction",
                        link: "/nexus-sdk/api/react-hooks/useSendInteraction",
                    },
                    {
                        text: "useSendTransaction",
                        link: "/nexus-sdk/api/react-hooks/useSendTransaction",
                    },
                    {
                        text: "useSiweAuthenticate",
                        link: "/nexus-sdk/api/react-hooks/useSiweAuthenticate",
                    },
                    {
                        text: "useOpenSso",
                        link: "/nexus-sdk/api/react-hooks/useOpenSso",
                    },
                    {
                        text: "useReferralInteraction",
                        link: "/nexus-sdk/api/react-hooks/useReferralInteraction",
                    },
                ],
            },
            {
                text: "Core Functions",
                items: [
                    {
                        text: "createIFrameNexusClient",
                        link: "/nexus-sdk/api/core/createIFrameNexusClient",
                    },
                ],
            },
            {
                text: "Types",
                items: [
                    {
                        text: "NexusWalletSdkConfig",
                        link: "/nexus-sdk/api/types/NexusWalletSdkConfig",
                    },
                    {
                        text: "NexusClient",
                        link: "/nexus-sdk/api/types/NexusClient",
                    },
                    {
                        text: "IFrameRpcSchema",
                        link: "/nexus-sdk/api/types/IFrameRpcSchema",
                    },
                    {
                        text: "LifecycleRpcSchema",
                        link: "/nexus-sdk/api/types/LifecycleRpcSchema",
                    },
                    {
                        text: "DisplayModalType",
                        link: "/nexus-sdk/api/types/DisplayModalType",
                    },
                ],
            },
        ],
    },
    {
        text: "Advanced Topics",
        link: "/nexus-sdk/advanced-topics",
        items: [
            {
                text: "Complex Modal Chaining",
                link: "/nexus-sdk/advanced-topics/complex-modal-chaining",
            },
            {
                text: "Custom Interactions",
                link: "/nexus-sdk/advanced-topics/custom-interactions",
            },
            {
                text: "Error Handling",
                link: "/nexus-sdk/advanced-topics/error-handling",
            },
            {
                text: "Security Considerations",
                link: "/nexus-sdk/advanced-topics/security-considerations",
            },
        ],
    },
    { text: "Troubleshooting", link: "/nexus-sdk/troubleshooting" },
    { text: "Changelog", link: "/nexus-sdk/changelog" },
];
