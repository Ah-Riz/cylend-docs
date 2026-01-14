import { Metadata } from "next";
import { ArrowRight, FolderTree } from "lucide-react";

export const metadata: Metadata = {
    title: "Project Structure",
    description: "Overview of the Cylend monorepo structure",
};

export default function ProjectStructurePage() {
    return (
        <div>
            <div className="space-y-2">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Project Structure</h1>
                <p className="text-lg text-muted-foreground">
                    A guide to the monorepo organization and key directories
                </p>
            </div>

            <div className="mt-12 space-y-10">
                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Overview
                    </h2>
                    <p className="mt-6 leading-7">
                        The Cylend repository is organized as a monorepo containing the smart contracts, frontend,
                        indexer, and backend service.
                    </p>

                    <div className="mt-6 rounded-lg bg-muted p-4">
                        <pre className="text-xs sm:text-sm font-mono overflow-x-auto leading-relaxed">
                            {`cylend-FE/
├── contracts/                  # Smart Contracts (Hardhat)
│   ├── contracts/              # Solidity source
│   │   ├── PrivateLendingIngress.sol
│   │   └── LendingCore.sol
│   └── scripts/                # Deployment scripts
│
├── cylend-indexer/             # Ponder Indexer
│   ├── src/                    # Event handlers & schema
│   └── ponder.config.ts        # Chain config
│
├── cylend-service/             # Backend Node.js Service
│   └── src/                    # Action processor logic
│
├── src/                        # Next.js Frontend
│   ├── app/                    # App Router pages
│   ├── components/             # React components
│   ├── hooks/                  # Custom hooks
│   └── lib/                    # Utilities & config
│
└── cylend-docs/                # This documentation site`}
                        </pre>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Frontend Directory (`src/`)
                    </h2>
                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                        <div className="rounded-lg border p-4">
                            <h3 className="font-semibold mb-2 flex items-center gap-2">
                                <FolderTree className="h-4 w-4" /> /app
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                Uses Next.js 14+ App Router. Each folder represents a route. Contains `page.tsx` and `layout.tsx`.
                            </p>
                        </div>
                        <div className="rounded-lg border p-4">
                            <h3 className="font-semibold mb-2 flex items-center gap-2">
                                <FolderTree className="h-4 w-4" /> /components
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                Sharable UI components (buttons, dialogs) built with Radix UI and Tailwind CSS.
                            </p>
                        </div>
                        <div className="rounded-lg border p-4">
                            <h3 className="font-semibold mb-2 flex items-center gap-2">
                                <FolderTree className="h-4 w-4" /> /hooks
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                Custom React hooks for business logic, including `useDeposit`, `useBorrow`, and Ponder data fetching.
                            </p>
                        </div>
                        <div className="rounded-lg border p-4">
                            <h3 className="font-semibold mb-2 flex items-center gap-2">
                                <FolderTree className="h-4 w-4" /> /lib
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                Utility functions, Wagmi configuration, and Sapphire encryption helpers.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
