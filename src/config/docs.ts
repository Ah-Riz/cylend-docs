export interface NavItem {
    title: string;
    href?: string;
    disabled?: boolean;
    external?: boolean;
    label?: string;
    items?: NavItem[];
}

export interface NavConfig {
    mainNav: NavItem[];
    sidebarNav: NavItem[];
}

export const docsConfig: NavConfig = {
    mainNav: [
        {
            title: "Documentation",
            href: "/",
        },
        {
            title: "GitHub",
            href: "https://github.com/yourusername/cylend",
            external: true,
        },
    ],
    sidebarNav: [
        {
            title: "Getting Started",
            items: [
                {
                    title: "Introduction",
                    href: "/getting-started",
                },
                {
                    title: "Installation",
                    href: "/getting-started/installation",
                },
                {
                    title: "Quick Start",
                    href: "/getting-started/quick-start",
                },
                {
                    title: "Configuration",
                    href: "/getting-started/configuration",
                },
            ],
        },
        {
            title: "Architecture",
            items: [
                {
                    title: "Overview",
                    href: "/architecture",
                },
                {
                    title: "System Design",
                    href: "/architecture/system-design",
                },
                {
                    title: "Data Flow",
                    href: "/architecture/data-flow",
                },
                {
                    title: "Cross-Chain",
                    href: "/architecture/cross-chain",
                },
                {
                    title: "Security",
                    href: "/architecture/security",
                },
            ],
        },
        {
            title: "Smart Contracts",
            items: [
                {
                    title: "Overview",
                    href: "/smart-contracts",
                },
                {
                    title: "PrivateLendingIngress",
                    href: "/smart-contracts/ingress",
                },
                {
                    title: "LendingCore",
                    href: "/smart-contracts/core",
                },
                {
                    title: "Deployment",
                    href: "/smart-contracts/deployment",
                },
                {
                    title: "Testing",
                    href: "/smart-contracts/testing",
                },
            ],
        },
        {
            title: "Frontend",
            items: [
                {
                    title: "Overview",
                    href: "/frontend",
                },
                {
                    title: "Project Structure",
                    href: "/frontend/project-structure",
                },
                {
                    title: "Components",
                    href: "/frontend/components",
                },
                {
                    title: "Hooks",
                    href: "/frontend/hooks",
                },
                {
                    title: "Pages",
                    href: "/frontend/pages",
                },
                {
                    title: "Wallet Integration",
                    href: "/frontend/wallet-integration",
                },
                {
                    title: "Encryption",
                    href: "/frontend/encryption",
                },
            ],
        },
        {
            title: "Ponder Indexer",
            items: [
                {
                    title: "Overview",
                    href: "/indexer",
                },
                {
                    title: "Setup",
                    href: "/indexer/setup",
                },
                {
                    title: "Schema",
                    href: "/indexer/schema",
                },
                {
                    title: "Event Handlers",
                    href: "/indexer/event-handlers",
                },
                {
                    title: "GraphQL Queries",
                    href: "/indexer/graphql",
                },
                {
                    title: "Monitoring",
                    href: "/indexer/monitoring",
                },
            ],
        },
        {
            title: "Backend Service",
            items: [
                {
                    title: "Overview",
                    href: "/backend-service",
                },
                {
                    title: "Setup",
                    href: "/backend-service/setup",
                },
                {
                    title: "Action Processor",
                    href: "/backend-service/action-processor",
                },
                {
                    title: "Price Updater",
                    href: "/backend-service/price-updater",
                },
                {
                    title: "Deployment",
                    href: "/backend-service/deployment",
                },
            ],
        },
        {
            title: "Guides",
            items: [
                {
                    title: "Overview",
                    href: "/guides",
                },
                {
                    title: "User Flows",
                    href: "/guides/user-flows",
                },
                {
                    title: "Deposit Management",
                    href: "/guides/deposit-management",
                },
                {
                    title: "Privacy Features",
                    href: "/guides/privacy-features",
                },
                {
                    title: "Troubleshooting",
                    href: "/guides/troubleshooting",
                },
            ],
        },
        {
            title: "API Reference",
            items: [
                {
                    title: "Overview",
                    href: "/api-reference",
                },
                {
                    title: "Contract APIs",
                    href: "/api-reference/contracts",
                },
                {
                    title: "Frontend Hooks",
                    href: "/api-reference/hooks",
                },
                {
                    title: "GraphQL Schema",
                    href: "/api-reference/graphql",
                },
            ],
        },
    ],
};
