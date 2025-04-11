import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectOne from './pages/ProjectOne';
import ProjectTwo from './pages/ProjectTwo';
import ProjectThree from './pages/ProjectThree';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';

function MainContent() {
  return (
    <div className="main-content">
      <Navbar />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

function HomePage() {
  return (
    <div className="home-page">
      <Welcome />
      <MainContent />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project-one" element={
            <>
              <ProjectOne />
            </>
          } />
          <Route path="/project-two" element={
            <>
              <ProjectTwo />
            </>
          } />
          <Route path="/project-three" element={
            <>
              <ProjectThree />
            </>
          } />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 