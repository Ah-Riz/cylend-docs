import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Testing",
    description: "Testing Cylend smart contracts",
};

export default function TestingPage() {
    return (
        <div>
            <div className="space-y-2">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Testing</h1>
                <p className="text-lg text-muted-foreground">
                    Run and write tests for Cylend smart contracts
                </p>
            </div>

            <div className="mt-12 space-y-10">
                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Run Tests
                    </h2>
                    <div className="mt-6 space-y-4">
                        <div className="rounded-lg bg-muted p-4">
                            <p className="text-sm font-medium mb-2">Run all tests:</p>
                            <code className="text-sm font-mono">npx hardhat test</code>
                        </div>
                        <div className="rounded-lg bg-muted p-4">
                            <p className="text-sm font-medium mb-2">Run with coverage:</p>
                            <code className="text-sm font-mono">npx hardhat coverage</code>
                        </div>
                        <div className="rounded-lg bg-muted p-4">
                            <p className="text-sm font-medium mb-2">Run specific test:</p>
                            <code className="text-sm font-mono">npx hardhat test test/LendingCore.test.ts</code>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Test Categories
                    </h2>
                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                        <div className="rounded-lg border p-4">
                            <h3 className="font-semibold">Unit Tests</h3>
                            <p className="text-sm text-muted-foreground mt-1">Individual function tests for each contract</p>
                        </div>
                        <div className="rounded-lg border p-4">
                            <h3 className="font-semibold">Integration Tests</h3>
                            <p className="text-sm text-muted-foreground mt-1">Cross-chain flow simulations</p>
                        </div>
                        <div className="rounded-lg border p-4">
                            <h3 className="font-semibold">Fuzz Tests</h3>
                            <p className="text-sm text-muted-foreground mt-1">Random input testing for edge cases</p>
                        </div>
                        <div className="rounded-lg border p-4">
                            <h3 className="font-semibold">Gas Tests</h3>
                            <p className="text-sm text-muted-foreground mt-1">Gas consumption optimization checks</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Related
                    </h2>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        <Link href="/smart-contracts/deployment" className="group flex items-center justify-between rounded-lg border p-4 hover:bg-muted">
                            <div><h3 className="font-semibold">Deployment</h3></div>
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                        <Link href="/smart-contracts" className="group flex items-center justify-between rounded-lg border p-4 hover:bg-muted">
                            <div><h3 className="font-semibold">Overview</h3></div>
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
