import { useReferralInteraction } from "@frak-labs/nexus-sdk/react";
import type { PropsWithChildren } from "react";

/**
 * Custom page that is referral aware (will know if a user has been referred or not, and will push the assocaited interactions)
 * @constructor
 */
export function MyReferralAwarePage({ children }: PropsWithChildren) {
    const referralState = useReferralInteraction();

    return (
        <>
            {children}
            <p>Referral state: {referralState}</p>
        </>
    );
}
