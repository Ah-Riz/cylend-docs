import { Metadata } from "next";
import { Activity, ServerCrash, CheckCircle2 } from "lucide-react";
import { Callout } from "@/components/callout";

export const metadata: Metadata = {
    title: "Monitoring",
    description: "Monitoring the Ponder indexer and service health",
};

export default function MonitoringPage() {
    return (
        <div>
            <div className="space-y-2">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Indexer Monitoring</h1>
                <p className="text-lg text-muted-foreground">
                    Keeping track of indexing latency and service health
                </p>
            </div>

            <div className="mt-12 space-y-10">
                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Health Endpoints
                    </h2>
                    <p className="mt-6 leading-7">
                        Ponder exposes a dedicated health check endpoint that is useful for uptime monitors.
                    </p>

                    <div className="mt-4 rounded-lg bg-muted p-4">
                        <code className="text-sm">GET /health</code>
                        <div className="mt-2 text-xs font-mono text-muted-foreground">
                            Returns 200 OK if the indexer is synced within a reasonable threshold.
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Common Metrics
                    </h2>
                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                        <div className="rounded-lg border p-4">
                            <h3 className="font-semibold flex items-center gap-2 mb-2">
                                <Activity className="h-4 w-4 text-blue-500" /> Sync Percentage
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                Indicates how far behind the indexer is from the head of the chain. Should be near 100%.
                            </p>
                        </div>
                        <div className="rounded-lg border p-4">
                            <h3 className="font-semibold flex items-center gap-2 mb-2">
                                <ServerCrash className="h-4 w-4 text-red-500" /> Error Rate
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                Monitor logs for RPC timeouts or specialized errors like <code>BlockNotFound</code>.
                            </p>
                        </div>
                    </div>
                </section>

                <Callout type="tip">
                    <p>
                        In production, we recommend connecting Ponder to a Prometheus/Grafana instance for real-time dashboards.
                    </p>
                </Callout>
            </div>
        </div>
    );
}
