import Hero from "@/app/components/shared/hero";

export default function OdaAmbassadorHero() {
    return (
        <Hero
            backgroundImageSrc="/images/pages/oda-ambassador/hero.webp"
            description="How about joining our team? We’d love to have you on board and be  part of our journey!"
            heroHeight="h-[500px] md:h-[806px]"
            title={(
                <>
                    Join ODA
                    <br />
                    {" "}
                    Team
                </>
            )}
        />
    );
}
