import { Metadata } from "next";
import { KeyRound, Lock, Shield } from "lucide-react";

export const metadata: Metadata = {
    title: "Encryption Implementation",
    description: "Using the Sapphire SDK for client-side encryption",
};

export default function EncryptionPage() {
    return (
        <div>
            <div className="space-y-2">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Encryption Implementation</h1>
                <p className="text-lg text-muted-foreground">
                    Implementing the ECIES handshake for private transactions
                </p>
            </div>

            <div className="mt-12 space-y-10">
                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        The Sapphire Wrapper
                    </h2>
                    <p className="mt-6 leading-7">
                        Standard Web3 providers (like window.ethereum) send data in plaintext. To interact with Sapphire's private contracts,
                        we wrap the provider with <code>@oasisprotocol/sapphire-paratime</code>.
                    </p>

                    <div className="mt-4 rounded-lg bg-muted p-4">
                        <pre className="text-xs sm:text-sm font-mono overflow-x-auto">
                            {`import * as sapphire from '@oasisprotocol/sapphire-paratime';
import { ethers } from 'ethers';

// wrap the browser provider
const provider = new ethers.BrowserProvider(
    sapphire.wrap(window.ethereum)
);
const signer = await provider.getSigner();

// Now all transactions signed by 'signer' are automatically encrypted!
const tx = await contract.connect(signer).myPrivateFunction(secretData);`}
                        </pre>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        How It Works
                    </h2>
                    <div className="mt-6 grid gap-6 md:grid-cols-3">
                        <div className="rounded-lg border p-4">
                            <h3 className="font-semibold flex items-center gap-2 mb-2">
                                <KeyRound className="h-4 w-4" /> 1. Handshake
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                The wrapper automatically fetches the transient public key from the Sapphire node.
                            </p>
                        </div>
                        <div className="rounded-lg border p-4">
                            <h3 className="font-semibold flex items-center gap-2 mb-2">
                                <Lock className="h-4 w-4" /> 2. Encrypt
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                It encrypts the calldata (function arguments) using ECIES (Elliptic Curve Integrated Encryption Scheme).
                            </p>
                        </div>
                        <div className="rounded-lg border p-4">
                            <h3 className="font-semibold flex items-center gap-2 mb-2">
                                <Shield className="h-4 w-4" /> 3. Transmit
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                The encrypted blob is sent to the network. Only the TEE enclave can decrypt it.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
