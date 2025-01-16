import dynamic from "next/dynamic";

const OdaAmbassadorHero = dynamic(() => import("@/app/components/pages/oda-ambassador/hero"));
const OdaAmbassadorForm = dynamic(() => import("@/app/components/pages/oda-ambassador/form"));

export const metadata = { title: "Oda | Oda Ambassador" };

export default function OdaAmbassador() {
    return (
        <div>
            <OdaAmbassadorHero />
            <OdaAmbassadorForm />
        </div>
    );
}
