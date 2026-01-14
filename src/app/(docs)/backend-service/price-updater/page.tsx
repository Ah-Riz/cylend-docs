import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Price Updater",
    description: "Oracle price update system",
};

export default function PriceUpdaterPage() {
    return (
        <div>
            <div className="space-y-2">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Price Updater</h1>
                <p className="text-lg text-muted-foreground">
                    Oracle price update system for health factor calculations
                </p>
            </div>

            <div className="mt-12 space-y-10">
                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Overview
                    </h2>
                    <p className="mt-6 leading-7">
                        The price updater fetches token prices and updates the LendingCore oracle.
                        This is critical for accurate health factor calculations.
                    </p>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Supported Tokens
                    </h2>
                    <div className="mt-6 grid gap-4 md:grid-cols-3">
                        <div className="rounded-lg border p-4 text-center">
                            <h3 className="font-semibold">USDC</h3>
                            <p className="text-sm text-muted-foreground">Stablecoin @ $1.00</p>
                        </div>
                        <div className="rounded-lg border p-4 text-center">
                            <h3 className="font-semibold">USDT</h3>
                            <p className="text-sm text-muted-foreground">Stablecoin @ $1.00</p>
                        </div>
                        <div className="rounded-lg border p-4 text-center">
                            <h3 className="font-semibold">WMNT</h3>
                            <p className="text-sm text-muted-foreground">Wrapped Mantle</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Staleness Check
                    </h2>
                    <p className="mt-6 leading-7">
                        Before processing actions, the service checks if prices are stale
                        (older than configured threshold). If stale, prices are updated first.
                    </p>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Related
                    </h2>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        <Link href="/backend-service/action-processor" className="group flex items-center justify-between rounded-lg border p-4 hover:bg-muted">
                            <div><h3 className="font-semibold">Action Processor</h3></div>
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                        <Link href="/guides/user-flows" className="group flex items-center justify-between rounded-lg border p-4 hover:bg-muted">
                            <div><h3 className="font-semibold">User Flows</h3></div>
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
