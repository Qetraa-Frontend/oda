import Hero from "@/app/components/shared/hero";

export default function AboutUsHero() {
    return (
        <Hero
            backgroundImageSrc="/images/pages/about-us/hero.png"
            buttonLink="/"
            buttonText="Learn More"
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
