import React, { useEffect, useState } from 'react';
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Portfolio from './components/portfolio/Portfolio';
import Skills from './components/skills/Skills';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

function App() {
  const [open, setOpen] = useState(false); 

  useEffect(() => {
    
    setOpen(true);
  }, []);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return; 
    }
    setOpen(false); 
  };

  return (
    <>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="warning">
          Kindly open it on Your PC!
        </Alert>
      </Snackbar>
      <Header />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />

    </>
  );
}

export default App;
