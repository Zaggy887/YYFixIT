import { useEffect, useRef } from 'react';
import { Wrench, Clock, Shield } from 'lucide-react';

const About = () => {
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
    <section id="about" className="section bg-white" ref={sectionRef}>
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="fade-in mb-6 text-black text-4xl font-bold">
            Why Choose YY's Fix It & Build It Service?
          </h2>
          <p className="fade-in text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            We're your trusted partner for all furniture assembly and home setup needs. With years of experience and a commitment to excellence, we transform your space efficiently and professionally.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="fade-in card p-8 flex flex-col items-center text-center border-2 border-[#FFDA66]">
            <Wrench className="w-16 h-16 text-black mb-4" />
            <h3 className="text-xl font-bold mb-4 text-black">Expert Craftsmanship</h3>
            <p className="text-gray-600">
              Our skilled technicians handle everything from complex flat pack furniture to complete room setups with precision and care.
            </p>
          </div>

          <div className="fade-in card p-8 flex flex-col items-center text-center border-2 border-[#FFDA66]" style={{ transitionDelay: '0.2s' }}>
            <Clock className="w-16 h-16 text-black mb-4" />
            <h3 className="text-xl font-bold mb-4 text-black">Fast & Reliable</h3>
            <p className="text-gray-600">
              We respect your time. Most jobs are completed on the same day, with flexible scheduling to fit your busy life.
            </p>
          </div>

          <div className="fade-in card p-8 flex flex-col items-center text-center border-2 border-[#FFDA66]" style={{ transitionDelay: '0.4s' }}>
            <Shield className="w-16 h-16 text-black mb-4" />
            <h3 className="text-xl font-bold mb-4 text-black">Satisfaction Guaranteed</h3>
            <p className="text-gray-600">
              We stand behind our work with a complete satisfaction guarantee. Your happiness is our top priority.
            </p>
          </div>
        </div>

        <div className="fade-in mt-20 bg-gradient-to-br from-[#FFDA66]/10 to-white border-2 border-[#FFDA66] rounded-2xl p-12" style={{ transitionDelay: '0.6s' }}>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12 text-black">Meet Ari</h3>
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/3 flex-shrink-0">
                <img
                  src="/img_20260122_163712.jpg"
                  alt="Yehuda Yitzchak Merber (Ari)"
                  className="rounded-2xl shadow-2xl w-full object-cover border-4 border-[#FFDA66]"
                />
              </div>
              <div className="md:w-2/3">
                <h4 className="text-2xl font-bold text-black mb-3">Yehuda Yitzchak Merber</h4>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Ari is the founder and driving force behind YY's Fix It & Build It Service. As the one in charge of everything, he ensures every project meets the highest standards of quality and customer satisfaction.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#FFDA66] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700"><span className="font-semibold text-black">Founded:</span> July 2024</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#FFDA66] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700"><span className="font-semibold text-black">Experience:</span> Nearly 10 years in furniture assembly and home setup services</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#FFDA66] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700"><span className="font-semibold text-black">Expertise:</span> From complex flat-pack furniture to complete room transformations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
