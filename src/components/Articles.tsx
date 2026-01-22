import { useEffect, useRef } from 'react';

const Articles = () => {
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

  const articles = [
    {
      title: 'Why Professional Assembly Saves Time & Money',
      image: 'https://images.pexels.com/photos/5490965/pexels-photo-5490965.jpeg',
      desc: 'Discover how hiring professionals for furniture assembly eliminates frustration, saves hours of your time, and ensures perfect results every time.',
      link: '#contact',
      alt: 'Professional assembling furniture',
      date: 'January 15, 2026',
    },
    {
      title: 'Creating the Perfect Home Office Setup',
      image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg',
      desc: 'Learn how proper home office setup boosts productivity, comfort, and work-life balance with ergonomic furniture and smart organization.',
      link: '#contact',
      alt: 'Modern home office workspace',
      date: 'January 10, 2026',
    },
    {
      title: 'Transform Your Family Room in One Day',
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg',
      desc: 'See how professional room setup services can completely transform your living space into a cozy, functional family gathering area quickly.',
      link: '#contact',
      alt: 'Beautiful modern family room',
      date: 'January 5, 2026',
    }
  ];

  const renderArticle = (article: typeof articles[0], index: number) => (
    <article
      key={index}
      className="fade-in bg-white rounded-xl shadow-lg overflow-hidden flex flex-col border-2 border-[#FFDA66]"
    >
      <div className="h-48 relative overflow-hidden">
        <img
          src={article.image}
          alt={article.alt}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="px-6 pt-4 text-sm text-gray-500">{article.date}</div>
      <div className="p-6 pt-2 flex-grow">
        <h3 className="text-xl font-bold mb-3 text-black">{article.title}</h3>
        <p className="text-gray-600 mb-4">{article.desc}</p>
        <a
          href={article.link}
          className="text-black font-semibold hover:text-gray-700 transition-colors"
        >
          Learn more →
        </a>
      </div>
    </article>
  );

  return (
    <section id="articles" className="section bg-white" ref={sectionRef}>
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="fade-in mb-6 text-black text-4xl font-bold">Helpful Tips & Insights</h2>
          <p className="fade-in text-lg text-gray-700">
            Expert advice on furniture assembly, home office setups, and room transformations to make your home perfect.
          </p>
        </div>

        <div className="md:hidden overflow-x-auto -mx-4 px-4">
          <div className="flex space-x-6 snap-x snap-mandatory">
            {articles.map((article, index) => (
              <div key={index} className="min-w-[85%] snap-center">
                {renderArticle(article, index)}
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => renderArticle(article, index))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
