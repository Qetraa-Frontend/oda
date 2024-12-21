import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Image from "next/image";

import HomeBuildKit from "@/app/components/pages/home/build-kit";
import HomeDiscoverArtLiving from "@/app/components/pages/home/discover-art-living";
import HomeHero from "@/app/components/pages/home/hero";
import HomeHowItWorks from "@/app/components/pages/home/how-it-works";
import OurPartners from "@/app/components/pages/home/our-partners";
import Statics from "@/app/components/pages/home/statics";
import HomeSuccessfulStories from "@/app/components/pages/home/successful-stories";
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
            <div className="bg-[#222]">
                <div className="container px-4 md:px-6 mx-auto">
                    <Image
                        alt="discover_oda"
                        className="relative bottom-48 lg:bottom-96"
                        height={560}
                        src="/images/pages/home/discover_oda.png"
                        width={1248}
                    />
                    <div className="relative bottom-28 lg:bottom-56">
                        <HomeSuccessfulStories />
                        <OurPartners />
                    </div>
                </div>
            </div>
        </div>
    );
}
