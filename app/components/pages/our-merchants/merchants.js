import Image from "next/image";

import { ourMerchants } from "@/app/data/our-merchants";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/app/ui/tabs";

export default function Merchants() {
    return (
        <div className="container mx-auto pt-[36px] md:pt-[72px] pb-[163px] md:pb-[326px]">
            <Tabs
                className="w-full"
                defaultValue={ourMerchants.all.key}
            >
                <TabsList>
                    {Object.keys(ourMerchants).map((key) => (
                        <TabsTrigger
                            key={key}
                            value={key}
                        >
                            {ourMerchants[key].tab}
                        </TabsTrigger>
                    ))}
                </TabsList>
                {Object.keys(ourMerchants).map((key) => (
                    <TabsContent
                        key={key}
                        value={ourMerchants[key].key}
                    >
                        {key !== ourMerchants.all.key ? (
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-[13px] md:gap-[26px] mt-[36px] md:mt-[72px]">
                                {ourMerchants[key].merchants.map(({
                                    alt,
                                    id,
                                    imageSrc,
                                }) => (
                                    <div
                                        className="col-span-1 sm:col-span-6 md:col-span-4"
                                        key={id}
                                    >
                                        <div className="flex flex-col justify-center max-w-[363px] min-h-[203px] border">
                                            <Image
                                                alt={alt}
                                                className="h-[153px] mx-auto"
                                                height={153}
                                                loading="lazy"
                                                src={imageSrc}
                                                width={297}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="mt-[36px] md:mt-[72px]">
                                {Object.keys(ourMerchants[key].merchantsCategories).map((merchantsCategoryKey, index) => {
                                    const merchantsCategory = ourMerchants[key].merchantsCategories[merchantsCategoryKey];

                                    const {
                                        merchants,
                                        tab,
                                    } = merchantsCategory;

                                    return (
                                        <div
                                            className={`${index === Object.keys(ourMerchants[key].merchantsCategories).length - 1 ? "" : "mb-10 md:mb-20"}`}
                                            key={merchantsCategoryKey}
                                        >
                                            <h4 className="font-medium text-[22px] md:text-[32px] mb-3 md:mb-6">{tab}</h4>
                                            <div className="grid grid-cols-1 md:grid-cols-12 gap-[13px] md:gap-[26px]">
                                                {merchants.map(({
                                                    alt,
                                                    id,
                                                    imageSrc,
                                                }) => (
                                                    <div
                                                        className="col-span-1 sm:col-span-6 md:col-span-4"
                                                        key={id}
                                                    >
                                                        <div className="flex flex-col justify-center max-w-[363px] min-h-[203px] border">
                                                            <Image
                                                                alt={alt}
                                                                className="h-[153px] mx-auto"
                                                                height={153}
                                                                loading="lazy"
                                                                src={imageSrc}
                                                                width={297}
                                                            />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    );
}
