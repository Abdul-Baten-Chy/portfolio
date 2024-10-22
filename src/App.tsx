import { useEffect } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Nav";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";
import About from "./Pages/About";
import Qualification from "./components/Qualification";

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
    </>
  );
}
