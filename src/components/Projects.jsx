import React, { Component } from 'react';
import ProjectCarousel from './ProjectCarousel';

class Projects extends Component {
  render() {
    return (
      <div id="Projects" className="text-white w-full 
       flex flex-col justify-center items-center snap-start gap-4">
        <h2 className="bg-dark-bg text-yellow-select rounded text-[28px] w-52 text-center mt-14">Projetos</h2>
        <ProjectCarousel />
      </div>
    );
  }
}

export default Projects;