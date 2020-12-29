import React from 'react';
import moment from 'moment';

const ProjectSummery = ({ project }) => {
  return(
    <div className="card z-depth-1 project-summery">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>{project.content}</p>
        <p>Posted by {project.autherFirstName} {project.autherLastName} </p>
        <p className="grey-text">{ moment(project.createdAt.toDate()).calendar() }</p>
      </div>
    </div>
  );
}

export default ProjectSummery;