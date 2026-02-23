import CourseSection from "@/components/course-card";
import HeroSection from "@/components/header";

export default async function Home() {
	return (
		<div>
			<HeroSection />
			<CourseSection />
		</div>
	);
}
