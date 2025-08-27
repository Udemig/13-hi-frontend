import TestimonialCard from "./TestimonialCard";
import { HiArrowRight, HiCalendar } from "react-icons/hi2";

const Hero = () => {
  const handleOrderClick = () => {
    // Handle order functionality
    console.log("Order clicked");
  };

  const handleReservationClick = () => {
    // Handle reservation functionality
    console.log("Reservation clicked");
  };

  return (
    <section className="bg-red-600 text-white min-h-screen flex items-center relative overflow-hidden">
      {/* Enhanced Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-red-600 to-red-800"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/10 to-transparent"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 xl:gap-24 items-center">
          {/* Left Content */}
          <div className="space-y-10 lg:space-y-12">
            <div className="space-y-8">
              {/* Enhanced Title with bigger font sizes */}
              <div className="relative">
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight">
                  <span className="block text-shadow-lg">Karadutlu</span>
                  <span className="block text-yellow-200 text-shadow-lg">Dondurma</span>
                </h1>
                {/* Subtle underline decoration */}
                <div className="w-24 lg:w-32 h-1 bg-yellow-200 mt-4 rounded-full"></div>
              </div>

              <p className="text-xl md:text-2xl lg:text-2xl xl:text-3xl leading-relaxed text-red-100 max-w-2xl font-light">
                Karadutlu Dondurma, doğanın en taze lezzetlerinden ilham alarak üretilen eşsiz bir tatlı deneyimi sunar.
                <span className="block mt-4 text-lg lg:text-xl text-red-200">
                  Özenle seçilmiş karadutlar, yoğun ve ferahlatıcı aromasıyla her lokmada doğal bir serinlik hissi
                  yaratır.
                </span>
              </p>
            </div>

            {/* Enhanced Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <button
                onClick={handleOrderClick}
                className="group bg-white text-red-600 font-bold px-10 py-4 lg:px-12 lg:py-5 rounded-full hover:bg-yellow-50 hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-xl lg:text-2xl shadow-2xl"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleOrderClick();
                  }
                }}
              >
                <span className="flex items-center justify-center gap-2 whitespace-nowrap">
                  Sipariş Et
                  <HiArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>

              <button
                onClick={handleReservationClick}
                className="group border-3 border-white text-white font-bold px-10 py-4 lg:px-12 lg:py-5 rounded-full hover:bg-white hover:text-red-600 hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-xl lg:text-2xl"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleReservationClick();
                  }
                }}
              >
                <span className="flex items-center justify-center gap-2">
                  Rezervasyon
                  <HiCalendar className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>

          {/* Right Content - Enhanced Testimonial */}
          <div className="flex justify-center lg:justify-end relative">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-white/5 rounded-3xl blur-3xl transform rotate-6 scale-110"></div>
            <div className="relative transform hover:scale-105 transition-transform duration-300">
              <TestimonialCard />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Decorative Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-yellow-200 rounded-full opacity-10 hidden lg:block animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-red-400 rounded-full opacity-15 hidden lg:block animate-bounce"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-red-300 rounded-full opacity-20 hidden xl:block"></div>
      <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-yellow-300 rounded-full opacity-8 hidden xl:block"></div>
      <div className="absolute bottom-1/4 right-1/3 w-12 h-12 bg-red-200 rounded-full opacity-15 hidden lg:block"></div>

      {/* Ice cream pattern background */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-red-700/30 to-transparent"></div>
    </section>
  );
};

export default Hero;
