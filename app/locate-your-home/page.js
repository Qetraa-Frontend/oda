import dynamic from "next/dynamic";

const LocateYourHomeHero = dynamic(() => import("@/app/components/pages/locate-your-home/hero"));
const LocateYourHomeSelections = dynamic(() => import("@/app/components/pages/locate-your-home/selections"));
const LocateYourHomeMenu = dynamic(() => import("@/app/components/pages/locate-your-home/menu"));
const LocateYourHomePlans = dynamic(() => import("@/app/components/pages/locate-your-home/plans"));
const LocateYourHomeAddons = dynamic(() => import("@/app/components/pages/locate-your-home/addons"));
const LocateYourHomeAutomation = dynamic(() => import("@/app/components/pages/locate-your-home/automation"));

export const metadata = { title: "Oda | Locate Your Home" };

export default async function LocateYourHome() {
    const publicSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;

    const developersResponse = await fetch(
        `${publicSiteUrl}api/developers`,
        { cache: "no-store" },
    );

    const plansResponse = await fetch(
        `${publicSiteUrl}api/plans`,
        { cache: "no-store" },
    );

    const addonsResponse = await fetch(
        `${publicSiteUrl}api/addons`,
        { cache: "no-store" },
    );

    const addonsPerRequestResponse = await fetch(
        `${publicSiteUrl}api/addons/per-request`,
        { cache: "no-store" },
    );

    const automationResponse = await fetch(
        `${publicSiteUrl}api/automation`,
        { cache: "no-store" },
    );

    const plan1DetailsResponse = await fetch(
        `${publicSiteUrl}api/plans/1`,
        { cache: "no-store" },
    );

    const plan2DetailsResponse = await fetch(
        `${publicSiteUrl}api/plans/2`,
        { cache: "no-store" },
    );

    const plan3DetailsResponse = await fetch(
        `${publicSiteUrl}api/plans/3`,
        { cache: "no-store" },
    );

    const developers = await developersResponse.json();

    const plans = await plansResponse.json();

    const addons = await addonsResponse.json();

    const addonsPerRequest = await addonsPerRequestResponse.json();

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

    const airConditioningAddons = addons.filter(({ addongroup }) => addongroup === "AirConditioning");

    const otherAddons = addons.filter(({ addongroup }) => addongroup !== "AirConditioning");

    const formattedAutomation = {
        advanced: automation.filter(({ automationid }) => automationid === 2),
        basic: automation.filter(({ automationid }) => automationid === 1),
    };

    return (
        <div>
            <LocateYourHomeHero />
            <LocateYourHomeSelections developers={developers} />
            <LocateYourHomeMenu plans={plans} />
            <LocateYourHomePlans
                plans={{
                    plan1: formattedPlan1Details,
                    plan2: formattedPlan2Details,
                    plan3: formattedPlan3Details,
                }}
            />
            <LocateYourHomeAddons
                addons={otherAddons}
                addonsPerRequest={addonsPerRequest}
                airConditioningAddons={airConditioningAddons}
            />
            <LocateYourHomeAutomation automation={formattedAutomation} />
        </div>
    );
}
