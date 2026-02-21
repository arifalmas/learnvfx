import Image from "next/image";

type PricingCardProps = {
  crystals: number;
  price: number;
  discount?: number;
  highlight?: boolean;
  color?: string;
};
const PricingCard = ({
  crystals,
  price,
  discount,
  highlight = false,
  color
}: PricingCardProps) => {
  return (
    <div className={`bg-gradient-to-b from-transparent ${color}  rounded-2xl border border-white/20 p-6 text-center ${highlight
      ? "shadow-xl shadow-white/10 shadow-glow scale-105" : "hover:scale-105"} transition`}>

      {/* ===IMAGE=== */}
      <Image src="/icons.png" alt="Crystal" width={200} height={200} className="mx-auto mb-4" />

      <h3 className="mb-4 text-sm text-white/70">{crystals} Crystal</h3>

      <h2 className="mb-6 text-3xl font-bold">{price} BDT</h2>

      {discount && (
        <p className="mb-4 text-xs text-white/50">
          {discount} BDT OFF
        </p>
      )}

      <button className="mt-4 w-full rounded-full bg-white/10 py-3 text-sm font-medium hover:bg-white/20">
        Card/Bkash
      </button>
    </div>
  );
}

export default PricingCard;