import dynamic from "next/dynamic";

const OurMerchantsHero = dynamic(() => import("@/app/components/pages/our-merchants/hero"));
const Merchants = dynamic(() => import("@/app/components/pages/our-merchants/merchants"));

export const metadata = { title: "Oda | Our Merchants" };

export default function OurMerchants() {
    return (
        <div>
            <OurMerchantsHero />
            <Merchants />
        </div>
    );
}
