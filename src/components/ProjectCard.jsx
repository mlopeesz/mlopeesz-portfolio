import React, { Component } from 'react';
import projects from '../data/projects';

class ProjectCard extends Component {
  render() {
    return (
      <div className="grid grid-cols-2 gap-2 m-4">
        {projects.map((project) => (
          <div key={project.name} className="flex justify-center">
            <div className="rounded-lg shadow-lg bg-dark-bg max-w-sm">
              <a href={project.github}>
                <img className="rounded-t-lg" src={project.img} alt="" />
              </a>
              <div className="p-6">
                <h5 className="text-gray-100 text-xl font-medium mb-2">
                  {project.name}
                </h5>
                <p className="text-gray-200 text-base mb-4">
                  {project.description}
                </p>
                <h6>{project.stacks}</h6>
                <div className="flex flex-wrap gap-2">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <button
                      type="button"
                      className="inline-block px-6 py-2.5 bg-gray-700 text-yellow-select font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-800 hover:shadow-lg focus:bg-gray-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      GITHUB
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ProjectCard;
