
const page = () => {
  return (
    <div className='min-h-screen flex justify-center items-center'>course page</div>
  )
}

export default page
// import Image from "next/image"
// import Link from "next/link"
// import { Card, CardContent } from "@/components/ui/card"
// import { Star, Clock } from "lucide-react"

// const courses = [
//   {
//     id: 1,
//     title: "VFX Fundamentals",
//     image: "/dragon.jpg",
//     rating: 4.8,
//     duration: "6h 30m",
//     crystal: 120,
//   },
//   {
//     id: 2,
//     title: "Advanced Compositing",
//     image: "/images/folder-preview.png",
//     rating: 4.9,
//     duration: "8h 10m",
//     crystal: 180,
//   },
//   {
//     id: 3,
//     title: "CGI & Simulation Mastery",
//     image: "/finalsfx.png",
//     rating: 4.7,
//     duration: "7h 20m",
//     crystal: 150,
//   },
// ]

// export default function CoursesPage() {
//   return (
//     <div className="min-h-screen bg-black text-white px-6 py-16">
//       <div className="max-w-7xl mx-auto">

//         {/* Page Header */}
//         <div className="mb-12 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
//             Explore Our Courses
//           </h1>
//           <p className="text-muted-foreground mt-4">
//             Upgrade your VFX skills with professional level training.
//           </p>
//         </div>

//         {/* Course Grid */}
//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//           {courses.map((course) => (
//             <Link key={course.id} href={`/courses/${course.id}`}>
//               <Card className="bg-[#111111] border-[#262626] hover:border-white/30 transition-all duration-300 hover:scale-[1.02] overflow-hidden rounded-2xl">

//                 {/* Image */}
//                 <div className="relative h-52 w-full">
//                   <Image
//                     src={course.image}
//                     alt={course.title}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>

//                 <CardContent className="p-5 space-y-4">

//                   {/* Title */}
//                   <h3 className="text-lg font-semibold text-white">
//                     {course.title}
//                   </h3>

//                   {/* Rating */}
//                   <div className="flex items-center gap-2 text-sm text-yellow-400">
//                     <Star size={16} fill="currentColor" />
//                     <span className="text-white">{course.rating}</span>
//                   </div>

//                   {/* Meta Info */}
//                   <div className="flex items-center justify-between text-sm text-muted-foreground">
//                     <div className="flex items-center gap-1">
//                       <Clock size={16} />
//                       {course.duration} Lessons
//                     </div>
//                     <div className="flex items-center gap-1">
                     
//                       💎 {course.crystal} Crystals
//                     </div>
//                   </div>

//                 </CardContent>
//               </Card>
//             </Link>
//           ))}
//         </div>

//       </div>
//     </div>
//   )
// }