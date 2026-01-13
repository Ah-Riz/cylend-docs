import { Metadata } from "next";
import Link from "next/link";
import { Terminal, ArrowRight } from "lucide-react";
import { Callout } from "@/components/callout";

export const metadata: Metadata = {
    title: "Installation",
    description: "Install and set up Cylend project components",
};

export default function InstallationPage() {
    return (
        <div>
            <div className="space-y-2">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Installation</h1>
                <p className="text-lg text-muted-foreground">
                    Complete installation guide for all Cylend components
                </p>
            </div>

            <div className="mt-12 space-y-10">
                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Clone the Repository
                    </h2>
                    <p className="mt-6 leading-7">
                        First, clone the Cylend repository from GitHub:
                    </p>

                    <div className="mt-4 rounded-lg bg-muted p-4">
                        <div className="flex items-center gap-2 mb-2">
                            <Terminal className="h-4 w-4" />
                            <span className="text-sm font-mono">Terminal</span>
                        </div>
                        <pre className="overflow-x-auto"><code className="text-sm">git clone https://github.com/yourusername/cylend-FE.git
                            cd cylend-FE/cylend_fe</code></pre>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Frontend Installation
                    </h2>

                    <p className="mt-6 leading-7">
                        Install all frontend dependencies:
                    </p>

                    <div className="mt-4 rounded-lg bg-muted p-4">
                        <pre className="overflow-x-auto"><code className="text-sm">npm install
                            # or
                            yarn install
                            # or
                            pnpm install</code></pre>
                    </div>

                    <p className="mt-6 leading-7">
                        The frontend includes:
                    </p>
                    <ul className="mt-4 space-y-2">
                        <li>• Next.js 16+ with App Router</li>
                        <li>• React 19+ with React Compiler</li>
                        <li>• Wagmi & RainbowKit for wallet integration</li>
                        <li>• Tailwind CSS for styling</li>
                        <li>• Radix UI components</li>
                        <li>• Sapphire SDK for encryption</li>
                    </ul>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Ponder Indexer Installation
                    </h2>

                    <p className="mt-6 leading-7">
                        Navigate to the indexer directory and install dependencies:
                    </p>

                    <div className="mt-4 rounded-lg bg-muted p-4">
                        <pre className="overflow-x-auto"><code className="text-sm">cd cylend-indexer
                            npm install
                            cd ..</code></pre>
                    </div>

                    <p className="mt-6 leading-7">
                        The Ponder indexer includes:
                    </p>
                    <ul className="mt-4 space-y-2">
                        <li>• Event indexing for Mantle & Sapphire</li>
                        <li>• GraphQL API server</li>
                        <li>• SQLite database (development) or PostgreSQL (production)</li>
                        <li>• Real-time subscriptions</li>
                    </ul>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Backend Service Installation
                    </h2>

                    <p className="mt-6 leading-7">
                        Navigate to the backend service directory and install dependencies:
                    </p>

                    <div className="mt-4 rounded-lg bg-muted p-4">
                        <pre className="overflow-x-auto"><code className="text-sm">cd cylend-service
                            npm install
                            cd ..</code></pre>
                    </div>

                    <Callout type="important">
                        <p>
                            The backend service requires an <strong>owner private key</strong> to call <code>processAction()</code>
                            on the LendingCore contract. Never commit this private key to version control!
                        </p>
                    </Callout>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Verify Installation
                    </h2>

                    <p className="mt-6 leading-7">
                        Verify that all components are installed correctly:
                    </p>

                    <div className="mt-4 rounded-lg bg-muted p-4">
                        <pre className="overflow-x-auto"><code className="text-sm"># Check Node.js version
                            node --version  # Should be ≥ 18.14

                            # Check npm version
                            npm --version

                            # Verify frontend dependencies
                            npm list next react wagmi

                            # Verify indexer dependencies
                            cd cylend-indexer && npm list @ponder/core

                            # Verify service dependencies
                            cd ../cylend-service && npm list ethers</code></pre>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Project Structure
                    </h2>

                    <p className="mt-6 leading-7">
                        After installation, your project structure should look like this:
                    </p>

                    <div className="mt-4 rounded-lg bg-muted p-4">
                        <pre className="overflow-x-auto text-sm"><code>{`cylend_fe/
├── src/                    # Frontend source code
│   ├── app/               # Next.js pages
│   ├── components/        # React components
│   ├── hooks/             # Custom hooks
│   ├── lib/               # Utilities
│   └── abis/              # Contract ABIs
├── contracts/              # Smart contracts
│   ├── PrivateLendingIngress.sol
│   └── LendingCore.sol
├── cylend-indexer/         # Ponder indexer
│   ├── src/               # Event handlers
│   ├── ponder.config.ts   # Configuration
│   └── ponder.schema.ts   # Database schema
├── cylend-service/         # Backend service
│   └── src/               # Service code
├── package.json
└── README.md`}</code></pre>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Next Steps
                    </h2>

                    <p className="mt-6 leading-7">
                        Now that you've installed all components, proceed to configuration:
                    </p>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        <Link
                            href="/getting-started/configuration"
                            className="group flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted"
                        >
                            <div>
                                <h3 className="font-semibold">Configuration</h3>
                                <p className="mt-1 text-sm text-muted-foreground">Set up environment variables</p>
                            </div>
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>

                        <Link
                            href="/getting-started/quick-start"
                            className="group flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted"
                        >
                            <div>
                                <h3 className="font-semibold">Quick Start</h3>
                                <p className="mt-1 text-sm text-muted-foreground">Run your first test</p>
                            </div>
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
