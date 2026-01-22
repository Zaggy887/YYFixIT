import { useEffect, useState, useRef } from "react";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const backgroundImages = [
    'https://images.pexels.com/photos/5618615/pexels-photo-5618615.jpeg?_gl=1*hr1z43*_ga*MTQyMjkzMDUxNi4xNzU4NzQxNDQ5*_ga_8JE65Q40S6*czE3NjkwNjE2MDQkbzkkZzEkdDE3NjkwNjE2MjYkajM4JGwwJGgw',
    'https://images.pexels.com/photos/6585763/pexels-photo-6585763.jpeg',
    'https://images.pexels.com/photos/20285350/pexels-photo-20285350.jpeg?_gl=1*jkih5u*_ga*MTQyMjkzMDUxNi4xNzU4NzQxNDQ5*_ga_8JE65Q40S6*czE3NjkwNjE2MDQkbzkkZzEkdDE3NjkwNjE3MzgkajIkbDAkaDA.',
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
          <h1 className="text-4xl sm:text-6xl font-bold leading-snug sm:leading-tight mb-5 sm:mb-6 drop-shadow-lg animate-slide-up">
            Professional{" "}
            <span className="text-[#FFDA66] drop-shadow-lg">Assembly & Setup</span>{" "}
            Services
          </h1>

          <p className="text-base sm:text-xl text-white/90 mb-8 sm:mb-10 drop-shadow-md animate-fade-in-slower">
            YY's Fix It & Build It Service specializes in flat pack furniture assembly, home office setup, and family room transformations. We bring your vision to life with expert craftsmanship.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto animate-slide-up">
            <a
              href="#contact"
              className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-black bg-[#FFDA66] hover:bg-yellow-400 transition-all shadow-lg font-medium sm:font-semibold text-base sm:text-lg text-center"
            >
              Book Service
            </a>
            <a
              href="#pricing"
              className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all shadow-lg font-medium sm:font-semibold text-base sm:text-lg text-center border border-white/30"
            >
              View Pricing
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;