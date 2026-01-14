import { Metadata } from "next";
import { AppWindow } from "lucide-react";

export const metadata: Metadata = {
    title: "Pages & Routing",
    description: "Overview of the application routes and views",
};

export default function PagesPage() {
    return (
        <div>
            <div className="space-y-2">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Pages & Routing</h1>
                <p className="text-lg text-muted-foreground">
                    Application views and their purpose
                </p>
            </div>

            <div className="mt-12 space-y-10">
                <section>
                    <div className="grid gap-4 mt-6">
                        <div className="flex items-start gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                            <AppWindow className="h-6 w-6 mt-1 text-primary" />
                            <div>
                                <h3 className="font-mono font-semibold">/app/dashboard</h3>
                                <p className="text-sm text-muted-foreground mt-1">
                                    The main command center. Shows Health Factor, Total Collateral (Hidden/Encrypted), and active positions.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                            <AppWindow className="h-6 w-6 mt-1 text-blue-500" />
                            <div>
                                <h3 className="font-mono font-semibold">/app/deposit</h3>
                                <p className="text-sm text-muted-foreground mt-1">
                                    <strong>Deposit Management:</strong> View existing deposit buckets, create new deposits,
                                    and track remaining balances available for supply.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                            <AppWindow className="h-6 w-6 mt-1 text-purple-600" />
                            <div>
                                <h3 className="font-mono font-semibold">/app/borrow</h3>
                                <p className="text-sm text-muted-foreground mt-1">
                                    <strong>Lending Operations:</strong> Interface to Supply collateral, Borrow assets, Repay debt, and Withdraw.
                                    Integrates the encryption flow seamlessly.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                            <AppWindow className="h-6 w-6 mt-1 text-gray-500" />
                            <div>
                                <h3 className="font-mono font-semibold">/app/history</h3>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Transaction history fetched from Ponder. Shows status of cross-chain actions (Pending, Completed, Failed).
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
