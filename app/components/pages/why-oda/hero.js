import Hero from "@/app/components/shared/hero";

export default function WhyOdaHero() {
    return (
        <Hero
            backgroundHeight="h-[500px] md:h-[806px]"
            backgroundImageSrc="/images/pages/why-oda/hero.webp"
            buttonLink="/build-your-kit"
            buttonText="Learn More"
            buttonTopSpace="mt-[46px] md:mt-[93px]"
            description="To a beautifully finished home with Oda’s expertly crafted packages."
            title="Why Oda?"
        />
    );
}
