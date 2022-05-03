import React, { Component } from 'react';
import memojiNotebook from '../assets/memojis/memoji-notebook.png';

class Home extends Component {
  render() {
    return (
      <div className="text-white flex flex-col my-6">
        <div className="flex justify-center my-2">
          <h2 className="text-2xl">Prazer,
          <a href="https://www.linkedin.com/in/mlopeesz/" target="_blank" className="text-yellow-select mx-1.5 underline" rel="noreferrer">Mauricio Lopes</a>👋</h2>
        </div>
        <div className="flex justify-center text-3xl">
          <h1>Desenvolvedor Web Fullstack</h1>
        </div>
        <div className="flex justify-center my-8">
          <p>Código simples, bonito e funcional.</p>
        </div>
        <div className="flex justify-center">
          <img src={memojiNotebook} alt="memoji-notebook" className="w-60" />
        </div>
      </div>
    );
  }
}

export default Home;