import { Metadata } from "next";
import { ArrowRight, FunctionSquare } from "lucide-react";

export const metadata: Metadata = {
    title: "Custom Hooks",
    description: "Documentation for custom React hooks used in Cylend",
};

export default function HooksPage() {
    return (
        <div>
            <div className="space-y-2">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Custom Hooks</h1>
                <p className="text-lg text-muted-foreground">
                    Encapsulated logic for blockchain interaction and state management
                </p>
            </div>

            <div className="mt-12 space-y-10">
                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Contract Interaction
                    </h2>

                    <div className="mt-6 space-y-6">
                        <div className="rounded-lg border p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-mono font-semibold text-lg">useCreateDeposit</h3>
                                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Write</span>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">
                                Handles the interaction with <code>PrivateLendingIngress.createDeposit()</code>.
                                Automatically handles ERC20 approvals if the deposit token is not native MNT.
                            </p>
                        </div>

                        <div className="rounded-lg border p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-mono font-semibold text-lg">useSubmitAction</h3>
                                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Write + Encrypt</span>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">
                                The most complex hook. It:
                                1. Takes plaintext inputs (amount, token).
                                2. Encrypts them using <code>sapphire-js</code>.
                                3. Submits the ciphertext to the Ingress contract.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Data Fetching
                    </h2>

                    <div className="mt-6 space-y-6">
                        <div className="rounded-lg border p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-mono font-semibold text-lg">usePonderDeposits</h3>
                                <span className="text-xs bg-green-500/10 text-green-600 px-2 py-1 rounded">Read</span>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">
                                Wraps <code>useQuery</code> (TanStack Query) to fetch the user's deposits from the Ponder GraphQL API.
                                Includes auto-refetching on window focus.
                            </p>
                        </div>

                        <div className="rounded-lg border p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-mono font-semibold text-lg">useTokenBalance</h3>
                                <span className="text-xs bg-green-500/10 text-green-600 px-2 py-1 rounded">Read</span>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">
                                Fetches the user's wallet balance for a specific token to ensure they have enough funds to deposit.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
