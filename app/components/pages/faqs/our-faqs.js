"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import Spinner from "@/app/components/shared/spinner";
import { faqs } from "@/app/data/faqs";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/app/ui/accordion";

export default function OurFaqs() {
    const [filteredFaqs, setFilteredFaqs] = useState([]);

    const [noResults, setNoResults] = useState(false);

    const [loading, setLoading] = useState(false);

    const searchParams = useSearchParams();

    const handleFilteredFAQs = (keyword) => {
        setLoading(true);

        setNoResults(false);

        if (keyword) {
            const searchKeyword = keyword.toLowerCase().trim();

            const allFAQs = [...faqs.faqs1, ...faqs.faqs2, ...faqs.faqs3];

            const filteredArray = allFAQs.filter(
                ({
                    answer,
                    question,
                }) => question.toLowerCase().includes(searchKeyword)
                || answer.toLowerCase().includes(searchKeyword),
            );

            if (filteredArray.length === 0) setNoResults(true);

            setFilteredFaqs(filteredArray);
        } else setFilteredFaqs([]);

        setTimeout(
            () => {
                setLoading(false);
            },
            600,
        );
    };

    useEffect(
        () => {
            if (searchParams.get("search")) handleFilteredFAQs(searchParams.get("search"));
            else {
                setFilteredFaqs([]);

                setNoResults(false);
            }
        },
        [searchParams.get("search")], // eslint-disable-line
    );

    return (
        <div className="container mx-auto pt-[72px] md:pt-[145px] pb-[77px] md:pb-[155px]">
            {loading ? <Spinner /> : (
                <div>
                    {filteredFaqs.length > 0 ? ( // eslint-disable-line
                        <div className="w-full md:w-[90%] lg:w-[95%] xl:w-[80%] mx-auto mb-20 md:mb-40">
                            <div className="border-black border-[1px] rounded-lg p-2 md:p-4">
                                {filteredFaqs.map(({
                                    answer,
                                    id,
                                    question,
                                }) => (
                                    <Accordion
                                        className="w-full p-2 md:p-4"
                                        key={id}
                                        type="multiple"
                                    >
                                        <AccordionItem value={`faqs1-item-${id}`}>
                                            <AccordionTrigger
                                                keyword={searchParams.get("search")}
                                                truncatedAnswer={answer.slice(
                                                    0,
                                                    Math.ceil(answer.length / 2),
                                                )}
                                                withHighlighter
                                            >
                                                {question}
                                            </AccordionTrigger>
                                            <AccordionContent
                                                keyword={searchParams.get("search")}
                                                withHighlighter
                                            >
                                                {answer}
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                ))}
                            </div>
                        </div>
                    ) : noResults ? (
                        <div className="flex items-center justify-center w-full h-[300px]">
                            <p className="font-semibold text-sm md:text-lg">There is no Results to show, try to search again with a specific clear keyword</p>
                        </div>
                    ) : (
                        <>
                            <div className="w-full md:w-[90%] lg:w-[95%] xl:w-[80%] mx-auto mb-20 md:mb-40">
                                <div className="border-black border-[1px] rounded-lg p-2 md:p-4">
                                    {faqs.faqs1.map(({
                                        answer,
                                        id,
                                        question,
                                    }) => (
                                        <Accordion
                                            className="w-full p-2 md:p-4"
                                            key={id}
                                            type="multiple"
                                        >
                                            <AccordionItem value={`faqs1-item-${id}`}>
                                                <AccordionTrigger
                                                    truncatedAnswer={answer.slice(
                                                        0,
                                                        Math.ceil(answer.length / 2),
                                                    )}
                                                >
                                                    {question}
                                                </AccordionTrigger>
                                                <AccordionContent>{answer}</AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                    ))}
                                </div>
                            </div>
                            <div className="w-full md:w-[90%] lg:w-[95%] xl:w-[80%] mx-auto mb-20 md:mb-40">
                                <div className="border-black border-[1px] rounded-lg p-2 md:p-4">
                                    {faqs.faqs2.map(({
                                        answer,
                                        id,
                                        question,
                                    }) => (
                                        <Accordion
                                            className="w-full p-2 md:p-4"
                                            key={id}
                                            type="multiple"
                                        >
                                            <AccordionItem value={`faqs2-item-${id}`}>
                                                <AccordionTrigger
                                                    truncatedAnswer={answer.slice(
                                                        0,
                                                        Math.ceil(answer.length / 2),
                                                    )}
                                                >
                                                    {question}
                                                </AccordionTrigger>
                                                <AccordionContent>{answer}</AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                    ))}
                                </div>
                            </div>
                            <div className="w-full md:w-[90%] lg:w-[95%] xl:w-[80%] mx-auto mb-[77px] md:mb-[155px]">
                                <div className="border-black border-[1px] rounded-lg p-2 md:p-4">
                                    {faqs.faqs3.map(({
                                        answer,
                                        id,
                                        question,
                                    }) => (
                                        <Accordion
                                            className="w-full p-2 md:p-4"
                                            key={id}
                                            type="multiple"
                                        >
                                            <AccordionItem value={`faqs3-item-${id}`}>
                                                <AccordionTrigger
                                                    truncatedAnswer={answer.slice(
                                                        0,
                                                        Math.ceil(answer.length / 2),
                                                    )}
                                                >
                                                    {question}
                                                </AccordionTrigger>
                                                <AccordionContent>{answer}</AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}
