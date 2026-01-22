import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Process from "./components/Process";
import Statistics from "./components/Statistics";
import MeetAri from "./components/MeetAri";
import Articles from "./components/Articles";
import Pricing from "./components/Pricing";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const imagesToPreload = [
      'https://images.pexels.com/photos/4792509/pexels-photo-4792509.jpeg',
      'https://images.pexels.com/photos/6585763/pexels-photo-6585763.jpeg',
      'https://images.pexels.com/photos/7512994/pexels-photo-7512994.jpeg',
    ];

    let loadedCount = 0;
    const totalImages = imagesToPreload.length;

    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          setImagesLoaded(true);
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          setImagesLoaded(true);
        }
      };
      img.src = src;
    });
  }, []);

  return (
    <div
      className={`min-h-screen transition-opacity duration-500 ${
        imagesLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Process />
      <Statistics />
      <MeetAri />
      <Articles />
      <Pricing />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
