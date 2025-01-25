import Hero from "@/app/components/shared/hero";

export default function OurMerchantsHero() {
    return (
        <Hero
            backgroundImageSrc="/images/pages/our-merchants/hero.webp"
            buttonLink="#"
            buttonText="Learn More"
            buttonTopSpace="mt-[30px] md:mt-[61px]"
            description="We are proud to collaborate with a diverse network of merchants who share our vision and values. Together, we strive to deliver innovative solutions and exceptional experiences that empower our customers."
            heroHeight="h-[500px] md:h-[806px]"
            title="Our Merchants"
        />
    );
}
