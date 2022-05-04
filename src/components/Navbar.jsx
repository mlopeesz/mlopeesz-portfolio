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
          <a className="hover:text-yellow-select" href="#Home">Home</a>
          <a className="hover:text-yellow-select" href="#About">Sobre</a>
          <a className="hover:text-yellow-select" href="#Skills">Skills</a>
          <a className="hover:text-yellow-select" href="#Projects">Projetos</a>
          <a className="hover:text-yellow-select" href="#Footer">Contato</a>
        </div>
      </div>
    );
  }
}

export default Navbar;