import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import HomeBuildKit from "@/app/components/pages/home/build-kit";
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
            <div className="bg-[#222] max-h-[2300px] xl:max-h-[2600px]">
                <div className="container px-4 xl:px-0 mx-auto">
                    <div
                        className="relative bottom-48 lg:bottom-96 bg-cover bg-no-repeat bg-top rounded-xl min-h-[300px] md:min-h-[560px] max-w-[1248px] flex items-center justify-center"
                        style={{ backgroundImage: "url(/images/pages/home/discover_oda.png)" }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-20" />
                        <h5 className="text-white font-normal text-3xl md:text-5xl text-center !font-nanum-myeongjo relative z-10">Discover The Art Of Living With Oda</h5>
                    </div>
                    <div className="relative bottom-28 lg:bottom-56">
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
