import React from "react";
import { Section } from "./ui/section";

const programInfo = [
	{ label: "정원", value: "15~20명 (소규모 운영)" },
	{ label: "팀 구성", value: "3~4팀 (팀당 4~6명, 고정 팀 운영)" },
	{
		label: "진행 인력",
		value: "메인 퍼실리에이터 1명 + 보조 1명 + 진행자 1명",
	},
	{ label: "일정", value: "주 2회 / 총 4회 / 회당 2시간" },
	{ label: "형태", value: "오프라인 강의 + 팀 토의" },
];

export function ProgramInfoSection() {
	return (
		<Section className="bg-[var(--color-primary-bg)]">
			<div className="flex flex-col items-center gap-16 max-w-4xl mx-auto w-full">
				<h2 className="text-3xl md:text-5xl font-bold tracking-tight">
					프로그램 정보
				</h2>

				<div className="w-full border-t border-[var(--color-accent)]">
					{programInfo.map((info, index) => (
						<div
							key={index}
							className="flex flex-col md:flex-row py-6 md:py-8 border-b border-[var(--color-accent)] gap-2 md:gap-8 items-start md:items-center"
						>
							<div className="text-[var(--color-secondary-text)] md:w-48 text-lg font-medium">
								{info.label}
							</div>
							<div className="text-[var(--color-primary-text)] text-lg md:text-xl font-light">
								{info.value}
							</div>
						</div>
					))}
				</div>
			</div>
		</Section>
	);
}
