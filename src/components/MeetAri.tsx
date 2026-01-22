import { useEffect, useRef, useState } from 'react';
import AriModal from './AriModal';

const MeetAri = () => {
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
    <section className="section bg-gray-50 py-16" ref={sectionRef}>
      <div className="container text-center">
        <div className="fade-in max-w-2xl mx-auto">
          <h2 className="text-4xl font-extrabold text-black mb-4">
            Meet the Professional Behind Your Service
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Get to know Ari, the experienced craftsman who will personally handle your project with care and expertise.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-4 bg-[#FFDA66] text-black font-bold text-lg rounded-xl hover:bg-[#FFE680] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Meet Ari
          </button>
        </div>

        <AriModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </section>
  );
};

export default MeetAri;
