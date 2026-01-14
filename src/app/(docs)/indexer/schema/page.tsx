import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Indexer Schema",
    description: "Ponder indexer database schema",
};

export default function SchemaPage() {
    return (
        <div>
            <div className="space-y-2">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Schema</h1>
                <p className="text-lg text-muted-foreground">
                    Database entities indexed by Ponder
                </p>
            </div>

            <div className="mt-12 space-y-10">
                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Entities
                    </h2>
                    <div className="mt-6 space-y-6">
                        <div className="rounded-lg border p-6">
                            <h3 className="font-mono font-semibold">Deposit</h3>
                            <pre className="mt-3 text-sm bg-muted p-3 rounded overflow-x-auto">{`{
  id: string           // depositId
  depositor: string    // user address
  token: string        // token address
  initialAmount: bigint
  remainingAmount: bigint
  released: boolean
  createdAt: number
}`}</pre>
                        </div>

                        <div className="rounded-lg border p-6">
                            <h3 className="font-mono font-semibold">Action</h3>
                            <pre className="mt-3 text-sm bg-muted p-3 rounded overflow-x-auto">{`{
  id: string           // actionHash
  depositId: string
  user: string
  actionType: number   // 0-3
  status: string       // pending|processed|failed
  encryptedPayload: bytes
  createdAt: number
}`}</pre>
                        </div>

                        <div className="rounded-lg border p-6">
                            <h3 className="font-mono font-semibold">Position</h3>
                            <pre className="mt-3 text-sm bg-muted p-3 rounded overflow-x-auto">{`{
  id: string           // user address
  collateral: bigint
  debt: bigint
  lastUpdated: number
}`}</pre>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Related
                    </h2>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        <Link href="/indexer/graphql" className="group flex items-center justify-between rounded-lg border p-4 hover:bg-muted">
                            <div><h3 className="font-semibold">GraphQL Queries</h3></div>
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                        <Link href="/indexer/event-handlers" className="group flex items-center justify-between rounded-lg border p-4 hover:bg-muted">
                            <div><h3 className="font-semibold">Event Handlers</h3></div>
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
