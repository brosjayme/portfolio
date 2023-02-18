import React from 'react'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Portfolio from './Components/Portfolio';

function App () {
  return (
    <div>
     < Navbar />
     <Home />
     <About />
     <Skills />
     {/* <Portfolio /> */}
    </div>
  );
}


export default App;