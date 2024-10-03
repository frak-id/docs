import { defineConfig } from "vocs";
import { businessSidebar } from "./sidebars/business.ts";
import { walletSdkSidebar } from "./sidebars/walletSdk.ts";

export default defineConfig({
    // Title and wording
    title: "Wallet SDK by Frak",
    titleTemplate: "%s | Wallet SDK Documentation",
    description:
        "Integrate seamless Web3 interactions and content access with the Wallet SDK by Frak",
    // Logo
    logoUrl: "/favicons/icon.svg",
    iconUrl: "/favicons/icon-192.png",
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
            text: "Wallet SDK",
            link: "/wallet-sdk/overview",
            match: "/wallet-sdk",
        },
        {
            text: "Business Dashboard",
            link: "/business",
        },
    ],
    // The sidebar per pages
    sidebar: {
        "/wallet-sdk": walletSdkSidebar,
        "/business": businessSidebar,
    },
    // Some global config
    rootDir: "src",
    baseUrl: "https://docs.frak.id",
});
