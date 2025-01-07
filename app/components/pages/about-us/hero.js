import Hero from "@/app/components/shared/hero";

export default function AboutUsHero() {
    return (
        <Hero
            backgroundHeight="h-[500px] md:h-[806px]"
            backgroundImageSrc="/images/pages/about-us/hero.webp"
            buttonLink="/successful-stories"
            buttonText="Learn More"
            buttonTopSpace="mt-5 md:mt-[41px]"
            description="To a beautifully finished home with Oda’s expertly crafted packages."
            title={(
                <>
                    About
                    <br />
                    {" "}
                    Us
                </>
            )}
        />
    );
}
