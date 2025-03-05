"use client";

import Hero from "@/app/components/shared/hero";

export default function BuildYourKitHero() {
    return (
        <Hero
            backgroundImageSrc="/images/pages/build-your-kit/hero.webp"
            description="To a beautifully finished home with Oda’s expertly crafted packages."
            heroHeight="h-[500px] md:h-[806px]"
            title={(
                <>
                    Build
                    <br />
                    {" "}
                    Your
                    <br />
                    {" "}
                    Kit
                </>
            )}
        />
    );
}
