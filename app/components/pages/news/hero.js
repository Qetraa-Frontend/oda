import Hero from "@/app/components/shared/hero";

export default function NewsHero() {
    return (
        <Hero
            backgroundImageSrc="/images/pages/news/hero.webp"
            buttonLink="#"
            buttonText="Download App"
            buttonTopSpace="mt-[25px] md:mt-[50px]"
            description="To a beautifully finished home with Oda’s expertly crafted packages."
            heroHeight="h-[500px] md:h-[806px]"
            title={(
                <>
                    News &
                    <br />
                    {" "}
                    Events
                </>
            )}
        />
    );
}
