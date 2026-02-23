import React from "react";
import { Section } from "./ui/section";

const schedule = [
	{
		time: "00:00 - 00:30",
		title: "도입 강의",
		desc: "오늘 다룰 질문의 배경과 깊이를 여는 시간",
	},
	{
		time: "00:30 - 01:30",
		title: "그룹 토의",
		desc: "텍스트에 비추어 나의 질문을 세우고, 그룹 멤버들과 논의",
	},
	{
		time: "01:30 - 02:00",
		title: "랩업 및 개인 선언",
		desc: "오늘 발견한 질문을 한 문장으로 정리하고 나누는 시간",
	},
];

export function ScheduleSection() {
	return (
		<Section className="bg-[var(--color-secondary-bg)] border-t border-[var(--color-accent)] relative">
			{/* Ambient background glow */}
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] bg-gradient-to-r from-transparent via-[var(--color-point-dark)] to-transparent opacity-[0.05] blur-3xl pointer-events-none" />

			<div className="flex flex-col gap-16 md:gap-24 w-full max-w-3xl mx-auto relative z-10">
				<div className="text-center">
					<h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
						2시간은
						<br className="md:hidden" /> 이렇게 흐릅니다
					</h2>
					<p className="text-lg text-[var(--color-point-light)] font-light italic">
						밀도 높은 질문의 시간
					</p>
				</div>

				<div className="relative pl-6 md:pl-12">
					{/* Timeline Edge */}
					<div className="absolute left-0 top-2 bottom-2 w-[1px] bg-gradient-to-b from-[var(--color-point-dark)]/50 via-[var(--color-accent)] to-[var(--color-accent)]/20" />

					<div className="flex flex-col gap-12">
						{schedule.map((item, index) => (
							<div key={index} className="relative group">
								{/* Timeline node */}
								<div className="absolute -left-[1.65rem] md:-left-[3.15rem] top-1.5 w-3 h-3 rounded-full border-2 border-[var(--color-point-dark)] bg-[var(--color-secondary-bg)] group-hover:bg-[var(--color-point-light)] group-hover:border-[var(--color-point-light)] group-hover:shadow-[0_0_10px_var(--color-point)] transition-all duration-300" />

								<div className="flex flex-col gap-3 transition-transform duration-300 group-hover:translate-x-2">
									<div className="text-sm md:text-base font-mono tracking-widest text-[var(--color-point)] bg-[var(--color-point-dark)]/10 inline-block px-3 py-1 rounded w-fit border border-[var(--color-point-dark)]/20">
										{item.time}
									</div>
									<h3 className="text-xl md:text-2xl font-semibold text-[var(--color-primary-text)] group-hover:text-white transition-colors duration-300">
										{item.title}
									</h3>
									<p className="text-lg text-[var(--color-secondary-text)] font-light leading-relaxed">
										{item.desc}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</Section>
	);
}
