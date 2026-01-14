import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Callout } from "@/components/callout";

export const metadata: Metadata = {
    title: "LendingCore",
    description: "LendingCore contract API reference",
};

export default function CorePage() {
    return (
        <div>
            <div className="space-y-2">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">LendingCore</h1>
                <p className="text-lg text-muted-foreground">
                    Private lending logic on Sapphire with confidential compute
                </p>
            </div>

            <div className="mt-6 rounded-lg bg-muted p-4">
                <p className="text-sm font-mono">
                    <span className="text-muted-foreground">Address (Sapphire Testnet):</span>{" "}
                    <code>0xF57a9FEAdCfb103ACC3f20a82F74858330b26862</code>
                </p>
            </div>

            <div className="mt-12 space-y-10">
                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Functions
                    </h2>

                    <div className="mt-6 space-y-6">
                        <div className="rounded-lg border p-6">
                            <h3 className="font-mono text-lg font-semibold">processAction()</h3>
                            <p className="text-sm text-muted-foreground mt-2">Process encrypted action - owner only</p>
                            <div className="mt-4 rounded bg-muted p-3 text-sm font-mono overflow-x-auto">
                                <pre>function processAction(bytes32 actionHash, bytes calldata encryptedPayload) external onlyOwner</pre>
                            </div>
                            <Callout type="important">
                                <p className="text-sm">Only callable by owner (backend service). Decrypts and executes action in TEE.</p>
                            </Callout>
                        </div>

                        <div className="rounded-lg border p-6">
                            <h3 className="font-mono text-lg font-semibold">getPosition()</h3>
                            <p className="text-sm text-muted-foreground mt-2">Get user's private lending position</p>
                            <div className="mt-4 rounded bg-muted p-3 text-sm font-mono overflow-x-auto">
                                <pre>function getPosition(address user) external view returns (Position memory)</pre>
                            </div>
                            <p className="text-sm mt-3 text-muted-foreground">Returns encrypted position data, only readable by position owner</p>
                        </div>

                        <div className="rounded-lg border p-6">
                            <h3 className="font-mono text-lg font-semibold">calculateHealthFactor()</h3>
                            <p className="text-sm text-muted-foreground mt-2">Calculate user's health factor</p>
                            <div className="mt-4 rounded bg-muted p-3 text-sm font-mono overflow-x-auto">
                                <pre>function calculateHealthFactor(address user) external view returns (uint256)</pre>
                            </div>
                            <p className="text-sm mt-3">
                                Health factor = (Collateral * LTV) / Debt. Must be &gt; 1.0 for borrows/withdraws.
                            </p>
                        </div>

                        <div className="rounded-lg border p-6">
                            <h3 className="font-mono text-lg font-semibold">updatePrice()</h3>
                            <p className="text-sm text-muted-foreground mt-2">Update oracle prices - owner only</p>
                            <div className="mt-4 rounded bg-muted p-3 text-sm font-mono overflow-x-auto">
                                <pre>function updatePrice(address token, uint256 price) external onlyOwner</pre>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Action Types
                    </h2>
                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                        <div className="rounded-lg border p-4">
                            <h3 className="font-semibold">SUPPLY (0)</h3>
                            <p className="text-sm text-muted-foreground">Add collateral to position</p>
                        </div>
                        <div className="rounded-lg border p-4">
                            <h3 className="font-semibold">BORROW (1)</h3>
                            <p className="text-sm text-muted-foreground">Borrow against collateral</p>
                        </div>
                        <div className="rounded-lg border p-4">
                            <h3 className="font-semibold">REPAY (2)</h3>
                            <p className="text-sm text-muted-foreground">Repay borrowed amount</p>
                        </div>
                        <div className="rounded-lg border p-4">
                            <h3 className="font-semibold">WITHDRAW (3)</h3>
                            <p className="text-sm text-muted-foreground">Withdraw collateral</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Events
                    </h2>
                    <div className="mt-6 space-y-4">
                        <div className="rounded-lg bg-muted p-4 font-mono text-sm">
                            event ActionProcessed(bytes32 indexed actionHash, address indexed user, uint8 actionType)
                        </div>
                        <div className="rounded-lg bg-muted p-4 font-mono text-sm">
                            event PositionUpdated(address indexed user, uint256 collateral, uint256 debt)
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Related
                    </h2>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        <Link href="/smart-contracts/ingress" className="group flex items-center justify-between rounded-lg border p-4 hover:bg-muted">
                            <div><h3 className="font-semibold">PrivateLendingIngress</h3><p className="text-sm text-muted-foreground">Mantle contract</p></div>
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                        <Link href="/backend-service/action-processor" className="group flex items-center justify-between rounded-lg border p-4 hover:bg-muted">
                            <div><h3 className="font-semibold">Action Processor</h3><p className="text-sm text-muted-foreground">Backend service</p></div>
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
