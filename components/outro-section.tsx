import React from "react";
import { Section } from "./ui/section";
import { Button } from "./ui/button";

export function OutroSection() {
	return (
		<Section className="min-h-[70vh] flex items-center justify-center bg-[var(--color-primary-bg)] border-t border-[var(--color-accent)] relative overflow-hidden">
			{/* Core ambient light */}
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_bottom,_var(--color-point-dark)_0%,_transparent_70%)] opacity-[0.10] pointer-events-none" />

			<div className="text-center flex flex-col items-center gap-12 max-w-3xl mx-auto relative z-10 p-8">
				{/* Top aesthetic detail */}
				<div className="flex items-center gap-4 mb-4">
					<div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[var(--color-point-dark)]" />
					<div className="w-2 h-2 rotate-45 border border-[var(--color-point)]" />
					<div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[var(--color-point-dark)]" />
				</div>

				<h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.2] drop-shadow-lg">
					당신의 질문은
					<br />
					준비되었습니까?
				</h2>

				<p className="text-xl md:text-2xl text-[var(--color-secondary-text)] font-light leading-relaxed">
					답이 없는 시대,
					<br className="md:hidden" />
					가장 강력한 무기는{" "}
					<span className="text-[var(--color-primary-text)] font-medium">
						‘나만의 질문’
					</span>
					입니다.
				</p>

				<div className="mt-8 relative group">
					{/* Button halo effect */}
					<div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-point-dark)] to-[var(--color-point)] rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500" />
					<Button
						size="lg"
						className="relative text-lg md:text-xl px-12 py-8 bg-gradient-to-r from-[var(--color-secondary-bg)] to-[var(--color-primary-bg)] border border-[var(--color-point-dark)]/50 hover:border-[var(--color-point-light)] text-[var(--color-point-light)] hover:text-white transition-all duration-500 rounded-full"
					>
						프로젝트 딥퀘스천 시작하기
					</Button>
				</div>
			</div>
		</Section>
	);
}
