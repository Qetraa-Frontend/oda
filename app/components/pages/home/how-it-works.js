import Image from "next/image";

export default function HomeHowItWorks() {
    return (
        <div className="container px-4 md:px-6 mx-auto pt-20 md:pt-40">
            <div>
                <div className="mb-14 md:mb-28">
                    <h2 className="font-normal text-3xl md:text-5xl text-center leading-relaxed">
                        How it works?
                        <br />
                        {" "}
                        <span className="font-medium text-4xl md:text-6xl uppercase">The 4 Steps</span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 justify-items-center md:justify-items-start">
                    <div className="col-span-1 md:col-span-3">
                        <Image
                            alt="Step_1"
                            height={390}
                            src="/images/pages/home/how-it-works/step_1.png"
                            width={288}
                        />
                    </div>
                    <div className="col-span-1 md:col-span-3">
                        <Image
                            alt="Step_2"
                            height={390}
                            src="/images/pages/home/how-it-works/step_2.png"
                            width={288}
                        />
                    </div>
                    <div className="col-span-1 md:col-span-3">
                        <Image
                            alt="Step_3"
                            height={390}
                            src="/images/pages/home/how-it-works/step_3.png"
                            width={288}
                        />
                    </div>
                    <div className="col-span-1 md:col-span-3">
                        <Image
                            alt="Step_4"
                            height={390}
                            src="/images/pages/home/how-it-works/step_4.png"
                            width={288}
                        />
                    </div>
                </div>
            </div>
            <div>
                <div className="py-20 md:py-40">
                    <h2 className="font-semibold text-4xl md:text-6xl uppercase text-center leading-relaxed">
                        Building a Legacy, One
                        <br className="hidden md:block" />
                        {" "}
                        Project at a Time
                    </h2>
                </div>
                <div>
                    <Image
                        alt="discover_oda"
                        height={560}
                        src="/images/pages/home/how-it-works/discover_oda.png"
                        width={1248}
                    />
                </div>
            </div>
        </div>
    );
}
