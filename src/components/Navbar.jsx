import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div>
        <button>Temp Logo</button>
        <div>
          <a>Home</a>
          <a>Sobre</a>
          <a>Skills</a>
          <a>Projetos</a>
          <a>Contato</a>
        </div>
        <button>Contrate</button>
      </div>
    );
  }
}

export default Navbar;