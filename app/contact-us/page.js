import dynamic from "next/dynamic";

const ContactUsHero = dynamic(() => import("@/app/components/pages/contact-us/hero"));
const ContactUsForm = dynamic(() => import("@/app/components/pages/contact-us/form"));
const ContactUsMap = dynamic(() => import("@/app/components/pages/contact-us/map"));

export const metadata = { title: "Oda | Contact Us" };

export default function ContactUs() {
    return (
        <div>
            <ContactUsHero />
            <ContactUsForm />
            <ContactUsMap />
        </div>
    );
}
