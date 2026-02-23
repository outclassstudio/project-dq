import React from "react";
import { Section } from "./ui/section";
import { Divider } from "./ui/divider";

const features = [
	{
		title: "텍스트 기반 사고 훈련",
		desc: "성경과 고전의 맥락을 이해하고, 그 안에서 인간 존재에 대한 근본 질문을 발견합니다.",
	},
	{
		title: "강의 + 팀 토의 결합 구조",
		desc: "강의로 사고의 틀을 얻고, 팀 토의로 질문을 구조화하고 검증합니다.",
	},
	{
		title: "퍼실리에이션 코칭",
		desc: "질문이 피상적으로 흐르지 않도록, 퍼실리에이터가 각 팀을 순회하며 질문의 깊이를 끝까지 밀어줍니다.",
	},
	{
		title: "‘나만의 질문’ 완성",
		desc: "4회가 끝나면, 참가자는 삶에 적용 가능한 핵심 질문 1~3개를 갖게 됩니다.",
	},
];

export function FeaturesSection() {
	return (
		<Section className="bg-[var(--color-primary-bg)] border-t border-[var(--color-accent)]">
			<div className="flex flex-col gap-16 md:gap-24 w-full">
				<div className="text-center flex flex-col items-center gap-4">
					<div className="w-12 h-[1px] bg-[var(--color-point)]" />
					<h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
						프로젝트 딥퀘스천은
						<br className="md:hidden" /> 이렇게 다릅니다
					</h2>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-16 md:gap-y-20 w-full relative">
					{features.map((feature, index) => (
						<article key={index} className="flex flex-col gap-6 group">
							<div className="flex items-center gap-6">
								<span className="text-3xl md:text-4xl font-serif text-[var(--color-point-dark)] font-light group-hover:text-[var(--color-point-light)] transition-colors duration-500 drop-shadow-sm">
									0{index + 1}
								</span>
								<h3 className="text-xl md:text-2xl font-semibold tracking-wide">
									{feature.title}
								</h3>
							</div>
							<Divider className="my-0 bg-[var(--color-accent)]/50 group-hover:bg-[var(--color-point-dark)] transition-colors duration-500" />
							<p className="text-lg text-[var(--color-secondary-text)] font-light leading-relaxed min-h-[5rem]">
								{feature.desc}
							</p>
						</article>
					))}

					{/* Center Cross Divider (Desktop only) */}
					<div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-[1px] bg-gradient-to-b from-transparent via-[var(--color-point-deep)] to-transparent opacity-50 -translate-x-1/2" />
				</div>
			</div>
		</Section>
	);
}
