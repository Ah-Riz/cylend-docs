import { Metadata } from "next";
import { FileCode, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Contract APIs",
    description: "Detailed function reference for Cylend smart contracts",
};

export default function ContractsApiPage() {
    return (
        <div>
            <div className="space-y-2">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Contract APIs</h1>
                <p className="text-lg text-muted-foreground">
                    Low-level function signatures for integration
                </p>
            </div>

            <div className="mt-12 space-y-10">
                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        PrivateLendingIngress (Mantle)
                    </h2>
                    <div className="mt-6 space-y-6">
                        <div className="rounded-lg border p-4">
                            <code className="text-sm font-bold">createDeposit(address token, uint256 amount)</code>
                            <p className="text-sm text-muted-foreground mt-2">
                                Transfers ERC20 tokens from msg.sender to the vault and mints a virtual Deposit ID.
                            </p>
                            <div className="mt-2 text-xs font-mono bg-muted p-2 rounded">Returns: uint256 depositId</div>
                        </div>

                        <div className="rounded-lg border p-4">
                            <code className="text-sm font-bold">initiateAction(uint256 depositId, bytes encryptedPayload)</code>
                            <p className="text-sm text-muted-foreground mt-2">
                                Emits a cross-chain message to Sapphire via Hyperlane. The payload must be encrypted client-side.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        LendingCore (Sapphire)
                    </h2>
                    <div className="mt-6 space-y-6">
                        <div className="rounded-lg border p-4">
                            <code className="text-sm font-bold">processAction(bytes32 actionHash, bytes encryptedPayload)</code>
                            <p className="text-sm text-muted-foreground mt-2">
                                <strong>Owner Only.</strong> Decrypts the payload and executes the logic (Supply/Borrow/Repay/Withdraw).
                            </p>
                        </div>

                        <div className="rounded-lg border p-4">
                            <code className="text-sm font-bold">calculateHealthFactor(address user) view</code>
                            <p className="text-sm text-muted-foreground mt-2">
                                Returns the current health factor scaled by 1e18. Can be called via a Sapphire View Call.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
