import React from "react";
import { Section } from "./ui/section";
import { Button } from "./ui/button";

export function TracksSection() {
	return (
		<Section className="bg-[var(--color-secondary-bg)] border-t border-[var(--color-accent)] relative overflow-hidden">
			{/* Enhanced Rembrandt Lighting Effect */}
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_top_right,_var(--color-point-dark)_0%,_transparent_60%)] opacity-[0.10] pointer-events-none" />

			<div className="flex flex-col md:flex-row gap-16 md:gap-24 w-full relative z-10">
				<div className="md:w-1/3 flex flex-col justify-between">
					<div>
						<h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
							성경 트랙,
							<br />
							<span className="text-[var(--color-point-light)] font-serif italic font-medium tracking-wide drop-shadow-sm">
								프로젝트 Q
							</span>
						</h2>
						<p className="text-lg text-[var(--color-secondary-text)] font-light leading-relaxed">
							성경은 답을 주는 책을 넘어,
							<br />
							인간 존재를 뒤흔드는 질문으로 가득한 책입니다.
						</p>
					</div>

					<div className="mt-12 md:mt-0 p-8 border border-[var(--color-point-dark)]/40 bg-[var(--color-primary-bg)]/80 backdrop-blur-sm relative">
						{/* Corner accents */}
						<div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[var(--color-point)]" />
						<div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[var(--color-point)]" />

						<p className="font-serif italic text-xl md:text-2xl text-[var(--color-primary-text)] leading-relaxed">
							&quot;아담아, 네가 어디 있느냐?&quot;
						</p>
						<p className="mt-4 text-[var(--color-secondary-text)] font-light">
							— 창세기 3:9
						</p>
					</div>
				</div>

				<div className="md:w-2/3 flex flex-col gap-12 justify-center">
					<div className="flex flex-col gap-6">
						<h3 className="text-2xl md:text-3xl font-bold">
							신의 질문, 인간의 질문
						</h3>
						<div className="flex flex-col gap-6 text-lg md:text-xl text-[var(--color-secondary-text)] font-light leading-relaxed">
							<p>
								프로젝트 Q는 성경을 읽고 지식을 쌓는 성경 공부가 아닙니다. 성경
								속 인물들이 마주했던 거대한 질문들을 나의 삶으로 가져와 씨름하는
								과정입니다.
							</p>
							<p className="text-[var(--color-primary-text)] border-l-2 border-[var(--color-point-dark)] pl-6 text-xl">
								우리는 성경을 텍스트 삼아,
								<br />
								<span className="font-semibold text-white">
									나만의 거대한 질문을 세우는 법
								</span>
								을 배울 것입니다.
							</p>
						</div>
					</div>

					<div className="pt-8 border-t border-[var(--color-accent)]/50">
						<p className="text-[var(--color-point-light)] font-semibold mb-6 flex items-center gap-3">
							<span className="w-8 h-[1px] bg-[var(--color-point)] block" />
							이런 질문들을 다룹니다
						</p>
						<ul className="flex flex-col gap-4 text-lg font-light text-[var(--color-secondary-text)]">
							<li>• 고통의 한가운데서 우리는 무엇을 물어야 하는가? (욥기)</li>
							<li>• 끝없는 욕망 속에서 삶의 의미는 어떻게 찾는가? (전도서)</li>
							<li>
								• 나의 부서짐은 어떻게 새로운 시작이 될 수 있는가? (다윗의 시편)
							</li>
						</ul>
					</div>

					<div className="mt-4">
						<Button
							variant="secondary"
							className="group border-[var(--color-point-dark)] text-[var(--color-point-light)] hover:bg-[var(--color-point-dark)]/20"
						>
							프로젝트 Q 상세 보기
							<span className="group-hover:translate-x-1 transition-transform inline-block ml-2">
								→
							</span>
						</Button>
					</div>
				</div>
			</div>
		</Section>
	);
}
