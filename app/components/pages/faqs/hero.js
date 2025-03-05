import Hero from "@/app/components/shared/hero";

export default function FaqsHero() {
    return (
        <Hero
            backgroundImageSrc="/images/pages/faqs/hero.webp"
            heroHeight="h-[500px] md:h-[806px]"
            title={(
                <>
                    <span className="font-semibold text-2xl md:text-4xl normal-case block mb-[11px] md:mb-[23px] ml-[23px] md:ml-[46px]">Oda FAQs</span>
                    <span className="font-semibold text-[40px] md:text-[64px] normal-case">How Oda may assist you ?</span>
                </>
            )}
        />
    );
}
