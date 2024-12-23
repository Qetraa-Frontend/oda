import AboutUsBlocks from "@/app/components/pages/about-us/blocks";
import AboutUsHero from "@/app/components/pages/about-us/hero";
import AboutUsIntro from "@/app/components/pages/about-us/intro";
import AboutUsOurMission from "@/app/components/pages/about-us/our-mission";
import AboutUsOurVision from "@/app/components/pages/about-us/our-vision";
import AboutUsTeam from "@/app/components/pages/about-us/team";

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
