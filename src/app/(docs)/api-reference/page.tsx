import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "API Reference",
    description: "Cylend API reference documentation",
};

export default function ApiReferencePage() {
    return (
        <div>
            <div className="space-y-2">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">API Reference</h1>
                <p className="text-lg text-muted-foreground">
                    Complete API reference for Cylend contracts, hooks, and GraphQL
                </p>
            </div>

            <div className="mt-12 space-y-10">
                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Available APIs
                    </h2>

                    <div className="mt-6 grid gap-4">
                        <Link href="/api-reference/contracts" className="group rounded-lg border p-6 hover:bg-muted transition-colors">
                            <h3 className="font-semibold text-lg">Contract APIs</h3>
                            <p className="text-sm text-muted-foreground mt-1">
                                Function signatures for PrivateLendingIngress and LendingCore contracts
                            </p>
                            <div className="mt-3 flex items-center text-sm text-primary">
                                View reference <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>

                        <Link href="/api-reference/hooks" className="group rounded-lg border p-6 hover:bg-muted transition-colors">
                            <h3 className="font-semibold text-lg">Frontend Hooks</h3>
                            <p className="text-sm text-muted-foreground mt-1">
                                React hooks for data fetching and contract interactions
                            </p>
                            <div className="mt-3 flex items-center text-sm text-primary">
                                View reference <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>

                        <Link href="/api-reference/graphql" className="group rounded-lg border p-6 hover:bg-muted transition-colors">
                            <h3 className="font-semibold text-lg">GraphQL Schema</h3>
                            <p className="text-sm text-muted-foreground mt-1">
                                Ponder GraphQL API schema and query examples
                            </p>
                            <div className="mt-3 flex items-center text-sm text-primary">
                                View reference <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Quick Links
                    </h2>

                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                        <div className="rounded-lg bg-muted p-4">
                            <h3 className="font-semibold text-sm mb-2">Contract Addresses</h3>
                            <p className="text-xs text-muted-foreground">Ingress: <code>0xF6bA...7fAF</code></p>
                            <p className="text-xs text-muted-foreground">Core: <code>0xF57a...6862</code></p>
                        </div>
                        <div className="rounded-lg bg-muted p-4">
                            <h3 className="font-semibold text-sm mb-2">Endpoints</h3>
                            <p className="text-xs text-muted-foreground">GraphQL: <code>localhost:42069/graphql</code></p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
