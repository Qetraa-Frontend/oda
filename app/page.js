import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import HomeBuildKit from "@/app/components/pages/home/build-kit";
import HomeBuildingProject from "@/app/components/pages/home/building-project";
import HomeDiscoverArtLiving from "@/app/components/pages/home/discover-art-living";
import HomeHero from "@/app/components/pages/home/hero";
import HomeHowItWorks from "@/app/components/pages/home/how-it-works";
import HomeNewsletter from "@/app/components/pages/home/newsletter";
import OurPartners from "@/app/components/pages/home/our-partners";
import Statics from "@/app/components/pages/home/statics";
import HomeSuccessfulStories from "@/app/components/pages/home/successful-stories";
import HomeTestimonials from "@/app/components/pages/home/testimonials";
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
            <HomeBuildingProject />
            <div className="bg-[#222] max-h-[1942px] md:max-h-[2764px] lg:max-h-[2634px] xl:max-h-[2874px] z-10">
                <div className="container px-4 xl:px-0 pt-[163px] md:pt-[327px] mx-auto max-h-[1942px] md:max-h-[2764px] lg:max-h-[2608px] xl:max-h-[2828px]">
                    <div>
                        <HomeSuccessfulStories />
                        <OurPartners />
                        <HomeTestimonials />
                    </div>
                </div>
            </div>
            <HomeNewsletter />
        </div>
    );
}
