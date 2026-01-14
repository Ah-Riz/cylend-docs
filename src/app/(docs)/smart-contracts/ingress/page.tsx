import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Callout } from "@/components/callout";

export const metadata: Metadata = {
    title: "PrivateLendingIngress",
    description: "PrivateLendingIngress contract API reference",
};

export default function IngressPage() {
    return (
        <div>
            <div className="space-y-2">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">PrivateLendingIngress</h1>
                <p className="text-lg text-muted-foreground">
                    Entry point contract on Mantle for deposits and actions
                </p>
            </div>

            <div className="mt-6 rounded-lg bg-muted p-4">
                <p className="text-sm font-mono">
                    <span className="text-muted-foreground">Address (Mantle Sepolia):</span>{" "}
                    <code>0xF6bA22c8C3774EaAF7048cB0504C77238A927fAF</code>
                </p>
            </div>

            <div className="mt-12 space-y-10">
                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Functions
                    </h2>

                    <div className="mt-6 space-y-6">
                        <div className="rounded-lg border p-6">
                            <h3 className="font-mono text-lg font-semibold">createDepositNative()</h3>
                            <p className="text-sm text-muted-foreground mt-2">Create a deposit with native MNT</p>
                            <div className="mt-4 rounded bg-muted p-3 text-sm font-mono overflow-x-auto">
                                <pre>function createDepositNative() external payable returns (uint256 depositId)</pre>
                            </div>
                            <p className="text-sm mt-3"><strong>Returns:</strong> Unique deposit ID</p>
                        </div>

                        <div className="rounded-lg border p-6">
                            <h3 className="font-mono text-lg font-semibold">createDeposit()</h3>
                            <p className="text-sm text-muted-foreground mt-2">Create a deposit with ERC20 tokens</p>
                            <div className="mt-4 rounded bg-muted p-3 text-sm font-mono overflow-x-auto">
                                <pre>function createDeposit(address token, uint256 amount) external returns (uint256 depositId)</pre>
                            </div>
                            <p className="text-sm mt-3"><strong>Params:</strong> <code>token</code> - ERC20 address, <code>amount</code> - deposit amount</p>
                        </div>

                        <div className="rounded-lg border p-6">
                            <h3 className="font-mono text-lg font-semibold">initiateAction()</h3>
                            <p className="text-sm text-muted-foreground mt-2">Submit encrypted action for processing</p>
                            <div className="mt-4 rounded bg-muted p-3 text-sm font-mono overflow-x-auto">
                                <pre>function initiateAction(uint256 depositId, bytes calldata encryptedPayload) external</pre>
                            </div>
                            <p className="text-sm mt-3"><strong>Params:</strong> <code>depositId</code> - deposit to use, <code>encryptedPayload</code> - encrypted action data</p>
                        </div>

                        <div className="rounded-lg border p-6">
                            <h3 className="font-mono text-lg font-semibold">releaseFunds()</h3>
                            <p className="text-sm text-muted-foreground mt-2">Release funds to user (called via Hyperlane)</p>
                            <div className="mt-4 rounded bg-muted p-3 text-sm font-mono overflow-x-auto">
                                <pre>function releaseFunds(address recipient, address token, uint256 amount) external</pre>
                            </div>
                            <p className="text-sm mt-3 text-muted-foreground">Only callable by Hyperlane router from Sapphire</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Events
                    </h2>
                    <div className="mt-6 space-y-4">
                        <div className="rounded-lg bg-muted p-4 font-mono text-sm">
                            event DepositCreated(uint256 indexed depositId, address indexed depositor, address token, uint256 amount)
                        </div>
                        <div className="rounded-lg bg-muted p-4 font-mono text-sm">
                            event ActionInitiated(uint256 indexed depositId, bytes32 actionHash, bytes encryptedPayload)
                        </div>
                        <div className="rounded-lg bg-muted p-4 font-mono text-sm">
                            event FundsReleased(address indexed recipient, address token, uint256 amount)
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Related
                    </h2>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        <Link href="/smart-contracts/core" className="group flex items-center justify-between rounded-lg border p-4 hover:bg-muted">
                            <div><h3 className="font-semibold">LendingCore</h3><p className="text-sm text-muted-foreground">Sapphire contract</p></div>
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                        <Link href="/smart-contracts/deployment" className="group flex items-center justify-between rounded-lg border p-4 hover:bg-muted">
                            <div><h3 className="font-semibold">Deployment</h3><p className="text-sm text-muted-foreground">Deploy contracts</p></div>
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
