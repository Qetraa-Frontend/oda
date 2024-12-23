import WhyOdaBuildingProject from "@/app/components/pages/why-oda/building-project";
import WhyOdaHero from "@/app/components/pages/why-oda/hero";
import WhyOdaHowItWorks from "@/app/components/pages/why-oda/how-it-works";
import WhyOdaOurPlans from "@/app/components/pages/why-oda/our-plans";

export default function WhyOda() {
    return (
        <div>
            <WhyOdaHero />
            <WhyOdaBuildingProject />
            <WhyOdaHowItWorks />
            <WhyOdaOurPlans />
        </div>
    );
}
