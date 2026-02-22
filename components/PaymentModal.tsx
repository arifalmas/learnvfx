// "use client";

// import { useState } from "react";
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import Link from "next/link";

// type PaymentModalProps = {
//   open: boolean;
//   onOpenChange: (open: boolean) => void;
//   packageName: string;
//   crystals: number;
//   price: string;
// };

// export default function PaymentModal({ open, onOpenChange, packageName, crystals, price }: PaymentModalProps) {
//   const [paymentMethod, setPaymentMethod] = useState<"card" | "bkash">("card");

//   return (
//     <Dialog open={open} onOpenChange={onOpenChange}>
//       <DialogContent className="max-w-md rounded-2xl bg-[#111111] border border-[#262626]">
//         <DialogHeader>
//           <DialogTitle>Payment for {packageName}</DialogTitle>
//           <DialogDescription>
//             You are buying {crystals} crystal{crystals > 1 ? "s" : ""} for {price}.
//           </DialogDescription>
//         </DialogHeader>

//         {/* Payment Method Selector */}
//         <div className="mt-4">
//           <p className="text-sm text-muted-foreground mb-2">Choose Payment Method</p>
//           <RadioGroup value={paymentMethod} onValueChange={(val) => setPaymentMethod(val as "card" | "bkash")} className="flex gap-4 bg-[#262626] p-4 rounded-lg">
//             <label className="flex items-center gap-2 cursor-pointer ">
//               <RadioGroupItem value="card" className="text-white" />
//               Card
//             </label>
//             <label className="flex items-center gap-2 cursor-pointer">
//               <RadioGroupItem value="bkash" className="text-white" />
//               Bkash
//             </label>
//           </RadioGroup>
//         </div>

//         {/* Payment Info Inputs */}
//         <div className="mt-6 space-y-4">
//           {paymentMethod === "card" && (
//             <>
//               <Input placeholder="Card Number" className="bg-[#262626]" />
//               <div className="flex gap-4">
//                 <Input placeholder="MM/YY" className="bg-[#262626]" />
//                 <Input placeholder="CVC" className="bg-[#262626]" />
//               </div>
//               <Input placeholder="Cardholder Name" className="bg-[#262626]" />
//             </>
//           )}

//           {paymentMethod === "bkash" && (
//             <>
//               <Input placeholder="Bkash Number" className="bg-[#262626]" />
//               <Input placeholder="Transaction ID" className="bg-[#262626]" />
//             </>
//           )}
//         </div>

//         <DialogFooter className="mt-6 flex flex-col gap-3">
//           <Link href="/payment/success" className="w-full">
//             <Button className="w-full bg-green-500 hover:bg-green-600 border-none">
//               Pay {price}
//             </Button>
//           </Link>
//           <Button variant="outline" className="w-full bg-red-400 border-none" onClick={() => onOpenChange(false)}>
//             Cancel
//           </Button>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   );
// }