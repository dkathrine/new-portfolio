import './App.css'
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import NavBar from './components/NavBar/NavBar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './pages/Home/Home.jsx';
import AboutMe from './pages/AboutMe/AboutMe.jsx';
import Projects from './pages/Projects/Projects.jsx';
import ProjectPage from './pages/Project/ProjectPage.jsx';



function App() {
  /* useStates to handle if the menu is swiped open & close */
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const [active, setActive] = useState(false);

  /* function to handle burger menu toggle */
  const handleMenuToggle = () => {
    setActive(!active);
  };

  /* function to close burger menu */
  const handleMenuClose = () => {
    setActive(false);
  }

  /* function to capture start touch position on x-axis */
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  /* function to update touch position on x-axis */
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  /* function to determine direction & distance of swipe - then decides whether to open or close burger menu */
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) {
      /* swiped left */
      handleMenuClose();
    } else if (distance < -50) {
      /* swiped right */
      setActive(true);
    }
    /* reset */
    setTouchStart(null);
    setTouchEnd(null);
  };

  const helmetContext = {};

  return (
    <HelmetProvider context={helmetContext}>
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className={`scroll-smooth layout`}
      >
        <AnimatePresence>
          <BrowserRouter>
            <NavBar
              active={active}
              handleMenuToggle={handleMenuToggle}
            />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/project/:id" element={<ProjectPage />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </AnimatePresence>
      </div>
    </HelmetProvider>
  )
}

export default App