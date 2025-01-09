import Hero from "@/app/components/shared/hero";

export default function SuccessStoriesHero() {
    return (
        <Hero
            backgroundImageSrc="/images/pages/success-stories/hero.webp"
            buttonLink="/success-stories"
            buttonText="Learn More"
            buttonTopSpace="mt-[46px] md:mt-[93px]"
            description="To a beautifully finished home with Oda’s expertly crafted packages."
            heroHeight="h-[500px] md:h-[806px]"
            title={(
                <>
                    Success
                    <br />
                    {" "}
                    Stories
                </>
            )}
        />
    );
}
