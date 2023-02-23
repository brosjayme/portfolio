import React from 'react'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import SocialLinks from './Components/SocialLinks';

function App () {
  return (
    <div>
     < Navbar />
     <Home />
     <About />
     <Skills />
     <Portfolio />
     <Contact />

     <SocialLinks />
    </div>
  );
}


export default App;