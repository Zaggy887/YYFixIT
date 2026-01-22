import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Process from "./components/Process";
import Statistics from "./components/Statistics";
import Universities from "./components/Universities";
import Articles from "./components/Articles";
import ContactForm from "./components/ContactForm";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!isLoaded && <LoadingScreen />}

      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Navbar />
        <Hero />
        <About />
        <Process />
        <Statistics />
        <Universities />
        <Articles />
        <ContactForm />
        <Pricing />
        <Footer />
      </div>
    </>
  );
}

export default App;
