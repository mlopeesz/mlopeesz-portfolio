import React, { Component } from 'react';
import memojiNotebook from '../assets/memojis/memoji-notebook.png';

class Home extends Component {
  render() {
    return (
      <div
        id="Home"
        className="text-white w-full h-screen flex justify-center items-center flex-wrap"
      >
        <div className="flex flex-col jusitfy-center items-center">
          <h2 className="text-[28px]">
            Prazer,
            <a
              href="https://www.linkedin.com/in/mlopeesz/"
              target="_blank"
              className="text-yellow-select mx-1.5 underline"
              rel="noreferrer"
            >
              Mauricio Lopes
            </a>
            👋
          </h2>
          <h1 className="text-[34px] text-center">Desenvolvedor Web Fullstack</h1>
          <p className="text-[18px] text-center">Código simples, bonito e funcional.</p>
        </div>
        <img src={memojiNotebook} alt="memoji-notebook" />
      </div>
    );
  }
}

export default Home;
