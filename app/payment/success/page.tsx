// import Link from "next/link"
// import Image from "next/image"
// import { Button } from "@/components/ui/button"

// export default function PaymentSuccess() {
//   return (
//     <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-6 py-16">
//       <div className="max-w-md text-center space-y-6 bg-[#111111] border border-[#262626] rounded-2xl p-8">
        
//         {/* Success Image */}
//         <div className="relative w-32 h-32 mx-auto">
//           <Image src="/finalsfx.png" alt="Final SFX" fill className="object-contain" />
//         </div>

//         <h1 className="text-3xl font-bold">Congratulations!</h1>
//         <p className="text-muted-foreground">
//           Your payment was successful. You can now access your purchased crystals and courses.
//         </p>

//         {/* Action Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
//           <Link href="/courses">
//             <Button className="bg-indigo-600 hover:bg-indigo-700">
//               Browse Lessons
//             </Button>
//           </Link>
//           <Link href="/">
//             <Button variant="outline" className="text-black">
//               Later
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   )
// }