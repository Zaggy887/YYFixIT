import React, { useEffect, useRef } from 'react';
import { CheckSquare, Armchair, Monitor, Sofa } from 'lucide-react';

const Pricing = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-in');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="bg-[#FFDA66]">
      <section id="pricing" className="section relative text-black pt-20 pb-16" ref={sectionRef}>
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="fade-in text-black text-4xl font-bold mb-4">
              Transparent & Affordable Pricing
            </h2>
            <p className="fade-in text-black text-lg">
              No hidden fees. No surprises. Just quality service at fair prices.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="fade-in bg-white rounded-2xl p-8 shadow-xl border-2 border-black transition hover:shadow-2xl duration-300">
              <div className="w-16 h-16 bg-[#FFDA66] rounded-full flex items-center justify-center mb-6 mx-auto">
                <Armchair className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 text-center">Flat Pack Assembly</h3>
              <div className="text-center mb-6">
                <p className="text-4xl font-extrabold text-black">$80+</p>
                <p className="text-gray-600 text-sm">Starting price</p>
              </div>
              <ul className="space-y-4 text-black">
                {[
                  'Simple items (shelves, small tables)',
                  'Expert assembly guaranteed',
                  'All tools & equipment included',
                  'Clean-up after completion',
                  'Same-day service available',
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-base leading-relaxed">
                    <CheckSquare className="w-5 h-5 text-black flex-shrink-0 mr-3 mt-[2px]" />
                    <span className="flex-1">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="fade-in bg-white rounded-2xl p-8 shadow-xl border-4 border-black transition hover:shadow-2xl duration-300 transform md:scale-105">
              <div className="bg-black text-[#FFDA66] text-sm font-bold py-1 px-4 rounded-full inline-block mb-4">
                MOST POPULAR
              </div>
              <div className="w-16 h-16 bg-[#FFDA66] rounded-full flex items-center justify-center mb-6 mx-auto">
                <Monitor className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 text-center">Home Office Setup</h3>
              <div className="text-center mb-6">
                <p className="text-4xl font-extrabold text-black">$200+</p>
                <p className="text-gray-600 text-sm">Complete setup</p>
              </div>
              <ul className="space-y-4 text-black">
                {[
                  'Desk & chair assembly',
                  'Monitor & equipment setup',
                  'Cable management included',
                  'Ergonomic positioning',
                  'Storage solution installation',
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-base leading-relaxed">
                    <CheckSquare className="w-5 h-5 text-black flex-shrink-0 mr-3 mt-[2px]" />
                    <span className="flex-1">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="fade-in bg-white rounded-2xl p-8 shadow-xl border-2 border-black transition hover:shadow-2xl duration-300">
              <div className="w-16 h-16 bg-[#FFDA66] rounded-full flex items-center justify-center mb-6 mx-auto">
                <Sofa className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 text-center">Family Room Setup</h3>
              <div className="text-center mb-6">
                <p className="text-4xl font-extrabold text-black">$350+</p>
                <p className="text-gray-600 text-sm">Full room transformation</p>
              </div>
              <ul className="space-y-4 text-black">
                {[
                  'Complete furniture assembly',
                  'Entertainment center setup',
                  'Room layout & arrangement',
                  'Shelving & storage units',
                  'Professional finishing touches',
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-base leading-relaxed">
                    <CheckSquare className="w-5 h-5 text-black flex-shrink-0 mr-3 mt-[2px]" />
                    <span className="flex-1">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-10 shadow-xl border-2 border-black max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-black mb-6 text-center">Why Choose Our Services?</h3>
            <div className="grid md:grid-cols-2 gap-6 text-black">
              <div className="flex items-start">
                <CheckSquare className="w-6 h-6 text-black flex-shrink-0 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Free Quotes</h4>
                  <p className="text-gray-700">Get a detailed quote before any work begins</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckSquare className="w-6 h-6 text-black flex-shrink-0 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Flexible Scheduling</h4>
                  <p className="text-gray-700">We work around your schedule, evenings & weekends available</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckSquare className="w-6 h-6 text-black flex-shrink-0 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Satisfaction Guaranteed</h4>
                  <p className="text-gray-700">We don't leave until you're completely happy</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckSquare className="w-6 h-6 text-black flex-shrink-0 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Fully Insured</h4>
                  <p className="text-gray-700">Complete peace of mind with comprehensive coverage</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="inline-block bg-black text-[#FFDA66] font-semibold py-4 px-8 rounded-full hover:bg-gray-900 transition shadow-lg hover:shadow-xl"
            >
              Get Your Free Quote Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
