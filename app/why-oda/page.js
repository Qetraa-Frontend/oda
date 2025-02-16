import dynamic from "next/dynamic";

const WhyOdaPaymentPlans = dynamic(() => import("@/app/components/pages/why-oda/payment-plans"));
const WhyOdaBuildingProject = dynamic(() => import("@/app/components/pages/why-oda/building-project"));
const WhyOdaFeatures = dynamic(() => import("@/app/components/pages/why-oda/features"));
const WhyOdaHero = dynamic(() => import("@/app/components/pages/why-oda/hero"));
const WhyOdaHowItWorks = dynamic(() => import("@/app/components/pages/why-oda/how-it-works"));
const WhyOdaOurPlans = dynamic(() => import("@/app/components/pages/why-oda/our-plans"));
const WhyOdaPlansContent = dynamic(() => import("@/app/components/pages/why-oda/plans-content"));

export const metadata = { title: "Oda | Why Oda" };

export default async function WhyOda() {
    const publicSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;

    const paymentPlansResponse = await fetch(
        `${publicSiteUrl}api/payment-plans`,
        { cache: "no-store" },
    );

    const plansResponse = await fetch(
        `${publicSiteUrl}api/plans`,
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

    const paymentPlans = await paymentPlansResponse.json();

    const plans = await plansResponse.json();

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

    const formattedPaymentPlans = paymentPlans.reduce(
        (acc, payment) => {
            const {
                adminfees,
                adminfeespercentage,
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
            <WhyOdaOurPlans
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
