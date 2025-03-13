import dynamic from "next/dynamic";

const NotFoundHero = dynamic(() => import("@/app/components/pages/404/hero"));
const NotFoundIntro = dynamic(() => import("@/app/components/pages/404/intro"));

export const metadata = { title: "Oda | 404" };

export default function NotFound() {
    return (
        <div>
            <NotFoundHero />
            <NotFoundIntro />
        </div>
    );
}
