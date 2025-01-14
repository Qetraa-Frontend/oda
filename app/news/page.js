import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import dynamic from "next/dynamic";

const NewsHero = dynamic(() => import("@/app/components/pages/news/hero"));
const NewsSlideshow = dynamic(() => import("@/app/components/pages/news/slideshow"));
const NewsEvents = dynamic(() => import("@/app/components/pages/news/events"));
const NewsBlocks = dynamic(() => import("@/app/components/pages/news/blocks"));

export const metadata = { title: "Oda | News" };

export default function AboutUs() {
    return (
        <div>
            <NewsHero />
            <NewsSlideshow />
            <NewsEvents />
            <NewsBlocks />
        </div>
    );
}
