"use client";

import React, { useState } from "react";
import { Section } from "./ui/section";

const faqs = [
	{
		q: "종교가 없어도 참여할 수 있나요?",
		a: "물론입니다. 본 프로그램에서 성경이나 고전은 ‘종교적 정답’을 배우는 교재가 아니라, 인류 보편의 고민을 깊이 탐구하기 위한 '질문의 거울'로 활용됩니다. 종교 유무와 관계없이 자신의 삶을 성찰하고 싶은 분이라면 누구든 환영합니다.",
	},
	{
		q: "어떤 사람들이 주로 오나요?",
		a: "업무와 일상에 치여 잠시 멈추고 근본적인 고민을 하고 싶은 직장인, 인생의 중요한 선택을 앞두고 자기만의 기준을 세우고 싶은 분, 피상적인 대화보다 본질적인 대화를 원하시는 분들이 많이 참여합니다.",
	},
	{
		q: "매주 과제가 있나요?",
		a: "미리 읽어올 분량이 많지는 않지만, 세션을 위한 텍스트나 아티클이 제공될 수 있습니다. 중요한 것은 지식을 외우는 것이 아니라, 텍스트를 읽고 '나의 질문' 하나를 품고 오는 것입니다.",
	},
	{
		q: "결석하면 어떻게 되나요?",
		a: "팀 기반의 오프라인 토의가 핵심이므로 가급적 모든 일정 참석을 권장합니다. 부득이한 사정으로 결석 시, 해당 주차의 핵심 텍스트와 가이드라인은 제공되나 별도의 보강 세션은 없습니다.",
	},
];

export function FaqSection() {
	const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

	const toggleExpand = (index: number) => {
		setExpandedIndex(expandedIndex === index ? null : index);
	};

	return (
		<Section className="bg-[var(--color-primary-bg)] border-t border-[var(--color-accent)]">
			<div className="flex flex-col gap-16 md:gap-24 w-full max-w-4xl mx-auto">
				<div className="text-center">
					<h2 className="text-3xl md:text-5xl font-bold tracking-tight">
						자주 묻는 질문
					</h2>
				</div>

				<div className="flex flex-col border-t border-[var(--color-accent)] relative">
					{faqs.map((faq, index) => {
						const isExpanded = expandedIndex === index;
						return (
							<div
								key={index}
								className={`border-b border-[var(--color-accent)] transition-all duration-500 overflow-hidden relative ${
									isExpanded
										? "bg-[var(--color-secondary-bg)]/40"
										: "hover:bg-[var(--color-secondary-bg)]/30"
								}`}
							>
								{/* Expanded bottom highlight */}
								{isExpanded && (
									<div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--color-point-dark)] to-transparent" />
								)}

								<button
									onClick={() => toggleExpand(index)}
									className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none group gap-8"
								>
									<div className="flex gap-6 items-start">
										<span
											className={`text-xl md:text-2xl font-bold font-serif transition-colors duration-300 mt-[-2px] ${isExpanded ? "text-[var(--color-point-light)]" : "text-[var(--color-point-dark)] group-hover:text-[var(--color-point-light)]"}`}
										>
											Q.
										</span>
										<h3
											className={`text-lg md:text-xl font-medium tracking-wide transition-colors ${isExpanded ? "text-white" : "text-[var(--color-primary-text)]"}`}
										>
											{faq.q}
										</h3>
									</div>

									<div
										className={`text-[var(--color-point-dark)] transition-transform duration-300 text-2xl font-light shrink-0 ${isExpanded ? "rotate-45" : ""}`}
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
										<div className="pb-8 pt-0 px-6 md:px-8 pl-[4.5rem] md:pl-[4.5rem]">
											<p className="text-[var(--color-secondary-text)] font-light leading-relaxed md:text-lg">
												<span className="text-[var(--color-point-dark)] font-bold mr-2 hidden">
													A.
												</span>
												{faq.a}
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
