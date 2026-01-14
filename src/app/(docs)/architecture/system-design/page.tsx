import { Metadata } from "next";
import { ArrowRight, Cpu, Layers, Lock, Network } from "lucide-react";
import { Callout } from "@/components/callout";

export const metadata: Metadata = {
    title: "System Design",
    description: "Detailed system architecture of Cylend's hybrid multi-chain protocol",
};

export default function SystemDesignPage() {
    return (
        <div>
            <div className="space-y-2">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">System Design</h1>
                <p className="text-lg text-muted-foreground">
                    A hybrid, multi-chain architecture bifurcating public settlement and private computation
                </p>
            </div>

            <div className="mt-12 space-y-10">
                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Core Philosophy
                    </h2>
                    <p className="mt-6 leading-7">
                        Cylend was architected to solve the "transparency paradox" of DeFi: the tension between the need for
                        verifiable trust (public ledger) and the need for financial privacy (institutional requirement).
                    </p>
                    <p className="mt-4 leading-7">
                        The solution is a <strong>Partitioned State Model</strong>:
                    </p>
                    <ul className="mt-4 space-y-3">
                        <li className="flex items-start gap-2">
                            <Layers className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span><strong>Public Settlement Layer (Mantle):</strong> Optimized for asset custody, high throughput, and low-cost transfers.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Lock className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                            <span><strong>Private Computation Layer (Sapphire):</strong> Optimized for confidential logic, state encryption, and TEE execution.</span>
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Architectural Layers
                    </h2>

                    <div className="mt-8 space-y-8">
                        {/* Layer 1 */}
                        <div className="rounded-lg border bg-card p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-primary/10">
                                    <Network className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold">1. The Asset Layer (Mantle)</h3>
                            </div>
                            <p className="text-sm text-muted-foreground mb-4">
                                This layer behaves like a standard DeFi protocol but is "blind" to the logic.
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-muted p-4 rounded-md">
                                    <h4 className="font-semibold text-sm mb-2">Components</h4>
                                    <ul className="text-sm space-y-1">
                                        <li>• <code>PrivateLendingIngress</code> Contract</li>
                                        <li>• ERC-20 Vaults</li>
                                        <li>• Hyperlane Mailbox</li>
                                    </ul>
                                </div>
                                <div className="bg-muted p-4 rounded-md">
                                    <h4 className="font-semibold text-sm mb-2">Responsibilities</h4>
                                    <ul className="text-sm space-y-1">
                                        <li>• Custody of collateral</li>
                                        <li>• Emitting public events</li>
                                        <li>• Executing fund releases</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Layer 2 */}
                        <div className="rounded-lg border bg-card p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-primary/10">
                                    <Cpu className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold">2. The Logic Layer (Sapphire)</h3>
                            </div>
                            <p className="text-sm text-muted-foreground mb-4">
                                The "brain" of the protocol running inside secure hardware enclaves (Intel SGX).
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-muted p-4 rounded-md">
                                    <h4 className="font-semibold text-sm mb-2">Components</h4>
                                    <ul className="text-sm space-y-1">
                                        <li>• <code>LendingCore</code> Contract</li>
                                        <li>• Confidential EVM (ParaTime)</li>
                                        <li>• Private State Storage</li>
                                    </ul>
                                </div>
                                <div className="bg-muted p-4 rounded-md">
                                    <h4 className="font-semibold text-sm mb-2">Responsibilities</h4>
                                    <ul className="text-sm space-y-1">
                                        <li>• Decrypting action payloads</li>
                                        <li>• Calculating Health Factors</li>
                                        <li>• Managing position state</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Layer 3 */}
                        <div className="rounded-lg border bg-card p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-primary/10">
                                    <Layers className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold">3. The Data Layer (Ponder)</h3>
                            </div>
                            <p className="text-sm text-muted-foreground mb-4">
                                Unified indexing ensuring the frontend has a consistent view of the split world.
                            </p>
                            <div className="bg-muted p-4 rounded-md">
                                <h4 className="font-semibold text-sm mb-2">Unified Schema</h4>
                                <pre className="text-xs overflow-x-auto bg-background p-2 rounded">
                                    {`type Position @entity {
  id: ID!               # User Address
  collateral: BigInt!   # From Mantle Events
  debt: BigInt!         # From Sapphire Events (Encrypted/Private)
  healthFactor: String  # Computed
}`}
                                </pre>
                            </div>
                        </div>
                    </div>
                </section>

                <Callout type="note">
                    <p>
                        This separation of concerns allows Cylend to be <strong>solvent by proof</strong> (public verification of assets)
                        while remaining <strong>private by design</strong> (confidentiality of user strategies).
                    </p>
                </Callout>
            </div>
        </div>
    );
}
