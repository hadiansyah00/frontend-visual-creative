import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PortfolioDetail from './pages/PortfolioDetail';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio/:id" element={<PortfolioDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;