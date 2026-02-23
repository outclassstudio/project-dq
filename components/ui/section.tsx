import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
	children: React.ReactNode;
	className?: string;
	innerClassName?: string;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
	({ children, className, innerClassName, ...props }, ref) => {
		return (
			<section
				ref={ref}
				className={cn(
					"w-full py-24 md:py-32 lg:py-40 px-6 md:px-12 flex flex-col items-center justify-center",
					className,
				)}
				{...props}
			>
				<div
					className={cn(
						"w-full max-w-5xl mx-auto flex flex-col gap-12",
						innerClassName,
					)}
				>
					{children}
				</div>
			</section>
		);
	},
);

Section.displayName = "Section";
