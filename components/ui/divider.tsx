import React from "react";
import { cn } from "@/lib/utils";

interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
	className?: string;
}

export const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
	({ className, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={cn(
					"w-full h-[1px] bg-[var(--color-accent)] my-12",
					className,
				)}
				{...props}
			/>
		);
	},
);

Divider.displayName = "Divider";
