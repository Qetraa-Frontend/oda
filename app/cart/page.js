import dynamic from "next/dynamic";

const CartHero = dynamic(() => import("@/app/components/pages/cart/hero"));
const CartSummary = dynamic(() => import("@/app/components/pages/cart/summary"));

export const metadata = { title: "Oda | Cart" };

export default async function Cart() {
    const publicSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;

    const plansResponse = await fetch(
        `${publicSiteUrl}api/plans`,
        { cache: "no-store" },
    );

    const automationResponse = await fetch(
        `${publicSiteUrl}api/automation`,
        { cache: "no-store" },
    );

    const plan1DetailsResponse = await fetch(
        `${publicSiteUrl}api/plans?id=1`,
        { cache: "no-store" },
    );

    const plan2DetailsResponse = await fetch(
        `${publicSiteUrl}api/plans?id=2`,
        { cache: "no-store" },
    );

    const plan3DetailsResponse = await fetch(
        `${publicSiteUrl}api/plans?id=3`,
        { cache: "no-store" },
    );

    const plans = await plansResponse.json();

    const automation = await automationResponse.json();

    const plan1Details = await plan1DetailsResponse.json();

    const plan2Details = await plan2DetailsResponse.json();

    const plan3Details = await plan3DetailsResponse.json();

    const formattedPlan1Details = {
        decoration: plan1Details.filter(({ plandetailstype }) => plandetailstype === 1),
        details: plans[0],
        foundation: plan1Details.filter(({ plandetailstype }) => plandetailstype === 0),
    };

    const formattedPlan2Details = {
        decoration: plan2Details.filter(({ plandetailstype }) => plandetailstype === 1),
        details: plans[1],
        foundation: plan2Details.filter(({ plandetailstype }) => plandetailstype === 0),
    };

    const formattedPlan3Details = {
        decoration: plan3Details.filter(({ plandetailstype }) => plandetailstype === 1),
        details: plans[2],
        foundation: plan3Details.filter(({ plandetailstype }) => plandetailstype === 0),
    };

    const formattedAutomation = {
        advanced: automation.filter(({ automationid }) => automationid === 2),
        basic: automation.filter(({ automationid }) => automationid === 1),
    };

    return (
        <div>
            <CartHero />
            <CartSummary
                automation={formattedAutomation}
                plans={{
                    plan1: formattedPlan1Details,
                    plan2: formattedPlan2Details,
                    plan3: formattedPlan3Details,
                }}
            />
        </div>
    );
}
