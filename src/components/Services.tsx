import { useEffect, useRef } from 'react';
import { Armchair, Monitor, Sofa, CheckCircle } from 'lucide-react';

const Services = () => {
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

  const services = [
    {
      icon: Armchair,
      title: 'Flat Pack Furniture Assembly',
      description: 'Expert assembly of all types of flat pack furniture from major retailers like IKEA, Fantastic Furniture, and more.',
      features: [
        'Beds, wardrobes, and dressers',
        'Shelving units and bookcases',
        'Tables, chairs, and desks',
        'Entertainment units and TV stands'
      ]
    },
    {
      icon: Monitor,
      title: 'Home Office Setup',
      description: 'Complete home office installation to create your perfect productive workspace.',
      features: [
        'Desk and chair assembly',
        'Monitor mounting and cable management',
        'Storage solutions and organization',
        'Ergonomic workspace optimization'
      ]
    },
    {
      icon: Sofa,
      title: 'Family Room Setup',
      description: 'Transform your living space into a comfortable and functional family gathering area.',
      features: [
        'Living room furniture arrangement',
        'Entertainment center setup',
        'Shelving and storage installation',
        'Complete room transformation'
      ]
    }
  ];

  return (
    <section
      id="services"
      className="section bg-[#FFDA66] py-16"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="fade-in text-black text-4xl font-bold mb-4">Our Services</h2>
          <p className="fade-in text-black text-lg">
            Professional assembly and setup services tailored to your needs. We handle everything from start to finish.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="fade-in bg-white rounded-xl p-8 shadow-lg border-2 border-black hover:shadow-2xl transition-all duration-300"
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="w-16 h-16 bg-[#FFDA66] rounded-full flex items-center justify-center mb-6 mx-auto">
                <service.icon className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-black text-2xl font-bold mb-4 text-center">{service.title}</h3>
              <p className="text-gray-700 mb-6 text-center">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-black flex-shrink-0 mr-3 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center fade-in">
          <a
            href="#contact"
            className="inline-block px-8 py-4 rounded-full font-semibold text-black bg-white hover:bg-gray-100 transition-colors duration-300 shadow-lg border-2 border-black"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
