import dynamic from "next/dynamic";

const WhyOdaBankAccounts = dynamic(() => import("@/app/components/pages/why-oda/bank-accounts"));
const WhyOdaBuildingProject = dynamic(() => import("@/app/components/pages/why-oda/building-project"));
const WhyOdaFeatures = dynamic(() => import("@/app/components/pages/why-oda/features"));
const WhyOdaHero = dynamic(() => import("@/app/components/pages/why-oda/hero"));
const WhyOdaHowItWorks = dynamic(() => import("@/app/components/pages/why-oda/how-it-works"));
const WhyOdaOurPlans = dynamic(() => import("@/app/components/pages/why-oda/our-plans"));
const WhyOdaPlansContent = dynamic(() => import("@/app/components/pages/why-oda/plans-content"));

export const metadata = { title: "Oda | Why Oda" };

export default function WhyOda() {
    return (
        <div>
            <WhyOdaHero />
            <WhyOdaBuildingProject />
            <WhyOdaHowItWorks />
            <WhyOdaOurPlans />
            <WhyOdaFeatures />
            <WhyOdaPlansContent />
            <WhyOdaBankAccounts />
        </div>
    );
}
