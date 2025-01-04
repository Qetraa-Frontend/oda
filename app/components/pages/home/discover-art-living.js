import Image from "next/image";

export default function HomeDiscoverArtLiving() {
    return (
        <div className="bg-[#222] min-h-[1012px] py-[22px] md:py-11 !font-nanum-myeongjo">
            <div className="container px-4 xl:px-0 mx-auto">
                <div className="text-center text-white mb-[23px] md:mb-[46px]">
                    <h2 className="font-c text-[40px] md:text-[64px] uppercase !leading-snug">
                        Discover the Art of Living
                        <br className="hidden xl:block" />
                        {" "}
                        with
                        {" "}
                        <span className="font-normal text-[40px] md:text-[64px] uppercase text-secondary">oda</span>
                    </h2>
                    <p className="font-light text-[28px] md:text-[40px] py-[11px] md:py-[22px] mt-[11px] md:mt-[22px]">Where every room is tailored to your vision and style.</p>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-8 sm:justify-items-center xl:justify-items-start">
                    <div className="col-span-1 flex flex-col gap-4 md:gap-8 xl:relative top-36">
                        <div className="w-20 h-20 bg-secondary xl:relative left-32" />
                        <span className="font-normal text-[28px] md:text-[40px] rounded-[100px] uppercase bg-secondary text-center w-fit px-[6px] md:px-3 rotate-[17deg] xl:hover:animate-wiggleBottom cursor-default xl:relative top-8 left-8 my-4 md:my-0">MININAL</span>
                        <Image
                            alt="art_1"
                            className="xl:relative top-10"
                            height={207}
                            loading="lazy"
                            src="/images/pages/home/discover-art-living/art_1.webp"
                            width={207}
                        />
                    </div>
                    <div className="col-span-1 flex flex-col gap-4 md:gap-8 xl:relative -top-5">
                        <div className="w-24 h-24 bg-secondary rounded-full xl:relative top-20 left-4" />
                        <Image
                            alt="art_2"
                            className="xl:relative top-16"
                            height={200}
                            loading="lazy"
                            src="/images/pages/home/discover-art-living/art_2.webp"
                            width={200}
                        />
                        <div className="w-36 h-36 bg-[#6F6458] rounded-full xl:relative left-20 top-8" />
                        <div className="w-20 h-20 bg-secondary xl:relative bottom-3" />
                    </div>
                    <div className="col-span-1 flex flex-col gap-4 md:gap-8 relative bottom-40 lg:bottom-0 xl:top-16 xl:right-12">
                        <Image
                            alt="art_3"
                            height={207}
                            loading="lazy"
                            src="/images/pages/home/discover-art-living/art_3.webp"
                            width={207}
                        />
                        <span className="font-bold text-3xl md:text-5xl rounded-[200px] px-[6px] md:px-3 uppercase bg-secondary text-center w-fit xl:hover:animate-wiggle cursor-default xl:relative left-32 bottom-6">BOHO</span>
                        <Image
                            alt="art_4"
                            className="xl:relative left-12 bottom-8"
                            height={159}
                            loading="lazy"
                            src="/images/pages/home/discover-art-living/art_4.webp"
                            width={159}
                        />
                    </div>
                    <div className="col-span-1 flex flex-col gap-4 md:gap-8 relative top-6 lg:-top-40 xl:top-6 lg:left-20 xl:left-0">
                        <Image
                            alt="art_5"
                            className="xl:relative right-20"
                            height={86}
                            loading="lazy"
                            src="/images/pages/home/discover-art-living/art_5.webp"
                            width={86}
                        />
                        <Image
                            alt="art_6"
                            className="xl:relative right-6"
                            height={129}
                            loading="lazy"
                            src="/images/pages/home/discover-art-living/art_6.webp"
                            width={129}
                        />
                        <div className="w-20 h-20 bg-secondary xl:relative top-20 left-12 rotate-[-17deg]" />
                        <span className="font-normal text-[28px] md:text-[40px] rounded-[100px] uppercase bg-secondary text-center w-fit px-[6px] md:px-3 rotate-[17deg] xl:hover:animate-wiggleBottom cursor-default relative xl:top-24 right-20 sm:right-0 xl:right-20 mt-10 sm:mt-16 xl:mt-0">SCANDINAVIAN</span>
                    </div>
                    <div className="col-span-1 flex flex-col gap-4 md:gap-8 relative sm:-top-32 lg:-top-2 xl:top-16">
                        <Image
                            alt="art_7"
                            className="xl:relative right-24"
                            height={207}
                            loading="lazy"
                            src="/images/pages/home/discover-art-living/art_7.webp"
                            width={207}
                        />
                        <span className="font-normal text-[28px] md:text-[40px] rounded-[100px] uppercase bg-secondary text-center w-fit px-[6px] md:px-3 rotate-[-17deg] xl:hover:animate-wiggleTop cursor-default xl:relative right-16 top-6 my-4 md:my-0">MODERN</span>
                        <div className="w-44 h-44 bg-[#6F6458] flex align-center justify-center items-center xl:relative top-20 xl:top-12 xl:left-6 lg:ml-8 xl:ml-0">
                            <div className="w-36 h-36 bg-[#222] rounded-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
