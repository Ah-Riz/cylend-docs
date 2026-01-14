import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";
import { Callout } from "@/components/callout";

export const metadata: Metadata = {
    title: "Deployment",
    description: "Deploy Cylend smart contracts",
};

export default function DeploymentPage() {
    return (
        <div>
            <div className="space-y-2">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Deployment</h1>
                <p className="text-lg text-muted-foreground">
                    Deploy Cylend contracts to Mantle and Sapphire testnets
                </p>
            </div>

            <div className="mt-12 space-y-10">
                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Prerequisites
                    </h2>
                    <ul className="mt-6 space-y-2 text-sm">
                        <li>• Hardhat installed in contract directory</li>
                        <li>• Deployer wallet with MNT (Mantle) and ROSE (Sapphire)</li>
                        <li>• Environment variables configured</li>
                    </ul>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Deploy Commands
                    </h2>

                    <div className="mt-6 space-y-6">
                        <div className="rounded-lg border p-6">
                            <h3 className="font-semibold mb-3">1. Deploy PrivateLendingIngress (Mantle)</h3>
                            <div className="rounded bg-muted p-3 text-sm font-mono">
                                <pre>npx hardhat deploy --network mantleSepolia --tags Ingress</pre>
                            </div>
                        </div>

                        <div className="rounded-lg border p-6">
                            <h3 className="font-semibold mb-3">2. Deploy LendingCore (Sapphire)</h3>
                            <div className="rounded bg-muted p-3 text-sm font-mono">
                                <pre>npx hardhat deploy --network sapphireTestnet --tags Core</pre>
                            </div>
                        </div>

                        <div className="rounded-lg border p-6">
                            <h3 className="font-semibold mb-3">3. Configure Hyperlane Router</h3>
                            <div className="rounded bg-muted p-3 text-sm font-mono">
                                <pre>npx hardhat run scripts/configureRouter.ts</pre>
                            </div>
                        </div>
                    </div>
                </section>

                <Callout type="important">
                    <p>Save the deployed contract addresses and update your <code>.env</code> files after deployment.</p>
                </Callout>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Current Deployment
                    </h2>
                    <div className="mt-6 space-y-4">
                        <div className="rounded-lg bg-muted p-4">
                            <p className="text-sm"><strong>Mantle Sepolia</strong></p>
                            <p className="text-xs font-mono text-muted-foreground">PrivateLendingIngress: 0xF6bA22c8C3774EaAF7048cB0504C77238A927fAF</p>
                            <p className="text-xs font-mono text-muted-foreground">ISM: 0x7c20ddbe7E9923210d110f7AbacB8e0051FbbaCB</p>
                        </div>
                        <div className="rounded-lg bg-muted p-4">
                            <p className="text-sm"><strong>Sapphire Testnet</strong></p>
                            <p className="text-xs font-mono text-muted-foreground">LendingCore: 0xF57a9FEAdCfb103ACC3f20a82F74858330b26862</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Related
                    </h2>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        <Link href="/smart-contracts/testing" className="group flex items-center justify-between rounded-lg border p-4 hover:bg-muted">
                            <div><h3 className="font-semibold">Testing</h3></div>
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                        <Link href="/getting-started/configuration" className="group flex items-center justify-between rounded-lg border p-4 hover:bg-muted">
                            <div><h3 className="font-semibold">Configuration</h3></div>
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
