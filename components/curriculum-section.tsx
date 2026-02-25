"use client";

import React, { useState } from "react";
import { Section } from "./ui/section";

const curriculum = [
	{
		number: "Ⅰ",
		title: "태초를 향한 질문",
		subtitle: "우리는 어디에서 왔는가",
		desc: "우리의 기원과 시작, 그리고 그 탐구를 향한 질문의 근원을 태초의 이야기로부터 발견합니다.",
	},
	{
		number: "Ⅱ",
		title: "너 어디에 있느냐?",
		subtitle: "우리는 왜 고통받는가",
		desc: "인간의 불행과 고통은 어디에서 비롯되었었을까? 오랜 옛날부터 인간이 던져온 이 깊은 질문을 아담과 하와, 그리고 선악과 이야기 속에서 탐구합니다.",
	},
	{
		number: "Ⅲ",
		title: "네 이름이 무엇이냐?",
		subtitle: "사람은 변할 수 있을까",
		desc: "우리는 무언가 되고자하는 욕망이 있습니다. 내가 되고 싶은 나로 변화하기 위해 갖춰야 할 것, 시작하기 위해 필요한 이야기를 아브라함과 야곱을 통해 탐구합니다.",
	},
	{
		number: "Ⅳ",
		title: "너희는 나를 누구라고 하느냐?",
		subtitle: "예수, 구원자인가 인간인가",
		desc: "인류 역사에서 가장 큰 영향을 끼친 한 사람을 둔 여러가지 질문, 엇갈리는 시각을 통해 우리는 어디에서 와서 어디로 가야하는지 탐구합니다.",
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
