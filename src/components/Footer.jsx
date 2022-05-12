import React, { Component } from 'react';
import gmail from '../assets/icons/email.png'
import github from '../assets/icons/github.png'
import linkedin from '../assets/icons/linkedin.png'

class Footer extends Component {
  render() {
    return (
      <div id="Footer" className="bg-dark-bg flex justify-around h-48">
        <div className="flex flex-col justify-center text-center">
          <h2 className="text-yellow-select text-[18px]">Mauricio Lopes</h2>
          <p className="text-[18px]">Desenvolvedor Web Fullstack</p>
        </div>
        <div className="flex flex-col justify-center my-2 gap-2 items-center">
          {/* GITHUB */}
          <a className="w-10" href="https://github.com/mlopeesz" target="_blank" rel="noreferrer">
            <img src={github} />
          </a>
          {/* LINKEDIN */}
          <a className="w-10" href="https://www.linkedin.com/in/mlopeesz/" target="_blank" rel="noreferrer">
            <img src={linkedin} />
          </a>
          {/* EMAIL */}
          <a className="w-10" href="mailto:mlopeesz@gmail.com" target="_blank" rel="noreferrer">
            <img src={gmail} />
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;