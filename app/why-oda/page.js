import dynamic from "next/dynamic";

const WhyOdaPaymentPlans = dynamic(() => import("@/app/components/pages/why-oda/payment-plans"));
const WhyOdaBuildingProject = dynamic(() => import("@/app/components/pages/why-oda/building-project"));
const WhyOdaFeatures = dynamic(() => import("@/app/components/pages/why-oda/features"));
const WhyOdaHero = dynamic(() => import("@/app/components/pages/why-oda/hero"));
const WhyOdaHowItWorks = dynamic(() => import("@/app/components/pages/why-oda/how-it-works"));
const WhyOdaPlans = dynamic(() => import("@/app/components/pages/why-oda/plans"));
const WhyOdaPlansContent = dynamic(() => import("@/app/components/pages/why-oda/plans-content"));

export const metadata = { title: "Oda | Why Oda" };

export default async function WhyOda() {
    const publicSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;

    const paymentPlansResponse = await fetch(
        `${publicSiteUrl}api/payment-plans`,
        { cache: "no-store" },
    );

    const plansResponse = await fetch(
        `${publicSiteUrl}api/plans/locate-your-home`,
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

    const paymentPlans = await paymentPlansResponse.json();

    const plans = await plansResponse.json();

    const plan1Details = await plan1DetailsResponse.json();

    const plan2Details = await plan2DetailsResponse.json();

    const plan3Details = await plan3DetailsResponse.json();

    const sortedPlans = plans.sort((a, b) => a.planid - b.planid);

    const formattedPlan1Details = {
        decoration: plan1Details.filter(({ plandetailstype }) => plandetailstype === 1).sort((a, b) => a.plandetailsid - b.plandetailsid),
        details: sortedPlans[0],
        foundation: plan1Details.filter(({ plandetailstype }) => plandetailstype === 0).sort((a, b) => a.plandetailsid - b.plandetailsid),
    };

    const formattedPlan2Details = {
        decoration: plan2Details.filter(({ plandetailstype }) => plandetailstype === 1).sort((a, b) => a.plandetailsid - b.plandetailsid),
        details: sortedPlans[1],
        foundation: plan2Details.filter(({ plandetailstype }) => plandetailstype === 0).sort((a, b) => a.plandetailsid - b.plandetailsid),
    };

    const formattedPlan3Details = {
        decoration: plan3Details.filter(({ plandetailstype }) => plandetailstype === 1).sort((a, b) => a.plandetailsid - b.plandetailsid),
        details: sortedPlans[2],
        foundation: plan3Details.filter(({ plandetailstype }) => plandetailstype === 0).sort((a, b) => a.plandetailsid - b.plandetailsid),
    };

    const formattedPaymentPlans = paymentPlans.reduce(
        (acc, payment) => {
            const {
                adminfees,
                adminfeespercentage,
                description,
                downpayment,
                downpaymentpercentage,
                iconBase64,
                interestrate,
                interestrateperyearpercentage,
                numberofinstallmentmonths,
                paymentplanid,
                paymentplanname,
            } = payment;

            if (!acc[paymentplanname]) {
                acc[paymentplanname] = {
                    description,
                    iconBase64,
                    installemntPlans: [],
                    paymentplanname,
                };
            }

            acc[paymentplanname].installemntPlans.push({
                adminfees,
                adminfeespercentage,
                downpayment,
                downpaymentpercentage,
                interestrate,
                interestrateperyearpercentage,
                numberofinstallmentmonths,
                paymentplanid,
            });

            return acc;
        },
        {},
    );

    return (
        <div>
            <WhyOdaHero />
            <WhyOdaBuildingProject />
            <WhyOdaHowItWorks />
            <WhyOdaPlans
                plans={plans}
                features={{
                    1: formattedPlan1Details,
                    2: formattedPlan2Details,
                    3: formattedPlan3Details,
                }}
            />
            <WhyOdaFeatures
                plans={{
                    plan1: formattedPlan1Details,
                    plan2: formattedPlan2Details,
                    plan3: formattedPlan3Details,
                }}
            />
            <WhyOdaPlansContent />
            <WhyOdaPaymentPlans paymentPlans={Object.values(formattedPaymentPlans)} />
        </div>
    );
}
