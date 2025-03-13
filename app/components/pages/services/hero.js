import Hero from "@/app/components/shared/hero";

export default function ServicesHero() {
    return (
        <Hero
            backgroundImageSrc="/images/pages/services/hero.webp"
            description="To a beautifully finished home with Oda’s expertly crafted packages. Choose one of our packages and customize it with additional elements from our add-ons packages. Add your selections to your cart on the Oda App."
            heroHeight="h-[450px] md:h-[698px]"
            title={(
                <>
                    Our
                    <br />
                    {" "}
                    Services
                </>
            )}
        />
    );
}
