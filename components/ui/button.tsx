import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "secondary";
	children: React.ReactNode;
	className?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ children, variant = "primary", className, ...props }, ref) => {
		const baseStyles =
			"inline-flex items-center justify-center px-8 py-4 text-lg md:text-xl font-bold transition-all duration-300 ease-out min-w-[240px]";

		const variants = {
			primary:
				"bg-white text-black hover:bg-gray-200 hover:scale-105 active:scale-95",
			secondary:
				"bg-transparent text-white border border-white hover:bg-white/10 active:bg-white/20",
		};

		return (
			<button
				ref={ref}
				className={cn(baseStyles, variants[variant], className)}
				{...props}
			>
				{children}
			</button>
		);
	},
);

Button.displayName = "Button";
