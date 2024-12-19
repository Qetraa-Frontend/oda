import HomeBuildKit from "@/app/components/pages/home/build-kit";
import HomeHero from "@/app/components/pages/home/hero";
import Statics from "@/app/components/pages/home/statics";
import WorkScopes from "@/app/components/pages/home/work-scopes";

export default function Home() {
    return (
        <div>
            <HomeHero />
            <HomeBuildKit />
            <Statics />
            <WorkScopes />
        </div>
    );
}
