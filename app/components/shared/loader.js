import Image from "next/image";

export default function Loader() {
    return (
        <div className="flex items-center justify-center bg-primary h-full w-full fixed z-50 overflow-hidden">
            <div className="flex flex-col items-center overflow-hidden w-[278px] lg:w-[556px]">
                <Image
                    alt="logo"
                    className="h-[95px] lg:h-[191px] w-[278px] lg:w-[556px]"
                    height={191}
                    loading="eager"
                    src="/images/logo_3.webp"
                    width={556}
                    priority
                />
                <div className="w-[233px] mt-[22px] md:mt-[45px]">
                    <div className="h-[5px] w-full bg-black bg-opacity-40 overflow-hidden">
                        <div
                            className="animate-progress w-full h-full bg-black"
                            style={{ transformOrigin: "0% 50%" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
