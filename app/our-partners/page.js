import dynamic from "next/dynamic";

const OurPartnersHero = dynamic(() => import("@/app/components/pages/our-partners/hero"));
const Partners = dynamic(() => import("@/app/components/pages/our-partners/partners"));

export const metadata = { title: "Oda | Our Partners" };

export default function OurPartners() {
    return (
        <div>
            <OurPartnersHero />
            <Partners />
        </div>
    );
}
