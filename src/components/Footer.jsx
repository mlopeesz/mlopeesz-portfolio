import React, { Component } from 'react';
import gmail from '../assets/icons/email.png'
import github from '../assets/icons/github.png'
import linkedin from '../assets/icons/linkedin.png'

class Footer extends Component {
  render() {
    return (
      <div id="footer" className="bg-dark-bg flex flex-col justify-around h-48">
        <div className="flex flex-col justify-center text-center">
          <h2 className="text-yellow-select text-[18px]">Mauricio Lopes</h2>
          <p className="text-[18px]">Desenvolvedor Web Fullstack</p>
        </div>
        <div className="flex justify-center my-2 gap-4 items-center">
          {/* GITHUB */}
          <a className="w-12" href="https://github.com/mlopeesz" target="_blank" rel="noreferrer">
            <img src={github} />
          </a>
          {/* LINKEDIN */}
          <a className="w-12" href="https://www.linkedin.com/in/mlopeesz/" target="_blank" rel="noreferrer">
            <img src={linkedin} />
          </a>
          {/* EMAIL */}
          <a className="w-12" href="mailto:mlopeesz@gmail.com" target="_blank" rel="noreferrer">
            <img src={gmail} />
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;