import { useEffect, useRef, useState } from 'react';
import { Clock, ThumbsUp, Shield, DollarSign } from 'lucide-react';
import AriModal from './AriModal';

const Statistics = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <section className="section bg-white py-12" ref={sectionRef}>
      <div className="container text-center">
        <h2 className="text-4xl font-extrabold text-black mb-4">Why Customers Love Us</h2>
        <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
          Professional service that saves you time and delivers perfect results
        </p>

        <button
          onClick={() => setIsModalOpen(true)}
          className="fade-in mb-8 px-8 py-4 bg-[#FFDA66] text-black font-bold rounded-xl hover:bg-[#FFE680] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Meet Ari
        </button>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="fade-in stat-card group">
            <div className="w-20 h-20 mx-auto mb-6 bg-[#FFDA66] rounded-2xl shadow-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <Clock className="w-10 h-10 text-black" />
            </div>
            <div className="text-3xl font-bold text-black mb-2">Same Day</div>
            <div className="text-xl text-black font-semibold mb-2">
              Quick Service
            </div>
            <p className="text-gray-600">
              Most jobs completed within hours, not days
            </p>
          </div>

          <div className="fade-in stat-card group" style={{transitionDelay: '0.2s'}}>
            <div className="w-20 h-20 mx-auto mb-6 bg-[#FFDA66] rounded-2xl shadow-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <ThumbsUp className="w-10 h-10 text-black" />
            </div>
            <div className="text-3xl font-bold text-black mb-2">100%</div>
            <div className="text-xl text-black font-semibold mb-2">
              Satisfaction Rate
            </div>
            <p className="text-gray-600">
              Our customers love our work and service
            </p>
          </div>

          <div className="fade-in stat-card group" style={{transitionDelay: '0.4s'}}>
            <div className="w-20 h-20 mx-auto mb-6 bg-[#FFDA66] rounded-2xl shadow-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <Shield className="w-10 h-10 text-black" />
            </div>
            <div className="text-3xl font-bold text-black mb-2">Insured</div>
            <div className="text-xl text-black font-semibold mb-2">
              Fully Protected
            </div>
            <p className="text-gray-600">
              Complete peace of mind with full insurance coverage
            </p>
          </div>

          <div className="fade-in stat-card group" style={{transitionDelay: '0.6s'}}>
            <div className="w-20 h-20 mx-auto mb-6 bg-[#FFDA66] rounded-2xl shadow-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <DollarSign className="w-10 h-10 text-black" />
            </div>
            <div className="text-3xl font-bold text-black mb-2">Fair</div>
            <div className="text-xl text-black font-semibold mb-2">
              Transparent Pricing
            </div>
            <p className="text-gray-600">
              No hidden fees or surprise charges
            </p>
          </div>
        </div>

        <AriModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>

      <style jsx>{`
        .stat-card {
          @apply bg-[#FFDA66]/10 rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-[#FFDA66];
        }
      `}</style>
    </section>
  );
};

export default Statistics;
