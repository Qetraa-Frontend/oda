import Hero from "@/app/components/shared/hero";

export default function OdaAmbassadorHero() {
    return (
        <Hero
            backgroundImageSrc="/images/pages/oda-ambassador/hero.webp"
            buttonLink="#"
            buttonText="Download App"
            buttonTopSpace="mt-[25px] md:mt-[50px]"
            description="To a beautifully finished home with Oda’s expertly crafted packages."
            heroHeight="h-[500px] md:h-[806px]"
            title={(
                <>
                    Want to Join Our
                    <br />
                    {" "}
                    Family?
                </>
            )}
        />
    );
}
