"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

import { useBuildYourKitStore } from "@/app/store/build-your-kit";
import { useLocateYourHomeStore } from "@/app/store/locate-your-home";

export default function CheckoutQuestions({ questions }) {
    const {
        isActive: locateYourHomeIsActive,
        questions: selectedLocateYourHomeQuestions,
        removeQuestion: removeLocateYourHomeQuestion,
        setQuestion: setLocateYourHomeQuestion,
    } = useLocateYourHomeStore();

    const {
        questions: selectedBuildYourKitQuestions,
        removeQuestion: removeBuildYourKitQuestion,
        setQuestion: setBuildYourKitQuestion,
    } = useBuildYourKitStore();

    const selectedQuestions = locateYourHomeIsActive ? selectedLocateYourHomeQuestions : selectedBuildYourKitQuestions;

    const ref = useRef(null);

    const isInView1 = useInView(
        ref,
        { once: true },
    );

    const isInView2 = useInView(
        ref,
        { once: true },
    );

    return (
        <div
            className="overflow-hidden"
            ref={ref}
        >
            <motion.div
                className="container mx-auto py-[42px] md:py-[85px] overflow-hidden"
                animate={isInView1 && {
                    opacity: 1,
                    y: 0,
                }}
                initial={{
                    opacity: 0,
                    y: "100vh",
                }}
                transition={{
                    damping: 10,
                    duration: 2,
                    ease: "easeIn",
                    stiffness: 33,
                    type: "spring",
                }}
            >
                <h2 className="font-bold text-3xl md:text-5xl text-center uppercase">Let&apos;s Discover More</h2>
            </motion.div>
            <div className="bg-[#222] min-h-[1000px] py-10 md:py-20 overflow-hidden">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-x-4 md:gap-x-8 gap-y-20 md:gap-y-40">
                    {questions.map(({
                        answers: fetchedAnswers,
                        questionid,
                        questiontext,
                    }) => {
                        const answers = fetchedAnswers.sort((a, b) => a.answerid - b.answerid);

                        return (
                            <div
                                className="col-span-1 md:col-span-6 xl:col-span-4 mx-auto xl:mx-0"
                                key={questionid}
                            >
                                <motion.div
                                    className={`py-3 md:py-6 px-2 md:px-4 border ${selectedQuestions[questionid] ? "border-primary" : "border-white"} hover:border-primary rounded-lg w-fit transition-all duration-1000`}
                                    animate={isInView2 && {
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    initial={{
                                        opacity: 0,
                                        y: "100vh",
                                    }}
                                    transition={{
                                        damping: 10,
                                        duration: 2,
                                        ease: "easeIn",
                                        stiffness: 33,
                                        type: "spring",
                                    }}
                                >
                                    <h5 className="font-bold font-nanum-myeongjo text-base md:text-xl text-white mb-5 md:mb-10">{questiontext}</h5>
                                    <div className="flex justify-center gap-4 lg:gap-8">
                                        <Image
                                            alt={answers[0]?.answertext}
                                            className={`rounded-lg h-[199px] cursor-pointer border-[3px] ${selectedQuestions[questionid]?.answer === answers[0]?.answerid ? "border-primary" : "border-transparent"}`}
                                            height={199}
                                            loading="lazy"
                                            src={`data:image/png;base64, ${answers[0]?.answerPhotoBase64}`}
                                            width={163}
                                            onClick={() => {
                                                if (locateYourHomeIsActive) {
                                                    if (selectedQuestions[questionid]?.answer === answers[0]?.answerid) removeLocateYourHomeQuestion(questionid);
                                                    else {
                                                        setLocateYourHomeQuestion({
                                                            answer: answers[0]?.answerid,
                                                            answerText: answers[0]?.answertext,
                                                            question: questionid,
                                                            questionText: questiontext,
                                                        });
                                                    }
                                                } else {
                                                    if (selectedQuestions[questionid]?.answer === answers[0]?.answerid) removeBuildYourKitQuestion(questionid); // eslint-disable-line
                                                    else {
                                                        setBuildYourKitQuestion({
                                                            answer: answers[0]?.answerid,
                                                            answerText: answers[0]?.answertext,
                                                            question: questionid,
                                                            questionText: questiontext,
                                                        });
                                                    }
                                                }
                                            }}
                                        />
                                        <Image
                                            alt={answers[1]?.answertext}
                                            className={`rounded-lg h-[199px] cursor-pointer border-[3px] ${selectedQuestions[questionid]?.answer === answers[1]?.answerid ? "border-primary" : "border-transparent"}`}
                                            height={199}
                                            loading="lazy"
                                            src={`data:image/png;base64, ${answers[1]?.answerPhotoBase64}`}
                                            width={163}
                                            onClick={() => {
                                                if (locateYourHomeIsActive) {
                                                    if (selectedQuestions[questionid]?.answer === answers[1]?.answerid) removeLocateYourHomeQuestion(questionid);
                                                    else {
                                                        setLocateYourHomeQuestion({
                                                            answer: answers[1]?.answerid,
                                                            answerText: answers[1]?.answertext,
                                                            question: questionid,
                                                            questionText: questiontext,
                                                        });
                                                    }
                                                } else {
                                                    if (selectedQuestions[questionid]?.answer === answers[1]?.answerid) removeBuildYourKitQuestion(questionid); // eslint-disable-line
                                                    else {
                                                        setBuildYourKitQuestion({
                                                            answer: answers[1]?.answerid,
                                                            answerText: answers[1]?.answertext,
                                                            question: questionid,
                                                            questionText: questiontext,
                                                        });
                                                    }
                                                }
                                            }}
                                        />
                                    </div>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
