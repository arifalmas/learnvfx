import { IProduct } from "@/types/product-types";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function CourseSection({ products }: { products: IProduct[] }) {
	return (
		<section className="border-t border-white/10 bg-[#151518] py-20 lg:mb-20 rounded-lg px-6 lg:px-12">
			<div className="max-w-7xl mx-auto">
				{/* ===== Section Title ===== */}
				<div className="text-center mb-14">
					<h3 className="text-3xl font-semibold mb-4">COURSES</h3>
					<p className="text-gray-400 text-xl">
						Discover our range of courses designed for all skill levels
					</p>
				</div>

				{/* ===== Course Cards ===== */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{products.map((product: IProduct) => (
						<div
							key={product._id}
							className="bg-[#1b1e23] rounded-3xl border border-white/10 p-6 shadow-xl hover:scale-[1.03] transition duration-300">
							{/* Top */}
							<div className="flex gap-4 mb-4">
								<Link href={`/courses/${product._id}`}>
									<Image
										src={product.thumbnail?.url || "/finalsfx.png"}
										alt={product.name}
										width={64}
										height={64}
										className="rounded-xl object-cover"
									/>
								</Link>

								<div>
									<h3 className="text-lg font-semibold leading-tight">
										<Link href={`/courses/${product._id}`}>
											{product.name}
										</Link>
									</h3>
									<p className="text-sm text-gray-400">
										{product.category?.name}
									</p>
								</div>
							</div>

							{/* Description */}
							<p className="text-sm text-gray-400 mb-5 line-clamp-2">
								{product.description}
							</p>

							{/* Features */}
							<ul className="text-sm text-gray-400 space-y-2 mb-5">
								<li>Organized files</li>
								<li>High quality</li>
								<li>Easy preview</li>
								<li>Lifetime access</li>
							</ul>

							{/* Footer */}
							<div className="flex items-center justify-between text-sm text-gray-400 mb-4">
								<span>{product.reviewCount} reviews</span>

								<div className="flex items-center gap-1 text-white">
									<Image
										src="/icons.png"
										alt="icon"
										width={24}
										height={24}
									/>
									<span>{product.crystalToUnlock}</span>
								</div>
							</div>

							{/* Button */}
							<Button className="w-full" variant="secondary" asChild>
								<Link href={`/courses/${product._id}`}>Details</Link>
							</Button>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
