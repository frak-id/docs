/**
 * Represents the sidebar for the business documentation.
 */
export const businessSidebar = [
    {
        text: "Introduction",
        link: "/business",
        items: [
            { text: "Getting Started", link: "/business/getting-started" },
            { text: "Keywords", link: "/business/keywords" },
        ],
    },
    {
        text: "Product",
        items: [
            {
                text: "List new product",
                link: "/business/product/list",
            },
            {
                text: "Verify domain name",
                link: "/business/product/verify",
            },
        ],
    },
    {
        text: "Campaign",
        items: [
            {
                text: "Create",
                link: "/business/campaign/create",
            },
        ],
    },
];
