import "./app.scss"
import Navbar from "./components/Navbar/Navbar";
import { About } from "./components/about_me/About";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";


const App = () => {
  return (
    <div className="html">
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      {/* <section id="About"><Parallax type="about"/></section> */}
      {/* <section><About /></section> */}
      {/* <section id="Portfolio"><Parallax type="portfolio"/></section> */}
      {/* <Portfolio /> */}
      {/* <section id="Contact"><Contact/></section> */}
    </div>
  )
};

export default App;
