import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Action Processor",
    description: "How the backend processes encrypted actions",
};

export default function ActionProcessorPage() {
    return (
        <div>
            <div className="space-y-2">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Action Processor</h1>
                <p className="text-lg text-muted-foreground">
                    How the backend service processes encrypted lending actions
                </p>
            </div>

            <div className="mt-12 space-y-10">
                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Processing Flow
                    </h2>
                    <div className="mt-6 space-y-4">
                        <div className="flex items-start gap-4">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">1</div>
                            <div>
                                <h3 className="font-semibold">Poll for Pending Actions</h3>
                                <p className="text-sm text-muted-foreground">Query Ponder GraphQL for actions with status: "pending"</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">2</div>
                            <div>
                                <h3 className="font-semibold">Validate Prices</h3>
                                <p className="text-sm text-muted-foreground">Check oracle prices aren't stale, update if needed</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">3</div>
                            <div>
                                <h3 className="font-semibold">Call processAction()</h3>
                                <p className="text-sm text-muted-foreground">Submit to LendingCore on Sapphire with action hash and payload</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">4</div>
                            <div>
                                <h3 className="font-semibold">Handle Result</h3>
                                <p className="text-sm text-muted-foreground">Log success or retry on failure</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Error Handling
                    </h2>
                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                        <div className="rounded-lg border p-4">
                            <h3 className="font-semibold text-sm">Transaction Fails</h3>
                            <p className="text-xs text-muted-foreground mt-1">Retry up to MAX_RETRIES (default: 3)</p>
                        </div>
                        <div className="rounded-lg border p-4">
                            <h3 className="font-semibold text-sm">RPC Errors</h3>
                            <p className="text-xs text-muted-foreground mt-1">Wait and retry with exponential backoff</p>
                        </div>
                        <div className="rounded-lg border p-4">
                            <h3 className="font-semibold text-sm">Health Factor Rejection</h3>
                            <p className="text-xs text-muted-foreground mt-1">Log error, mark action as failed</p>
                        </div>
                        <div className="rounded-lg border p-4">
                            <h3 className="font-semibold text-sm">Stale Prices</h3>
                            <p className="text-xs text-muted-foreground mt-1">Update prices before processing</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Related
                    </h2>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        <Link href="/backend-service/price-updater" className="group flex items-center justify-between rounded-lg border p-4 hover:bg-muted">
                            <div><h3 className="font-semibold">Price Updater</h3></div>
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                        <Link href="/smart-contracts/core" className="group flex items-center justify-between rounded-lg border p-4 hover:bg-muted">
                            <div><h3 className="font-semibold">LendingCore</h3></div>
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
