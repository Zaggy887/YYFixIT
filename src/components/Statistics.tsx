import { useEffect, useRef } from 'react';
import { TrendingUp, Users2, Banknote, Building2 } from 'lucide-react';

const Statistics = () => {
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
    <section className="section bg-gradient-to-b from-blue-50 to-white py-12" ref={sectionRef}>
      <div className="container text-center">
        <h2 className="text-4xl font-extrabold text-blue-800 mb-4">Our Promise</h2>
        <p className="text-xl text-blue-600 mb-10 max-w-3xl mx-auto">
          Partner with us to transform your workforce and drive sustainable growth
        </p>
        
        <div className="grid md:grid-cols-4 gap-8">
          {/* Productivity Boost */}
          <div className="fade-in stat-card group">
            <div className="w-20 h-20 mx-auto mb-6 bg-[#5BB6FF] rounded-2xl shadow-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="w-10 h-10 text-white" />
            </div>
            <div className="text-3xl font-bold text-blue-600 mb-2"></div>
            <div className="text-xl text-blue-800 font-semibold mb-2">
              Boost Productivity
            </div>
            <p className="text-blue-600">
              Fresh perspectives and innovative approaches drive efficiency
            </p>
          </div>
          
          {/* Team Growth */}
          <div className="fade-in stat-card group" style={{transitionDelay: '0.2s'}}>
            <div className="w-20 h-20 mx-auto mb-6 bg-[#5BB6FF] rounded-2xl shadow-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <Users2 className="w-10 h-10 text-white" />
            </div>
            <div className="text-3xl font-bold text-blue-600 mb-2"></div>
            <div className="text-xl text-blue-800 font-semibold mb-2">
              Team Satisfaction
            </div>
            <p className="text-blue-600">
              Enhanced workplace culture and collaboration
            </p>
          </div>
          
          {/* Cost Savings */}
          <div className="fade-in stat-card group" style={{transitionDelay: '0.4s'}}>
            <div className="w-20 h-20 mx-auto mb-6 bg-[#5BB6FF] rounded-2xl shadow-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <Banknote className="w-10 h-10 text-white" />
            </div>
            <div className="text-3xl font-bold text-blue-600 mb-2"></div>
            <div className="text-xl text-blue-800 font-semibold mb-2">
              Cost Reduction
            </div>
            <p className="text-blue-600">
              Lower recruitment, wages and time expenses
            </p>
          </div>
          
          {/* Retention */}
          <div className="fade-in stat-card group" style={{transitionDelay: '0.6s'}}>
            <div className="w-20 h-20 mx-auto mb-6 bg-[#5BB6FF] rounded-2xl shadow-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <Building2 className="w-10 h-10 text-white" />
            </div>
            <div className="text-3xl font-bold text-blue-600 mb-2"></div>
            <div className="text-xl text-blue-800 font-semibold mb-2">
              Retention Rate
            </div>
            <p className="text-blue-600">
              Long-term workforce stability and growth
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .stat-card {
          @apply bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300;
        }
      `}</style>
    </section>
  );
};

export default Statistics;
