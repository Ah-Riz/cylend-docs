import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";
import { Callout } from "@/components/callout";

export const metadata: Metadata = {
    title: "Indexer Setup",
    description: "Detailed Ponder indexer setup guide",
};

export default function IndexerSetupPage() {
    return (
        <div>
            <div className="space-y-2">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Indexer Setup</h1>
                <p className="text-lg text-muted-foreground">
                    Detailed setup guide for the Ponder indexer
                </p>
            </div>

            <div className="mt-12 space-y-10">
                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Installation
                    </h2>
                    <div className="mt-6 space-y-4">
                        <div className="rounded-lg bg-muted p-4">
                            <pre className="text-sm font-mono">{`cd cylend-indexer
npm install`}</pre>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Configuration
                    </h2>
                    <p className="mt-6 leading-7">Create <code>.env</code> file:</p>
                    <div className="mt-4 rounded-lg bg-muted p-4">
                        <pre className="text-sm font-mono">{`PONDER_RPC_URL_MANTLE_SEPOLIA=https://rpc.sepolia.mantle.xyz/
PONDER_RPC_URL_SAPPHIRE_TESTNET=https://testnet.sapphire.oasis.io
INGRESS_ADDRESS=0xF6bA22c8C3774EaAF7048cB0504C77238A927fAF
CORE_ADDRESS=0xF57a9FEAdCfb103ACC3f20a82F74858330b26862`}</pre>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Run Indexer
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
                    <p className="mt-4 text-sm text-muted-foreground">
                        GraphQL API available at <code>http://localhost:42069/graphql</code>
                    </p>
                </section>

                <Callout type="tip">
                    <p>Use dedicated RPC endpoints (Alchemy, Chainstack) in production for reliable indexing.</p>
                </Callout>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Related
                    </h2>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        <Link href="/indexer/schema" className="group flex items-center justify-between rounded-lg border p-4 hover:bg-muted">
                            <div><h3 className="font-semibold">Schema</h3></div>
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                        <Link href="/indexer/graphql" className="group flex items-center justify-between rounded-lg border p-4 hover:bg-muted">
                            <div><h3 className="font-semibold">GraphQL Queries</h3></div>
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
