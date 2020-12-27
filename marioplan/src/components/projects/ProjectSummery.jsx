import React from 'react';

const ProjectSummery = ({ project }) => {
  return(
    <div className="card z-depth-1 project-summery">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>{project.content}</p>
        <p className="grey-text">14th June, 4PM</p>
      </div>
    </div>
  );
}

export default ProjectSummery;