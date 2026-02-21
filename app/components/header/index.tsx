import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="bg-[#151518] text-white">
      <header>
        {/* ===== Hero Section ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:px-10 pt-10  lg:py-20 items-center bg-[#101213]">

          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-6xl font-bold leading-tight mb-6 ">
              LEARN VFX
            </h2>

            <p className="text-2xl text-gray-400 max-w-md mb-8">
              Master visual effects and enhance your digital storytelling skills
            </p>

            <Link href="/signup"
            className="border px-4 py-2 text-lg rounded-md"
            >

              GET STARTED

            </Link>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img src="/dragon.jpg" alt="VFX Dragon" className="rounded-lg shadow-2xl" />
          </div>
        </div>
      </header>

    </section>
  );
}

export default HeroSection