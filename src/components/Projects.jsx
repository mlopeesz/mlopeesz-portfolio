import React, { Component } from 'react';
import ProjectCard from './ProjectCard';

class Projects extends Component {
  render() {
    return (
      <div
        id="Projects"
        className="text-white w-full 
       flex flex-col justify-center items-center snap-start gap-4"
      >
        <h2 className="bg-dark-bg text-yellow-select rounded text-[28px] w-52 text-center mt-14">
          Projetos
        </h2>
        <ProjectCard />
      </div>
    );
  }
}

export default Projects;
