import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Event Handlers",
    description: "Ponder event handler documentation",
};

export default function EventHandlersPage() {
    return (
        <div>
            <div className="space-y-2">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Event Handlers</h1>
                <p className="text-lg text-muted-foreground">
                    How Ponder processes blockchain events
                </p>
            </div>

            <div className="mt-12 space-y-10">
                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Indexed Events
                    </h2>
                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                        <div className="rounded-lg border p-4">
                            <h3 className="font-mono text-sm">DepositCreated</h3>
                            <p className="text-xs text-muted-foreground mt-1">Creates Deposit entity</p>
                        </div>
                        <div className="rounded-lg border p-4">
                            <h3 className="font-mono text-sm">ActionInitiated</h3>
                            <p className="text-xs text-muted-foreground mt-1">Creates Action entity with pending status</p>
                        </div>
                        <div className="rounded-lg border p-4">
                            <h3 className="font-mono text-sm">ActionProcessed</h3>
                            <p className="text-xs text-muted-foreground mt-1">Updates Action status, updates Position</p>
                        </div>
                        <div className="rounded-lg border p-4">
                            <h3 className="font-mono text-sm">FundsReleased</h3>
                            <p className="text-xs text-muted-foreground mt-1">Updates Deposit remainingAmount</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Handler Example
                    </h2>
                    <div className="mt-6 rounded-lg bg-muted p-4 overflow-x-auto">
                        <pre className="text-sm font-mono">{`ponder.on("Ingress:DepositCreated", async ({ event, context }) => {
  const { db } = context;
  await db.Deposit.create({
    id: event.args.depositId.toString(),
    data: {
      depositor: event.args.depositor,
      token: event.args.token,
      initialAmount: event.args.amount,
      remainingAmount: event.args.amount,
      released: false,
      createdAt: Number(event.block.timestamp),
    },
  });
});`}</pre>
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
                        <Link href="/smart-contracts" className="group flex items-center justify-between rounded-lg border p-4 hover:bg-muted">
                            <div><h3 className="font-semibold">Smart Contracts</h3></div>
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
