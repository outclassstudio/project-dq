import React from "react";
import { Section } from "./ui/section";

const recommendations = [
	"생각은 많은데 결정이 잘 내려지지 않는 분",
	"신앙과 삶이 연결되지 않는 느낌을 받는 분",
	"고전을 읽지만, 내 삶의 질문으로 이어지지 않는 분",
	"토의를 통해 사고를 더 깊이 밀어붙이고 싶은 분",
	"‘정답 찾기’가 아니라 ‘질문 세우기’를 훈련하고 싶은 분",
];

export function RecommendationsSection() {
	return (
		<Section className="bg-[var(--color-primary-bg)] border-t border-[var(--color-secondary-bg)]">
			<div className="flex flex-col md:flex-row gap-12 md:gap-24 w-full max-w-5xl mx-auto">
				<div className="md:w-1/3 flex flex-col justify-start">
					<h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
						이런 분께
						<br className="hidden md:block" /> 권합니다
					</h2>
				</div>

				<div className="md:w-2/3 flex flex-col relative">
					{/* Add a subtle aesthetic border to visually separate list items */}
					<ul className="flex flex-col border-t border-[var(--color-accent)] relative z-10">
						{recommendations.map((item, i) => (
							<li
								key={i}
								className="flex gap-6 items-center py-8 border-b border-[var(--color-accent)] group hover:bg-white/[0.02] hover:border-[var(--color-point-dark)] transition-colors duration-500 px-4"
							>
								<div className="text-[var(--color-point-dark)] font-serif text-xl group-hover:text-[var(--color-point-light)] transition-colors duration-300 w-8">
									0{i + 1}
								</div>
								<span className="text-lg md:text-xl font-light text-[var(--color-secondary-text)] group-hover:text-[var(--color-primary-text)] transition-colors duration-300 leading-relaxed">
									{item}
								</span>
							</li>
						))}
					</ul>
					{/* Ambient edge glow behind the list */}
					<div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-3/4 bg-gradient-to-b from-transparent via-[var(--color-point-dark)] to-transparent opacity-30" />
				</div>
			</div>
		</Section>
	);
}
