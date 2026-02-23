"use client";

import React, { useState } from "react";
import { Section } from "./ui/section";

const curriculum = [
	{
		number: "Ⅰ",
		title: "해체와 인식",
		subtitle: "우리는 왜 질문하지 못하게 되었나",
		desc: "인공지능의 편의가 인간 사고에 미치는 영향을 진단하고, 잃어버린 '질문하는 능력'을 다시 깨우기 위한 근본적인 해체 작업을 진행합니다. 익숙한 답을 의심하는 법을 배웁니다.",
	},
	{
		number: "Ⅱ",
		title: "텍스트와 심연",
		subtitle: "고전과 성경, 텍스트가 걸어오는 말",
		desc: "선별된 고전 텍스트와 성경 텍스트를 깊이 읽으며, 표면적 줄거리가 아닌 이면의 거대한 질문을 발굴해냅니다. 텍스트가 나의 삶에 던지는 파문을 관찰합니다.",
	},
	{
		number: "Ⅲ",
		title: "재구성의 언어",
		subtitle: "나만의 질문 뼈대 세우기",
		desc: "파편화된 생각과 고민들을 구조화된 질문으로 다듬는 과정입니다. 퍼실리에이터의 코칭 하에 팀 토론을 거치며 두루뭉술한 불안을 날카로운 질문으로 벼려냅니다.",
	},
	{
		number: "Ⅳ",
		title: "삶의 이정표",
		subtitle: "세 개의 코어 질문 완성",
		desc: "4주간의 여정을 마무리하며, 앞으로의 삶을 지탱할 1~3개의 명확하고 강력한 핵심 질문을 도출합니다. 답이 없는 시대, 나침반이 될 질문 선언문을 작성합니다.",
	},
];

export function CurriculumSection() {
	const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

	const toggleExpand = (index: number) => {
		setExpandedIndex(expandedIndex === index ? null : index);
	};

	return (
		<Section className="bg-[var(--color-primary-bg)] border-t border-[var(--color-accent)]">
			<div className="flex flex-col gap-16 md:gap-24 w-full max-w-4xl mx-auto">
				<div className="text-center flex flex-col items-center gap-4">
					<div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-[var(--color-point-dark)] to-[var(--color-point)]" />
					<h2 className="text-3xl md:text-5xl font-bold tracking-tight">
						커리큘럼
					</h2>
					<p className="text-lg text-[var(--color-secondary-text)] font-light mt-4">
						4주간의 밀도 있는 항해
					</p>
				</div>

				<div className="flex flex-col border-t border-[var(--color-accent)] relative">
					{/* Vertical timeline edge */}
					<div className="absolute left-6 top-16 bottom-16 w-[1px] bg-[var(--color-accent)] hidden md:block" />

					{curriculum.map((item, index) => {
						const isExpanded = expandedIndex === index;
						return (
							<div
								key={index}
								className={`border-b border-[var(--color-accent)] transition-colors duration-500 overflow-hidden ${
									isExpanded
										? "bg-[var(--color-secondary-bg)]/80"
										: "hover:bg-[var(--color-secondary-bg)]/30"
								}`}
							>
								<button
									onClick={() => toggleExpand(index)}
									className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none group relative"
								>
									{/* Active glow indicator */}
									{isExpanded && (
										<div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--color-point-light)] to-[var(--color-point-dark)]" />
									)}

									<div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 relative z-10 w-full pr-8">
										<div className="w-12 text-center md:bg-[var(--color-primary-bg)] md:z-10 relative">
											<span
												className={`text-2xl font-serif font-light transition-colors duration-300 ${isExpanded ? "text-[var(--color-point-light)] text-3xl" : "text-[var(--color-point-dark)] group-hover:text-[var(--color-point-light)]"}`}
											>
												{item.number}
											</span>
										</div>
										<div className="flex flex-col gap-2">
											<span className="text-sm font-medium tracking-widest text-[var(--color-point-dark)] uppercase">
												Week 0{index + 1}
											</span>
											<h3
												className={`text-xl md:text-2xl font-semibold tracking-wide transition-colors ${isExpanded ? "text-white" : "text-[var(--color-primary-text)]"}`}
											>
												{item.title}
											</h3>
										</div>
									</div>

									<div
										className={`text-[var(--color-point-dark)] transition-transform duration-300 text-2xl font-light absolute right-6 md:right-8 top-1/2 -translate-y-1/2 ${isExpanded ? "rotate-45" : ""}`}
									>
										+
									</div>
								</button>

								<div
									className={`grid transition-all duration-500 ease-in-out ${
										isExpanded
											? "grid-rows-[1fr] opacity-100"
											: "grid-rows-[0fr] opacity-0"
									}`}
								>
									<div className="overflow-hidden">
										<div className="pb-8 pt-0 px-6 md:px-8 md:pl-28 flex flex-col gap-4">
											<h4 className="text-lg font-medium text-[var(--color-point-light)]">
												{item.subtitle}
											</h4>
											<p className="text-[var(--color-secondary-text)] font-light leading-relaxed md:text-lg">
												{item.desc}
											</p>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</Section>
	);
}
