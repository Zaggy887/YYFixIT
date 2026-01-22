import { useEffect, useRef } from 'react';

const MeetAri = () => {
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
    <section className="section bg-gray-50 py-16" ref={sectionRef}>
      <div className="container">
        <div className="fade-in text-center mb-12">
          <h2 className="text-4xl font-extrabold text-black mb-4">
            Meet Yehuda
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            The experienced craftsman who will personally handle your project with care and expertise.
          </p>
        </div>

        <div className="fade-in flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto">
          <div className="md:w-1/3 flex-shrink-0">
            <img
              src="/img_20260122_163712.jpg"
              alt="Yehuda Yitzchak Merber"
              className="rounded-2xl shadow-xl w-full object-cover border-4 border-[#FFDA66]"
            />
          </div>

          <div className="md:w-2/3 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-black mb-3">Yehuda Yitzchak Merber</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Founder and driving force behind YY's Fix It & Build It Service. As the one in charge of everything, he ensures every project meets the highest standards of quality and customer satisfaction.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#FFDA66] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">
                  <span className="font-semibold text-black">Founded:</span> July 2024
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#FFDA66] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">
                  <span className="font-semibold text-black">Experience:</span> Nearly 10 years in furniture assembly and home setup services
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#FFDA66] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">
                  <span className="font-semibold text-black">Expertise:</span> From complex flat-pack furniture to complete room transformations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetAri;
