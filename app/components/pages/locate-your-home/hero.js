import Hero from "@/app/components/shared/hero";

export default function LocateYourHomeHero() {
    return (
        <Hero
            backgroundImageSrc="/images/pages/locate-your-home/hero.webp"
            buttonLink="/services"
            buttonText="Learn More"
            buttonTopSpace="mt-[22px] md:mt-[44px]"
            description="To a beautifully finished home with Oda’s expertly crafted packages."
            heroHeight="h-[500px] md:h-[806px]"
            title={(
                <>
                    Have A
                    <br />
                    {" "}
                    Handsome
                    <br />
                    {" "}
                    Home
                </>
            )}
        />
    );
}
