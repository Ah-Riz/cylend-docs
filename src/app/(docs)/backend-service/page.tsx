import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Server, Clock, AlertTriangle, Zap } from "lucide-react";
import { Callout } from "@/components/callout";

export const metadata: Metadata = {
    title: "Backend Service",
    description: "Automated action processing service for Cylend",
};

export default function BackendServicePage() {
    return (
        <div>
            <div className="space-y-2">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Backend Service</h1>
                <p className="text-lg text-muted-foreground">
                    Automated service for processing encrypted actions on Sapphire
                </p>
            </div>

            <div className="mt-12 space-y-10">
                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Why a Backend Service?
                    </h2>

                    <p className="mt-6 leading-7">
                        The backend service is a critical component that automates action processing on the Sapphire network.
                        Here's why it's necessary:
                    </p>

                    <div className="mt-6 space-y-4">
                        <div className="flex items-start gap-3">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold flex-shrink-0 mt-0.5">!</div>
                            <div>
                                <h3 className="font-semibold">Owner-Only Function</h3>
                                <p className="text-sm text-muted-foreground">
                                    The <code>processAction()</code> function on LendingCore is protected with <code>onlyOwner</code> modifier
                                    and can only be called by the contract deployer.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold flex-shrink-0 mt-0.5">!</div>
                            <div>
                                <h3 className="font-semibold">Security</h3>
                                <p className="text-sm text-muted-foreground">
                                    Calling this function directly from the frontend would expose the owner private key, creating a
                                    significant security risk.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold flex-shrink-0 mt-0.5">!</div>
                            <div>
                                <h3 className="font-semibold">Automation</h3>
                                <p className="text-sm text-muted-foreground">
                                    Users shouldn't have to manually trigger action processing. The service monitors for new actions
                                    and processes them automatically.
                                </p>
                            </div>
                        </div>
                    </div>

                    <Callout type="important">
                        <p>
                            Without the backend service, submitted actions will remain pending indefinitely. The service is
                            <strong> required for production deployments</strong>.
                        </p>
                    </Callout>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        How It Works
                    </h2>

                    <div className="mt-6 space-y-4">
                        <div className="rounded-lg border p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                                    <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <h3 className="text-xl font-semibold">1. Event Monitoring</h3>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                The service continuously monitors the Ponder GraphQL API for new <code>EncryptedActionStored</code> events
                                on Sapphire. Polling interval is configurable (default: 10 seconds).
                            </p>
                        </div>

                        <div className="rounded-lg border p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900">
                                    <Server className="h-6 w-6 text-green-600 dark:text-green-400" />
                                </div>
                                <h3 className="text-xl font-semibold">2. Price Validation</h3>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Before processing, the service checks if oracle prices are stale. If needed, it calls{" "}
                                <code>updatePriceFromRoflOracle()</code> to fetch latest prices.
                            </p>
                        </div>

                        <div className="rounded-lg border p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900">
                                    <Zap className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                                </div>
                                <h3 className="text-xl font-semibold">3. Action Processing</h3>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                The service calls <code>processAction(actionId)</code> on the LendingCore contract using the owner
                                private key. The contract decrypts the action, validates it, and executes the lending logic.
                            </p>
                        </div>

                        <div className="rounded-lg border p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-100 dark:bg-yellow-900">
                                    <AlertTriangle className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                                </div>
                                <h3 className="text-xl font-semibold">4. Error Handling & Retry</h3>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                If processing fails (network issues, insufficient gas, etc.), the service retries with exponential
                                backoff. Failed actions after max retries are logged for manual intervention.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Quick Start
                    </h2>

                    <p className="mt-6 leading-7">
                        Get the backend service running:
                    </p>

                    <ol className="mt-6 space-y-4">
                        <li className="flex items-start gap-3">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold flex-shrink-0">1</div>
                            <div className="flex-1">
                                <p className="font-medium">Navigate to service directory</p>
                                <div className="mt-2 rounded-lg bg-muted p-3">
                                    <code className="text-sm">cd cylend-service</code>
                                </div>
                            </div>
                        </li>

                        <li className="flex items-start gap-3">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold flex-shrink-0">2</div>
                            <div className="flex-1">
                                <p className="font-medium">Configure environment variables</p>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Set <code>OWNER_PRIVATE_KEY</code> and other configs in <code>.env</code> (see{" "}
                                    <Link href="/getting-started/configuration" className="text-primary hover:underline">Configuration</Link>)
                                </p>
                            </div>
                        </li>

                        <li className="flex items-start gap-3">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold flex-shrink-0">3</div>
                            <div className="flex-1">
                                <p className="font-medium">Start the service</p>
                                <div className="mt-2 rounded-lg bg-muted p-3">
                                    <code className="text-sm">npm run dev</code>
                                </div>
                                <p className="text-sm text-muted-foreground mt-2">
                                    For production: <code>npm run build && npm run start</code>
                                </p>
                            </div>
                        </li>
                    </ol>

                    <Callout type="caution">
                        <p>
                            The <code>OWNER_PRIVATE_KEY</code> must be the deployer address with permissions to call <code>processAction()</code>.
                            Store this securely using environment managers or secret vaults in production!
                        </p>
                    </Callout>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Configuration Options
                    </h2>

                    <p className="mt-6 leading-7">
                        Available environment variables:
                    </p>

                    <div className="mt-6 rounded-lg bg-muted p-4">
                        <div className="space-y-3 text-sm font-mono">
                            <div className="grid grid-cols-[200px_1fr] gap-4">
                                <code className="text-muted-foreground">PONDER_API_URL</code>
                                <span>Ponder GraphQL API endpoint</span>
                            </div>
                            <div className="grid grid-cols-[200px_1fr] gap-4">
                                <code className="text-muted-foreground">SAPPHIRE_RPC_URL</code>
                                <span>Sapphire Testnet RPC URL</span>
                            </div>
                            <div className="grid grid-cols-[200px_1fr] gap-4">
                                <code className="text-muted-foreground">CORE_ADDRESS</code>
                                <span>LendingCore contract address</span>
                            </div>
                            <div className="grid grid-cols-[200px_1fr] gap-4">
                                <code className="text-red-600 dark:text-red-400">OWNER_PRIVATE_KEY</code>
                                <span><strong>Required:</strong> Owner wallet private key</span>
                            </div>
                            <div className="grid grid-cols-[200px_1fr] gap-4">
                                <code className="text-muted-foreground">POLL_INTERVAL</code>
                                <span>Polling interval in ms (default: 10000)</span>
                            </div>
                            <div className="grid grid-cols-[200px_1fr] gap-4">
                                <code className="text-muted-foreground">MAX_RETRIES</code>
                                <span>Max retries for failed txs (default: 3)</span>
                            </div>
                            <div className="grid grid-cols-[200px_1fr] gap-4">
                                <code className="text-muted-foreground">RETRY_DELAY</code>
                                <span>Delay between retries in ms (default: 5000)</span>
                            </div>
                            <div className="grid grid-cols-[200px_1fr] gap-4">
                                <code className="text-muted-foreground">LOG_LEVEL</code>
                                <span>Log level: debug|info|warn|error (default: info)</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Monitoring & Logs
                    </h2>

                    <p className="mt-6 leading-7">
                        The service provides detailed logging for monitoring:
                    </p>

                    <div className="mt-6 space-y-3">
                        <div className="rounded-lg border p-4">
                            <h3 className="font-semibold text-sm mb-2">Startup Logs</h3>
                            <div className="rounded-lg bg-muted p-3 text-xs font-mono">
                                <div>✓ Connected to Ponder API</div>
                                <div>✓ Connected to Sapphire RPC</div>
                                <div>✓ Monitoring for actions...</div>
                            </div>
                        </div>

                        <div className="rounded-lg border p-4">
                            <h3 className="font-semibold text-sm mb-2">Action Processing Logs</h3>
                            <div className="rounded-lg bg-muted p-3 text-xs font-mono">
                                <div>→ New action detected: 0xabc...123</div>
                                <div>→ Checking price staleness...</div>
                                <div>→ Processing action 0xabc...123</div>
                                <div>✓ Action processed successfully</div>
                            </div>
                        </div>

                        <div className="rounded-lg border p-4">
                            <h3 className="font-semibold text-sm mb-2">Error Logs</h3>
                            <div className="rounded-lg bg-muted p-3 text-xs font-mono text-red-600 dark:text-red-400">
                                <div>✗ Failed to process action 0xabc...123</div>
                                <div>  Retrying (attempt 1/3)...</div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Production Deployment
                    </h2>

                    <p className="mt-6 leading-7">
                        Best practices for deploying the service to production:
                    </p>

                    <ul className="mt-4 space-y-3">
                        <li className="flex items-start gap-2">
                            <span className="text-green-500 mt-1">✓</span>
                            <div>
                                <strong>Use Process Manager:</strong> Deploy with PM2, systemd, or Docker for automatic restarts
                            </div>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-green-500 mt-1">✓</span>
                            <div>
                                <strong>Secure Private Keys:</strong> Use AWS Secrets Manager, Vault, or environment encryption
                            </div>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-green-500 mt-1">✓</span>
                            <div>
                                <strong>Monitor Logs:</strong> Set up log aggregation with CloudWatch, Datadog, or similar
                            </div>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-green-500 mt-1">✓</span>
                            <div>
                                <strong>Alerting:</strong> Configure alerts for processing failures and missed actions
                            </div>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-green-500 mt-1">✓</span>
                            <div>
                                <strong>Dedicated RPC:</strong> Use dedicated RPC endpoints (Alchemy, Infura) for reliability
                            </div>
                        </li>
                    </ul>

                    <Callout type="tip">
                        <p>
                            See the <Link href="/backend-service/deployment" className="text-primary hover:underline">Deployment Guide</Link> for
                            detailed production deployment instructions.
                        </p>
                    </Callout>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Learn More
                    </h2>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        <Link
                            href="/backend-service/setup"
                            className="group flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted"
                        >
                            <div>
                                <h3 className="font-semibold">Setup Guide</h3>
                                <p className="mt-1 text-sm text-muted-foreground">Detailed setup instructions</p>
                            </div>
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>

                        <Link
                            href="/backend-service/action-processor"
                            className="group flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted"
                        >
                            <div>
                                <h3 className="font-semibold">Action Processor</h3>
                                <p className="mt-1 text-sm text-muted-foreground">Processing logic details</p>
                            </div>
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>

                        <Link
                            href="/backend-service/price-updater"
                            className="group flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted"
                        >
                            <div>
                                <h3 className="font-semibold">Price Updater</h3>
                                <p className="mt-1 text-sm text-muted-foreground">Oracle integration</p>
                            </div>
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>

                        <Link
                            href="/backend-service/deployment"
                            className="group flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted"
                        >
                            <div>
                                <h3 className="font-semibold">Deployment</h3>
                                <p className="mt-1 text-sm text-muted-foreground">Production deployment guide</p>
                            </div>
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
