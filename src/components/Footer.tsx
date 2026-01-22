import { Mail, Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#48A3EB] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:justify-between space-y-8 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white">
              ONLY<span className="text-white/90">U</span>grads
            </h3>
            <p className="mt-2 text-white/90 max-w-md">
              Connecting Melbourne's top university students with leading companies.
            </p>
          </div>
          
          <div className="text-center md:text-right space-y-4">
            <h4 className="text-white font-semibold mb-4">Connect with Us</h4>
            <div className="flex flex-col items-center md:items-end space-y-4">
              <a
                href="mailto:contact@onlyugrads.com"
                className="flex items-center text-white hover:text-white/80 transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                contact@onlyugrads.com
              </a>
              <div className="flex items-center space-x-6">
                <a
                  href="https://www.linkedin.com/company/onlyugrads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-white hover:text-white/80 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/onlyugrads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-white hover:text-white/80 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/onlyugrads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-white hover:text-white/80 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-white/80">
          © {new Date().getFullYear()} ONLYUgrads. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;