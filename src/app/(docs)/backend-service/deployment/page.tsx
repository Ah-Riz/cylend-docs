import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Callout } from "@/components/callout";

export const metadata: Metadata = {
    title: "Backend Deployment",
    description: "Deploy Cylend backend service to production",
};

export default function BackendDeploymentPage() {
    return (
        <div>
            <div className="space-y-2">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Production Deployment</h1>
                <p className="text-lg text-muted-foreground">
                    Deploy the backend service to production
                </p>
            </div>

            <div className="mt-12 space-y-10">
                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Deployment Options
                    </h2>
                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                        <div className="rounded-lg border p-6">
                            <h3 className="font-semibold mb-2">PM2</h3>
                            <div className="rounded bg-muted p-3 text-sm font-mono">
                                <pre>{`pm2 start npm --name cylend-service -- start`}</pre>
                            </div>
                        </div>
                        <div className="rounded-lg border p-6">
                            <h3 className="font-semibold mb-2">Docker</h3>
                            <div className="rounded bg-muted p-3 text-sm font-mono">
                                <pre>{`docker build -t cylend-service .
docker run -d cylend-service`}</pre>
                            </div>
                        </div>
                    </div>
                </section>

                <Callout type="important">
                    <p>
                        Use a secrets manager (AWS Secrets Manager, Vault) for <code>OWNER_PRIVATE_KEY</code> in production.
                    </p>
                </Callout>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Environment Checklist
                    </h2>
                    <ul className="mt-6 space-y-2 text-sm">
                        <li>✓ Production RPC URLs configured</li>
                        <li>✓ OWNER_PRIVATE_KEY secured</li>
                        <li>✓ Ponder API accessible</li>
                        <li>✓ Monitoring/logging enabled</li>
                    </ul>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Related
                    </h2>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        <Link href="/backend-service/setup" className="group flex items-center justify-between rounded-lg border p-4 hover:bg-muted">
                            <div><h3 className="font-semibold">Setup</h3></div>
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                        <Link href="/getting-started/configuration" className="group flex items-center justify-between rounded-lg border p-4 hover:bg-muted">
                            <div><h3 className="font-semibold">Configuration</h3></div>
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
