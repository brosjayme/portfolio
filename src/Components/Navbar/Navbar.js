import React from "react";
import './Navbar.css'

const Navbar =() =>{
    return(
        <div className="container">
 <header>
  <nav className="card">
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>

        </div>
    )
}

export default Navbar;

