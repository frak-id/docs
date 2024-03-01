import remarkMermaid from "remark-mermaidjs";
import { defineConfig } from "vocs";

/**
 * Represent the sidebar for the wallet SDK
 */
export const walletSdkSidebar = [
    {
        text: "Overview",
        link: "/wallet-sdk",
    },
    {
        text: "Graphs",
        link: "/wallet-sdk/graphs",
    },
];

export default defineConfig({
    // Title and wording
    title: "Nexus Wallet by Frak",
    titleTemplate: "%s – Nexus Wallet by Frak",
    description: "Smooth content gated access utilising Nexus Wallet by Frak",
    // Logo
    logoUrl: "/favicons/icon.svg",
    iconUrl: "/favicons/icon-192.png",
    // A few plugins
    markdown: {
        remarkPlugins: [
            [
                remarkMermaid,
                {
                    mermaidOptions: {
                        theme: "forest",
                    },
                },
            ],
        ],
    },
    // Social reference
    socials: [
        {
            icon: "github",
            link: "https://github.com/frak-id",
        },
        {
            icon: "x",
            link: "https://twitter.com/frak_defi",
        },
    ],
    // Top navigation
    topNav: [
        {
            text: "Wallet client SDK",
            link: "/wallet-sdk",
        },
        {
            text: "Dashboard",
            link: "https://dashboard.frak.id/",
        },
    ],
    // The sidebar per pages
    sidebar: {
        "/wallet-sdk": walletSdkSidebar,
    },
    // Some global config
    rootDir: "src",
    baseUrl: "https://docs.frak.id",
});
