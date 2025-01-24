import * as React from "react";

import { cn } from "@/app/lib/utils";

const Textarea = React.forwardRef(({
    className,
    ...props
}, ref) => (
    (
        <textarea
            ref={ref}
            className={cn(
                "flex min-h-[60px] w-full border-0 border-b-2 border-input bg-transparent px-3 py-2 text-base placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm outline-none shadow-none",
                className,
            )}
            {...props}
        />
    )
));
Textarea.displayName = "Textarea";

export { Textarea };
