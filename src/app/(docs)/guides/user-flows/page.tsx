import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ArrowUpCircle, ArrowDownCircle, Repeat, DollarSign } from "lucide-react";
import { Callout } from "@/components/callout";

export const metadata: Metadata = {
    title: "User Flows",
    description: "Complete guides for all Cylend user operations and flows",
};

export default function UserFlowsPage() {
    return (
        <div>
            <div className="space-y-2">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">User Flows</h1>
                <p className="text-lg text-muted-foreground">
                    Comprehensive guides for all user operations in Cylend's privacy-preserving lending protocol
                </p>
            </div>

            <div className="mt-12 space-y-10">
                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Overview
                    </h2>

                    <p className="mt-6 leading-7">
                        Cylend supports four main user actions, organized into two flow patterns:
                    </p>

                    <div className="mt-6 grid gap-6 md:grid-cols-2">
                        <div className="rounded-lg border p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                                    <ArrowUpCircle className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <h3 className="text-xl font-semibold">One-Way Flows</h3>
                            </div>
                            <p className="text-sm text-muted-foreground mb-4">
                                Actions that move funds from user to protocol (non-reversible)
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span><strong>Supply:</strong> Deposit collateral into the lending pool</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span><strong>Repay:</strong> Pay back borrowed amounts</span>
                                </li>
                            </ul>
                        </div>

                        <div className="rounded-lg border p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900">
                                    <Repeat className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                                </div>
                                <h3 className="text-xl font-semibold">Round-Trip Flows</h3>
                            </div>
                            <p className="text-sm text-muted-foreground mb-4">
                                Actions that move funds from protocol to user (reversible)
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span><strong>Borrow:</strong> Take out a loan against collateral</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span><strong>Withdraw:</strong> Remove collateral from the pool</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Action Flow Patterns
                    </h2>

                    <div className="mt-6 space-y-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-4">One-Way Flow: Supply & Repay</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                These actions use deposit buckets and don't trigger fund releases back to the user:
                            </p>

                            <div className="my-6 rounded-lg border overflow-hidden bg-white dark:bg-gray-950">
                                <Image
                                    src="/action, supply:repay (one-way flow).png"
                                    alt="Supply and Repay Flow - One-Way Action Pattern"
                                    width={1200}
                                    height={600}
                                    className="w-full h-auto"
                                />
                            </div>

                            <div className="mt-4 space-y-3 text-sm">
                                <div className="flex items-start gap-3">
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold flex-shrink-0">1</div>
                                    <div>
                                        <p className="font-medium">User creates or selects deposit</p>
                                        <p className="text-muted-foreground">Deposit bucket holds funds on Mantle Ingress contract</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold flex-shrink-0">2</div>
                                    <div>
                                        <p className="font-medium">Action payload encrypted client-side</p>
                                        <p className="text-muted-foreground">Frontend uses Sapphire SDK to encrypt amount, token, and depositId</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold flex-shrink-0">3</div>
                                    <div>
                                        <p className="font-medium">Submitted to Mantle, relayed to Sapphire</p>
                                        <p className="text-muted-foreground">Hyperlane forwards encrypted message cross-chain</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold flex-shrink-0">4</div>
                                    <div>
                                        <p className="font-medium">Backend service processes action</p>
                                        <p className="text-muted-foreground">Calls processAction() on LendingCore, updates position</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold flex-shrink-0">5</div>
                                    <div>
                                        <p className="font-medium">Deposit amount reduced</p>
                                        <p className="text-muted-foreground">Remaining balance in deposit bucket updated, no funds released</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-4">Round-Trip Flow: Borrow & Withdraw</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                These actions trigger fund releases back to the user after validation:
                            </p>

                            <div className="my-6 rounded-lg border overflow-hidden bg-white dark:bg-gray-950">
                                <Image
                                    src="/action, borrow:withdraw (round-trip flow).png"
                                    alt="Borrow and Withdraw Flow - Round-Trip Action Pattern"
                                    width={1200}
                                    height={600}
                                    className="w-full h-auto"
                                />
                            </div>

                            <div className="mt-4 space-y-3 text-sm">
                                <div className="flex items-start gap-3">
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold flex-shrink-0">1</div>
                                    <div>
                                        <p className="font-medium">User submits borrow/withdraw request</p>
                                        <p className="text-muted-foreground">Specifies amount and token to receive</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold flex-shrink-0">2</div>
                                    <div>
                                        <p className="font-medium">Encrypted payload sent to Sapphire</p>
                                        <p className="text-muted-foreground">Same encryption flow as one-way actions</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold flex-shrink-0">3</div>
                                    <div>
                                        <p className="font-medium">LendingCore validates health factor</p>
                                        <p className="text-muted-foreground">Ensures user maintains sufficient collateral ratio</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold flex-shrink-0">4</div>
                                    <div>
                                        <p className="font-medium">Release instruction sent back to Mantle</p>
                                        <p className="text-muted-foreground">Hyperlane relays release message if validation passes</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold flex-shrink-0">5</div>
                                    <div>
                                        <p className="font-medium">Funds released to user wallet</p>
                                        <p className="text-muted-foreground">Ingress contract transfers tokens directly to user</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Callout type="important">
                        <p>
                            The key difference: <strong>One-way flows</strong> consume deposit buckets without releasing funds,
                            while <strong>round-trip flows</strong> trigger fund releases after Sapphire validates the action.
                        </p>
                    </Callout>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Detailed Flow Guides
                    </h2>

                    <p className="mt-6 leading-7">
                        Explore detailed step-by-step guides for each operation:
                    </p>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-lg border p-6">
                            <div className="flex items-center gap-3 mb-3">
                                <DollarSign className="h-6 w-6 text-primary" />
                                <h3 className="font-semibold">Deposit Flow</h3>
                            </div>
                            <p className="text-sm text-muted-foreground mb-4">
                                Create deposit buckets to hold funds for future actions. Supports both native tokens and ERC20s.
                            </p>
                            <ul className="space-y-1 text-sm text-muted-foreground">
                                <li>• Create native or ERC20 deposits</li>
                                <li>• Track deposit remaining balances</li>
                                <li>• Reuse deposits across actions</li>
                            </ul>
                        </div>

                        <div className="rounded-lg border p-6">
                            <div className="flex items-center gap-3 mb-3">
                                <ArrowUpCircle className="h-6 w-6 text-blue-500" />
                                <h3 className="font-semibold">Supply Flow</h3>
                            </div>
                            <p className="text-sm text-muted-foreground mb-4">
                                Allocate capital as collateral to the lending pool. Enables borrowing against supplied assets.
                            </p>
                            <ul className="space-y-1 text-sm text-muted-foreground">
                                <li>• Select existing deposit or create new</li>
                                <li>• Encrypted submission to Sapphire</li>
                                <li>• Increases collateral position</li>
                            </ul>
                        </div>

                        <div className="rounded-lg border p-6">
                            <div className="flex items-center gap-3 mb-3">
                                <ArrowDownCircle className="h-6 w-6 text-green-500" />
                                <h3 className="font-semibold">Borrow Flow</h3>
                            </div>
                            <p className="text-sm text-muted-foreground mb-4">
                                Take out loans against your collateral. Health factor must remain above minimum threshold.
                            </p>
                            <ul className="space-y-1 text-sm text-muted-foreground">
                                <li>• Specify borrow amount and token</li>
                                <li>• Health factor validation on Sapphire</li>
                                <li>• Funds released to wallet if approved</li>
                            </ul>
                        </div>

                        <div className="rounded-lg border p-6">
                            <div className="flex items-center gap-3 mb-3">
                                <Repeat className="h-6 w-6 text-purple-500" />
                                <h3 className="font-semibold">Repay Flow</h3>
                            </div>
                            <p className="text-sm text-muted-foreground mb-4">
                                Pay back borrowed amounts to reduce debt and improve health factor.
                            </p>
                            <ul className="space-y-1 text-sm text-muted-foreground">
                                <li>• Create deposit for repayment amount</li>
                                <li>• Reduces outstanding borrow position</li>
                                <li>• Improves health factor</li>
                            </ul>
                        </div>

                        <div className="rounded-lg border p-6">
                            <div className="flex items-center gap-3 mb-3">
                                <ArrowDownCircle className="h-6 w-6 text-orange-500" />
                                <h3 className="font-semibold">Withdraw Flow</h3>
                            </div>
                            <p className="text-sm text-muted-foreground mb-4">
                                Remove collateral from the lending pool. Must maintain minimum health factor.
                            </p>
                            <ul className="space-y-1 text-sm text-muted-foreground">
                                <li>• Specify withdrawal amount</li>
                                <li>• Health factor validation required</li>
                                <li>• Collateral released to wallet</li>
                            </ul>
                        </div>

                        <div className="rounded-lg border p-6 flex items-center">
                            <Link href="/guides/deposit-management" className="flex-1 group">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-semibold mb-1">Deposit Management</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Learn about deposit buckets and partial usage
                                        </p>
                                    </div>
                                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Common Patterns
                    </h2>

                    <div className="mt-6 space-y-6">
                        <div className="rounded-lg border p-6">
                            <h3 className="font-semibold mb-3">Pattern 1: Simple Supply & Borrow</h3>
                            <ol className="space-y-2 text-sm">
                                <li>1. Create deposit with 10 USDC</li>
                                <li>2. Supply 10 USDC as collateral</li>
                                <li>3. Borrow 5 USDT against collateral</li>
                                <li>4. Monitor health factor</li>
                            </ol>
                        </div>

                        <div className="rounded-lg border p-6">
                            <h3 className="font-semibold mb-3">Pattern 2: Multiple Supplies from One Deposit</h3>
                            <ol className="space-y-2 text-sm">
                                <li>1. Create deposit with 100 USDC</li>
                                <li>2. Supply 30 USDC (deposit has 70 remaining)</li>
                                <li>3. Supply another 40 USDC (deposit has 30 remaining)</li>
                                <li>4. Supply final 30 USDC (deposit fully spent)</li>
                            </ol>
                        </div>

                        <div className="rounded-lg border p-6">
                            <h3 className="font-semibold mb-3">Pattern 3: Repay & Withdraw</h3>
                            <ol className="space-y-2 text-sm">
                                <li>1. Have outstanding borrow of 5 USDT</li>
                                <li>2. Create deposit with 5 USDT for repayment</li>
                                <li>3. Repay 5 USDT (debt cleared, health factor improves)</li>
                                <li>4. Withdraw collateral back to wallet</li>
                            </ol>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Understanding Health Factor
                    </h2>

                    <p className="mt-6 leading-7">
                        The health factor determines whether you can borrow or withdraw:
                    </p>

                    <div className="mt-6 rounded-lg bg-muted p-6">
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-semibold text-sm mb-2">Formula:</h3>
                                <code className="text-sm">Health Factor = (Collateral Value × Liquidation Threshold) / Borrowed Value</code>
                            </div>

                            <div>
                                <h3 className="font-semibold text-sm mb-2">Safety Levels:</h3>
                                <ul className="space-y-2 text-sm">
                                    <li>• <strong>≥ 1.5:</strong> <span className="text-green-600 dark:text-green-400">Safe</span> - Room for more borrowing</li>
                                    <li>• <strong>1.0 - 1.5:</strong> <span className="text-yellow-600 dark:text-yellow-400">Caution</span> - Monitor closely</li>
                                    <li>• <strong>&lt; 1.0:</strong> <span className="text-red-600 dark:text-red-400">Danger</span> - Risk of liquidation</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <Callout type="warning">
                        <p>
                            If your health factor drops below 1.0, your position may be liquidated to protect the protocol.
                            Always maintain a healthy collateral ratio!
                        </p>
                    </Callout>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Next Steps
                    </h2>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        <Link
                            href="/guides/deposit-management"
                            className="group flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted"
                        >
                            <div>
                                <h3 className="font-semibold">Deposit Management</h3>
                                <p className="mt-1 text-sm text-muted-foreground">Deep dive into deposit buckets</p>
                            </div>
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>

                        <Link
                            href="/guides/troubleshooting"
                            className="group flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted"
                        >
                            <div>
                                <h3 className="font-semibold">Troubleshooting</h3>
                                <p className="mt-1 text-sm text-muted-foreground">Common issues and solutions</p>
                            </div>
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
