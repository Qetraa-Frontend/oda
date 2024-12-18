import HomeBuildKit from "@/app/components/pages/home/build-kit";
import HomeHero from "@/app/components/pages/home/hero";

export default function Home() {
    return (
        <div>
            <HomeHero />
            <div className="container px-4 md:px-6 mx-auto">
                <HomeBuildKit />
            </div>
        </div>
    );
}
