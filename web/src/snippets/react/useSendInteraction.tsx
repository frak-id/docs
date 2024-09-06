import {useSendTransactionAction} from "@frak-labs/nexus-sdk/react";


/**
 * Define your send tx component
 */
export function SendTxButton() {
    const { mutate: sendTx, isPending, error, data: result } = useSendTransactionAction(); // [!code focus]

    return (
        <>
            {error && <div>{error.message}</div>}
            <button
                onClick={() =>
                    sendTx({
                        tx: {
                            to: "0xdeadbeef",
                            value: "0x0",
                            data: "0x",
                        },
                        metadata: {
                            context: "Send a transaction to 0xdeadbeef",
                        }
                    })
                }
                disabled={isPending}
            >
                {isPending ? "Loading..." : "Send transaction"}
            </button>
            { result && <div>Transaction hash: {result?.hash}</div> }
        </>
    );
}
