import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Skills />
        <Certifications />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}

export default App;
