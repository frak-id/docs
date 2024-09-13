import { sendInteraction } from "@frak-labs/nexus-sdk/actions";
import { PressInteractionEncoder } from "@frak-labs/nexus-sdk/interactions";
import { keccak256, toHex } from "viem";
import { nexusClient } from "../core/client-full.ts";

/**
 * Prepare a user interaction on your website
 */
const interaction = PressInteractionEncoder.openArticle({
    articleId: keccak256(toHex("my-strangely-formatted-article-id")),
});

/**
 * Submit a new interaction for the user
 */
const { delegationId } = await sendInteraction(nexusClient, {
    interaction,
});

console.log("Delegated interaction id", delegationId);
