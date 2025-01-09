import dynamic from "next/dynamic";

const SuccessStoriesHero = dynamic(() => import("@/app/components/pages/success-stories/hero"));
const SuccessStoriesBuildingProject = dynamic(() => import("@/app/components/pages/success-stories/building-project"));

export const metadata = { title: "Oda | Success Stories" };

export default function SuccessStories() {
    return (
        <div>
            <SuccessStoriesHero />
            <SuccessStoriesBuildingProject />
        </div>
    );
}
