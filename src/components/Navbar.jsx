import React, { Component } from 'react';
import logo from '../assets/icons/computer.svg'

class Navbar extends Component {
  render() {
    return (
      <div className="bg-dark-bg flex justify-between w-full">
        <div className="mx-2 my-2">
          <img src={logo} alt="computer logo" className="w-8"/>
        </div>
        <div className="text-white flex space-x-6 mx-2 my-2" >
          <a href="#">Home</a>
          <a href="#">Sobre</a>
          <a href="#">Skills</a>
          <a href="#">Projetos</a>
          <a href="#">Contato</a>
        </div>
      </div>
    );
  }
}

export default Navbar;