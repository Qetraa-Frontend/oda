import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import dynamic from "next/dynamic";
import { notFound } from "next/navigation";

const SuccessStoriesHero = dynamic(() => import("@/app/components/pages/success-stories/hero"));
const SuccessStoriesBuildingProject = dynamic(() => import("@/app/components/pages/success-stories/building-project"));
const OurSuccessStories = dynamic(() => import("@/app/components/pages/success-stories/our-success-stories"));

export const metadata = { title: "Oda | Success Stories" };

export default function SuccessStories() {
    notFound();

    return (
        <div>
            <SuccessStoriesHero />
            <SuccessStoriesBuildingProject />
            <OurSuccessStories />
        </div>
    );
}
