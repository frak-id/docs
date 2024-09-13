import { sendTransaction } from "@frak-labs/nexus-sdk/actions";
import { toHex } from "viem";
import { nexusClient } from "../core/client-full.ts";

/**
 * Send a transaction
 */
const { hash } = await sendTransaction(nexusClient, {
    tx: {
        to: "0xdeadbeef",
        value: toHex(100n),
    },
    metadata: {
        header: {
            title: "Sending eth",
        },
        context: "Send 100wei to 0xdeadbeef",
    },
});
console.log("Transaction hash:", hash);
