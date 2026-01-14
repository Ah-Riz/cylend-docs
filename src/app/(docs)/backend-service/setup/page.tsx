import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Callout } from "@/components/callout";

export const metadata: Metadata = {
    title: "Backend Setup",
    description: "Setup guide for Cylend backend service",
};

export default function BackendSetupPage() {
    return (
        <div>
            <div className="space-y-2">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Backend Setup</h1>
                <p className="text-lg text-muted-foreground">
                    Detailed setup for the action processor service
                </p>
            </div>

            <div className="mt-12 space-y-10">
                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Installation
                    </h2>
                    <div className="mt-6 rounded-lg bg-muted p-4">
                        <pre className="text-sm font-mono">{`cd cylend-service
npm install`}</pre>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Configuration
                    </h2>
                    <p className="mt-6 leading-7">Create <code>.env</code> file:</p>
                    <div className="mt-4 rounded-lg bg-muted p-4">
                        <pre className="text-sm font-mono">{`PONDER_API_URL=http://localhost:42069/graphql
SAPPHIRE_RPC_URL=https://testnet.sapphire.oasis.io
CORE_ADDRESS=0xF57a9FEAdCfb103ACC3f20a82F74858330b26862
OWNER_PRIVATE_KEY=0x...your_private_key...`}</pre>
                    </div>
                    <Callout type="caution">
                        <p>Never commit <code>OWNER_PRIVATE_KEY</code> to version control!</p>
                    </Callout>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Run Service
                    </h2>
                    <div className="mt-6 space-y-4">
                        <div className="rounded-lg bg-muted p-4">
                            <p className="text-sm font-medium mb-2">Development:</p>
                            <code className="text-sm font-mono">npm run dev</code>
                        </div>
                        <div className="rounded-lg bg-muted p-4">
                            <p className="text-sm font-medium mb-2">Production:</p>
                            <code className="text-sm font-mono">npm run start</code>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Related
                    </h2>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        <Link href="/backend-service/action-processor" className="group flex items-center justify-between rounded-lg border p-4 hover:bg-muted">
                            <div><h3 className="font-semibold">Action Processor</h3></div>
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                        <Link href="/backend-service/deployment" className="group flex items-center justify-between rounded-lg border p-4 hover:bg-muted">
                            <div><h3 className="font-semibold">Deployment</h3></div>
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
