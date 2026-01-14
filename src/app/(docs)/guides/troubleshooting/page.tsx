import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, HelpCircle, AlertTriangle, Bug, Wifi } from "lucide-react";
import { Callout } from "@/components/callout";

export const metadata: Metadata = {
    title: "Troubleshooting",
    description: "Common issues and solutions for Cylend",
};

export default function TroubleshootingPage() {
    return (
        <div>
            <div className="space-y-2">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Troubleshooting</h1>
                <p className="text-lg text-muted-foreground">
                    Common issues and solutions when running Cylend
                </p>
            </div>

            <div className="mt-12 space-y-10">
                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Ponder Indexer Issues
                    </h2>

                    <div className="mt-6 space-y-4">
                        <div className="rounded-lg border p-6">
                            <div className="flex items-start gap-3">
                                <Bug className="h-5 w-5 text-red-500 mt-0.5" />
                                <div className="flex-1">
                                    <h3 className="font-semibold">Indexer won't start</h3>
                                    <p className="text-sm text-muted-foreground mt-2">
                                        <strong>Symptoms:</strong> Error on startup, can't connect to RPC
                                    </p>
                                    <div className="mt-3 space-y-2">
                                        <p className="text-sm font-medium">Solutions:</p>
                                        <ul className="text-sm text-muted-foreground space-y-1">
                                            <li>• Check RPC URLs in <code>.env</code> are correct and accessible</li>
                                            <li>• Test RPC with: <code>curl https://rpc.sepolia.mantle.xyz</code></li>
                                            <li>• Ensure contract addresses match deployed contracts</li>
                                            <li>• Try deleting <code>.ponder/</code> folder and restarting</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg border p-6">
                            <div className="flex items-start gap-3">
                                <Bug className="h-5 w-5 text-red-500 mt-0.5" />
                                <div className="flex-1">
                                    <h3 className="font-semibold">Indexer not syncing new events</h3>
                                    <p className="text-sm text-muted-foreground mt-2">
                                        <strong>Symptoms:</strong> Old data showing, new deposits not appearing
                                    </p>
                                    <div className="mt-3 space-y-2">
                                        <p className="text-sm font-medium">Solutions:</p>
                                        <ul className="text-sm text-muted-foreground space-y-1">
                                            <li>• Check if RPC has rate limiting issues</li>
                                            <li>• Verify start block in <code>ponder.config.ts</code></li>
                                            <li>• Run <code>npm run db migrate</code> to reset database</li>
                                            <li>• Use dedicated RPC endpoints for production</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg border p-6">
                            <div className="flex items-start gap-3">
                                <Bug className="h-5 w-5 text-red-500 mt-0.5" />
                                <div className="flex-1">
                                    <h3 className="font-semibold">GraphQL errors</h3>
                                    <p className="text-sm text-muted-foreground mt-2">
                                        <strong>Symptoms:</strong> Queries fail, schema errors
                                    </p>
                                    <div className="mt-3 space-y-2">
                                        <p className="text-sm font-medium">Solutions:</p>
                                        <ul className="text-sm text-muted-foreground space-y-1">
                                            <li>• Run <code>npm run codegen</code> to regenerate types</li>
                                            <li>• Check <code>ponder.schema.ts</code> for syntax errors</li>
                                            <li>• Verify indexer is running on port 42069</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Frontend Issues
                    </h2>

                    <div className="mt-6 space-y-4">
                        <div className="rounded-lg border p-6">
                            <div className="flex items-start gap-3">
                                <Wifi className="h-5 w-5 text-orange-500 mt-0.5" />
                                <div className="flex-1">
                                    <h3 className="font-semibold">Can't connect to Ponder API</h3>
                                    <p className="text-sm text-muted-foreground mt-2">
                                        <strong>Symptoms:</strong> "Failed to fetch" errors, empty data
                                    </p>
                                    <div className="mt-3 space-y-2">
                                        <p className="text-sm font-medium">Solutions:</p>
                                        <ul className="text-sm text-muted-foreground space-y-1">
                                            <li>• Ensure Ponder is running before starting frontend</li>
                                            <li>• Check <code>NEXT_PUBLIC_PONDER_API_URL</code> is correct</li>
                                            <li>• Look for CORS errors in browser console</li>
                                            <li>• Verify Ponder GraphQL at <code>localhost:42069/graphql</code></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg border p-6">
                            <div className="flex items-start gap-3">
                                <Wifi className="h-5 w-5 text-orange-500 mt-0.5" />
                                <div className="flex-1">
                                    <h3 className="font-semibold">Wallet connection fails</h3>
                                    <p className="text-sm text-muted-foreground mt-2">
                                        <strong>Symptoms:</strong> Wallet won't connect, RainbowKit errors
                                    </p>
                                    <div className="mt-3 space-y-2">
                                        <p className="text-sm font-medium">Solutions:</p>
                                        <ul className="text-sm text-muted-foreground space-y-1">
                                            <li>• Get a WalletConnect Project ID from <a href="https://cloud.walletconnect.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">WalletConnect Cloud</a></li>
                                            <li>• Set <code>NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID</code></li>
                                            <li>• Ensure wallet is connected to Mantle Sepolia</li>
                                            <li>• Try a different wallet (MetaMask, Rainbow, etc.)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg border p-6">
                            <div className="flex items-start gap-3">
                                <Wifi className="h-5 w-5 text-orange-500 mt-0.5" />
                                <div className="flex-1">
                                    <h3 className="font-semibold">Transaction fails</h3>
                                    <p className="text-sm text-muted-foreground mt-2">
                                        <strong>Symptoms:</strong> Deposit or action transaction reverts
                                    </p>
                                    <div className="mt-3 space-y-2">
                                        <p className="text-sm font-medium">Solutions:</p>
                                        <ul className="text-sm text-muted-foreground space-y-1">
                                            <li>• Check you have enough MNT for gas</li>
                                            <li>• Verify contract addresses are correct</li>
                                            <li>• For ERC20 deposits, ensure token approval first</li>
                                            <li>• Check explorer for detailed error message</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Backend Service Issues
                    </h2>

                    <div className="mt-6 space-y-4">
                        <div className="rounded-lg border p-6">
                            <div className="flex items-start gap-3">
                                <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5" />
                                <div className="flex-1">
                                    <h3 className="font-semibold">Actions stuck in "Pending"</h3>
                                    <p className="text-sm text-muted-foreground mt-2">
                                        <strong>Symptoms:</strong> Actions never process, no backend logs
                                    </p>
                                    <div className="mt-3 space-y-2">
                                        <p className="text-sm font-medium">Solutions:</p>
                                        <ul className="text-sm text-muted-foreground space-y-1">
                                            <li>• Verify backend service is running</li>
                                            <li>• Check <code>OWNER_PRIVATE_KEY</code> is correct deployer address</li>
                                            <li>• Ensure owner wallet has ROSE for Sapphire gas</li>
                                            <li>• Check service logs for error messages</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg border p-6">
                            <div className="flex items-start gap-3">
                                <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5" />
                                <div className="flex-1">
                                    <h3 className="font-semibold">processAction() fails</h3>
                                    <p className="text-sm text-muted-foreground mt-2">
                                        <strong>Symptoms:</strong> Service logs show transaction errors
                                    </p>
                                    <div className="mt-3 space-y-2">
                                        <p className="text-sm font-medium">Solutions:</p>
                                        <ul className="text-sm text-muted-foreground space-y-1">
                                            <li>• Verify <code>CORE_ADDRESS</code> is correct LendingCore address</li>
                                            <li>• Check Sapphire RPC is accessible</li>
                                            <li>• Ensure prices aren't stale (oracle may need update)</li>
                                            <li>• Check health factor for borrow/withdraw actions</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg border p-6">
                            <div className="flex items-start gap-3">
                                <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5" />
                                <div className="flex-1">
                                    <h3 className="font-semibold">Service can't find pending actions</h3>
                                    <p className="text-sm text-muted-foreground mt-2">
                                        <strong>Symptoms:</strong> "No pending actions" but actions exist
                                    </p>
                                    <div className="mt-3 space-y-2">
                                        <p className="text-sm font-medium">Solutions:</p>
                                        <ul className="text-sm text-muted-foreground space-y-1">
                                            <li>• Check <code>PONDER_API_URL</code> points to running Ponder</li>
                                            <li>• Verify Ponder has indexed the action events</li>
                                            <li>• Check GraphQL query in service code</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Common Error Messages
                    </h2>

                    <div className="mt-6 space-y-3">
                        <div className="rounded-lg bg-muted p-4">
                            <code className="text-sm text-red-600 dark:text-red-400">Error: insufficient funds for gas</code>
                            <p className="text-sm text-muted-foreground mt-2">
                                Get testnet tokens from faucets. You need MNT for Mantle and ROSE for Sapphire.
                            </p>
                        </div>

                        <div className="rounded-lg bg-muted p-4">
                            <code className="text-sm text-red-600 dark:text-red-400">Error: execution reverted: Ownable: caller is not the owner</code>
                            <p className="text-sm text-muted-foreground mt-2">
                                The <code>OWNER_PRIVATE_KEY</code> doesn't have permission. Use the deployer's private key.
                            </p>
                        </div>

                        <div className="rounded-lg bg-muted p-4">
                            <code className="text-sm text-red-600 dark:text-red-400">Error: health factor too low</code>
                            <p className="text-sm text-muted-foreground mt-2">
                                Borrow or withdraw would make health factor fall below 1.0. Reduce the amount or add collateral.
                            </p>
                        </div>

                        <div className="rounded-lg bg-muted p-4">
                            <code className="text-sm text-red-600 dark:text-red-400">Error: deposit not found or already released</code>
                            <p className="text-sm text-muted-foreground mt-2">
                                The deposit was already fully consumed or doesn't belong to your address.
                            </p>
                        </div>

                        <div className="rounded-lg bg-muted p-4">
                            <code className="text-sm text-red-600 dark:text-red-400">Error: CORS policy blocked</code>
                            <p className="text-sm text-muted-foreground mt-2">
                                Frontend and Ponder are on different ports. Ponder should handle CORS automatically in dev mode.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Getting Help
                    </h2>

                    <div className="mt-6 space-y-4">
                        <p className="leading-7">
                            If you're still stuck, here are some resources:
                        </p>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <a
                                href="https://github.com/Ah-Riz/cylend_fe/issues"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-lg border p-4 hover:bg-muted transition-colors"
                            >
                                <h3 className="font-semibold">GitHub Issues</h3>
                                <p className="text-sm text-muted-foreground mt-1">Report bugs or ask questions</p>
                            </a>

                            <a
                                href="https://github.com/Ah-Riz/cylend_fe"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-lg border p-4 hover:bg-muted transition-colors"
                            >
                                <h3 className="font-semibold">Source Code</h3>
                                <p className="text-sm text-muted-foreground mt-1">Check implementation details</p>
                            </a>
                        </div>
                    </div>

                    <Callout type="tip">
                        <p>
                            When reporting issues, include: error messages, terminal logs, browser console output, and steps to reproduce.
                        </p>
                    </Callout>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Related Guides
                    </h2>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        <Link
                            href="/getting-started/configuration"
                            className="group flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted"
                        >
                            <div>
                                <h3 className="font-semibold">Configuration</h3>
                                <p className="mt-1 text-sm text-muted-foreground">Environment setup guide</p>
                            </div>
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>

                        <Link
                            href="/backend-service"
                            className="group flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted"
                        >
                            <div>
                                <h3 className="font-semibold">Backend Service</h3>
                                <p className="mt-1 text-sm text-muted-foreground">Action processing details</p>
                            </div>
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
