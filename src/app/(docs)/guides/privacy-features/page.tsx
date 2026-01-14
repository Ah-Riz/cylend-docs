import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Lock, Eye, Shield, Key } from "lucide-react";
import { Callout } from "@/components/callout";

export const metadata: Metadata = {
    title: "Privacy Features",
    description: "How Cylend protects your financial privacy",
};

export default function PrivacyFeaturesPage() {
    return (
        <div>
            <div className="space-y-2">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Privacy Features</h1>
                <p className="text-lg text-muted-foreground">
                    How Cylend protects your financial privacy using Sapphire confidential computing
                </p>
            </div>

            <div className="mt-12 space-y-10">
                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        The Privacy Problem
                    </h2>
                    <p className="mt-6 leading-7">
                        Traditional DeFi lending exposes everything on-chain: positions, amounts, strategies.
                        Cylend solves this using <strong>Oasis Sapphire's</strong> confidential computing.
                    </p>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        What's Private vs Public
                    </h2>

                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                        <div className="rounded-lg bg-green-50 text-green-900 dark:bg-green-950/40 dark:text-green-100 p-6">
                            <div className="flex items-center gap-2 mb-3">
                                <Lock className="h-5 w-5 text-green-600 dark:text-green-400" />
                                <h3 className="font-semibold">Private (Encrypted)</h3>
                            </div>
                            <ul className="space-y-2 text-sm">
                                <li>• Action amounts and tokens</li>
                                <li>• Collateral positions</li>
                                <li>• Borrow amounts</li>
                                <li>• Health factors</li>
                                <li>• Counterparty information</li>
                            </ul>
                        </div>

                        <div className="rounded-lg bg-blue-50 text-blue-900 dark:bg-blue-950/40 dark:text-blue-100 p-6">
                            <div className="flex items-center gap-2 mb-3">
                                <Eye className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                <h3 className="font-semibold">Public (On-Chain)</h3>
                            </div>
                            <ul className="space-y-2 text-sm">
                                <li>• Deposit creation events</li>
                                <li>• Encrypted action hashes</li>
                                <li>• Fund release events</li>
                                <li>• Total pool liquidity</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        How It Works
                    </h2>

                    <div className="mt-6 space-y-4">
                        <div className="flex items-start gap-4">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">1</div>
                            <div>
                                <h3 className="font-semibold">Client-Side Encryption</h3>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Actions encrypted in your browser using Sapphire's public key before leaving.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">2</div>
                            <div>
                                <h3 className="font-semibold">TEE Processing</h3>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Sapphire decrypts and processes actions in a Trusted Execution Environment.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">3</div>
                            <div>
                                <h3 className="font-semibold">Observable Settlement</h3>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Only fund releases are visible on Mantle - details remain hidden.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <Callout type="important">
                    <p>
                        Mantle only sees <strong>encrypted hashes</strong>. The actual lending logic runs on Sapphire
                        where data is decrypted inside secure hardware enclaves.
                    </p>
                </Callout>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Learn More
                    </h2>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        <Link href="/architecture" className="group flex items-center justify-between rounded-lg border p-4 hover:bg-muted">
                            <div><h3 className="font-semibold">Architecture</h3><p className="text-sm text-muted-foreground">System design</p></div>
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                        <a href="https://oasisprotocol.org/sapphire" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between rounded-lg border p-4 hover:bg-muted">
                            <div><h3 className="font-semibold">Oasis Sapphire</h3><p className="text-sm text-muted-foreground">Learn about TEE</p></div>
                            <ArrowRight className="h-5 w-5" />
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
}
