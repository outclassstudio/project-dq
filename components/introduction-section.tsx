import React from "react";
import { Section } from "./ui/section";

export function IntroductionSection() {
	return (
		<Section className="bg-[var(--color-secondary-bg)] relative border-t border-[var(--color-accent)]">
			{/* Decorative vertical line anchoring the section */}
			<div className="absolute left-8 lg:left-16 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[var(--color-point-dark)] via-[var(--color-accent)] to-transparent opacity-30 hidden md:block" />

			<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center relative z-10 w-full pl-0 md:pl-16">
				{/* The Abstract Object - Geometric Light Box */}
				<div className="lg:col-span-5 h-[350px] lg:h-[500px] relative flex items-center justify-center p-8">
					{/* Ambient backlight */}
					<div className="absolute inset-[-50%] bg-[radial-gradient(circle_at_center,_var(--color-point-dark)_0%,_transparent_60%)] opacity-20" />

					{/* The structure */}
					<div className="relative w-full max-w-[300px] aspect-[3/4] border border-[var(--color-point-deep)] bg-[#111]/80 backdrop-blur-md flex flex-col items-center justify-center gap-4 group hover:border-[var(--color-point)] transition-colors duration-700">
						{/* Inner gold frame */}
						<div className="absolute inset-4 border border-[var(--color-point-dark)] opacity-50" />
						<div className="absolute inset-x-8 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-point)] to-transparent" />
						<div className="absolute inset-y-8 left-1/2 w-[1px] bg-gradient-to-b from-transparent via-[var(--color-point)] to-transparent" />

						<span className="text-[6rem] lg:text-[8rem] font-serif text-[var(--color-point-light)] opacity-80 z-10 drop-shadow-[0_0_15px_rgba(223,187,98,0.3)]">
							?
						</span>
					</div>
				</div>

				<div className="lg:col-span-7 flex flex-col gap-12 justify-center lg:py-12">
					<div className="flex flex-col gap-6">
						<h2 className="text-3xl md:text-5xl font-bold tracking-tight">
							왜 지금, ‘질문’인가요?
						</h2>
						<p className="text-lg md:text-xl text-[var(--color-secondary-text)] leading-relaxed font-light">
							AI는 빠르게 답을 제공합니다.
							<br />
							그러나 어떤 질문을 던질지, 무엇을 의심할지, 무엇을 선택할지는
							여전히 인간의 몫입니다.
						</p>
					</div>

					<div className="p-8 md:p-12 border-l-2 border-[var(--color-point)] bg-gradient-to-r from-[var(--color-point-deep)]/10 to-transparent">
						<p className="text-xl md:text-3xl font-medium leading-relaxed italic text-[var(--color-primary-text)] line-clamp-none">
							“나는 무엇을 믿고, 무엇을 따르며, 무엇을 선택할 것인가?”
						</p>
					</div>

					<div className="flex flex-col gap-8 text-lg font-light text-[var(--color-secondary-text)]">
						<p>정보는 넘쳐나지만 정작 이 질문 앞에서는 많은 사람이 멈춥니다.</p>
						<p className="text-xl text-[var(--color-primary-text)] font-semibold border-b border-[var(--color-point-dark)]/30 pb-4 inline-block">
							프로젝트 딥퀘스천은 지식을 더하는 프로그램이 아니라,
							<br />
							삶을 지탱할 질문을 세우는 훈련입니다.
						</p>
					</div>
				</div>
			</div>
		</Section>
	);
}
