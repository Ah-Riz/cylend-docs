import { Metadata } from "next";
import { AlertTriangle, CheckCircle2, Shield, Lock, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Callout } from "@/components/callout";

export const metadata: Metadata = {
    title: "Problem & Solution",
    description: "The core thesis behind Cylend",
};

export default function ProblemSolutionPage() {
    return (
        <div>
            <div className="space-y-2">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">The Problem & The Solution</h1>
                <p className="text-lg text-muted-foreground">
                    Addressing the "Transparency Paradox" in Decentralized Finance
                </p>
                <div className="flex gap-2 mt-4">
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                        Hackathon Context
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                        Confidential
                    </span>
                </div>
            </div>

            <div className="mt-12 space-y-16">
                {/* THE PROBLEM SECTION */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
                            <AlertTriangle className="h-8 w-8 text-red-600 dark:text-red-400" />
                        </div>
                        <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight">The Problem</h2>
                    </div>

                    <p className="leading-7 text-lg font-medium">
                        The "Transparency Paradox": Transparency builds trust, but destroys privacy.
                    </p>
                    <p className="mt-4 leading-7 text-muted-foreground">
                        Traditional DeFi forces a radical trade-off: to participate, you must expose your entire financial position to the world.
                        This transparency prevents institutional adoption and individual financial sovereignty.
                    </p>

                    <div className="mt-8 grid gap-6 md:grid-cols-3">
                        <div className="rounded-xl border bg-card p-6 shadow-sm">
                            <h3 className="font-semibold mb-2">Dark Forest (MEV)</h3>
                            <p className="text-sm text-muted-foreground">
                                Because liquidation thresholds are public, predatory bots ("searchers") can calculate exactly when to attack a position, causing massive slippage and loss for users.
                            </p>
                        </div>
                        <div className="rounded-xl border bg-card p-6 shadow-sm">
                            <h3 className="font-semibold mb-2">Strategy Leakage</h3>
                            <p className="text-sm text-muted-foreground">
                                Institutions cannot use public DeFi because their trading strategies would be instantly copy-traded or front-run by competitors monitoring on-chain data.
                            </p>
                        </div>
                        <div className="rounded-xl border bg-card p-6 shadow-sm">
                            <h3 className="font-semibold mb-2">Binary Privacy</h3>
                            <p className="text-sm text-muted-foreground">
                                Current solutions like Tornado Cash offer <em>total anonymity</em> (regulatory nightmare), while standard DeFi offers <em>zero privacy</em>. There is no middle ground for "Confidential Compliance".
                            </p>
                        </div>
                    </div>
                </section>

                {/* THE SOLUTION SECTION */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                            <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400" />
                        </div>
                        <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight">The Solution: Cylend</h2>
                    </div>

                    <p className="leading-7 text-lg font-medium">
                        A Hybrid, Multi-Chain Architecture for "Smart Privacy".
                    </p>
                    <p className="mt-4 leading-7 text-muted-foreground">
                        Cylend bifurcates the financial lifecycle into two distinct execution environments, connected by a secure bridge.
                        This allows us to be <strong>Publicly Solvent</strong> but <strong>Privately Computable</strong>.
                    </p>

                    <div className="mt-8 space-y-4">
                        {/* Architecture Breakdown */}
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="rounded-lg border bg-blue-50 text-blue-900 dark:bg-blue-950/40 dark:text-blue-100 p-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <Globe className="h-6 w-6" />
                                    <h3 className="text-xl font-bold">1. Public Settlement</h3>
                                </div>
                                <div className="text-sm font-semibold mb-2 uppercase tracking-wider opacity-70">Mantle Network</div>
                                <p className="mb-4">
                                    Assets (USDC, MNT) are held in standard ERC-20 vaults. The <em>existence</em> of funds is verifiable, but their <em>assignment</em> to specific logic is obscured.
                                </p>
                                <ul className="list-disc list-inside text-sm space-y-1 opacity-90">
                                    <li>High Throughput</li>
                                    <li>Low Fees</li>
                                    <li>Universal Access</li>
                                </ul>
                            </div>

                            <div className="rounded-lg border bg-purple-50 text-purple-900 dark:bg-purple-950/40 dark:text-purple-100 p-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <Lock className="h-6 w-6" />
                                    <h3 className="text-xl font-bold">2. Private Computation</h3>
                                </div>
                                <div className="text-sm font-semibold mb-2 uppercase tracking-wider opacity-70">Oasis Sapphire (TEE)</div>
                                <p className="mb-4">
                                    Lending logic runs inside hardware enclaves (Intel SGX). Data is encrypted end-to-end. Even node operators cannot see the state.
                                </p>
                                <ul className="list-disc list-inside text-sm space-y-1 opacity-90">
                                    <li>Secret State (Debt/Collateral)</li>
                                    <li>Hidden LTV Calculation</li>
                                    <li>MEV Resistance</li>
                                </ul>
                            </div>
                        </div>

                        {/* Bridge */}
                        <div className="rounded-lg border bg-slate-50 dark:bg-slate-900 p-6 flex flex-col items-center text-center">
                            <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-full mb-3">
                                <Shield className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                            </div>
                            <h3 className="text-lg font-bold">Connected by Hyperlane</h3>
                            <p className="text-sm text-muted-foreground max-w-lg mt-2">
                                A permissionless interoperability layer that securely transports messages between the Public Vault and the Private Brain.
                                Ensuring <strong>Atomic Consistency</strong> without revealing data.
                            </p>
                        </div>
                    </div>
                </section>

                <Callout type="tip">
                    <p>
                        This architecture enables <strong>"Dark Pool Lending"</strong>: Users can lend and borrow massive amounts without tipping off the market, preserving their alpha.
                    </p>
                </Callout>

                <div className="flex justify-end pt-8">
                    <Link href="/getting-started" className="flex items-center gap-2 text-primary hover:underline">
                        Explore the implementation <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
