import dynamic from "next/dynamic";

const OdaAmbassadorHero = dynamic(() => import("@/app/components/pages/oda-ambassador/hero"));
const OdaAmbassadorForm = dynamic(() => import("@/app/components/pages/oda-ambassador/form"));

export const metadata = { title: "Oda | Oda Ambassador" };

export default async function OdaAmbassador() {
    const publicSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;

    const developersResponse = await fetch(
        `${publicSiteUrl}api/developers`,
        { cache: "no-store" },
    );

    const developers = await developersResponse.json();

    return (
        <div>
            <OdaAmbassadorHero />
            <OdaAmbassadorForm developers={developers} />
        </div>
    );
}
