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
            title: "Send 1 ETH",
        },
        context: "Send 1 ETH to 0xdeadbeef",
    },
});
console.log("Transaction hash:", hash);
