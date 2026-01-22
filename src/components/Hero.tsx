import { useEffect, useState, useRef } from "react";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const backgroundImages = [
    '/Background_2.jpg',
    '/Background_3.jpg',
    '/Background_1.jpg',
  ];
  
  const imageRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    
    setImagesLoaded(true);
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden font-sans">
      {backgroundImages.map((img, index) => {
        let backgroundPosition = 'center';
        if (index === 2 && isMobile) {
          backgroundPosition = '70% center';
        }

        return (
          <div
            key={index}
            ref={el => {
              if (el) imageRefs.current[index] = el;
            }}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
              currentImageIndex === index ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url("${img}")`,
              backgroundSize: 'cover',
              backgroundPosition,
              backgroundRepeat: 'no-repeat',
              filter: 'brightness(0.45)',
              willChange: 'opacity',
              zIndex: 0,
            }}
          />
        );
      })}

      <div className={`container mx-auto px-4 relative z-10 text-white ${imagesLoaded ? 'animate-fade-in-slow' : 'opacity-0'}`}>
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-6xl font-bold leading-snug sm:leading-tight mb-5 sm:mb-6 drop-shadow-sm animate-slide-up">
            Connecting Melbourne's Top{" "}
            <span className="text-[#A5D8FF] drop-shadow-sm">Student Talent</span>
          </h1>

          <p className="text-base sm:text-xl text-white/90 mb-8 sm:mb-10 drop-shadow-sm animate-fade-in-slower">
            ONLYUgrads specialises in connecting leading companies with exceptional
            university students across all commerce and business discplines.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto animate-slide-up">
            <a
              href="#contact"
              className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-white bg-[#5BB6FF] hover:bg-[#48A3EB] transition-all shadow-md font-medium sm:font-semibold text-base sm:text-lg text-center"
            >
              Get Started
            </a>
            <a
              href="#referral"
              className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all shadow-md font-medium sm:font-semibold text-base sm:text-lg text-center border border-white/30"
            >
              Refer & Earn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;