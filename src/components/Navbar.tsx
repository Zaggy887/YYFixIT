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
      ? "text-white text-lg font-light hover:text-[#5BB6FF] transition-colors"
      : `transition-colors ${
          activeSection === id
            ? "text-[#5BB6FF] font-medium"
            : isScrolled
            ? "text-gray-700 hover:text-[#5BB6FF]"
            : "text-white hover:text-[#5BB6FF]"
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
        <a href="/" className="text-2xl font-bold">
          <span className={isScrolled ? 'text-black' : 'text-white'}>ONLY</span>
          <span className="text-[#5BB6FF]">U</span>
          <span className={isScrolled ? 'text-black' : 'text-white'}>grads</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          {navLink("about", "About")}
          {navLink("process", "Process")}
          {navLink("universities", "Universities")}
          {navLink("articles", "Insights")}
          {navLink("pricing", "Pricing")}
          {navLink("referral", "Referral")}
          <button
            onClick={() => scrollToSection("contact")}
            className={`px-6 py-2 rounded-full text-white transition-all duration-300 ${
              activeSection === "contact"
                ? "bg-[#5BB6FF] bg-opacity-90"
                : "bg-[#5BB6FF] hover:bg-[#48A3EB]"
            }`}
          >
            Contact Us
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
        className={`md:hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-lg transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="absolute top-4 right-4">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-white hover:text-[#48A3EB] transition-colors"
          >
            <X size={28} />
          </button>
        </div>

        <div className="h-full flex flex-col items-center justify-center space-y-6 px-6 animate-mobile-nav">
          {navLink("about", "About", true)}
          {navLink("process", "Process", true)}
          {navLink("universities", "Universities", true)}
          {navLink("articles", "Insights", true)}
          {navLink("pricing", "Pricing", true)}
          {navLink("referral", "Referral", true)}
          <button
            onClick={() => scrollToSection("contact")}
            className="mt-4 bg-[#5BB6FF] text-white px-6 py-2 rounded-full text-lg font-medium hover:bg-[#48A3EB] transition"
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
