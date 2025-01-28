import Hero from "@/app/components/shared/hero";

export default function AboutUsHero() {
    return (
        <Hero
            backgroundImageSrc="/images/pages/about-us/hero.webp"
            buttonLink="/success-stories"
            buttonText="Learn More"
            buttonTopSpace="mt-5 md:mt-[41px]"
            description="Discover who we are, what we stand for, and how we’re disrupting the prop tech ecosystem."
            heroHeight="h-[500px] md:h-[806px]"
            title={(
                <>
                    Get To
                    <br />
                    {" "}
                    Know Us
                </>
            )}
        />
    );
}
