import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Layers, Shield, Server, Code } from "lucide-react";

export const metadata: Metadata = {
    title: "Guides",
    description: "Comprehensive guides for using Cylend",
};

export default function GuidesPage() {
    return (
        <div>
            <div className="space-y-2">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Guides</h1>
                <p className="text-lg text-muted-foreground">
                    Comprehensive guides for understanding and using Cylend's privacy-preserving lending protocol
                </p>
            </div>

            <div className="mt-12 space-y-10">
                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        User Guides
                    </h2>

                    <p className="mt-6 leading-7">
                        Learn how to use Cylend as a lender or borrower:
                    </p>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        <Link
                            href="/guides/user-flows"
                            className="group rounded-lg border p-6 transition-colors hover:bg-muted"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                                    <Layers className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <h3 className="font-semibold">User Flows</h3>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Complete guides for all lending operations: deposit, supply, borrow, repay, and withdraw.
                            </p>
                            <div className="mt-4 flex items-center text-sm text-primary">
                                Read guide <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                            </div>
                        </Link>

                        <Link
                            href="/guides/deposit-management"
                            className="group rounded-lg border p-6 transition-colors hover:bg-muted"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900">
                                    <BookOpen className="h-6 w-6 text-green-600 dark:text-green-400" />
                                </div>
                                <h3 className="font-semibold">Deposit Management</h3>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Understanding deposit buckets, partial usage, and tracking remaining balances.
                            </p>
                            <div className="mt-4 flex items-center text-sm text-primary">
                                Read guide <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                            </div>
                        </Link>

                        <Link
                            href="/guides/privacy-features"
                            className="group rounded-lg border p-6 transition-colors hover:bg-muted"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900">
                                    <Shield className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                                </div>
                                <h3 className="font-semibold">Privacy Features</h3>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                How Cylend protects your financial privacy using Sapphire confidential computing.
                            </p>
                            <div className="mt-4 flex items-center text-sm text-primary">
                                Read guide <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                            </div>
                        </Link>

                        <Link
                            href="/guides/troubleshooting"
                            className="group rounded-lg border p-6 transition-colors hover:bg-muted"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100 dark:bg-red-900">
                                    <Server className="h-6 w-6 text-red-600 dark:text-red-400" />
                                </div>
                                <h3 className="font-semibold">Troubleshooting</h3>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Common issues and solutions for Ponder, Frontend, and Backend Service.
                            </p>
                            <div className="mt-4 flex items-center text-sm text-primary">
                                Read guide <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                            </div>
                        </Link>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Quick Reference
                    </h2>

                    <div className="mt-6 grid gap-4 md:grid-cols-3">
                        <div className="rounded-lg border p-4">
                            <h3 className="font-semibold mb-2">Testnet Faucets</h3>
                            <ul className="space-y-1 text-sm">
                                <li>
                                    <a href="https://faucet.sepolia.mantle.xyz" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                                        Mantle Sepolia →
                                    </a>
                                </li>
                                <li>
                                    <a href="https://faucet.testnet.oasis.io/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                                        Sapphire Testnet →
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="rounded-lg border p-4">
                            <h3 className="font-semibold mb-2">Block Explorers</h3>
                            <ul className="space-y-1 text-sm">
                                <li>
                                    <a href="https://sepolia.mantlescan.xyz" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                                        Mantle Explorer →
                                    </a>
                                </li>
                                <li>
                                    <a href="https://testnet.explorer.sapphire.oasis.io" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                                        Sapphire Explorer →
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="rounded-lg border p-4">
                            <h3 className="font-semibold mb-2">Resources</h3>
                            <ul className="space-y-1 text-sm">
                                <li>
                                    <a href="https://github.com/Ah-Riz/cylend_fe" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                                        GitHub Repository →
                                    </a>
                                </li>
                                <li>
                                    <a href="http://cylend.xyz" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                                        Live Demo →
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Developer Resources
                    </h2>

                    <p className="mt-6 leading-7">
                        For developers building on or contributing to Cylend:
                    </p>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        <Link
                            href="/architecture"
                            className="group flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted"
                        >
                            <div>
                                <h3 className="font-semibold">Architecture Overview</h3>
                                <p className="mt-1 text-sm text-muted-foreground">System design and components</p>
                            </div>
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>

                        <Link
                            href="/smart-contracts"
                            className="group flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted"
                        >
                            <div>
                                <h3 className="font-semibold">Smart Contracts</h3>
                                <p className="mt-1 text-sm text-muted-foreground">Contract documentation and APIs</p>
                            </div>
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>

                        <Link
                            href="/indexer"
                            className="group flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted"
                        >
                            <div>
                                <h3 className="font-semibold">Ponder Indexer</h3>
                                <p className="mt-1 text-sm text-muted-foreground">Event indexing and GraphQL API</p>
                            </div>
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>

                        <Link
                            href="/backend-service"
                            className="group flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted"
                        >
                            <div>
                                <h3 className="font-semibold">Backend Service</h3>
                                <p className="mt-1 text-sm text-muted-foreground">Action processing automation</p>
                            </div>
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
