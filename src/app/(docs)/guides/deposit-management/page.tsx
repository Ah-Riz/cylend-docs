import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, DollarSign, Clock, CheckCircle2 } from "lucide-react";
import { Callout } from "@/components/callout";

export const metadata: Metadata = {
    title: "Deposit Management",
    description: "Understanding deposit buckets in Cylend",
};

export default function DepositManagementPage() {
    return (
        <div>
            <div className="space-y-2">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Deposit Management</h1>
                <p className="text-lg text-muted-foreground">
                    Understanding deposit buckets and partial usage in Cylend
                </p>
            </div>

            <div className="mt-12 space-y-10">
                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        What are Deposit Buckets?
                    </h2>
                    <p className="mt-6 leading-7">
                        A <strong>deposit bucket</strong> holds your funds in the PrivateLendingIngress
                        contract on Mantle. You can draw from it for multiple supply/repay actions.
                    </p>
                    <div className="mt-6 grid gap-4 md:grid-cols-3">
                        <div className="rounded-lg border p-4">
                            <DollarSign className="h-5 w-5 text-green-500 mb-2" />
                            <h3 className="font-semibold">Initial Amount</h3>
                            <p className="text-sm text-muted-foreground">Total deposited when created</p>
                        </div>
                        <div className="rounded-lg border p-4">
                            <Clock className="h-5 w-5 text-blue-500 mb-2" />
                            <h3 className="font-semibold">Remaining</h3>
                            <p className="text-sm text-muted-foreground">Left after actions</p>
                        </div>
                        <div className="rounded-lg border p-4">
                            <CheckCircle2 className="h-5 w-5 text-purple-500 mb-2" />
                            <h3 className="font-semibold">Status</h3>
                            <p className="text-sm text-muted-foreground">Consumed or active</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Partial Usage Example
                    </h2>
                    <div className="mt-6 rounded-lg border p-6">
                        <div className="space-y-3 text-sm">
                            <div>Create: 100 USDC → <span className="text-muted-foreground">remaining: 100</span></div>
                            <div>Supply 30 USDC → <span className="text-muted-foreground">remaining: 70</span></div>
                            <div>Supply 50 USDC → <span className="text-muted-foreground">remaining: 20</span></div>
                            <div>Supply 20 USDC → <span className="text-muted-foreground">remaining: 0 (fully used)</span></div>
                        </div>
                    </div>
                    <Callout type="tip">
                        <p>Create larger deposits to save gas on multiple smaller deposits.</p>
                    </Callout>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Related
                    </h2>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        <Link href="/guides/user-flows" className="group flex items-center justify-between rounded-lg border p-4 hover:bg-muted">
                            <div><h3 className="font-semibold">User Flows</h3></div>
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                        <Link href="/smart-contracts" className="group flex items-center justify-between rounded-lg border p-4 hover:bg-muted">
                            <div><h3 className="font-semibold">Smart Contracts</h3></div>
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
