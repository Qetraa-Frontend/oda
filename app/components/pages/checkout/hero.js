"use client";

import { useRouter } from "next/navigation";

import Hero from "@/app/components/shared/hero";
import { useBuildYourKitStore } from "@/app/store/build-your-kit";
import { useLocateYourHomeStore } from "@/app/store/locate-your-home";

export default function CheckoutHero() {
    const router = useRouter();

    const { isActive: locateYourHomeIsActive } = useLocateYourHomeStore();

    const { isActive: buildYourKitIsActive } = useBuildYourKitStore();

    if (locateYourHomeIsActive || buildYourKitIsActive) {
        return (
            <Hero
                backgroundImageSrc="/images/pages/checkout/hero.webp"
                buttonLink="/locate-your-home"
                buttonText="Learn More"
                buttonTopSpace="mt-[33px] md:mt-[67px]"
                description="To a beautifully finished home with Oda’s expertly crafted packages."
                heroHeight="h-[500px] md:h-[806px]"
                title={(
                    <>
                        Check
                        <br />
                        {" "}
                        Out
                    </>
                )}
            />
        );
    }

    router.push("/locate-your-home");
}
