import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Code, Layers, Zap } from "lucide-react";

export const metadata: Metadata = {
    title: "Frontend",
    description: "Cylend frontend documentation",
};

export default function FrontendPage() {
    return (
        <div>
            <div className="space-y-2">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Frontend</h1>
                <p className="text-lg text-muted-foreground">
                    Next.js frontend application for Cylend's privacy-preserving lending
                </p>
            </div>

            <div className="mt-12 space-y-10">
                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Tech Stack
                    </h2>
                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                        <div className="rounded-lg border p-4">
                            <h3 className="font-semibold">Framework</h3>
                            <p className="text-sm text-muted-foreground mt-1">Next.js 16+ with App Router, React 19</p>
                        </div>
                        <div className="rounded-lg border p-4">
                            <h3 className="font-semibold">Web3</h3>
                            <p className="text-sm text-muted-foreground mt-1">Wagmi, Viem, RainbowKit</p>
                        </div>
                        <div className="rounded-lg border p-4">
                            <h3 className="font-semibold">Styling</h3>
                            <p className="text-sm text-muted-foreground mt-1">Tailwind CSS, Radix UI</p>
                        </div>
                        <div className="rounded-lg border p-4">
                            <h3 className="font-semibold">Privacy</h3>
                            <p className="text-sm text-muted-foreground mt-1">Sapphire SDK for encryption</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Key Features
                    </h2>
                    <div className="mt-6 space-y-3">
                        <div className="flex items-start gap-3">
                            <Zap className="h-5 w-5 text-yellow-500 mt-0.5" />
                            <div>
                                <h3 className="font-semibold">Client-Side Encryption</h3>
                                <p className="text-sm text-muted-foreground">All action payloads encrypted in browser</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <Layers className="h-5 w-5 text-blue-500 mt-0.5" />
                            <div>
                                <h3 className="font-semibold">Real-Time Data</h3>
                                <p className="text-sm text-muted-foreground">GraphQL queries to Ponder indexer</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <Code className="h-5 w-5 text-purple-500 mt-0.5" />
                            <div>
                                <h3 className="font-semibold">Type-Safe</h3>
                                <p className="text-sm text-muted-foreground">Full TypeScript with auto-generated types</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        App Pages
                    </h2>
                    <div className="mt-6 grid gap-3 md:grid-cols-2">
                        <div className="rounded-lg bg-muted p-3 text-sm">
                            <code>/app/deposit</code> - Create deposits
                        </div>
                        <div className="rounded-lg bg-muted p-3 text-sm">
                            <code>/app/allocate</code> - Supply collateral
                        </div>
                        <div className="rounded-lg bg-muted p-3 text-sm">
                            <code>/app/borrow</code> - Borrow assets
                        </div>
                        <div className="rounded-lg bg-muted p-3 text-sm">
                            <code>/app/repay</code> - Repay loans
                        </div>
                        <div className="rounded-lg bg-muted p-3 text-sm">
                            <code>/app/withdraw</code> - Withdraw collateral
                        </div>
                        <div className="rounded-lg bg-muted p-3 text-sm">
                            <code>/app/records</code> - Settlement records
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Explore
                    </h2>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        <Link href="/frontend/project-structure" className="group flex items-center justify-between rounded-lg border p-4 hover:bg-muted">
                            <div><h3 className="font-semibold">Project Structure</h3></div>
                            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href="/frontend/hooks" className="group flex items-center justify-between rounded-lg border p-4 hover:bg-muted">
                            <div><h3 className="font-semibold">Custom Hooks</h3></div>
                            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href="/frontend/wallet-integration" className="group flex items-center justify-between rounded-lg border p-4 hover:bg-muted">
                            <div><h3 className="font-semibold">Wallet Integration</h3></div>
                            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href="/frontend/encryption" className="group flex items-center justify-between rounded-lg border p-4 hover:bg-muted">
                            <div><h3 className="font-semibold">Encryption</h3></div>
                            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
