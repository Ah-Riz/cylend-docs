import { Metadata } from "next";

export const metadata: Metadata = {
    title: "GraphQL Schema",
    description: "Full GraphQL schema reference for Ponder",
};

export default function GraphqlApiPage() {
    return (
        <div>
            <div className="space-y-2">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">GraphQL Schema</h1>
                <p className="text-lg text-muted-foreground">
                    The data capabilities of the Ponder indexer
                </p>
            </div>

            <div className="mt-12 space-y-10">
                <section>
                    <div className="rounded-lg bg-muted p-4">
                        <pre className="text-xs sm:text-sm font-mono overflow-x-auto leading-relaxed">
                            {`type Deposit @entity {
  id: String!
  depositor: String!
  token: String!
  amount: BigInt!
  timestamp: Int!
  txHash: String!
}

type Action @entity {
  id: String!
  user: String!
  type: String! # "SUPPLY" | "BORROW" | "REPAY" | "WITHDRAW"
  status: String! # "PENDING" | "PROCESSED" | "FAILED"
  payload: String! # Encrypted blob
}

type Query {
  deposits(
    first: Int
    skip: Int
    orderBy: String
    orderDirection: String
    where: DepositFilter
  ): [Deposit!]!

  actions(
    where: ActionFilter
  ): [Action!]!
}`}
                        </pre>
                    </div>
                </section>
            </div>
        </div>
    );
}
