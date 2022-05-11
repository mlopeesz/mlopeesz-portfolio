import React, { Component } from 'react';
import projects from '../data/projects';

class Projects extends Component {
  render() {
    return (
      <div id="Projects" className="text-white w-full h-screen flex flex-col justify-center items-center flex-wrap snap-start">
        <h2 className="bg-dark-bg text-yellow-select rounded text-[28px] w-52 text-center mt-14">Projetos</h2>
        <div>
          {projects.map((project) => {
            <div>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <p>{project.stacks}</p>
            </div>
          })}
        </div>
      </div>
    );
  }
}

export default Projects;