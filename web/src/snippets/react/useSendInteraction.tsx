import { ReferralInteractionEncoder } from "@frak-labs/nexus-sdk/interactions";
import { useSendInteraction } from "@frak-labs/nexus-sdk/react";

/**
 * Define your sharing button
 */
export function ShareButton() {
    const { mutate: sendInteraction, isPending, error } = useSendInteraction();

    return (
        <>
            {error && <div>{error.message}</div>}
            <button
                type={"button"}
                onClick={() => {
                    // Sharing logic ...

                    sendInteraction({
                        interaction: ReferralInteractionEncoder.createLink(),
                    });
                }}
                disabled={isPending}
            >
                {isPending ? "Loading..." : "Share me"}
            </button>
        </>
    );
}
