import dynamic from "next/dynamic";

const FaqsHero = dynamic(() => import("@/app/components/pages/faqs/hero"));
const OurFaqs = dynamic(() => import("@/app/components/pages/faqs/our-faqs"));

export const metadata = { title: "Oda | About Us" };

export default function Faqs() {
    return (
        <div>
            <FaqsHero />
            <OurFaqs />
        </div>
    );
}
