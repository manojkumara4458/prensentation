import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PresentationContent from './components/PresentationContent';
import RevealContent from './components/RevealContent';

function App() {
  return (
    <Router>
      <div className="bg-background text-text min-h-screen font-sans selection:bg-primary/30 selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<PresentationContent />} />
          <Route path="/reveal" element={<RevealContent />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
