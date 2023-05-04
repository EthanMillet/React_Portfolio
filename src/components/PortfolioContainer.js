import React, { useState } from 'react';
import NavTabs from './header';
import Footer from './footer'
import Project from './project';
import "../app.css"


import Resume from './pages/resume';
import About from './pages/About';
import Projects from './pages/projects';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Project') {
      return <Projects />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>

    <div className='content-container'>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>

    <footer className='footer' style={{width: "100%", height: "60px"}}>
      <Footer />
    </footer>
    </div>
  );
}
