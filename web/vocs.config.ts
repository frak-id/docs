import { defineConfig } from "vocs";
import { businessSidebar } from "./sidebars/business.ts";
import { nexusSdkSidebar } from "./sidebars/nexusSdk.ts";

export default defineConfig({
    // Title and wording
    title: "Nexus SDK by Frak",
    titleTemplate: "%s | Nexus SDK Documentation",
    description:
        "Integrate seamless Web3 interactions and content access with the Nexus SDK by Frak",
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
            text: "Nexus SDK",
            link: "/nexus-sdk/overview",
            match: "/nexus-sdk",
        },
        {
            text: "Business Dashboard",
            link: "/business",
        },
    ],
    // The sidebar per pages
    sidebar: {
        "/nexus-sdk": nexusSdkSidebar,
        "/business": businessSidebar,
    },
    // Some global config
    rootDir: "src",
    baseUrl: "https://docs.frak.id",
});
