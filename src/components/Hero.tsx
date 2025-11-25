"use client";

interface HeroProps {
  title: string;
  subtitle?: string;
  showCTAs?: boolean;
}

export default function Hero({ title, subtitle }: HeroProps) {
  const scrollToContact = () => {
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden bg-black">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/homepagehero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black opacity-50 z-[1]"></div>
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                {subtitle}
              </p>
            )}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors text-center"
                style={{ backgroundColor: "#14B8A6" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#06B6D4")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#14B8A6")
                }
              >
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
