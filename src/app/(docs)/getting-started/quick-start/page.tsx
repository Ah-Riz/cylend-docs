import { Metadata } from "next";
import Link from "next/link";
import { Terminal, ArrowRight, CheckCircle2, Play } from "lucide-react";
import { Callout } from "@/components/callout";

export const metadata: Metadata = {
    title: "Quick Start",
    description: "Get Cylend running and make your first deposit",
};

export default function QuickStartPage() {
    return (
        <div>
            <div className="space-y-2">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Quick Start</h1>
                <p className="text-lg text-muted-foreground">
                    Run all Cylend services and complete your first lending operation
                </p>
            </div>

            <div className="mt-12 space-y-10">
                <Callout type="note">
                    <p>
                        Make sure you've completed the <Link href="/getting-started/installation" className="text-primary hover:underline">Installation</Link> and{" "}
                        <Link href="/getting-started/configuration" className="text-primary hover:underline">Configuration</Link> steps before proceeding.
                    </p>
                </Callout>

                <Callout type="important">
                    <p>
                        <strong>MVP Notice:</strong> This MVP currently only supports <strong>USDC</strong> token.
                        You'll need USDC on Mantle Sepolia to test the lending functionality.
                    </p>
                </Callout>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Start All Services
                    </h2>

                    <p className="mt-6 leading-7">
                        Cylend requires three services to run. Open three separate terminal windows:
                    </p>

                    <div className="mt-6 space-y-6">
                        <div className="rounded-lg border p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white text-sm font-bold">1</div>
                                <h3 className="text-lg font-semibold">Terminal 1: Ponder Indexer</h3>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">
                                Start the event indexer first. It provides the GraphQL API that other services depend on.
                            </p>
                            <div className="rounded-lg bg-muted p-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <Terminal className="h-4 w-4" />
                                    <span className="text-sm font-mono">Terminal</span>
                                </div>
                                <pre className="overflow-x-auto text-sm"><code>{`cd cylend-indexer
npm run dev`}</code></pre>
                            </div>
                            <p className="mt-3 text-sm text-muted-foreground">
                                Wait until you see: <code className="bg-muted px-1 py-0.5 rounded">GraphQL API running at http://localhost:42069/graphql</code>
                            </p>
                        </div>

                        <div className="rounded-lg border p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500 text-white text-sm font-bold">2</div>
                                <h3 className="text-lg font-semibold">Terminal 2: Backend Service</h3>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">
                                Start the action processor. This automatically processes pending encrypted actions.
                            </p>
                            <div className="rounded-lg bg-muted p-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <Terminal className="h-4 w-4" />
                                    <span className="text-sm font-mono">Terminal</span>
                                </div>
                                <pre className="overflow-x-auto text-sm"><code>{`cd cylend-service
npm run dev`}</code></pre>
                            </div>
                            <p className="mt-3 text-sm text-muted-foreground">
                                You should see: <code className="bg-muted px-1 py-0.5 rounded">✓ Monitoring for actions...</code>
                            </p>
                        </div>

                        <div className="rounded-lg border p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white text-sm font-bold">3</div>
                                <h3 className="text-lg font-semibold">Terminal 3: Frontend</h3>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">
                                Start the Next.js frontend application.
                            </p>
                            <div className="rounded-lg bg-muted p-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <Terminal className="h-4 w-4" />
                                    <span className="text-sm font-mono">Terminal</span>
                                </div>
                                <pre className="overflow-x-auto text-sm"><code>{`npm run dev`}</code></pre>
                            </div>
                            <p className="mt-3 text-sm text-muted-foreground">
                                Open <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">http://localhost:3000</a> in your browser.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Your First Lending Operation
                    </h2>

                    <p className="mt-6 leading-7">
                        Follow these steps to complete a basic supply and borrow workflow:
                    </p>

                    <div className="mt-6 space-y-4">
                        <div className="flex items-start gap-4">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold flex-shrink-0">1</div>
                            <div className="flex-1">
                                <h3 className="font-semibold">Connect Your Wallet</h3>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Click "Connect Wallet" and select your preferred wallet. Make sure you're on Mantle Sepolia network.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold flex-shrink-0">2</div>
                            <div className="flex-1">
                                <h3 className="font-semibold">Get Testnet Tokens</h3>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Visit the faucets to get testnet tokens:
                                </p>
                                <ul className="mt-2 space-y-1 text-sm">
                                    <li>• <a href="https://faucet.sepolia.mantle.xyz" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mantle Sepolia Faucet</a> for MNT (gas)</li>
                                    <li>• <a href="https://faucet.testnet.oasis.io/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Sapphire Faucet</a> for ROSE (gas on Sapphire)</li>
                                    <li>• <a href="https://testnet.agni.finance/swap" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Agni Finance</a> to swap MNT → USDC (required for MVP)</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold flex-shrink-0">3</div>
                            <div className="flex-1">
                                <h3 className="font-semibold">Create a Deposit</h3>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Navigate to the <strong>Deposit</strong> page. Enter an amount and create a deposit bucket. This locks your funds in the Ingress contract.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold flex-shrink-0">4</div>
                            <div className="flex-1">
                                <h3 className="font-semibold">Supply Collateral</h3>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Go to the <strong>Allocate</strong> page. Select your deposit and supply amount. This action is encrypted and sent to Sapphire.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold flex-shrink-0">5</div>
                            <div className="flex-1">
                                <h3 className="font-semibold">Wait for Processing</h3>
                                <p className="text-sm text-muted-foreground mt-1">
                                    The backend service automatically processes your action. Watch Terminal 2 for processing logs.
                                    Your position will update on the Dashboard once complete.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold flex-shrink-0">6</div>
                            <div className="flex-1">
                                <h3 className="font-semibold">Borrow Against Collateral</h3>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Navigate to <strong>Borrow</strong>. Enter a borrow amount (within your health factor limits).
                                    Once processed, funds will be released to your wallet!
                                </p>
                            </div>
                        </div>
                    </div>

                    <Callout type="tip">
                        <p>
                            Watch the <strong>Settlement Records</strong> page to track your action status in real-time.
                            Actions progress from "Pending" → "Processing" → "Completed".
                        </p>
                    </Callout>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Verify Everything Works
                    </h2>

                    <div className="mt-6 space-y-3">
                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="h-5 w-5 text-green-500" />
                            <span>Ponder GraphQL playground accessible at <code>localhost:42069/graphql</code></span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="h-5 w-5 text-green-500" />
                            <span>Backend service shows "Monitoring for actions..." message</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="h-5 w-5 text-green-500" />
                            <span>Frontend loads and wallet connection works</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="h-5 w-5 text-green-500" />
                            <span>Dashboard displays pool data and your positions</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="h-5 w-5 text-green-500" />
                            <span>Deposit creation transaction succeeds</span>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Troubleshooting
                    </h2>

                    <div className="mt-6 space-y-4">
                        <div className="rounded-lg border p-4">
                            <h3 className="font-semibold text-sm">Ponder won't start</h3>
                            <p className="text-sm text-muted-foreground mt-1">
                                Check RPC URLs in <code>.env</code>. Ensure they're accessible with <code>curl https://rpc.sepolia.mantle.xyz</code>
                            </p>
                        </div>

                        <div className="rounded-lg border p-4">
                            <h3 className="font-semibold text-sm">Frontend shows "Failed to fetch" errors</h3>
                            <p className="text-sm text-muted-foreground mt-1">
                                Make sure Ponder is running first. Check <code>NEXT_PUBLIC_PONDER_API_URL</code> matches Ponder's address.
                            </p>
                        </div>

                        <div className="rounded-lg border p-4">
                            <h3 className="font-semibold text-sm">Actions stuck in "Pending"</h3>
                            <p className="text-sm text-muted-foreground mt-1">
                                Verify the backend service is running and <code>OWNER_PRIVATE_KEY</code> has permissions to call processAction.
                            </p>
                        </div>

                        <div className="rounded-lg border p-4">
                            <h3 className="font-semibold text-sm">Transaction fails with "insufficient funds"</h3>
                            <p className="text-sm text-muted-foreground mt-1">
                                Get testnet tokens from faucets. You need MNT for Mantle gas and ROSE for Sapphire gas.
                            </p>
                        </div>
                    </div>

                    <p className="mt-6 text-sm text-muted-foreground">
                        For more issues, see the <Link href="/guides/troubleshooting" className="text-primary hover:underline">Troubleshooting Guide</Link>.
                    </p>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Next Steps
                    </h2>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        <Link
                            href="/guides/user-flows"
                            className="group flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted"
                        >
                            <div>
                                <h3 className="font-semibold">User Flows</h3>
                                <p className="mt-1 text-sm text-muted-foreground">Learn all lending operations</p>
                            </div>
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>

                        <Link
                            href="/architecture"
                            className="group flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted"
                        >
                            <div>
                                <h3 className="font-semibold">Architecture</h3>
                                <p className="mt-1 text-sm text-muted-foreground">Understand system design</p>
                            </div>
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>

                        <Link
                            href="/smart-contracts"
                            className="group flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted"
                        >
                            <div>
                                <h3 className="font-semibold">Smart Contracts</h3>
                                <p className="mt-1 text-sm text-muted-foreground">Contract documentation</p>
                            </div>
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>

                        <Link
                            href="/indexer"
                            className="group flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted"
                        >
                            <div>
                                <h3 className="font-semibold">Ponder Indexer</h3>
                                <p className="mt-1 text-sm text-muted-foreground">Event indexing deep-dive</p>
                            </div>
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
