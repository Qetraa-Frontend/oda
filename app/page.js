import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import dynamic from "next/dynamic";

const HomeBuildKit = dynamic(() => import("@/app/components/pages/home/build-kit"));
const HomeBuildingProject = dynamic(() => import("@/app/components/pages/home/building-project"));
const HomeDiscoverArtLiving = dynamic(() => import("@/app/components/pages/home/discover-art-living"));
const HomeHero = dynamic(() => import("@/app/components/pages/home/hero"));
const HomeHowItWorks = dynamic(() => import("@/app/components/pages/home/how-it-works"));
const HomeNewsletter = dynamic(() => import("@/app/components/pages/home/newsletter"));
const HomeOurPartners = dynamic(() => import("@/app/components/pages/home/our-partners"));
const HomeStatics = dynamic(() => import("@/app/components/pages/home/statics"));
const HomeSuccessStories = dynamic(() => import("@/app/components/pages/home/success-stories"));
const HomeTestimonials = dynamic(() => import("@/app/components/pages/home/testimonials"));
const HomeWorkScopes = dynamic(() => import("@/app/components/pages/home/work-scopes"));

export const metadata = { title: "Oda | Home" };

export default async function Home() {
    return (
        <div>
            <HomeHero />
            <HomeBuildKit />
            <HomeStatics />
            <HomeWorkScopes />
            <HomeDiscoverArtLiving />
            <HomeHowItWorks />
            <HomeBuildingProject />
            <div className="bg-[#222] max-h-[1942px] md:max-h-[2764px] lg:max-h-[2634px] xl:max-h-[2874px] z-10">
                <div className="container pt-[163px] md:pt-[327px] mx-auto max-h-[1942px] md:max-h-[2764px] lg:max-h-[2608px] xl:max-h-[2828px]">
                    <div>
                        <HomeSuccessStories />
                        <HomeOurPartners />
                        <HomeTestimonials />
                    </div>
                </div>
            </div>
            <HomeNewsletter />
        </div>
    );
}
