import dynamicImport from "next/dynamic";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

const CartHero = dynamicImport(() => import("@/app/components/pages/cart/hero"));
const CartSummary = dynamicImport(() => import("@/app/components/pages/cart/summary"));

export const metadata = { title: "Oda | Cart" };

export default async function Cart({ searchParams }) {
    const { orderId } = searchParams;

    const publicSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;

    const orderResponse = await fetch(
        `${publicSiteUrl}api/orders/${orderId}`,
        {
            cache: "no-store",
            next: { revalidate: 0 },
        },
    );

    const plansResponse = await fetch(
        `${publicSiteUrl}api/plans`,
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

    const plan4DetailsResponse = await fetch(
        `${publicSiteUrl}api/plans/4`,
        { cache: "no-store" },
    );

    const plan5DetailsResponse = await fetch(
        `${publicSiteUrl}api/plans/5`,
        { cache: "no-store" },
    );

    const plan6DetailsResponse = await fetch(
        `${publicSiteUrl}api/plans/6`,
        { cache: "no-store" },
    );

    const order = await orderResponse.json();

    const plans = await plansResponse.json();

    const automation = await automationResponse.json();

    const plan1Details = order.apartmentDTO.apartmentType === 0 ? await plan1DetailsResponse.json() : await plan4DetailsResponse.json();

    const plan2Details = order.apartmentDTO.apartmentType === 0 ? await plan2DetailsResponse.json() : await plan5DetailsResponse.json();

    const plan3Details = order.apartmentDTO.apartmentType === 0 ? await plan3DetailsResponse.json() : await plan6DetailsResponse.json();

    const sortedPlans = plans.sort((a, b) => a.planid - b.planid);

    const formattedPlan1Details = {
        decoration: plan1Details.filter(({ plandetailstype }) => plandetailstype === 1),
        details: sortedPlans[order.apartmentDTO.apartmentType === 0 ? 0 : 3],
        foundation: plan1Details.filter(({ plandetailstype }) => plandetailstype === 0),
    };

    const formattedPlan2Details = {
        decoration: plan2Details.filter(({ plandetailstype }) => plandetailstype === 1),
        details: sortedPlans[order.apartmentDTO.apartmentType === 0 ? 1 : 4],
        foundation: plan2Details.filter(({ plandetailstype }) => plandetailstype === 0),
    };

    const formattedPlan3Details = {
        decoration: plan3Details.filter(({ plandetailstype }) => plandetailstype === 1),
        details: sortedPlans[order.apartmentDTO.apartmentType === 0 ? 2 : 5],
        foundation: plan3Details.filter(({ plandetailstype }) => plandetailstype === 0),
    };

    const formattedAutomation = {
        1: automation.filter(({ automationid }) => automationid === 1),
        2: automation.filter(({ automationid }) => automationid === 2),
    };

    if (order?.error) notFound();

    return (
        <div>
            <CartHero />
            <CartSummary
                automation={formattedAutomation}
                order={order}
                plans={{
                    1: formattedPlan1Details,
                    2: formattedPlan2Details,
                    3: formattedPlan3Details,
                }}
            />
        </div>
    );
}
