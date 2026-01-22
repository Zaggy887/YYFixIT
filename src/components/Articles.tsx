import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';

const Articles = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

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

  const projects = [
    {
      title: 'Office Furniture Assembly',
      image: '/1.jpg',
      desc: 'Professional desk and chair assembly with cable management for a complete workspace setup.',
      location: 'Melbourne CBD',
      category: 'Office',
    },
    {
      title: 'Living Room Setup',
      image: '/2.jpg',
      desc: 'Entertainment unit, shelving, and seating assembly for a functional living space.',
      location: 'South Yarra',
      category: 'Living Room',
    },
    {
      title: 'Bedroom Furniture Installation',
      image: '/3.jpg',
      desc: 'Complete bedroom furniture assembly including bed frame, chairs, and bedside tables.',
      location: 'Brighton',
      category: 'Bedroom',
    },
    {
      title: 'Custom Storage Solutions',
      image: '/4.jpg',
      desc: 'Wardrobe and storage unit assembly providing organized space for your belongings.',
      location: 'Glen Waverley',
      category: 'Storage',
    },
    {
      title: 'Dining Furniture Assembly',
      image: '/5.jpg',
      desc: 'Dining table and chairs assembled with precision for family meals and gatherings.',
      location: 'Malvern',
      category: 'Dining',
    },
    {
      title: 'Multi-Room Furniture Setup',
      image: '/6.jpg',
      desc: 'Complete home furniture assembly service covering multiple rooms in one visit.',
      location: 'Caulfield',
      category: 'Full Home',
    },
  ];

  const renderProject = (project: typeof projects[0], index: number) => (
    <article
      key={index}
      className="fade-in bg-white rounded-xl shadow-lg overflow-hidden flex flex-col border-2 border-[#FFDA66] hover:shadow-2xl transition-all duration-300 cursor-pointer"
      onClick={() => setSelectedImage(index)}
    >
      <div className="h-64 relative overflow-hidden group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
          <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Click to View
          </span>
        </div>
        <div className="absolute top-4 right-4 bg-[#FFDA66] text-black px-3 py-1 rounded-full text-sm font-semibold">
          {project.category}
        </div>
      </div>
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold mb-2 text-black">{project.title}</h3>
        <p className="text-gray-600 mb-3">{project.desc}</p>
        <p className="text-sm text-gray-500 flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          {project.location}
        </p>
      </div>
    </article>
  );

  return (
    <>
      <section id="articles" className="section bg-[#FFDA66]" ref={sectionRef}>
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="fade-in mb-6 text-black text-4xl font-bold">Our Completed Projects</h2>
            <p className="fade-in text-lg text-black">
              Take a look at some of our recent furniture assembly and room setup projects across Melbourne. Quality work that speaks for itself.
            </p>
          </div>

          <div className="md:hidden overflow-x-auto -mx-4 px-4">
            <div className="flex space-x-6 snap-x snap-mandatory">
              {projects.map((project, index) => (
                <div key={index} className="min-w-[85%] snap-center">
                  {renderProject(project, index)}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <div className="grid grid-cols-3 gap-8">
              {projects.slice(0, 3).map((project, index) => renderProject(project, index))}
            </div>

            <div
              className={`grid grid-cols-3 gap-8 overflow-hidden transition-all duration-700 ease-in-out ${
                showAll ? 'max-h-[1000px] opacity-100 mt-8' : 'max-h-0 opacity-0'
              }`}
            >
              {projects.slice(3).map((project, index) => renderProject(project, index + 3))}
            </div>

            {!showAll && (
              <div className="mt-12 text-center fade-in">
                <button
                  onClick={() => setShowAll(true)}
                  className="inline-block px-8 py-4 rounded-full font-semibold text-black bg-white hover:bg-gray-100 transition-all duration-300 shadow-lg border-2 border-black hover:scale-105"
                >
                  Show More Projects
                </button>
              </div>
            )}
          </div>

          <div className="mt-12 text-center fade-in">
            <a
              href="#contact"
              className="inline-block px-8 py-4 rounded-full font-semibold text-black bg-white hover:bg-gray-100 transition-colors duration-300 shadow-lg border-2 border-black"
            >
              Book Your Project Today
            </a>
          </div>
        </div>
      </section>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-[#FFDA66] transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <div className="max-w-5xl w-full">
            <img
              src={projects[selectedImage].image}
              alt={projects[selectedImage].title}
              className="w-full h-auto rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="mt-4 text-center text-white">
              <h3 className="text-2xl font-bold mb-2">{projects[selectedImage].title}</h3>
              <p className="text-lg">{projects[selectedImage].desc}</p>
              <p className="text-sm mt-2 text-[#FFDA66]">{projects[selectedImage].location}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Articles;
