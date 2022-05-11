import React, { Component } from 'react';
import logo from '../assets/icons/computer.svg'

class Navbar extends Component {
  render() {
    return (
      <header className="bg-dark-bg flex justify-between items-center h-16 p-4 box-border">
        <img src={logo} alt="computer logo" className="w-8"/>
        <nav>
          <ul className="flex gap-2">
            <li><a className="hover:text-yellow-select" href="#Home">Home</a></li>
            <li><a className="hover:text-yellow-select" href="#About">Sobre</a></li>
            <li><a className="hover:text-yellow-select" href="#Skills">Skills</a></li>
            <li><a className="hover:text-yellow-select" href="#Projects">Projetos</a></li>
            <li><a className="hover:text-yellow-select" href="#Footer">Contato</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Navbar;