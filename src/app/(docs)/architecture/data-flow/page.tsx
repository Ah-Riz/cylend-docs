import { Metadata } from "next";
import { ArrowDown, Database, Globe, Key, Lock, Server } from "lucide-react";

export const metadata: Metadata = {
    title: "Data Flow",
    description: "Detailed breakdown of data movement through the Cylend protocol",
};

export default function DataFlowPage() {
    return (
        <div>
            <div className="space-y-2">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Data Flow</h1>
                <p className="text-lg text-muted-foreground">
                    Tracing the journey of data from user action to private state update
                </p>
            </div>

            <div className="mt-12 space-y-12">
                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        1. Client-Side Encryption
                    </h2>
                    <div className="mt-6 flex gap-6 items-start">
                        <div className="p-3 bg-muted rounded-full">
                            <Key className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <p className="leading-7">
                                Before any data leaves the user's browser, it is encrypted using the <strong>Sapphire Public Key</strong>.
                                The frontend fetches this key directly from the Sapphire network via the web3 provider.
                            </p>
                            <div className="mt-4 bg-muted p-4 rounded-lg font-mono text-sm">
                                Payload = &#123; amount: 1000, token: USDC, action: DEPOSIT &#125;
                                <br />
                                <span className="text-muted-foreground">↓ ECIES Encryption</span>
                                <br />
                                Ciphertext = 0x7f3a2b...9c
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        2. Public Submission
                    </h2>
                    <div className="mt-6 flex gap-6 items-start">
                        <div className="p-3 bg-muted rounded-full">
                            <Globe className="h-6 w-6 text-blue-500" />
                        </div>
                        <div>
                            <p className="leading-7">
                                The user submits the transaction to the <strong>PrivateLendingIngress</strong> contract on Mantle.
                                <br />
                                <strong>What is visible?</strong>
                            </p>
                            <ul className="mt-2 list-disc pl-5 text-sm space-y-1">
                                <li>User Address (Sender)</li>
                                <li>The encrypted Ciphertext (Blob)</li>
                                <li>Gas Fees paid in MNT</li>
                            </ul>
                            <p className="mt-2 text-sm text-muted-foreground">
                                <em>Crucially, the actual action details (amount, token type) are hidden inside the ciphertext.</em>
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        3. Cross-Chain Relay
                    </h2>
                    <div className="mt-6 flex gap-6 items-start">
                        <div className="p-3 bg-muted rounded-full">
                            <ArrowDown className="h-6 w-6 text-orange-500" />
                        </div>
                        <div>
                            <p className="leading-7">
                                The Ingress contract emits a Hyperlane event. <strong>Relayers</strong> observe this event and
                                transport the message payload to the Sapphire network.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        4. Private Execution (TEE)
                    </h2>
                    <div className="mt-6 flex gap-6 items-start">
                        <div className="p-3 bg-muted rounded-full">
                            <Lock className="h-6 w-6 text-purple-600" />
                        </div>
                        <div>
                            <p className="leading-7">
                                Inside the Sapphire <strong>Trusted Execution Environment (TEE)</strong>:
                            </p>
                            <ol className="mt-2 list-decimal pl-5 text-sm space-y-2">
                                <li>The <code>LendingCore</code> contract receives the message.</li>
                                <li>It uses the <strong>Private Key</strong> (only available inside the enclave) to decrypt the ciphertext.</li>
                                <li>It executes the logic (e.g., adds 1000 USDC to user's collateral).</li>
                                <li>It updates the private state storage.</li>
                            </ol>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        5. Indexing & Feedback
                    </h2>
                    <div className="mt-6 flex gap-6 items-start">
                        <div className="p-3 bg-muted rounded-full">
                            <Server className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                            <p className="leading-7">
                                <strong>Ponder</strong> picks up the "ActionProcessed" event from Sapphire.
                                <br />
                                While the details remain private, the event confirms <em>success or failure</em>. The frontend queries
                                the Ponder GraphQL API to update the UI (e.g., stopping a loading spinner).
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
