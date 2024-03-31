import About from './components/About';
import Contacts from './components/Contacts';
import Experience from './components/Experience';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Technologies from './components/Technologies';

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 selection:bg-[#F8C471] selection:text-black ">
      <div className="fixed top-0 h-full w-full -z-10">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Contacts />
      </div>
    </div>
  );
};

export default App;