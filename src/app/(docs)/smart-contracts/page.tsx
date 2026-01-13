import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileCode, Shield } from "lucide-react";
import { Callout } from "@/components/callout";

export const metadata: Metadata = {
    title: "Smart Contracts",
    description: "Cylend smart contracts documentation and API reference",
};

export default function SmartContractsPage() {
    return (
        <div>
            <div className="space-y-2">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Smart Contracts</h1>
                <p className="text-lg text-muted-foreground">
                    Comprehensive documentation for Cylend's Solidity smart contracts
                </p>
            </div>

            <div className="mt-12 space-y-10">
                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Overview
                    </h2>

                    <p className="mt-6 leading-7">
                        Cylend's smart contract architecture consists of two primary contracts deployed across two networks:
                    </p>

                    <div className="mt-6 grid gap-6 md:grid-cols-2">
                        <div className="rounded-lg border p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                                    <FileCode className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold">PrivateLendingIngress</h3>
                                    <p className="text-sm text-muted-foreground">Mantle Sepolia</p>
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">
                                Public settlement layer contract managing deposits and fund releases
                            </p>
                            <ul className="space-y-1 text-sm">
                                <li>• Deposit creation (native & ERC20)</li>
                                <li>• Action submission</li>
                                <li>• Fund release handling</li>
                                <li>• Liquidity tracking</li>
                            </ul>
                            <div className="mt-4">
                                <Link
                                    href="/smart-contracts/ingress"
                                    className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                                >
                                    View Documentation <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>

                        <div className="rounded-lg border p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900">
                                    <Shield className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold">LendingCore</h3>
                                    <p className="text-sm text-muted-foreground">Sapphire Testnet</p>
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">
                                Private computation contract handling encrypted lending operations
                            </p>
                            <ul className="space-y-1 text-sm">
                                <li>• Encrypted action processing</li>
                                <li>• Position management</li>
                                <li>• Health factor calculations</li>
                                <li>• Price oracle integration</li>
                            </ul>
                            <div className="mt-4">
                                <Link
                                    href="/smart-contracts/core"
                                    className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                                >
                                    View Documentation <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Contract Addresses
                    </h2>

                    <p className="mt-6 leading-7">
                        Deployed contract addresses on testnet networks:
                    </p>

                    <div className="mt-4 space-y-4">
                        <div className="rounded-lg bg-muted p-4">
                            <h3 className="font-semibold mb-3">Mantle Sepolia Testnet</h3>
                            <div className="space-y-2 text-sm font-mono">
                                <div className="flex justify-between items-center">
                                    <span className="text-muted-foreground">PrivateLendingIngress:</span>
                                    <code className="bg-background px-2 py-1 rounded">0xeee5Cbff1b1E41d98c5530296E9f0B079B38F7f1</code>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-muted-foreground">Hyperlane Router:</span>
                                    <code className="bg-background px-2 py-1 rounded">0xeee5Cbff1b1E41d98c5530296E9f0B079B38F7f1</code>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-muted-foreground">ISM:</span>
                                    <code className="bg-background px-2 py-1 rounded">0x24B255dB2e2D227ceaf8E474f68e342A4Cd32cB2</code>
                                </div>
                            </div>
                            <div className="mt-3">
                                <a
                                    href="https://sepolia.mantlescan.xyz/address/0xeee5Cbff1b1E41d98c5530296E9f0B079B38F7f1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-primary hover:underline"
                                >
                                    View on Mantle Explorer →
                                </a>
                            </div>
                        </div>

                        <div className="rounded-lg bg-muted p-4">
                            <h3 className="font-semibold mb-3">Sapphire Testnet</h3>
                            <div className="space-y-2 text-sm font-mono">
                                <div className="flex justify-between items-center">
                                    <span className="text-muted-foreground">LendingCore:</span>
                                    <code className="bg-background px-2 py-1 rounded">0x22BFa5A91CBE80C649f56cD423bF43847566b5Ba</code>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-muted-foreground">Public Key:</span>
                                    <code className="bg-background px-2 py-1 rounded text-xs">0xec9035501dfff50059bd1d512d8347d722f4ce95...</code>
                                </div>
                            </div>
                            <div className="mt-3">
                                <a
                                    href="https://testnet.explorer.sapphire.oasis.io/address/0x22BFa5A91CBE80C649f56cD423bF43847566b5Ba"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-primary hover:underline"
                                >
                                    View on Sapphire Explorer →
                                </a>
                            </div>
                        </div>
                    </div>

                    <Callout type="note">
                        <p>
                            These are testnet deployments. Production addresses will be different and will be updated here when available.
                        </p>
                    </Callout>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Development & Testing
                    </h2>

                    <p className="mt-6 leading-7">
                        The contracts are developed with Hardhat and include comprehensive test suites:
                    </p>

                    <div className="mt-6 space-y-4">
                        <div className="rounded-lg border p-6">
                            <h3 className="font-semibold mb-3">Local Development</h3>
                            <p className="text-sm text-muted-foreground mb-3">
                                Set up local Hardhat environment for contract development:
                            </p>
                            <div className="rounded-lg bg-muted p-4">
                                <pre className="overflow-x-auto text-sm"><code>{`# Install dependencies
npm install

# Compile contracts
npx hardhat compile

# Run tests
npx hardhat test

# Run tests with coverage
npx hardhat coverage`}</code></pre>
                            </div>
                        </div>

                        <div className="rounded-lg border p-6">
                            <h3 className="font-semibold mb-3">Deployment</h3>
                            <p className="text-sm text-muted-foreground mb-3">
                                Deploy contracts to testnets using Hardhat Ignition:
                            </p>
                            <div className="rounded-lg bg-muted p-4">
                                <pre className="overflow-x-auto text-sm"><code>{`# Deploy to Mantle Sepolia
npx hardhat ignition deploy ./ignition/modules/Ingress.ts --network mantle-sepolia

# Deploy to Sapphire Testnet
npx hardhat ignition deploy ./ignition/modules/LendingCore.ts --network sapphire-testnet

# Verify contracts
npx hardhat verify --network mantle-sepolia <CONTRACT_ADDRESS>`}</code></pre>
                            </div>
                        </div>
                    </div>

                    <Callout type="tip">
                        <p>
                            See the <Link href="/smart-contracts/deployment" className="text-primary hover:underline">Deployment Guide</Link> for detailed
                            deployment instructions and best practices.
                        </p>
                    </Callout>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Security Considerations
                    </h2>

                    <p className="mt-6 leading-7">
                        Key security features and access control mechanisms:
                    </p>

                    <div className="mt-6 space-y-4">
                        <div className="flex items-start gap-3">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white text-xs font-bold flex-shrink-0 mt-0.5">✓</div>
                            <div>
                                <h4 className="font-semibold">Owner-Only Functions</h4>
                                <p className="text-sm text-muted-foreground">
                                    Critical functions like <code>processAction()</code> are protected with <code>onlyOwner</code> modifier
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white text-xs font-bold flex-shrink-0 mt-0.5">✓</div>
                            <div>
                                <h4 className="font-semibold">Deposit Ownership</h4>
                                <p className="text-sm text-muted-foreground">
                                    Deposits can only be used by their creators, preventing unauthorized fund access
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white text-xs font-bold flex-shrink-0 mt-0.5">✓</div>
                            <div>
                                <h4 className="font-semibold">Health Factor Checks</h4>
                                <p className="text-sm text-muted-foreground">
                                    All borrow and withdraw operations validate health factors to prevent under-collateralization
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white text-xs font-bold flex-shrink-0 mt-0.5">✓</div>
                            <div>
                                <h4 className="font-semibold">Price Staleness</h4>
                                <p className="text-sm text-muted-foreground">
                                    Oracle prices are checked for staleness before processing actions
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white text-xs font-bold flex-shrink-0 mt-0.5">✓</div>
                            <div>
                                <h4 className="font-semibold">Trusted Hyperlane Messages</h4>
                                <p className="text-sm text-muted-foreground">
                                    Only messages from trusted Hyperlane routers are accepted for cross-chain communication
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Learn More
                    </h2>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        <Link
                            href="/smart-contracts/ingress"
                            className="group flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted"
                        >
                            <div>
                                <h3 className="font-semibold">PrivateLendingIngress</h3>
                                <p className="mt-1 text-sm text-muted-foreground">Mantle contract API reference</p>
                            </div>
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>

                        <Link
                            href="/smart-contracts/core"
                            className="group flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted"
                        >
                            <div>
                                <h3 className="font-semibold">LendingCore</h3>
                                <p className="mt-1 text-sm text-muted-foreground">Sapphire contract API reference</p>
                            </div>
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>

                        <Link
                            href="/smart-contracts/deployment"
                            className="group flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted"
                        >
                            <div>
                                <h3 className="font-semibold">Deployment Guide</h3>
                                <p className="mt-1 text-sm text-muted-foreground">Deploy your own contracts</p>
                            </div>
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>

                        <Link
                            href="/smart-contracts/testing"
                            className="group flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted"
                        >
                            <div>
                                <h3 className="font-semibold">Testing</h3>
                                <p className="mt-1 text-sm text-muted-foreground">Test suite and coverage</p>
                            </div>
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
