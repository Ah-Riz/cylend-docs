import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hooks Reference",
    description: "API reference for frontend hooks",
};

export default function HooksApiPage() {
    return (
        <div>
            <div className="space-y-2">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Hooks Reference</h1>
                <p className="text-lg text-muted-foreground">
                    Signatures and return types for custom React hooks
                </p>
            </div>

            <div className="mt-12 space-y-10">
                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        useCreateDeposit
                    </h2>
                    <div className="mt-6 rounded-lg bg-muted p-4">
                        <pre className="text-sm font-mono overflow-x-auto">
                            {`const { 
  write, 
  isLoading, 
  isSuccess 
} = useCreateDeposit({
  token: Address,
  amount: bigint
});`}
                        </pre>
                    </div>
                    <p className="mt-4 text-sm leading-7">
                        Prepares a write contract configuration for <code>createDeposit</code>. Automatically estimates gas.
                    </p>
                </section>

                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        useSubmitAction
                    </h2>
                    <div className="mt-6 rounded-lg bg-muted p-4">
                        <pre className="text-sm font-mono overflow-x-auto">
                            {`const { 
  submit, 
  encryptionStatus // 'idle' | 'encrypting' | 'encrypted'
} = useSubmitAction();`}
                        </pre>
                    </div>
                    <p className="mt-4 text-sm leading-7">
                        Handles the encryption lifecycle. When <code>submit(args)</code> is called, it first fetches the Sapphire public key, encrypts <code>args</code>, and then triggers the wallet signature.
                    </p>
                </section>
            </div>
        </div>
    );
}
