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
    title: 'Corporate Crisis: Employee Turnover Solutions',
    image: 'https://images.pexels.com/photos/8062287/pexels-photo-8062287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    desc: 'Learn how integrating university students into your workforce can address high turnover rates and build a sustainable talent pipeline.',
    link: 'https://www.shrm.org/topics-tools/news/all-things-work/reducing-employee-turnover',
    alt: 'Office team discussing ideas',
    date: 'March 18, 2025',
  },
  {
    title: 'Students Are Changing the Corporate World',
    image: 'https://images.pexels.com/photos/9783812/pexels-photo-9783812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    desc: 'Discover how university students are bringing technological proficiency, adaptability, and fresh perspectives that are reshaping traditional business models.',
    link: 'https://www.aacsb.edu/insights/articles/2024/06/equipping-business-students-for-a-dynamic-future',
    alt: 'Students collaborating with professionals',
    date: 'June 18, 2024',
  },
  {
    title: 'Why You Need to Hire University Students',
    image: 'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg',
    desc: 'University students bring fresh perspectives, innovative ideas, and digital-native skills that can transform your business operations and culture.',
    link: 'https://www.gradleaders.com/hireuniversitytalent/',
    alt: 'Young professionals brainstorming',
    date: 'May 25, 2023',
  }
]
;

  const renderArticle = (article: typeof articles[0], index: number) => (
    <article
      key={index}
      className="fade-in bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
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
        <h3 className="text-xl font-bold mb-3">{article.title}</h3>
        <p className="text-gray-600 mb-4">{article.desc}</p>
        <a
          href={article.link}
          className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more →
        </a>
      </div>
    </article>
  );

  return (
    <section id="articles" className="section bg-gradient-to-b from-white to-blue-50" ref={sectionRef}>
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="fade-in mb-6">Industry Insights</h2>
          <p className="fade-in text-lg text-gray-600">
            Discover how university students are transforming the corporate landscape and why your business should be part of this evolution.
          </p>
        </div>

        {/* Mobile: Horizontal Scroll */}
        <div className="md:hidden overflow-x-auto -mx-4 px-4">
          <div className="flex space-x-6 snap-x snap-mandatory">
            {articles.map((article, index) => (
              <div key={index} className="min-w-[85%] snap-center">
                {renderArticle(article, index)}
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => renderArticle(article, index))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
