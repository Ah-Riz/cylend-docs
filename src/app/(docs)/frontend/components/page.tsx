import { Metadata } from "next";
import { ArrowRight, Code } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Components",
    description: "Key UI components used in the Cylend frontend",
};

export default function ComponentsPage() {
    return (
        <div>
            <div className="space-y-2">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Components</h1>
                <p className="text-lg text-muted-foreground">
                    Reusable React components built with Radix UI and Tailwind CSS
                </p>
            </div>

            <div className="mt-12 space-y-10">
                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Core UI
                    </h2>
                    <p className="mt-6 leading-7">
                        The UI system is built for a <strong>Glassmorphism</strong> aesthetic, utilizing transparency and blurs to create a premium feel.
                    </p>
                </section>

                <section>
                    <div className="grid gap-6 md:grid-cols-2">
                        {/* Component Card */}
                        <div className="rounded-lg border p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <Code className="h-5 w-5 text-primary" />
                                <h3 className="font-semibold">ConnectButton</h3>
                            </div>
                            <p className="text-sm text-muted-foreground mb-4">
                                A custom wrapper around RainbowKit's connect button. It handles network switching alerts
                                (e.g., "Wrong Network" if user is on Mainnet instead of Sepolia).
                            </p>
                            <div className="bg-muted p-3 rounded-md text-xs font-mono">src/components/ConnectButton.tsx</div>
                        </div>

                        {/* Component Card */}
                        <div className="rounded-lg border p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <Code className="h-5 w-5 text-primary" />
                                <h3 className="font-semibold">DepositCard</h3>
                            </div>
                            <p className="text-sm text-muted-foreground mb-4">
                                Displays an individual deposit bucket. Shows the "Remaining" vs "Initial" amount visualizer
                                and provides action buttons (Supply/Withdraw).
                            </p>
                            <div className="bg-muted p-3 rounded-md text-xs font-mono">src/components/deposit/DepositCard.tsx</div>
                        </div>

                        {/* Component Card */}
                        <div className="rounded-lg border p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <Code className="h-5 w-5 text-primary" />
                                <h3 className="font-semibold">ActionModal</h3>
                            </div>
                            <p className="text-sm text-muted-foreground mb-4">
                                The main interaction surface. Handles form input for amounts, token selection, and
                                shows the "Encryption/Signing" progress steps.
                            </p>
                            <div className="bg-muted p-3 rounded-md text-xs font-mono">src/components/modals/ActionModal.tsx</div>
                        </div>

                        {/* Component Card */}
                        <div className="rounded-lg border p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <Code className="h-5 w-5 text-primary" />
                                <h3 className="font-semibold">HealthFactorDial</h3>
                            </div>
                            <p className="text-sm text-muted-foreground mb-4">
                                A visual guage showing the user's current health factor securely fetched from Sapphire.
                                Color-coded (Green/Yellow/Red) based on safety.
                            </p>
                            <div className="bg-muted p-3 rounded-md text-xs font-mono">src/components/dashboard/HealthFactorDial.tsx</div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
