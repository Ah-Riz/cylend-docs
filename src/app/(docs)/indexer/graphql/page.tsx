import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "GraphQL Queries",
    description: "Ponder GraphQL query examples",
};

export default function GraphQLPage() {
    return (
        <div>
            <div className="space-y-2">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">GraphQL Queries</h1>
                <p className="text-lg text-muted-foreground">
                    Query the Ponder indexer with GraphQL
                </p>
            </div>

            <div className="mt-12 space-y-10">
                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Endpoint
                    </h2>
                    <div className="mt-6 rounded-lg bg-muted p-4">
                        <code className="text-sm font-mono">http://localhost:42069/graphql</code>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Example Queries
                    </h2>
                    <div className="mt-6 space-y-6">
                        <div className="rounded-lg border p-6">
                            <h3 className="font-semibold mb-3">Get User Deposits</h3>
                            <pre className="text-sm bg-muted p-3 rounded overflow-x-auto">{`query GetDeposits($user: String!) {
  deposits(where: { depositor: $user }) {
    items {
      id
      token
      initialAmount
      remainingAmount
      released
    }
  }
}`}</pre>
                        </div>

                        <div className="rounded-lg border p-6">
                            <h3 className="font-semibold mb-3">Get Pending Actions</h3>
                            <pre className="text-sm bg-muted p-3 rounded overflow-x-auto">{`query GetPendingActions {
  actions(where: { status: "pending" }) {
    items {
      id
      depositId
      user
      actionType
      createdAt
    }
  }
}`}</pre>
                        </div>

                        <div className="rounded-lg border p-6">
                            <h3 className="font-semibold mb-3">Get User Position</h3>
                            <pre className="text-sm bg-muted p-3 rounded overflow-x-auto">{`query GetPosition($user: String!) {
  position(id: $user) {
    collateral
    debt
    lastUpdated
  }
}`}</pre>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Related
                    </h2>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        <Link href="/indexer/schema" className="group flex items-center justify-between rounded-lg border p-4 hover:bg-muted">
                            <div><h3 className="font-semibold">Schema</h3></div>
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                        <Link href="/indexer" className="group flex items-center justify-between rounded-lg border p-4 hover:bg-muted">
                            <div><h3 className="font-semibold">Overview</h3></div>
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
