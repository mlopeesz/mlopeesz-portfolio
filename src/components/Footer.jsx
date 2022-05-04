import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div id="Footer" className="bg-dark-bg flex justify-around h-48">
        <div className="flex flex-col justify-center text-center">
          <h2 className="text-yellow-select text-[18px]">Mauricio Lopes</h2>
          <p className="text-[18px]">Desenvolvedor Web Fullstack</p>
        </div>
        {/* <div className="flex flex-col justify-center text-center">
          <h3>Links</h3>
          <a href="#Home">Home</a>
          <a href="#About">Sobre</a>
          <a href="#Skills">Habilidades</a>
          <a href="#Projects">Projetos</a>
        </div> */}
        <div className="flex flex-col justify-center my-2 gap-2 items-center">
          {/* LINKEDIN */}
          <a href="https://www.linkedin.com/in/mlopeesz/" target="_blank" rel="noreferrer">
            <img src="https://img.shields.io/badge/linkedin-383E45?style=for-the-badge&logo=linkedin&logoColor=0D66C2" />
          </a>
          {/* GITHUB */}
          <a href="https://github.com/mlopeesz" target="_blank" rel="noreferrer">
            <img src="https://img.shields.io/badge/github-383E45?style=for-the-badge&logo=github&logoColor=FFFFFF" />
          </a>
          {/* EMAIL */}
          <a href="mailto:mlopeesz@gmail.com" target="_blank" rel="noreferrer">
            <img src="https://img.shields.io/badge/email-383E45?style=for-the-badge&logo=gmail&logoColor=CD3D30" />
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;