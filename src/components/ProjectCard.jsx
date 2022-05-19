import React, { Component } from 'react';
import projects from '../data/projects';

class ProjectCard extends Component {
  render() {
    return (
      <div className="flex flex-wrap gap-2 m-4">
        {projects.map((project) => (
          <div
            key={project.name}
            className="flex rounded-lg shadow-lg bg-dark-bg max-w-sm"
          >
            <div>
              <a href={project.github}>
                <img className="rounded-t-lg" src={project.img} alt="" />
              </a>
              <div className="flex flex-col justify-between text-gray-200 gap-4 m-4">
                <h5 className="text-xl font-medium">{project.name}</h5>
                <p>{project.description}</p>
                <span>{project.stacks}</span>
                <a href={project.github} target="_blank" rel="noreferrer">
                  <button
                    type="button"
                    className="px-6 py-2.5 bg-gray-700 text-yellow-select font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-800 hover:shadow-lg focus:bg-gray-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150"
                  >
                    GITHUB
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ProjectCard;
