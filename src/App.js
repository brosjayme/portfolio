import React, {Component} from 'react';
import ParticlesBg from 'particles-bg';
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home';
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'
import './App.css';

class App extends Component {
  render() {
  return (
    <div className="App">
      <ParticlesBg className='particles' type="cobweb" bg={true} />
    
      <Navbar/>
      <Home/>
      <Main /> 
      <Footer/>
    
    </div>
  );
   }
}

export default App;
