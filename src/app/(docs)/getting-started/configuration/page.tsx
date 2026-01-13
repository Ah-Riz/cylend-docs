import { Metadata } from "next";
import Link from "next/link";
import { FileCode, ArrowRight, AlertCircle } from "lucide-react";
import { Callout } from "@/components/callout";

export const metadata: Metadata = {
    title: "Configuration",
    description: "Configure environment variables for Cylend components",
};

export default function ConfigurationPage() {
    return (
        <div>
            <div className="space-y-2">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Configuration</h1>
                <p className="text-lg text-muted-foreground">
                    Set up environment variables for all Cylend components
                </p>
            </div>

            <div className="mt-12 space-y-10">
                <Callout type="caution">
                    <p>
                        <strong>Never commit private keys or sensitive credentials to version control!</strong> Use <code>.env.local</code> for
                        local development and secure environment variable management in production.
                    </p>
                </Callout>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Frontend Configuration
                    </h2>

                    <p className="mt-6 leading-7">
                        Create a <code>.env</code> file in the root directory:
                    </p>

                    <div className="mt-4 rounded-lg bg-muted p-4">
                        <div className="flex items-center gap-2 mb-2">
                            <FileCode className="h-4 w-4" />
                            <span className="text-sm font-mono">.env</span>
                        </div>
                        <pre className="overflow-x-auto text-sm"><code>{`# Frontend Configuration
NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_ENABLE_ANALYTICS=false
NEXT_PUBLIC_ENABLE_DEBUG=false

# Contract Addresses
NEXT_PUBLIC_INGRESS_ADDRESS=0xeee5Cbff1b1E41d98c5530296E9f0B079B38F7f1
NEXT_PUBLIC_CORE_ADDRESS=0x22BFa5A91CBE80C649f56cD423bF43847566b5Ba
NEXT_PUBLIC_ROUTER_ADDRESS=0xeee5Cbff1b1E41d98c5530296E9f0B079B38F7f1
NEXT_PUBLIC_ISM_ADDRESS=0x24B255dB2e2D227ceaf8E474f68e342A4Cd32cB2

# Sapphire Public Key for Encryption
NEXT_PUBLIC_LENDING_PUBLIC_KEY=0xec9035501dfff50059bd1d512d8347d722f4ce950667b1abd6fc3a202a231c37

# Token Addresses
NEXT_PUBLIC_WMNT_ADDRESS=0x67A1f4A939b477A6b7c5BF94D97E45dE87E608eF
NEXT_PUBLIC_USDC_ADDRESS=0xAcab8129E2cE587fD203FD770ec9ECAFA2C88080
NEXT_PUBLIC_USDT_ADDRESS=0xcC4Ac915857532ADa58D69493554C6d869932Fe6

# WalletConnect Project ID
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id_here

# Ponder GraphQL API
NEXT_PUBLIC_PONDER_API_URL=http://localhost:42069/graphql

# Sapphire RPC (Optional)
NEXT_PUBLIC_SAPPHIRE_RPC_URL=https://testnet.sapphire.oasis.io`}</code></pre>
                    </div>

                    <div className="mt-6 space-y-4">
                        <h3 className="text-xl font-semibold">Key Variables Explained</h3>

                        <div className="space-y-3">
                            <div className="rounded-lg border p-4">
                                <h4 className="font-semibold text-sm">NEXT_PUBLIC_INGRESS_ADDRESS</h4>
                                <p className="mt-1 text-sm text-muted-foreground">
                                    Address of the <code>PrivateLendingIngress</code> contract deployed on Mantle Sepolia
                                </p>
                            </div>

                            <div className="rounded-lg border p-4">
                                <h4 className="font-semibold text-sm">NEXT_PUBLIC_CORE_ADDRESS</h4>
                                <p className="mt-1 text-sm text-muted-foreground">
                                    Address of the <code>LendingCore</code> contract deployed on Sapphire Testnet
                                </p>
                            </div>

                            <div className="rounded-lg border p-4">
                                <h4 className="font-semibold text-sm">NEXT_PUBLIC_LENDING_PUBLIC_KEY</h4>
                                <p className="mt-1 text-sm text-muted-foreground">
                                    Public key from Sapphire used for client-side encryption of action payloads
                                </p>
                            </div>

                            <div className="rounded-lg border p-4">
                                <h4 className="font-semibold text-sm">NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID</h4>
                                <p className="mt-1 text-sm text-muted-foreground">
                                    Get your free project ID from <a href="https://cloud.walletconnect.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">WalletConnect Cloud</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Ponder Indexer Configuration
                    </h2>

                    <p className="mt-6 leading-7">
                        Create a <code>.env</code> file in the <code>cylend-indexer/</code> directory:
                    </p>

                    <div className="mt-4 rounded-lg bg-muted p-4">
                        <div className="flex items-center gap-2 mb-2">
                            <FileCode className="h-4 w-4" />
                            <span className="text-sm font-mono">cylend-indexer/.env</span>
                        </div>
                        <pre className="overflow-x-auto text-sm"><code>{`# Ponder Indexer Configuration
PONDER_RPC_URL_MANTLE_SEPOLIA=https://rpc.sepolia.mantle.xyz
PONDER_RPC_URL_SAPPHIRE_TESTNET=https://testnet.sapphire.oasis.io

# Contract Addresses (Optional, defaults from ponder.config.ts)
INGRESS_ADDRESS=0xeee5Cbff1b1E41d98c5530296E9f0B079B38F7f1
CORE_ADDRESS=0x22BFa5A91CBE80C649f56cD423bF43847566b5Ba`}</code></pre>
                    </div>

                    <Callout type="note">
                        <p>
                            Ponder uses these RPC URLs to fetch blockchain events. For production, consider using dedicated RPC providers
                            like Alchemy, Infura, or QuickNode for better reliability and rate limits.
                        </p>
                    </Callout>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Backend Service Configuration
                    </h2>

                    <p className="mt-6 leading-7">
                        Create a <code>.env</code> file in the <code>cylend-service/</code> directory:
                    </p>

                    <div className="mt-4 rounded-lg bg-muted p-4">
                        <div className="flex items-center gap-2 mb-2">
                            <FileCode className="h-4 w-4" />
                            <span className="text-sm font-mono">cylend-service/.env</span>
                        </div>
                        <pre className="overflow-x-auto text-sm"><code>{`# Backend Service Configuration
PONDER_API_URL=http://localhost:42069/graphql
SAPPHIRE_RPC_URL=https://testnet.sapphire.oasis.io

# LendingCore Contract Address
CORE_ADDRESS=0x22BFa5A91CBE80C649f56cD423bF43847566b5Ba

# Owner Private Key (KEEP SECRET!)
OWNER_PRIVATE_KEY=0x...

# Optional Settings
POLL_INTERVAL=10000          # Polling interval in ms (default: 10000)
MAX_RETRIES=3                # Max retries for failed transactions (default: 3)
RETRY_DELAY=5000             # Delay between retries in ms (default: 5000)
LOG_LEVEL=info               # Log level: debug, info, warn, error (default: info)`}</code></pre>
                    </div>

                    <Callout type="caution">
                        <p className="flex items-start gap-2">
                            <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                            <span>
                                <strong>Security Warning:</strong> The <code>OWNER_PRIVATE_KEY</code> must be the private key
                                of the deployer address with permissions to call <code>processAction()</code> on LendingCore.
                                Store this securely using environment variable managers or secret vaults in production.
                            </span>
                        </p>
                    </Callout>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Network Configuration
                    </h2>

                    <p className="mt-6 leading-7">
                        Ensure your wallet is configured for the following networks:
                    </p>

                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                        <div className="rounded-lg border p-6">
                            <h3 className="font-semibold mb-3">Mantle Sepolia Testnet</h3>
                            <div className="space-y-2 text-sm">
                                <div>
                                    <span className="font-medium">Network Name:</span> Mantle Sepolia
                                </div>
                                <div>
                                    <span className="font-medium">RPC URL:</span> https://rpc.sepolia.mantle.xyz
                                </div>
                                <div>
                                    <span className="font-medium">Chain ID:</span> 5003
                                </div>
                                <div>
                                    <span className="font-medium">Currency:</span> MNT
                                </div>
                                <div>
                                    <span className="font-medium">Explorer:</span> <a href="https://sepolia.mantlescan.xyz" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">mantlescan.xyz</a>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg border p-6">
                            <h3 className="font-semibold mb-3">Sapphire Testnet</h3>
                            <div className="space-y-2 text-sm">
                                <div>
                                    <span className="font-medium">Network Name:</span> Sapphire Testnet
                                </div>
                                <div>
                                    <span className="font-medium">RPC URL:</span> https://testnet.sapphire.oasis.io
                                </div>
                                <div>
                                    <span className="font-medium">Chain ID:</span> 23295
                                </div>
                                <div>
                                    <span className="font-medium">Currency:</span> TEST
                                </div>
                                <div>
                                    <span className="font-medium">Explorer:</span> <a href="https://testnet.explorer.sapphire.oasis.io" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">explorer.sapphire.oasis.io</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Verify Configuration
                    </h2>

                    <p className="mt-6 leading-7">
                        After setting up all environment variables, verify your configuration:
                    </p>

                    <div className="mt-4 space-y-3">
                        <div className="flex items-start gap-3">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">1</div>
                            <div className="flex-1">
                                <p className="font-medium">Check that all .env files are created</p>
                                <p className="text-sm text-muted-foreground mt-1">Root, cylend-indexer/, and cylend-service/</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">2</div>
                            <div className="flex-1">
                                <p className="font-medium">Verify contract addresses are correct</p>
                                <p className="text-sm text-muted-foreground mt-1">Match with deployment receipts or block explorers</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">3</div>
                            <div className="flex-1">
                                <p className="font-medium">Test RPC connectivity</p>
                                <p className="text-sm text-muted-foreground mt-1">Ensure RPCs are accessible and responsive</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">4</div>
                            <div className="flex-1">
                                <p className="font-medium">Add .env files to .gitignore</p>
                                <p className="text-sm text-muted-foreground mt-1">Prevent accidental commits of secrets</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Next Steps
                    </h2>

                    <p className="mt-6 leading-7">
                        Configuration complete! Now you're ready to run the project:
                    </p>

                    <div className="mt-6">
                        <Link
                            href="/getting-started/quick-start"
                            className="group inline-flex items-center gap-2 rounded-lg border p-4 transition-colors hover:bg-muted"
                        >
                            <div className="flex-1">
                                <h3 className="font-semibold">Quick Start Guide</h3>
                                <p className="mt-1 text-sm text-muted-foreground">Start all services and make your first deposit</p>
                            </div>
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
