import { Metadata } from "next";
import { Wallet } from "lucide-react";
import { Callout } from "@/components/callout";

export const metadata: Metadata = {
    title: "Wallet Integration",
    description: "Wagmi and RainbowKit configuration for multi-chain support",
};

export default function WalletIntegrationPage() {
    return (
        <div>
            <div className="space-y-2">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Wallet Integration</h1>
                <p className="text-lg text-muted-foreground">
                    Handling dual-chain connections with Wagmi and RainbowKit
                </p>
            </div>

            <div className="mt-12 space-y-10">
                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Configuration
                    </h2>
                    <p className="mt-6 leading-7">
                        Cylend must connect to both <strong>Mantle Sepolia</strong> (for settlement) and <strong>Sapphire Testnet</strong> (for private views).
                        We use <code>wagmi</code> to manage this complexity.
                    </p>

                    <div className="mt-4 rounded-lg bg-muted p-4">
                        <pre className="text-xs sm:text-sm font-mono overflow-x-auto">
                            {`import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mantleSepoliaTestnet } from 'wagmi/chains';

const sapphireTestnet = {
  id: 23295,
  name: 'Oasis Sapphire Testnet',
  network: 'sapphire-testnet',
  nativeCurrency: { name: 'ROSE', symbol: 'ROSE', decimals: 18 },
  rpcUrls: { default: { http: ['https://testnet.sapphire.oasis.io'] } },
} as const;

export const config = getDefaultConfig({
  appName: 'Cylend',
  projectId: 'YOUR_PROJECT_ID',
  chains: [mantleSepoliaTestnet, sapphireTestnet],
});`}
                        </pre>
                    </div>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Network Switching
                    </h2>
                    <p className="mt-6 leading-7">
                        The frontend is "Chain Aware". When a user navigates to the Dashboard to view private data,
                        hooks automatically prompt a network switch to Sapphire via <code>switchNetwork()</code>.
                        When they go to Deposit, it switches back to Mantle.
                    </p>
                </section>

                <Callout type="tip">
                    <p>
                        Always use the <code>useNetwork()</code> hook to verify the user is on the correct chain before enabling action buttons.
                    </p>
                </Callout>
            </div>
        </div>
    );
}
