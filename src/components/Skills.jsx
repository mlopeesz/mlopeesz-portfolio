import React, { Component } from 'react';

class Skills extends Component {
  render() {
    return (
      <div id="Skills" className="flex flex-row-reverse justify-center items-center flex-wrap h-screen snap-start">
        <div className="flex flex-col gap-8 mt-12">
          <div className="flex flex-col justify-center items-center gap-4">
            <h3 className="bg-dark-bg text-yellow-select rounded text-[28px] w-52 text-center">
              Skills
            </h3>
            <h2 className="text-[22px] text-center">O que está incluído em minhas habilidades com programação?</h2>
          </div>
          <div className="grid grid-cols-2 justify-items-center gap-2">
            {/* LINUX */}
            <a href="https://www.linux.org/">
              <img src="https://img.shields.io/badge/Linux-212529?style=for-the-badge&logo=linux&logoColor=000000" />
            </a>
            {/* WINDOWS */}
            <a href="https://www.microsoft.com/pt-br/windows">
              <img src="https://img.shields.io/badge/Windows-212529?style=for-the-badge&logo=windows&logoColor=0078D4" />
            </a>
            {/* GIT */}
            <a href="https://git-scm.com/">
              <img src="https://img.shields.io/badge/git-212529?style=for-the-badge&logo=git&logoColor=E95420" />
            </a>
            {/* MARKDOWN */}
            <a href="https://daringfireball.net/projects/markdown/">
              <img src="https://img.shields.io/badge/markdown-212529?style=for-the-badge&logo=markdown&logoColor=343c45" />
            </a>
            {/* HTML */}
            <a href="https://www.w3.org/html/">
              <img src="https://img.shields.io/badge/HTML5-212529?style=for-the-badge&logo=html5&logoColor=E34F26" />
            </a>
            {/* CSS */}
            <a href="https://www.w3schools.com/css/">
              <img src="https://img.shields.io/badge/CSS3-212529?style=for-the-badge&logo=css3&logoColor=1572B6" />
            </a>
            {/* BOOTSTRAP */}
            <a href="https://getbootstrap.com/">
              <img src="https://img.shields.io/badge/Bootstrap-212529?style=for-the-badge&logo=bootstrap&logoColor=563D7C" />
            </a>
            {/* TAILWIND */}
            <a href="https://tailwindcss.com/">
              <img src="https://img.shields.io/badge/Tailwindcss-212529?style=for-the-badge&logo=tailwindcss&logoColor=38BDF8" />
            </a>
            {/* JAVASCRIPT */}
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
              <img src="https://img.shields.io/badge/JavaScript-212529?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
            </a>
            {/* TYPESCRIPT */}
            <a href="https://www.typescriptlang.org/">
              <img src="https://img.shields.io/badge/TypeScript-212529?style=for-the-badge&logo=typescript&logoColor=007ACC" />
            </a>
            {/* REACT */}
            <a href="https://reactjs.org/">
              <img src="https://img.shields.io/badge/React-212529?style=for-the-badge&logo=react&logoColor=61DAFB" />
            </a>
            {/* REDUX */}
            <a href="https://redux.js.org/">
              <img src="https://img.shields.io/badge/Redux-212529?style=for-the-badge&logo=redux&logoColor=7856BC" />
            </a>
            {/* JEST */}
            <a href="https://jestjs.io/">
              <img src="https://img.shields.io/badge/Jest-212529?style=for-the-badge&logo=jest&logoColor=933E56" />
            </a>
            {/* TESTING LIBRARY */}
            <a href="https://testing-library.com/">
              <img src="https://img.shields.io/badge/Testing_Library-212529?style=for-the-badge&logo=testing-library&logoColor=EE493A" />
            </a>
            {/* NODE */}
            <a href="https://nodejs.org/en/">
              <img src="https://img.shields.io/badge/node.js-212529?&style=for-the-badge&logo=node.js" />
            </a>
            {/* EXPRESS */}
            <a href="https://expressjs.com/">
              <img src="https://img.shields.io/badge/express.js-212529?&style=for-the-badge&logo=express&logoColor=3f4854" />
            </a>
            {/* HEROKU */}
            <a href="https://www.heroku.com/home">
              <img src="https://img.shields.io/badge/Heroku-212529?style=for-the-badge&logo=HEROKU&logoColor=B893DF" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
