import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Callout } from "@/components/callout";

export const metadata: Metadata = {
    title: "Getting Started",
    description: "Introduction to Cylend - Privacy-preserving credit infrastructure",
};

export default function GettingStartedPage() {
    return (
        <div>
            <div className="space-y-2">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Getting Started with Cylend</h1>
                <p className="text-lg text-muted-foreground">
                    Welcome to Cylend! This guide will help you understand and start using our privacy-preserving credit infrastructure.
                </p>
            </div>

            <div className="mt-12 space-y-8">
                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                        What is Cylend?
                    </h2>
                    <p className="mt-6 leading-7">
                        Cylend is a privacy-preserving credit infrastructure built on <strong>Mantle</strong> and <strong>Sapphire</strong> networks.
                        It enables users to supply capital, borrow against collateral, and manage lending positions while keeping all sensitive
                        details encrypted and private.
                    </p>

                    <div className="mt-6">
                        <h3 className="text-xl font-semibold">Key Features</h3>
                        <ul className="mt-4 space-y-3">
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span><strong>Privacy-First:</strong> All action details (amount, token, counterparty) are encrypted using Sapphire's confidential computing</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span><strong>Cross-Chain:</strong> Seamless communication between Mantle (public deposits) and Sapphire (private computation)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span><strong>Non-Custodial:</strong> You maintain full control of your funds at all times</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span><strong>Automated Processing:</strong> Backend service handles action processing automatically</span>
                            </li>
                        </ul>
                    </div>

                    <Callout type="important">
                        <p>
                            <strong>MVP Notice:</strong> This MVP currently only supports <strong>USDC</strong> token.
                            Support for additional tokens will be added in future releases.
                        </p>
                    </Callout>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        How Does It Work?
                    </h2>
                    <p className="mt-6 leading-7">
                        Cylend operates across two blockchain networks:
                    </p>

                    <div className="mt-6 grid gap-6 md:grid-cols-2">
                        <div className="rounded-lg border p-6">
                            <h3 className="text-xl font-semibold mb-3">Mantle Sepolia</h3>
                            <p className="text-sm text-muted-foreground">
                                Handles deposit creation and settlement. The <code>PrivateLendingIngress</code> contract manages:
                            </p>
                            <ul className="mt-3 space-y-1 text-sm">
                                <li>• Deposit creation (native & ERC20)</li>
                                <li>• Action submission</li>
                                <li>• Fund releases</li>
                            </ul>
                        </div>

                        <div className="rounded-lg border p-6">
                            <h3 className="text-xl font-semibold mb-3">Sapphire Testnet</h3>
                            <p className="text-sm text-muted-foreground">
                                Performs private computation. The <code>LendingCore</code> contract handles:
                            </p>
                            <ul className="mt-3 space-y-1 text-sm">
                                <li>• Encrypted action processing</li>
                                <li>• Lending logic & health factors</li>
                                <li>• Private position tracking</li>
                            </ul>
                        </div>
                    </div>

                    <Callout type="note">
                        <p>
                            Communication between networks is facilitated by <strong>Hyperlane</strong>,
                            a cross-chain messaging protocol that ensures secure message relay.
                        </p>
                    </Callout>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Prerequisites
                    </h2>
                    <p className="mt-6 leading-7">
                        Before you begin, ensure you have the following:
                    </p>

                    <div className="mt-6 space-y-4">
                        <div>
                            <h3 className="font-semibold">Development Environment</h3>
                            <ul className="mt-2 space-y-1">
                                <li>• Node.js ≥ 18.14</li>
                                <li>• npm, yarn, pnpm, or bun</li>
                                <li>• Git</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold">Wallets & Testnet Tokens</h3>
                            <ul className="mt-2 space-y-1">
                                <li>• Web3 wallet (MetaMask, Rainbow, WalletConnect compatible)</li>
                                <li>• Mantle Sepolia testnet MNT (for gas fees)</li>
                                <li>• Sapphire Testnet ROSE (for gas fees)</li>
                                <li>• <strong>USDC tokens (required for MVP)</strong></li>
                            </ul>
                        </div>

                        <Callout type="tip">
                            <p>
                                Get testnet tokens from faucets:
                            </p>
                            <ul className="mt-2 space-y-1">
                                <li>• <a href="https://faucet.sepolia.mantle.xyz" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mantle Sepolia Faucet</a> - Get MNT for gas</li>
                                <li>• <a href="https://faucet.testnet.oasis.io/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Sapphire Testnet Faucet</a> - Get ROSE for gas</li>
                                <li>• <a href="https://testnet.agni.finance/swap" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Agni Finance Swap</a> - Swap MNT to USDC</li>
                            </ul>
                        </Callout>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Architecture Overview
                    </h2>
                    <p className="mt-6 leading-7">
                        Cylend consists of three main components that work together:
                    </p>

                    <div className="mt-6 space-y-4">
                        <div className="rounded-lg border p-4">
                            <h3 className="font-semibold">1. Frontend (Next.js)</h3>
                            <p className="mt-2 text-sm text-muted-foreground">
                                User interface for wallet connection, deposits, and lending operations.
                                Built with Next.js, React, Wagmi, and RainbowKit.
                            </p>
                        </div>

                        <div className="rounded-lg border p-4">
                            <h3 className="font-semibold">2. Ponder Indexer</h3>
                            <p className="mt-2 text-sm text-muted-foreground">
                                Indexes blockchain events from both Mantle and Sapphire, providing a GraphQL API
                                for querying deposits, actions, and positions.
                            </p>
                        </div>

                        <div className="rounded-lg border p-4">
                            <h3 className="font-semibold">3. Backend Service (Optional)</h3>
                            <p className="mt-2 text-sm text-muted-foreground">
                                Automated service that monitors pending actions and calls <code>processAction()</code>
                                on the LendingCore contract. Required for production deployment.
                            </p>
                        </div>
                    </div>

                    <Callout type="important">
                        <p>
                            The backend service is required because <code>processAction()</code> on LendingCore
                            is an owner-only function that can't be called directly from the frontend.
                        </p>
                    </Callout>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Next Steps
                    </h2>
                    <p className="mt-6 leading-7">
                        Now that you understand the basics, here's what to do next:
                    </p>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        <Link
                            href="/getting-started/installation"
                            className="group flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted"
                        >
                            <div>
                                <h3 className="font-semibold">Installation</h3>
                                <p className="mt-1 text-sm text-muted-foreground">Install and set up all components</p>
                            </div>
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>

                        <Link
                            href="/getting-started/quick-start"
                            className="group flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted"
                        >
                            <div>
                                <h3 className="font-semibold">Quick Start</h3>
                                <p className="mt-1 text-sm text-muted-foreground">Run your first lending operation</p>
                            </div>
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>

                        <Link
                            href="/architecture"
                            className="group flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted"
                        >
                            <div>
                                <h3 className="font-semibold">Architecture</h3>
                                <p className="mt-1 text-sm text-muted-foreground">Deep dive into system design</p>
                            </div>
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>

                        <Link
                            href="/guides/user-flows"
                            className="group flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted"
                        >
                            <div>
                                <h3 className="font-semibold">User Flows</h3>
                                <p className="mt-1 text-sm text-muted-foreground">Learn all user operations</p>
                            </div>
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
