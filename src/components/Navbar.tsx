import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll('section[id]');
      let current = '';
      let maxVisible = 0;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const visible = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);

        if (section.id === 'pricing') {
          const referralElement = document.querySelector('#referral');
          if (referralElement) {
            const referralRect = referralElement.getBoundingClientRect();
            if (referralRect.top < window.innerHeight / 2 && referralRect.bottom > window.innerHeight / 2) {
              current = 'referral';
              maxVisible = Infinity;
              return;
            }
          }
        }

        if (visible > maxVisible) {
          maxVisible = visible;
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  // ✅ Mobile-only smoother scroll & delayed trigger
  const scrollToSection = (id: string) => {
    const el = id === 'referral'
      ? document.querySelector('#referral')
      : document.getElementById(id);

    if (!el) return;

    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      setIsMenuOpen(false);
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 350); // ✅ Increased for smoother mobile transition
    } else {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navLink = (id: string, label: string, mobile = false) => {
    const base = mobile
      ? "text-[#FFDA66] text-lg font-light hover:text-yellow-400 transition-colors"
      : `transition-colors ${
          activeSection === id
            ? "text-black font-medium"
            : isScrolled
            ? "text-black hover:text-gray-700"
            : "text-white hover:text-[#FFDA66]"
        }`;

    return (
      <button onClick={() => scrollToSection(id)} className={base}>
        {label}
      </button>
    );
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center gap-3">
          <img
            src="/yys_logo.jpeg"
            alt="YY's Fix It & Build It Service Logo"
            className="h-10 md:h-12 w-auto rounded-lg shadow-md"
          />
          <span className={`text-lg md:text-xl font-bold ${isScrolled ? 'text-black' : 'text-white'}`}>
            YY's Fix It & Build It Service
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          {navLink("about", "About")}
          {navLink("services", "Services")}
          {navLink("articles", "Gallery")}
          {navLink("pricing", "Pricing")}
          <button
            onClick={() => scrollToSection("contact")}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              activeSection === "contact"
                ? "bg-black text-[#FFDA66] bg-opacity-90"
                : "bg-black text-[#FFDA66] hover:bg-gray-900"
            }`}
          >
            Book Now
          </button>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`md:hidden ${isScrolled ? "text-black" : "text-white"} transition-colors`}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-50 bg-black/95 backdrop-blur-lg transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="absolute top-4 right-4">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-[#FFDA66] hover:text-yellow-400 transition-colors"
          >
            <X size={28} />
          </button>
        </div>

        <div className="h-full flex flex-col items-center justify-center space-y-6 px-6 animate-mobile-nav">
          {navLink("about", "About", true)}
          {navLink("services", "Services", true)}
          {navLink("articles", "Gallery", true)}
          {navLink("pricing", "Pricing", true)}
          <button
            onClick={() => scrollToSection("contact")}
            className="mt-4 bg-[#FFDA66] text-black px-6 py-2 rounded-full text-lg font-medium hover:bg-yellow-400 transition"
          >
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
