import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import CompetitiveProgramming from './pages/CompetitiveProgramming';
import './styles/index.css';

function App() {
  return (
    <Router basename="/portfolio">
      <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/competitive" element={<CompetitiveProgramming />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;