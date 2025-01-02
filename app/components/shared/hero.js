import Link from "next/link";

export default function Hero({
    backgroundImageSrc,
    buttonLink,
    buttonText,
    description,
    otherData,
    title,
}) {
    return (
        <div
            className="relative bg-cover bg-no-repeat bg-top h-[600px] md:h-[1022px] w-[100vw] transition-all duration-1000"
            style={{ backgroundImage: `url(${backgroundImageSrc})` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-40" />
            <div className="relative z-40 container px-4 xl:px-0 mx-auto h-full w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
                <div className="col-span-1 md:col-span-6 mt-44 md:mt-64">
                    <h1 className="uppercase font-medium text-6xl md:text-8xl text-white">{title}</h1>
                    <p className="font-medium text-lg md:text-2xl text-white mt-3 md:mt-5 max-w-[468px]">{description}</p>
                    <Link
                        className="text-lg md:text-2xl font-medium mt-12 md:mt-24 inline-block"
                        href={buttonLink}
                        prefetch={false}
                    >
                        <button className="bg-transparent hover:bg-white text-white hover:text-black py-1 md:py-2 px-4 md:px-8 border border-white hover:border-transparent rounded transition-all duration-1000">{buttonText}</button>
                    </Link>
                </div>
                {otherData && <div className="col-span-1 md:col-span-6 hidden md:block">{otherData}</div>}
            </div>
        </div>
    );
}
