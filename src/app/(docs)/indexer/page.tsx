import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Blocks, Zap } from "lucide-react";
import { Callout } from "@/components/callout";

export const metadata: Metadata = {
    title: "Ponder Indexer",
    description: "Event indexing and GraphQL API with Ponder",
};

export default function IndexerPage() {
    return (
        <div>
            <div className="space-y-2">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Ponder Indexer</h1>
                <p className="text-lg text-muted-foreground">
                    Multi-chain event indexing with GraphQL API powered by Ponder
                </p>
            </div>

            <div className="mt-12 space-y-10">
                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        What is Ponder?
                    </h2>

                    <p className="mt-6 leading-7">
                        Ponder is a modern blockchain indexing framework that automatically indexes events from multiple chains
                        and provides a type-safe GraphQL API for querying indexed data.
                    </p>

                    <div className="mt-6 grid gap-6 md:grid-cols-2">
                        <div className="rounded-lg border p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                                    <Blocks className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <h3 className="text-xl font-semibold">Multi-Chain</h3>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Indexes events from both Mantle Sepolia and Sapphire Testnet in a unified database
                            </p>
                        </div>

                        <div className="rounded-lg border p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900">
                                    <Zap className="h-6 w-6 text-green-600 dark:text-green-400" />
                                </div>
                                <h3 className="text-xl font-semibold">Real-Time</h3>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Auto-syncs with latest blocks and provides WebSocket subscriptions for live updates
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Features
                    </h2>

                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                        <div className="rounded-lg border p-4">
                            <h3 className="font-semibold mb-2">GraphQL API</h3>
                            <p className="text-sm text-muted-foreground">
                                Auto-generated GraphQL schema with type-safe queries and mutations
                            </p>
                        </div>

                        <div className="rounded-lg border p-4">
                            <h3 className="font-semibold mb-2">Type Generation</h3>
                            <p className="text-sm text-muted-foreground">
                                Automatically generates TypeScript types from your schema and ABIs
                            </p>
                        </div>

                        <div className="rounded-lg border p-4">
                            <h3 className="font-semibold mb-2">Database</h3>
                            <p className="text-sm text-muted-foreground">
                                SQLite for development, PostgreSQL for production with automatic migrations
                            </p>
                        </div>

                        <div className="rounded-lg border p-4">
                            <h3 className="font-semibold mb-2">Hot Reload</h3>
                            <p className="text-sm text-muted-foreground">
                                Changes to schema or event handlers automatically trigger re-indexing
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        What Ponder Indexes
                    </h2>

                    <p className="mt-6 leading-7">
                        The Cylend indexer tracks the following entities across both chains:
                    </p>

                    <div className="mt-6 space-y-4">
                        <div className="rounded-lg border p-4">
                            <h3 className="font-semibold mb-2">Deposits</h3>
                            <p className="text-sm text-muted-foreground mb-3">
                                Tracks all deposit buckets created by users
                            </p>
                            <div className="text-xs font-mono bg-muted p-3 rounded">
                                <div>depositId, depositor, token, initialAmount,</div>
                                <div>remainingAmount, isNative, released, createdAt</div>
                            </div>
                        </div>

                        <div className="rounded-lg border p-4">
                            <h3 className="font-semibold mb-2">Actions</h3>
                            <p className="text-sm text-muted-foreground mb-3">
                                Records all encrypted actions (supply, borrow, repay, withdraw)
                            </p>
                            <div className="text-xs font-mono bg-muted p-3 rounded">
                                <div>actionId, depositId, user, actionType, status,</div>
                                <div>createdAt, processedAt</div>
                            </div>
                        </div>

                        <div className="rounded-lg border p-4">
                            <h3 className="font-semibold mb-2">Positions</h3>
                            <p className="text-sm text-muted-foreground mb-3">
                                Maintains user lending positions (encrypted, only hash visible)
                            </p>
                            <div className="text-xs font-mono bg-muted p-3 rounded">
                                <div>user, token, positionHash, updatedAt</div>
                            </div>
                        </div>

                        <div className="rounded-lg border p-4">
                            <h3 className="font-semibold mb-2">Liquidity</h3>
                            <p className="text-sm text-muted-foreground mb-3">
                                Aggregates protocol-wide liquidity metrics per token
                            </p>
                            <div className="text-xs font-mono bg-muted p-3 rounded">
                                <div>token, totalDeposited, totalReserved,</div>
                                <div>totalBorrowed, updatedAt</div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Quick Start
                    </h2>

                    <p className="mt-6 leading-7">
                        Get the indexer running in a few steps:
                    </p>

                    <ol className="mt-6 space-y-4">
                        <li className="flex items-start gap-3">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold flex-shrink-0">1</div>
                            <div className="flex-1">
                                <p className="font-medium">Navigate to indexer directory</p>
                                <div className="mt-2 rounded-lg bg-muted p-3">
                                    <code className="text-sm">cd cylend-indexer</code>
                                </div>
                            </div>
                        </li>

                        <li className="flex items-start gap-3">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold flex-shrink-0">2</div>
                            <div className="flex-1">
                                <p className="font-medium">Configure environment variables</p>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Set RPC URLs in <code>.env</code> file (see <Link href="/getting-started/configuration" className="text-primary hover:underline">Configuration</Link>)
                                </p>
                            </div>
                        </li>

                        <li className="flex items-start gap-3">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold flex-shrink-0">3</div>
                            <div className="flex-1">
                                <p className="font-medium">Start the indexer</p>
                                <div className="mt-2 rounded-lg bg-muted p-3">
                                    <code className="text-sm">npm run dev</code>
                                </div>
                            </div>
                        </li>

                        <li className="flex items-start gap-3">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold flex-shrink-0">4</div>
                            <div className="flex-1">
                                <p className="font-medium">Access GraphQL playground</p>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Open <a href="http://localhost:42069/graphql" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">http://localhost:42069/graphql</a> in your browser
                                </p>
                            </div>
                        </li>
                    </ol>

                    <Callout type="tip">
                        <p>
                            The indexer will automatically sync from the deployment block. Initial indexing may take a few minutes
                            depending on chain history.
                        </p>
                    </Callout>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Example Queries
                    </h2>

                    <p className="mt-6 leading-7">
                        Common GraphQL queries you can run:
                    </p>

                    <div className="mt-6 space-y-4">
                        <div>
                            <h3 className="font-semibold text-sm mb-2">Get User Deposits</h3>
                            <div className="rounded-lg bg-muted p-4">
                                <pre className="overflow-x-auto text-xs"><code>{`query GetUserDeposits($address: String!) {
  deposits(where: { depositor: $address }) {
    items {
      depositId
      token
      initialAmount
      remainingAmount
      released
      createdAt
    }
  }
}`}</code></pre>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-sm mb-2">Get User Actions</h3>
                            <div className="rounded-lg bg-muted p-4">
                                <pre className="overflow-x-auto text-xs"><code>{`query GetUserActions($address: String!) {
  actions(where: { user: $address }, orderBy: "createdAt", orderDirection: "desc") {
    items {
      actionId
      actionType
      status
      createdAt
      processedAt
    }
  }
}`}</code></pre>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-sm mb-2">Get Liquidity Metrics</h3>
                            <div className="rounded-lg bg-muted p-4">
                                <pre className="overflow-x-auto text-xs"><code>{`query GetLiquidity {
  liquidities {
    items {
      token
      totalDeposited
      totalReserved
      totalBorrowed
      updatedAt
    }
  }
}`}</code></pre>
                            </div>
                        </div>
                    </div>

                    <Callout type="note">
                        <p>
                            For complete query examples and subscriptions, see the{" "}
                            <Link href="/indexer/graphql" className="text-primary hover:underline">GraphQL Queries</Link> documentation.
                        </p>
                    </Callout>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Learn More
                    </h2>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        <Link
                            href="/indexer/setup"
                            className="group flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted"
                        >
                            <div>
                                <h3 className="font-semibold">Setup & Configuration</h3>
                                <p className="mt-1 text-sm text-muted-foreground">Detailed setup guide</p>
                            </div>
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>

                        <Link
                            href="/indexer/schema"
                            className="group flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted"
                        >
                            <div>
                                <h3 className="font-semibold">Database Schema</h3>
                                <p className="mt-1 text-sm text-muted-foreground">Complete schema reference</p>
                            </div>
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>

                        <Link
                            href="/indexer/event-handlers"
                            className="group flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted"
                        >
                            <div>
                                <h3 className="font-semibold">Event Handlers</h3>
                                <p className="mt-1 text-sm text-muted-foreground">How events are processed</p>
                            </div>
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>

                        <Link
                            href="/indexer/graphql"
                            className="group flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted"
                        >
                            <div>
                                <h3 className="font-semibold">GraphQL Queries</h3>
                                <p className="mt-1 text-sm text-muted-foreground">Query examples & reference</p>
                            </div>
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
