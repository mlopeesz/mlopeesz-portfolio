import React, { Component } from 'react';
import projects from '../data/projects';

class ProjectCard extends Component {
  render() {
    return (
      <div className="flex flex-wrap gap-2 m-4">
        {projects.map((project) => (
          <div
            key={project.name}
            className="rounded-lg shadow-lg bg-dark-bg max-w-sm"
          >
            <div>
              <a href={project.github}>
                <img className="rounded-t-lg" src={project.img} alt="" />
              </a>
              <div className="flex flex-col gap-4 text-gray-200 m-4 h-[320px]">
                <h5 className="text-xl font-bold">{project.name}</h5>
                <p>{project.description}</p>
                <span className="font-semibold mt-auto">{project.stacks}</span>
              </div>
                <a href={project.github} target="_blank" rel="noreferrer">
                  <button
                    type="button"
                    className="w-full px-6 py-2.5 bg-gray-700 text-yellow-select font-medium text-xs rounded shadow-md hover:bg-gray-800 hover:shadow-lg focus:bg-gray-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150"
                  >
                    GITHUB
                  </button>
                </a>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ProjectCard;
