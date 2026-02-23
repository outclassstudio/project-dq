import React from "react";
import { Section } from "./ui/section";

export function HeroSection() {
	return (
		<Section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[var(--color-primary-bg)]">
			{/* Dramatic Abstract Gold Spotlight - Using radial gradient instead of blur for scroll performance */}
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--color-point-dark)_0%,_transparent_70%)] opacity-[0.15] pointer-events-none" />
			{/* Subtle bottom edge glow */}
			<div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--color-point-deep)] to-transparent opacity-50" />

			<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]/90 pointer-events-none" />

			<div className="relative z-10 flex flex-col items-center text-center gap-12 max-w-4xl mx-auto px-4 mt-[-5vh] p-8 md:p-16 border border-white/[0.03] backdrop-blur-sm bg-black/20">
				{/* Top geometric accent */}
				<div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-point)] to-transparent" />

				<span className="text-[6rem] md:text-[10rem] font-serif leading-none bg-gradient-to-b from-[var(--color-point-light)] to-[var(--color-point-dark)] text-transparent bg-clip-text select-none block mb-[-4rem] md:mb-[-6rem]">
					“
				</span>

				<h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[var(--color-primary-text)] tracking-tight leading-[1.1] word-break-keep drop-shadow-2xl">
					당신의 질문은 무엇입니까?
				</h1>

				<div className="flex flex-col gap-4 text-xl md:text-2xl text-[var(--color-secondary-text)] max-w-2xl mx-auto mt-4 md:mt-8 font-light leading-relaxed">
					<p>AI 시대, 답보다 중요한 건 ‘무엇을 물을지’입니다.</p>
					<p className="text-[var(--color-point-light)] font-semibold mt-4 tracking-wide shadow-[var(--color-point-dark)]">
						프로젝트 딥퀘스천.
					</p>
				</div>

				{/* Bottom geometric accent */}
				<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-point)] to-transparent" />
			</div>

			{/* Scroll indicator - upgraded to geometric line */}
			<div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
				<span className="text-xs tracking-widest text-[var(--color-point)] uppercase font-serif">
					Scroll
				</span>
				<div className="w-[1px] h-16 bg-gradient-to-b from-[var(--color-point-dark)] to-transparent" />
			</div>
		</Section>
	);
}
