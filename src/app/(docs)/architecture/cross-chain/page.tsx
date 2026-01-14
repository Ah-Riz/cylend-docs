import { Metadata } from "next";
import { ArrowRight, Globe, Shield, Zap } from "lucide-react";
import { Callout } from "@/components/callout";

export const metadata: Metadata = {
    title: "Cross-Chain Architecture",
    description: "Deep dive into Hyperlane integration for secure interchain messaging",
};

export default function CrossChainPage() {
    return (
        <div>
            <div className="space-y-2">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Cross-Chain Mechanism</h1>
                <p className="text-lg text-muted-foreground">
                    Leveraging Hyperlane for secure, permissionless communication between Mantle and Sapphire
                </p>
            </div>

            <div className="mt-12 space-y-10">
                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Why Hyperlane?
                    </h2>
                    <p className="mt-6 leading-7">
                        Cylend requires a messaging layer that is both <strong>fast</strong> (to minimize slippage/latency) and
                        <strong>secure</strong> (to protect asset release instructions). Hyperlane was chosen for its:
                    </p>
                    <div className="mt-6 grid gap-4 md:grid-cols-3">
                        <div className="rounded-lg border p-4">
                            <h3 className="font-semibold flex items-center gap-2 mb-2">
                                <Shield className="h-4 w-4 text-green-500" /> Modular Security
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                Customizable Interchain Security Modules (ISMs) allow Cylend to define its own trust model.
                            </p>
                        </div>
                        <div className="rounded-lg border p-4">
                            <h3 className="font-semibold flex items-center gap-2 mb-2">
                                <Globe className="h-4 w-4 text-blue-500" /> Permissionless
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                Anyone can run a relayer, preventing censorship of valid cross-chain actions.
                            </p>
                        </div>
                        <div className="rounded-lg border p-4">
                            <h3 className="font-semibold flex items-center gap-2 mb-2">
                                <Zap className="h-4 w-4 text-yellow-500" /> Latency
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                Optimized for high-frequency updates, crucial for real-time lending health checks.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Message Lifecycle
                    </h2>

                    <div className="mt-6 space-y-6">
                        <div className="border-l-2 border-primary pl-4">
                            <h3 className="font-semibold text-lg">1. Dispatch (Mantle)</h3>
                            <p className="text-sm text-muted-foreground mt-1">
                                <code>PrivateLendingIngress</code> calls <code>mailbox.dispatch()</code>.
                                The message contains the <strong>encrypted payload</strong> and the <strong>destination chain ID</strong> (Sapphire).
                            </p>
                        </div>

                        <div className="border-l-2 border-primary pl-4">
                            <h3 className="font-semibold text-lg">2. Verification (ISM)</h3>
                            <p className="text-sm text-muted-foreground mt-1">
                                Hyperlane validators observe the event on Mantle. Once a quorum is reached, a <strong>merkle proof</strong> is generated attesting to the message's validity.
                            </p>
                        </div>

                        <div className="border-l-2 border-primary pl-4">
                            <h3 className="font-semibold text-lg">3. Processing (Sapphire)</h3>
                            <p className="text-sm text-muted-foreground mt-1">
                                The Relayer submits the proof to the Sapphire Mailbox. The Mailbox verifies the proof against the ISM and calls <code>LendingCore.handle()</code>.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Interchain Gas Payment (IGP)
                    </h2>
                    <p className="mt-6 leading-7">
                        To provide a seamless "single-click" experience, Cylend uses Hyperlane's <strong>IGP (Interchain Gas Paymaster)</strong>.
                    </p>
                    <div className="mt-4 bg-muted p-4 rounded-lg">
                        <p className="text-sm">
                            Users pay for the entire transaction flow in <strong>MNT</strong> on the source chain.
                            The IGP contract collects this fee and incentivizes the relayer to execute the transaction on the destination chain (Sapphire), ensuring the user doesn't need to hold ROSE tokens.
                        </p>
                    </div>
                </section>

                <Callout type="warning">
                    <p>
                        <strong>Latency Note:</strong> Cross-chain messages typically take 15-30 seconds to finalize.
                        The frontend UI handles this asynchronous wait state optimistically to keep the user engaged.
                    </p>
                </Callout>
            </div>
        </div>
    );
}
