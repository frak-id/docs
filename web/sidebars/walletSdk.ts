/**
 * Represent the sidebar for the wallet SDK
 * @deprecated in flavor of nexusSdk documentation
 */
export const walletSdkSidebar = [
    {
        text: "Overview",
        link: "/wallet-sdk",
    },
    {
        text: "How to use it?",
        collapsable: true,
        link: "/wallet-sdk/how-to",
        items: [
            {
                text: "React client",
                link: "/wallet-sdk/how-to/client-react",
            },
            {
                text: "Core client",
                link: "/wallet-sdk/how-to/client-core",
            },
            {
                text: "Server side",
                link: "/wallet-sdk/how-to/server",
            },
        ],
    },
    {
        text: "Hooks",
        collapsable: true,
        link: "/wallet-sdk/api/react/hooks",
        items: [
            {
                text: "useNexusConfig",
                link: "/wallet-sdk/api/react/hooks/useNexusConfig",
            },
            {
                text: "useNexusClient",
                link: "/wallet-sdk/api/react/hooks/useNexusClient",
            },
            {
                text: "useWalletStatus",
                link: "/wallet-sdk/api/react/hooks/useWalletStatus",
            },
            {
                text: "useDisplayModal",
                link: "/wallet-sdk/api/react/hooks/useDisplayModal",
            },
            {
                text: "useArticleUnlockStatus",
                link: "/wallet-sdk/api/react/hooks/useArticleUnlockStatus",
            },
            {
                text: "useArticleUnlockOptions",
                link: "/wallet-sdk/api/react/hooks/useArticleUnlockOptions",
            },
        ],
    },
    {
        text: "Providers",
        collapsable: true,
        link: "/wallet-sdk/api/react/providers",
        items: [
            {
                text: "NexusConfigProvider",
                link: "/wallet-sdk/api/react/providers/nexusConfigProvider",
            },
            {
                text: "NexusIFrameClientProvider",
                link: "/wallet-sdk/api/react/providers/nexusIFrameClientProvider",
            },
        ],
    },
    {
        text: "How does it works?",
        link: "/wallet-sdk/under-the-hood",
    },
    {
        text: "Graphs",
        link: "/wallet-sdk/graphs",
    },
];
