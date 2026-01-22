import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-[#FFDA66] pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:justify-between space-y-8 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-[#FFDA66]">
              YY's Fix It & Build It Service
            </h3>
            <p className="mt-2 text-[#FFDA66]/80 max-w-md">
              Professional furniture assembly and home setup services. Quality workmanship you can trust.
            </p>
          </div>

          <div className="text-center md:text-right space-y-4">
            <h4 className="text-[#FFDA66] font-semibold mb-4">Get in Touch</h4>
            <div className="flex flex-col items-center md:items-end space-y-3">
              <a
                href="mailto:contact@yysfixitbuildit.com"
                className="flex items-center text-[#FFDA66] hover:text-[#FFDA66]/80 transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                contact@yysfixitbuildit.com
              </a>
              <a
                href="tel:+61412345678"
                className="flex items-center text-[#FFDA66] hover:text-[#FFDA66]/80 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                0412 345 678
              </a>
              <div className="flex items-center text-[#FFDA66]">
                <MapPin className="w-5 h-5 mr-2" />
                Serving All Melbourne Areas
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#FFDA66]/20 mt-12 pt-6 text-center text-sm text-[#FFDA66]/70">
          © {new Date().getFullYear()} YY's Fix It & Build It Service. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
