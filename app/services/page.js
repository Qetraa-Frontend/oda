import dynamic from "next/dynamic";

const ServicesHero = dynamic(() => import("@/app/components/pages/services/hero"));
const OurServices = dynamic(() => import("@/app/components/pages/services/our-services"));

export const metadata = { title: "Oda | Services" };

export default function Services() {
    return (
        <div>
            <ServicesHero />
            <OurServices />
        </div>
    );
}
