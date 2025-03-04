import * as React from "react";

import { cn } from "@/app/lib/utils";

const Input = React.forwardRef(({
    className,
    type,
    ...props
}, ref) => (
    (
        <input
            ref={ref}
            type={type}
            className={cn(
                "flex h-9 w-full border-0 border-b-2 border-input bg-transparent px-3 py-1 text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm outline-none shadow-none",
                className,
            )}
            {...props}
        />
    )
));
Input.displayName = "Input";

export { Input };
