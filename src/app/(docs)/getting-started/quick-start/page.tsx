import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Terminal, CheckCircle2, ArrowRight } from "lucide-react";
import { Callout } from "@/components/callout";

export const metadata: Metadata = {
    title: "Quick Start",
    description: "Get up and running with Cylend in 5 minutes",
};

export default function QuickStartPage() {
    return (
        <div>
            <div className="space-y-2">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Quick Start</h1>
                <p className="text-lg text-muted-foreground">
                    Get up and running with Cylend in 5 minutes. This guide walks you through starting all services and making your first deposit.
                </p>
            </div>

            <div className="mt-12 space-y-10">
                <Callout type="note">
                    <p>
                        Before starting, make sure you've completed the <Link href="/getting-started/installation" className="text-primary hover:underline">Installation</Link> and <Link href="/getting-started/configuration" className="text-primary hover:underline">Configuration</Link> steps.
                    </p>
                </Callout>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Step 1: Start Ponder Indexer
                    </h2>

                    <p className="mt-6 leading-7">
                        Open your first terminal and start the Ponder indexer:
                    </p>

                    <div className="mt-4 rounded-lg bg-muted p-4">
                        <div className="flex items-center gap-2 mb-2">
                            <Terminal className="h-4 w-4" />
                            <span className="text-sm font-mono">Terminal 1</span>
                        </div>
                        <pre className="overflow-x-auto"><code className="text-sm">cd cylend-indexer
                            npm run dev</code></pre>
                    </div>

                    <p className="mt-4 leading-7">
                        You should see output indicating that Ponder is:
                    </p>

                    <ul className="mt-4 space-y-2">
                        <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Connecting to Mantle Sepolia and Sapphire Testnet RPCs</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Indexing events from smart contracts</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Starting GraphQL server at <code>http://localhost:42069/graphql</code></span>
                        </li>
                    </ul>

                    <Callout type="tip">
                        <p>
                            Visit <code>http://localhost:42069/graphql</code> in your browser to access the GraphQL playground
                            and explore the available queries and subscriptions.
                        </p>
                    </Callout>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Step 2: Start Backend Service (Optional)
                    </h2>

                    <p className="mt-6 leading-7">
                        Open your second terminal and start the backend service (optional for testing, but required for production):
                    </p>

                    <div className="mt-4 rounded-lg bg-muted p-4">
                        <div className="flex items-center gap-2 mb-2">
                            <Terminal className="h-4 w-4" />
                            <span className="text-sm font-mono">Terminal 2</span>
                        </div>
                        <pre className="overflow-x-auto"><code className="text-sm">cd cylend-service
                            npm run dev</code></pre>
                    </div>

                    <p className="mt-4 leading-7">
                        The service will:
                    </p>

                    <ul className="mt-4 space-y-2">
                        <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Monitor for new encrypted actions on Sapphire</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Automatically call <code>processAction()</code> when actions are submitted</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Update token prices from ROFL Oracle when needed</span>
                        </li>
                    </ul>

                    <Callout type="caution">
                        <p>
                            The backend service requires the <code>OWNER_PRIVATE_KEY</code> environment variable.
                            Without it, actions won't be processed automatically and will remain pending.
                        </p>
                    </Callout>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Step 3: Start Frontend
                    </h2>

                    <p className="mt-6 leading-7">
                        Open your third terminal and start the Next.js frontend:
                    </p>

                    <div className="mt-4 rounded-lg bg-muted p-4">
                        <div className="flex items-center gap-2 mb-2">
                            <Terminal className="h-4 w-4" />
                            <span className="text-sm font-mono">Terminal 3</span>
                        </div>
                        <pre className="overflow-x-auto"><code className="text-sm">npm run dev</code></pre>
                    </div>

                    <p className="mt-4 leading-7">
                        Open <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">http://localhost:3000</a> in your browser.
                    </p>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Step 4: Connect Your Wallet
                    </h2>

                    <p className="mt-6 leading-7">
                        On the frontend:
                    </p>

                    <ol className="mt-4 space-y-3">
                        <li className="flex items-start gap-3">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">1</div>
                            <span>Click the "Connect Wallet" button</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">2</div>
                            <span>Select your wallet (MetaMask, Rainbow, WalletConnect, etc.)</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">3</div>
                            <span>Approve the connection in your wallet</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">4</div>
                            <span>Switch to <strong>Mantle Sepolia</strong> network if prompted</span>
                        </li>
                    </ol>

                    <Callout type="note">
                        <p>
                            Make sure you have testnet MNT in your wallet for gas fees. Get it from the <a href="https://faucet.sepolia.mantle.xyz" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mantle Sepolia Faucet</a>.
                        </p>
                    </Callout>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Step 5: Create Your First Deposit
                    </h2>

                    <p className="mt-6 leading-7">
                        Navigate to the Deposit page and create your first deposit:
                    </p>

                    <ol className="mt-4 space-y-3">
                        <li className="flex items-start gap-3">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">1</div>
                            <span>Go to the <strong>Deposit</strong> page</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">2</div>
                            <span>Select token type (Native MNT or ERC20)</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">3</div>
                            <span>Enter the amount (e.g., 0.1 MNT for testing)</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">4</div>
                            <span>Click "Create Deposit" and confirm the transaction</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">5</div>
                            <span>Wait for transaction confirmation</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">6</div>
                            <span>Note your <code>depositId</code> from the success message</span>
                        </li>
                    </ol>

                    <Callout type="tip">
                        <p>
                            The <code>depositId</code> is your "bucket" that holds funds. You can use it for multiple actions
                            (supply, borrow, repay, withdraw) until it's fully spent.
                        </p>
                    </Callout>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Step 6: Supply (Allocate) Capital
                    </h2>

                    <p className="mt-6 leading-7">
                        Now let's supply capital to the lending pool:
                    </p>

                    <ol className="mt-4 space-y-3">
                        <li className="flex items-start gap-3">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">1</div>
                            <span>Navigate to the <strong>Allocate</strong> (Supply) page</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">2</div>
                            <span>Select the deposit you created (or create a new one)</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">3</div>
                            <span>Enter the amount to supply (must be ≤ remaining deposit amount)</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">4</div>
                            <span>The frontend encrypts your action payload client-side</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">5</div>
                            <span>Submit the action and confirm the transaction</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">6</div>
                            <span>Monitor the action status: Pending → Processing → Processed</span>
                        </li>
                    </ol>

                    <Callout type="note">
                        <p>
                            The action goes through multiple steps:
                        </p>
                        <ul className="mt-2 space-y-1">
                            <li>1. Submitted to Mantle (Ingress contract)</li>
                            <li>2. Relayed to Sapphire via Hyperlane</li>
                            <li>3. Stored encrypted in LendingCore</li>
                            <li>4. Processed by backend service</li>
                            <li>5. Position updated on Sapphire</li>
                        </ul>
                    </Callout>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Step 7: Check Your Position
                    </h2>

                    <p className="mt-6 leading-7">
                        After your supply action is processed, you can check your position:
                    </p>

                    <ul className="mt-4 space-y-2">
                        <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>View the <strong>Dashboard</strong> to see your total allocated capital</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Check the <strong>Pools</strong> page to see liquidity metrics</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Visit the <strong>Records</strong> page to view your action history</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Query the Ponder GraphQL API for detailed position data</span>
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Congratulations! 🎉
                    </h2>

                    <p className="mt-6 leading-7">
                        You've successfully:
                    </p>

                    <ul className="mt-4 space-y-2">
                        <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Set up all Cylend components</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Created a deposit bucket</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Supplied capital to the lending pool</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Experienced cross-chain privacy-preserving lending!</span>
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Next Steps
                    </h2>

                    <p className="mt-6 leading-7">
                        Continue exploring Cylend:
                    </p>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        <Link
                            href="/guides/user-flows"
                            className="group flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted"
                        >
                            <div>
                                <h3 className="font-semibold">User Flows</h3>
                                <p className="mt-1 text-sm text-muted-foreground">Learn borrow, repay, and withdraw flows</p>
                            </div>
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>

                        <Link
                            href="/architecture"
                            className="group flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted"
                        >
                            <div>
                                <h3 className="font-semibold">Architecture</h3>
                                <p className="mt-1 text-sm text-muted-foreground">Understand how it all works</p>
                            </div>
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>

                        <Link
                            href="/guides/troubleshooting"
                            className="group flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted"
                        >
                            <div>
                                <h3 className="font-semibold">Troubleshooting</h3>
                                <p className="mt-1 text-sm text-muted-foreground">Common issues and solutions</p>
                            </div>
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>

                        <Link
                            href="/api-reference"
                            className="group flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted"
                        >
                            <div>
                                <h3 className="font-semibold">API Reference</h3>
                                <p className="mt-1 text-sm text-muted-foreground">Complete API documentation</p>
                            </div>
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
