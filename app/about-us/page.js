import dynamic from "next/dynamic";

const AboutUsBlocks = dynamic(() => import("@/app/components/pages/about-us/blocks"));
const AboutUsHero = dynamic(() => import("@/app/components/pages/about-us/hero"));
const AboutUsIntro = dynamic(() => import("@/app/components/pages/about-us/intro"));
const AboutUsOurMission = dynamic(() => import("@/app/components/pages/about-us/our-mission"));
const AboutUsOurVision = dynamic(() => import("@/app/components/pages/about-us/our-vision"));
const AboutUsTeam = dynamic(() => import("@/app/components/pages/about-us/team"));

export default function AboutUs() {
    return (
        <div>
            <AboutUsHero />
            <AboutUsIntro />
            <AboutUsOurVision />
            <AboutUsOurMission />
            <AboutUsTeam />
            <AboutUsBlocks />
        </div>
    );
}
