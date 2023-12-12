import "./app.scss"
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";


const App = () => {
  return <div className="html">
    <section id="Homepage">
      <Navbar />
      <Hero />
    </section>
    <section id="About"><Parallax type="about"/></section>
    <section>Services</section>
    <section id="Portfolio"><Parallax type="portfolio"/></section>
    <Portfolio />
    <section id="Contact">Contact</section>
  </div>;
};

export default App;
