import dynamic from "next/dynamic";

const BuildYourKitHero = dynamic(() => import("@/app/components/pages/build-your-kit/hero"));
const BuildYourKitSelections = dynamic(() => import("@/app/components/pages/build-your-kit/selections"));
const BuildYourKitMenu = dynamic(() => import("@/app/components/pages/build-your-kit/menu"));
const BuildYourKitPlans = dynamic(() => import("@/app/components/pages/build-your-kit/plans"));
const BuildYourKitAddons = dynamic(() => import("@/app/components/pages/build-your-kit/addons"));
const BuildYourKitAutomation = dynamic(() => import("@/app/components/pages/build-your-kit/automation"));

export const metadata = { title: "Oda | Build Your Kit" };

export default async function BuildYourKit() {
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
        `${publicSiteUrl}api/addons?per_request=true`,
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

    const developers = await developersResponse.json();

    const plans = await plansResponse.json();

    const addons = await addonsResponse.json();

    const addonsPerRequest = await addonsPerRequestResponse.json();

    const automation = await automationResponse.json();

    const plan1Details = await plan1DetailsResponse.json();

    const plan2Details = await plan2DetailsResponse.json();

    const plan3Details = await plan3DetailsResponse.json();

    const airConditioningAddons = addons.filter(({ addongroup }) => addongroup === "AirConditioning");

    const otherAddons = addons.filter(({ addongroup }) => addongroup !== "AirConditioning");

    const formattedAutomation = {
        advanced: automation.filter(({ automationid }) => automationid === 2),
        basic: automation.filter(({ automationid }) => automationid === 1),
    };

    return (
        <div>
            <BuildYourKitHero />
            <BuildYourKitSelections developers={developers} />
            <BuildYourKitMenu plans={plans} />
            <BuildYourKitPlans
                plans={plans}
                plansDetails={{
                    plan1: plan1Details,
                    plan2: plan2Details,
                    plan3: plan3Details,
                }}
            />
            <BuildYourKitAddons
                addons={otherAddons}
                addonsPerRequest={addonsPerRequest}
                airConditioningAddons={airConditioningAddons}
            />
            <BuildYourKitAutomation automation={formattedAutomation} />
        </div>
    );
}
