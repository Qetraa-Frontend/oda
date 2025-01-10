"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import * as React from "react";
import Highlighter from "react-highlight-words";

import { cn } from "@/app/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef(({
    className,
    ...props
}, ref) => (
    <AccordionPrimitive.Item
        ref={ref}
        className={cn(
            "border-b",
            className,
        )}
        {...props}
    />
));

AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef(({
    children,
    className,
    keyword,
    truncatedAnswer,
    withHighlighter,
    ...props
}, ref) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <AccordionPrimitive.Header
            className="flex flex-col"
            onClick={() => setIsOpen(!isOpen)}
        >
            <AccordionPrimitive.Trigger
                ref={ref}
                className={cn(
                    "flex flex-1 items-center justify-between py-4 text-[22px] md:text-[32px] font-semibold opacity-75 transition-all text-left [&[data-state=open]>svg]:rotate-180",
                    className,
                )}
                {...props}
            >
                {withHighlighter ? (
                    <Highlighter
                        highlightClassName="bg-yellow-200"
                        searchWords={[keyword]}
                        textToHighlight={children}
                        autoEscape
                    />
                ) : children}
                <ChevronDown
                    className="shrink-0 text-muted-foreground transition-transform duration-200"
                    size={40}
                />
            </AccordionPrimitive.Trigger>
            {!isOpen && (
                <p className="font-normal text-xs md:text-base text-black opacity-40 pb-2 md:pb-4 truncate-answer">
                    {withHighlighter ? (
                        <Highlighter
                            highlightClassName="bg-yellow-200"
                            searchWords={[keyword]}
                            textToHighlight={truncatedAnswer}
                            autoEscape
                        />
                    ) : truncatedAnswer}
                </p>
            )}
        </AccordionPrimitive.Header>
    );
});

AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef(({
    children,
    className,
    keyword,
    withHighlighter,
    ...props
}, ref) => (
    <AccordionPrimitive.Content
        className="overflow-hidden font-normal text-xs md:text-base text-black opacity-40 data-[state=closed]:animate-accordionUp data-[state=open]:animate-accordionDown"
        ref={ref}
        keyword
        withHighlighter
        {...props}
    >
        <div
            className={cn(
                "pb-4 pt-0",
                className,
            )}
        >
            {withHighlighter ? (
                <Highlighter
                    highlightClassName="bg-yellow-200"
                    searchWords={[keyword]}
                    textToHighlight={children}
                    autoEscape
                />
            ) : children}
        </div>
    </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
};
