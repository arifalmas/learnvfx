import CourseSection from "@/components/course-card";
import HeroSection from "@/components/header";
import { getProducts } from "@/queries/products";

export default async function Home() {
	const data = await getProducts();
	return (
		<div>
			<HeroSection />
			<CourseSection products={data.data} />
		</div>
	);
}
