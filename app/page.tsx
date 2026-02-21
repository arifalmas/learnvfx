import CourseSection from "./components/course-card";
import Header from "./components/header/index";
export default function Home() {
  return (
    <div className="px-6 lg:px-12">
      <Header />
      <CourseSection />
    </div>
  );
}
