import { useEffect } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Nav";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";
import Blog from "./components/Blog";
import Qualification from "./components/Qualification";
import Skills from "./components/Skills";
import About from "./Pages/About";
import Projects from "./Pages/Projects";

export default function App() {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Qualification />
      <Skills />
      <Projects />
      <Blog />
    </>
  );
}
