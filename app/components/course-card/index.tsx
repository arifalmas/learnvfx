import Image from "next/image";
import Link from "next/link";

import { courses } from "../../courses/data";
import thumb from "../../../public/finalsfx.png";

export default function CourseSection() {
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
          {courses.map((course, index) => (
            <Link key={index} href={`/courses/${course.slug}`} className="block">
              <div
                className="bg-[#1b1e23] rounded-3xl border border-white/10 p-6 shadow-xl hover:scale-[1.03] transition duration-300">

                {/* Top */}
                <div className="flex gap-4 mb-4">
                  <Image src={thumb} alt={course.title} width={64} height={64}
                    className="rounded-xl object-cover" />

                  <div>
                    <h3 className="text-lg font-semibold leading-tight">
                      {course.title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      by {course.author}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-400 mb-5">
                  {course.description}
                </p>

                {/* Features */}
                <ul className="text-sm text-gray-400 space-y-2 mb-5">
                  <li> Organized files</li>
                  <li> High quality</li>
                  <li> Easy preview</li>
                  <li> Lifetime access</li>
                </ul>

                {/* Footer */}
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span> {course.downloads} downloads</span>

                  <div className="flex items-center gap-1 text-white">
                    <Image src="/icons.png" alt="icon" width={32} height={32} />
                    <span>{course.count}</span>
                  </div>
                </div>

                {/* Button */}
                <button
                  className="w-full bg-white text-black py-2 rounded-xl font-medium hover:bg-gray-200 transition">
                  Details
                </button>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}