import WhyOdaBankAccounts from "@/app/components/pages/why-oda/bank-accounts";
import WhyOdaBuildingProject from "@/app/components/pages/why-oda/building-project";
import WhyOdaFeatures from "@/app/components/pages/why-oda/features";
import WhyOdaHero from "@/app/components/pages/why-oda/hero";
import WhyOdaHowItWorks from "@/app/components/pages/why-oda/how-it-works";
import WhyOdaOurPlans from "@/app/components/pages/why-oda/our-plans";
import WhyOdaPlansContent from "@/app/components/pages/why-oda/plans-content";

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
