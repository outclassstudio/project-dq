import React from "react";
import { Section } from "./ui/section";

const outcomes = [
	{
		title: "내 삶을 관통하는",
		highlight: "핵심 질문 1~3개",
	},
	{
		title: "질문을 구조화하는 프레임",
		highlight: "",
	},
	{
		title: "질문이 좋은 질문인지 검증하는 기준",
		highlight: "",
	},
	{
		title: "이번 주 바로 실행할 작은 실천 항목",
		highlight: "",
	},
];

export function OutcomesSection() {
	return (
		<Section className="bg-[var(--color-primary-bg)]">
			<div className="flex flex-col gap-16 md:gap-24 w-full">
				<div className="text-center">
					<h2 className="text-3xl md:text-5xl font-bold tracking-tight">
						이 과정이 끝나면 남는 것
					</h2>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full max-w-5xl mx-auto">
					{outcomes.map((outcome, index) => (
						<div
							key={index}
							className="p-8 md:p-12 border border-[var(--color-accent)] bg-[var(--color-secondary-bg)]/30 flex flex-col gap-4 justify-center min-h-[160px] group hover:bg-[var(--color-secondary-bg)] transition-colors duration-500"
						>
							<div className="text-[var(--color-accent)] font-serif text-xl group-hover:text-white transition-colors duration-300">
								0{index + 1}
							</div>
							<div className="text-xl md:text-2xl font-medium tracking-wide leading-relaxed text-[var(--color-secondary-text)] group-hover:text-[var(--color-primary-text)] transition-colors duration-300">
								{outcome.title}{" "}
								{outcome.highlight && (
									<span className="text-[var(--color-primary-text)] font-bold">
										{outcome.highlight}
									</span>
								)}
							</div>
						</div>
					))}
				</div>

				<div className="mt-8 text-center max-w-2xl mx-auto flex flex-col gap-8 text-lg font-light text-[var(--color-secondary-text)] leading-relaxed">
					<p>
						무엇을 믿을지,
						<br />
						무엇을 따를지,
						<br />
						무엇을 선택할지에 대한
					</p>
					<p className="text-2xl text-[var(--color-primary-text)] font-semibold italic">
						내 기준이 조금 더 또렷해집니다.
					</p>
				</div>
			</div>
		</Section>
	);
}
