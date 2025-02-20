"use client";

import Hero from "@/app/components/shared/hero";
import { useLocateYourHomeStore } from "@/app/store/locate-your-home";

export default function CartHero() {
    const { isActive } = useLocateYourHomeStore();

    return (
        <Hero
            backgroundImageSrc={`/images/pages/cart/hero_${isActive ? "locate_your_home" : "build_your_kit"}.webp`}
            heroHeight="h-[250px] md:h-[494px]"
        />
    );
}
