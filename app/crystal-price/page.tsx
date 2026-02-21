import CrystalCard from "../components/crystal-card/CrystalCard"

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-black text-white py-16">
      <div className="lg:max-w-7xl mx-auto px-5">

        {/* ===HEADER=== */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Pick Your Crystal
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Get 10% off with the Coupon Code "CRYSTAL10"         </p>
        </div>

        {/* ==== PRICING CARD ===== */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3 justify-center">
          <CrystalCard crystals={1} price={100} discount={0} color="to-blue-500/20" />

          <CrystalCard crystals={10} price={900} discount={100} highlight={true} color="to-pink-500/20" />

          <CrystalCard crystals={20} price={1700} discount={300} color="to-green-500/20" />
        </div>

        {/* ====NOTES==== */}
        <p className="text-center text-lg text-muted-foreground mt-8">
          Note : Purchasing Crystal is irreversible, <br />
          if you need any help feel free to contact on whatsapp +88012345566
        </p>
      </div>
    </div >
  )
}

export default PricingPage;