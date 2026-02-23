import { HeroSection } from "@/components/hero-section";
import { IntroductionSection } from "@/components/introduction-section";
import { RecommendationsSection } from "@/components/recommendations-section";
import { FeaturesSection } from "@/components/features-section";
import { TracksSection } from "@/components/tracks-section";
import { CurriculumSection } from "@/components/curriculum-section";
import { ScheduleSection } from "@/components/schedule-section";
import { ProgramInfoSection } from "@/components/program-info-section";
import { OutcomesSection } from "@/components/outcomes-section";
import { FaqSection } from "@/components/faq-section";
import { OutroSection } from "@/components/outro-section";

export default function Home() {
	return (
		<main className="flex flex-col w-full min-h-screen">
			<HeroSection />
			<IntroductionSection />
			<RecommendationsSection />
			<FeaturesSection />
			<TracksSection />
			<CurriculumSection />
			<ScheduleSection />
			<ProgramInfoSection />
			<OutcomesSection />
			<FaqSection />
			<OutroSection />
		</main>
	);
}
