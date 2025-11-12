import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CNNForm from './components/CNNForm'; // or ANNForm if you're still testing
import About from './components/About';
import Docs from './components/Docs';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<CNNForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/docs" element={<Docs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;