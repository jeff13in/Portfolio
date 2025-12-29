import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import Experience from './components/Experience';
import UltimateTicTacToe from './components/ultimate-tic-tac-toe';

// Home page component with all portfolio sections
const Home = () => (
  <>
    <Hero />
    <About />
    <Projects />
    <Experience />
    <Skills />
    <Contact />
  </>
);

function App() {
  return (
    <Router basename="/Portfolio">
      <div className="min-h-screen bg-gray-900 text-gray-100">
        <div className="fixed inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <Navbar />
        <main className="relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ultimate-tic-tac-toe" element={<UltimateTicTacToe />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;