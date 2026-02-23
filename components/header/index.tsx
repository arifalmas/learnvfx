import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto bg-[url('/dragon.jpg')] bg-no-repeat bg-center bg-cover lg:bg-none min-h-screen flex justify-center items-center px-6">

      {/* Mobile Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 lg:hidden" />

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full">

        {/* Left Content */}
        <div className="text-left max-w-xl">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            LEARN VFX
          </h2>

          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 lg:text-gray-400 mb-8">
            Master visual effects and enhance your digital storytelling skills
          </p>

          <Link
            href="/signup"
            className="border px-6 py-3 text-base sm:text-lg rounded-md inline-block"
          >
            GET STARTED
          </Link>
        </div>

        {/* Right Image (Desktop Only) */}
        <div className="relative hidden lg:block">
          <img
            src="/dragon.jpg"
            alt="VFX Dragon"
            className="rounded-lg shadow-2xl max-w-md"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;