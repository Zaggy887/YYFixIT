import { useEffect, useRef } from 'react';
import { ClipboardCheck, Phone, Users, CheckSquare } from 'lucide-react';

const Process = () => {
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

  const steps = [
    {
      step: '1',
      title: 'Fill Out Initial Form',
      icon: ClipboardCheck,
      description: 'Complete our simple contact form with your company details and requirements.',
    },
    {
      step: '2',
      title: 'Consultation Call',
      icon: Phone,
      description: "We'll discuss your needs, any staffing challenges, and the ideal candidate profile.",
    },
    {
      step: '3',
      title: 'Candidate Selection',
      icon: Users,
      description: "We'll present you with pre-screened candidates matching your requirements.",
    },
    {
      step: '4',
      title: 'Onboarding Support',
      icon: CheckSquare,
      description: "We'll help ensure a smooth transition for both you and the student.",
    },
  ];

  return (
    <section id="process" className="section bg-white relative" ref={sectionRef}>
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="fade-in text-3xl font-bold mb-4">How Easy It Is To Work With Us</h2>
          <p className="fade-in text-lg text-[#5BB6FF] mb-4">
            We can have candidates ready for you within the next 7 days.
          </p>
          <p className="fade-in text-gray-600">
            We are with you throughout every step of the process. Real people from Australia to speak to, real people you can trust.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 top-[3rem] md:top-[2.5rem] bottom-0 w-0.5 bg-[#A5D8FF] transform -translate-x-1/2 z-0 pointer-events-none" />

          <div className="relative space-y-20 z-10">
            {steps.map(({ step, title, icon: Icon, description }, index) => {
              const isLeft = index % 2 === 0;
              const delay = `${index * 0.2}s`;
              const alignment = isLeft ? 'md:justify-end' : 'md:justify-start';
              const numberPosition = isLeft
                ? 'left-1/2 md:left-auto md:right-[-2rem]'
                : 'left-1/2 md:left-[-2rem]';
              const numberTranslate = 'translate-x-[-50%] md:translate-x-0';

              return (
                <div
                  key={step}
                  className={`relative fade-in md:flex ${alignment} items-start`}
                  style={{ transitionDelay: delay }}
                >
                  <div className="relative md:w-1/2 bg-gray-50 rounded-xl p-6 shadow-md">
                    <div
                      className={`absolute top-[-1.5rem] md:top-1/2 md:-translate-y-1/2 w-10 h-10 bg-[#5BB6FF] rounded-full flex items-center justify-center text-white font-bold text-sm ${numberPosition} ${numberTranslate}`}
                    >
                      {step}
                    </div>

                    <div className="w-12 h-12 bg-[#CDEBFF] rounded-full flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-[#5BB6FF]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{title}</h3>
                    <p className="text-gray-600">{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="fade-in inline-block px-6 py-3 rounded-full font-semibold text-white bg-[#5BB6FF] hover:bg-[#48A3EB] transition-colors duration-300 shadow-md"
          >
            Get Started Today
          </a>
        </div>
      </div>

      <style jsx>{`
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
};

export default Process;
