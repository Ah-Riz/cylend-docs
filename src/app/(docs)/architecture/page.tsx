import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Network, Lock, Zap } from "lucide-react";
import { Callout } from "@/components/callout";

export const metadata: Metadata = {
    title: "Architecture Overview",
    description: "Understanding Cylend's privacy-preserving cross-chain architecture",
};

export default function ArchitecturePage() {
    return (
        <div>
            <div className="space-y-2">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Architecture Overview</h1>
                <p className="text-lg text-muted-foreground">
                    Deep dive into Cylend's privacy-preserving credit infrastructure and cross-chain design
                </p>
            </div>

            <div className="mt-12 space-y-10">
                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        System Architecture
                    </h2>

                    <p className="mt-6 leading-7">
                        Cylend is built on a unique dual-chain architecture that separates public settlement from private computation:
                    </p>

                    <div className="my-8 rounded-lg border overflow-hidden">
                        <Image
                            src="/how private lending works, cross-chain privacy architecture.png"
                            alt="Cylend Cross-Chain Privacy Architecture"
                            width={1200}
                            height={800}
                            className="w-full h-auto"
                            priority
                        />
                    </div>

                    <div className="mt-6 grid gap-6 md:grid-cols-2">
                        <div className="rounded-lg border p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                                    <Network className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <h3 className="text-xl font-semibold">Mantle Sepolia</h3>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">
                                <strong>Public Settlement Layer</strong>
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li>• Hosts <code>PrivateLendingIngress</code> contract</li>
                                <li>• Manages deposit creation (native & ERC20)</li>
                                <li>• Handles fund releases</li>
                                <li>• Publishes encrypted action hashes</li>
                                <li>• Observable settlement layer</li>
                            </ul>
                        </div>

                        <div className="rounded-lg border p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900">
                                    <Lock className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                                </div>
                                <h3 className="text-xl font-semibold">Sapphire Testnet</h3>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">
                                <strong>Private Computation Layer</strong>
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li>• Hosts <code>LendingCore</code> contract</li>
                                <li>• Processes encrypted actions</li>
                                <li>• Manages lending logic & positions</li>
                                <li>• Calculates health factors privately</li>
                                <li>• All details remain confidential</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Core Components
                    </h2>

                    <p className="mt-6 leading-7">
                        The Cylend ecosystem consists of several interconnected components:
                    </p>

                    <div className="mt-6 space-y-4">
                        <div className="rounded-lg border p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-semibold">1. Frontend (Next.js)</h3>
                                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium">User Interface</span>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">
                                Modern web application built with Next.js 16, React 19, and RainbowKit for wallet integration.
                            </p>
                            <ul className="space-y-1 text-sm">
                                <li>• <strong>Wallet Integration:</strong> Wagmi + RainbowKit for seamless wallet connections</li>
                                <li>• <strong>Client-Side Encryption:</strong> Uses Sapphire SDK to encrypt action payloads</li>
                                <li>• <strong>Real-Time Updates:</strong> Queries Ponder GraphQL for live data</li>
                                <li>• <strong>Type-Safe:</strong> Full TypeScript support with auto-generated types</li>
                            </ul>
                        </div>

                        <div className="rounded-lg border p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-semibold">2. Smart Contracts</h3>
                                <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium">On-Chain Logic</span>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">
                                Two primary contracts handle public and private operations:
                            </p>
                            <div className="space-y-3">
                                <div className="pl-4 border-l-2 border-blue-500">
                                    <h4 className="font-semibold text-sm">PrivateLendingIngress (Mantle)</h4>
                                    <p className="text-xs text-muted-foreground mt-1">Manages deposits, action submissions, and fund releases</p>
                                </div>
                                <div className="pl-4 border-l-2 border-purple-500">
                                    <h4 className="font-semibold text-sm">LendingCore (Sapphire)</h4>
                                    <p className="text-xs text-muted-foreground mt-1">Processes encrypted actions and maintains private lending state</p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg border p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-semibold">3. Ponder Indexer</h3>
                                <span className="rounded-full bg-orange-500/10 px-3 py-1 text-xs font-medium">Event Indexing</span>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">
                                Multi-chain event indexer that provides a unified GraphQL API:
                            </p>
                            <ul className="space-y-1 text-sm">
                                <li>• <strong>Multi-Chain:</strong> Indexes events from both Mantle and Sapphire</li>
                                <li>• <strong>GraphQL API:</strong> Query deposits, actions, positions, and liquidity</li>
                                <li>• <strong>Real-Time:</strong> WebSocket subscriptions for live updates</li>
                                <li>• <strong>Database:</strong> SQLite (dev) or PostgreSQL (production)</li>
                            </ul>
                        </div>

                        <div className="rounded-lg border p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-semibold">4. Backend Service</h3>
                                <span className="rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium">Automation</span>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">
                                Automated service that processes pending actions:
                            </p>
                            <ul className="space-y-1 text-sm">
                                <li>• <strong>Event Monitoring:</strong> Watches for <code>EncryptedActionStored</code> events</li>
                                <li>• <strong>Action Processing:</strong> Calls <code>processAction()</code> on LendingCore</li>
                                <li>• <strong>Price Updates:</strong> Fetches latest prices from ROFL Oracle</li>
                                <li>• <strong>Retry Logic:</strong> Handles failures with exponential backoff</li>
                            </ul>
                        </div>

                        <div className="rounded-lg border p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-semibold">5. Hyperlane</h3>
                                <span className="rounded-full bg-yellow-500/10 px-3 py-1 text-xs font-medium">Cross-Chain</span>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">
                                Facilitates secure cross-chain message passing:
                            </p>
                            <ul className="space-y-1 text-sm">
                                <li>• <strong>Message Relay:</strong> Forwards messages between Mantle and Sapphire</li>
                                <li>• <strong>Security:</strong> Uses Interchain Security Module (ISM)</li>
                                <li>• <strong>Reliability:</strong> Automatic message delivery with retries</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Privacy Model
                    </h2>

                    <p className="mt-6 leading-7">
                        Cylend achieves privacy through client-side encryption and Sapphire's confidential computing:
                    </p>

                    <div className="mt-6 space-y-4">
                        <div className="rounded-lg bg-muted p-6">
                            <h3 className="font-semibold mb-3">What's Private:</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                    <Lock className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span><strong>Action Details:</strong> Amount, token, counterparty info (all encrypted)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Lock className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span><strong>Position State:</strong> Collateral amounts, borrow amounts, health factors</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Lock className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span><strong>Lending Logic:</strong> All computation happens in Sapphire TEE</span>
                                </li>
                            </ul>
                        </div>

                        <div className="rounded-lg bg-muted p-6">
                            <h3 className="font-semibold mb-3">What's Public:</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                    <Network className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                    <span><strong>Deposit Creation:</strong> Depositor address and deposit amounts</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Network className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                    <span><strong>Action Hashes:</strong> Hash of encrypted action ciphertext</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Network className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                    <span><strong>Settlement Events:</strong> Fund release notifications (amounts visible)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Network className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                    <span><strong>Position Hashes:</strong> Hash of position state (not actual values)</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <Callout type="important">
                        <p>
                            All sensitive details are encrypted client-side using Sapphire's public key before leaving the browser.
                            Mantle only sees encrypted ciphertext hashes, while Sapphire decrypts and processes within a Trusted Execution Environment (TEE).
                        </p>
                    </Callout>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Key Design Decisions
                    </h2>

                    <div className="mt-6 space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Why Two Chains?</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Separating settlement (Mantle) from computation (Sapphire) provides the best of both worlds:
                                Mantle offers high throughput and low costs for deposits and releases, while Sapphire provides
                                confidentiality for sensitive lending operations. This design also allows for future scalability
                                and multi-chain settlement support.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2">Why Client-Side Encryption?</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Encrypting action payloads in the browser ensures that even if network traffic is intercepted,
                                no sensitive information is leaked. The frontend never sends plaintext amounts or token details
                                over the network.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2">Why Backend Service?</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                The <code>processAction()</code> function on LendingCore is owner-only for security. A backend
                                service with controlled access to the owner private key automates action processing while maintaining
                                security. This prevents frontrunning and ensures actions are processed in order.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2">Why Ponder?</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Ponder provides efficient multi-chain event indexing with a GraphQL API out of the box. It handles
                                real-time subscriptions, database management, and type generation, significantly reducing development time
                                compared to building a custom indexer.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Explore More
                    </h2>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        <Link
                            href="/architecture/system-design"
                            className="group flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted"
                        >
                            <div>
                                <h3 className="font-semibold">System Design</h3>
                                <p className="mt-1 text-sm text-muted-foreground">Detailed system architecture</p>
                            </div>
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>

                        <Link
                            href="/architecture/data-flow"
                            className="group flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted"
                        >
                            <div>
                                <h3 className="font-semibold">Data Flow</h3>
                                <p className="mt-1 text-sm text-muted-foreground">How data moves through the system</p>
                            </div>
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>

                        <Link
                            href="/architecture/cross-chain"
                            className="group flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted"
                        >
                            <div>
                                <h3 className="font-semibold">Cross-Chain</h3>
                                <p className="mt-1 text-sm text-muted-foreground">Hyperlane integration details</p>
                            </div>
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>

                        <Link
                            href="/architecture/security"
                            className="group flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted"
                        >
                            <div>
                                <h3 className="font-semibold">Security Model</h3>
                                <p className="mt-1 text-sm text-muted-foreground">Threat model and security guarantees</p>
                            </div>
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
