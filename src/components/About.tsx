import { useEffect, useRef } from 'react';
import { Building, Users, Award } from 'lucide-react';

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
    <section id="about" className="section bg-blue-50" ref={sectionRef}>
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="fade-in mb-6">
            <span className="text-[#5BB6FF] font-bold">ONLY</span>
            <span className="text-[#5BB6FF]">U</span>
            <span className="text-[#5BB6FF] font-bold">grads</span>
          </h2>
          <p className="fade-in text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Founded in 2025, we specialise in student recruitment by connecting Melbourne's top university students and graduates with companies focused on building strong, long-term teams. Proudly based in the city's south-east, our service extend to all businesses across Melbourne looking to employ ambitious talent.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="fade-in card p-8 flex flex-col items-center text-center">
            <Building className="w-16 h-16 text-[#5BB6FF] mb-4" />
            <h3 className="text-xl font-bold mb-4">Corporate Partnerships</h3>
            <p className="text-gray-600">
              We work closely with Melbourne's top businesses to understand their unique needs and connect them with energetic and driven university students.
            </p>
          </div>
          
          <div className="fade-in card p-8 flex flex-col items-center text-center" style={{ transitionDelay: '0.2s' }}>
            <Users className="w-16 h-16 text-[#5BB6FF] mb-4" />
            <h3 className="text-xl font-bold mb-4">Student Development</h3>
            <p className="text-gray-600">
              We handpick top students from all major disciplines including Finance, Accounting, and Law to match your company's specific needs.
            </p>
          </div>
          
          <div className="fade-in card p-8 flex flex-col items-center text-center" style={{ transitionDelay: '0.4s' }}>
            <Award className="w-16 h-16 text-[#5BB6FF] mb-4" />
            <h3 className="text-xl font-bold mb-4">Quality Assurance</h3>
            <p className="text-gray-600">
              Our rigorous selection process ensures that only the most qualified and motivated students are presented to your organisation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
