import { Metadata } from "next";
import { AlertTriangle, Lock, ShieldCheck, UserCheck } from "lucide-react";
import { Callout } from "@/components/callout";

export const metadata: Metadata = {
    title: "Security Model",
    description: "Security guarantees, threat models, and safe-guards of the Cylend protocol",
};

export default function SecurityPage() {
    return (
        <div>
            <div className="space-y-2">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Security Model</h1>
                <p className="text-lg text-muted-foreground">
                    Protecting user funds and privacy through hardware-enforced isolation and cryptographic verification
                </p>
            </div>

            <div className="mt-12 space-y-10">
                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Threat Model
                    </h2>
                    <p className="mt-6 leading-7">
                        Cylend is designed to resist the following adversarial scenarios:
                    </p>

                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                        <div className="rounded-lg border p-4">
                            <h3 className="font-semibold flex items-center gap-2 mb-2 text-red-600 dark:text-red-400">
                                <AlertTriangle className="h-4 w-4" /> Malicious Node Operators
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                Even if a node operator on Sapphire has physical access to the server, they cannot read the
                                memory of the TEE enclave. This prevents them from seeing user positions or front-running trades.
                            </p>
                        </div>
                        <div className="rounded-lg border p-4">
                            <h3 className="font-semibold flex items-center gap-2 mb-2 text-red-600 dark:text-red-400">
                                <AlertTriangle className="h-4 w-4" /> Network Snooping
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                An adversary monitoring network traffic cannot decipher the loan details because the payload
                                is encrypted client-side before transmission.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Security Guarantees
                    </h2>
                    <div className="mt-6 space-y-4">
                        <div className="flex items-start gap-4">
                            <div className="mt-1 p-2 bg-green-100 dark:bg-green-900 rounded-full">
                                <Lock className="h-5 w-5 text-green-600 dark:text-green-400" />
                            </div>
                            <div>
                                <h3 className="font-semibold">Confidentiality</h3>
                                <p className="text-sm text-muted-foreground">
                                    Data inside the <code>LendingCore</code> contract is encrypted at rest and in transit.
                                    It is only decrypted ephemerally inside the CPU enclave for processing.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="mt-1 p-2 bg-green-100 dark:bg-green-900 rounded-full">
                                <ShieldCheck className="h-5 w-5 text-green-600 dark:text-green-400" />
                            </div>
                            <div>
                                <h3 className="font-semibold">Integrity</h3>
                                <p className="text-sm text-muted-foreground">
                                    State transitions are verifiable. While the data is private, the proof of execution ensures
                                    that the protocol correctly followed its logic (e.g., collateral was actually deducted).
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="mt-1 p-2 bg-green-100 dark:bg-green-900 rounded-full">
                                <UserCheck className="h-5 w-5 text-green-600 dark:text-green-400" />
                            </div>
                            <div>
                                <h3 className="font-semibold">Access Control</h3>
                                <p className="text-sm text-muted-foreground">
                                    Strict <code>onlyOwner</code> and role-based access control prevents unauthorized entities
                                    from calling sensitive system functions, such as price updates.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Safe-Guards
                    </h2>
                    <ul className="mt-6 space-y-3">
                        <li className="flex items-start gap-2 text-sm">
                            <ShieldCheck className="h-4 w-4 text-primary mt-0.5" />
                            <strong>Health Factor Validation:</strong> Every withdraw or borrow action atomically checks
                            HF &gt; 1.0 inside the TEE before authorized.
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                            <ShieldCheck className="h-4 w-4 text-primary mt-0.5" />
                            <strong>Price Staleness Checks:</strong> The oracle system rejects action processing if price feeds
                            are older than a safe threshold, protecting against flash crashes.
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                            <ShieldCheck className="h-4 w-4 text-primary mt-0.5" />
                            <strong>Circuit Breakers:</strong> Emergency pause functionality on the Ingress contract can halt
                            deposits/withdrawals in case of detected bridge anomalies.
                        </li>
                    </ul>
                </section>

                <Callout type="note">
                    <p>
                        This security model allows Cylend to be <strong>trustless</strong> regarding the operator but
                        requires <strong>trust in hardware (Intel SGX)</strong>, a standard trade-off for TEE-based privacy.
                    </p>
                </Callout>
            </div>
        </div>
    );
}
