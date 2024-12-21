import HomeBuildKit from "@/app/components/pages/home/build-kit";
import HomeDiscoverArtLiving from "@/app/components/pages/home/discover-art-living";
import HomeHero from "@/app/components/pages/home/hero";
import HomeHowItWorks from "@/app/components/pages/home/how-it-works";
import Statics from "@/app/components/pages/home/statics";
import WorkScopes from "@/app/components/pages/home/work-scopes";

export default function Home() {
    return (
        <div>
            <HomeHero />
            <HomeBuildKit />
            <Statics />
            <WorkScopes />
            <HomeDiscoverArtLiving />
            <HomeHowItWorks />
        </div>
    );
}
