import React from 'react';

const ProjectSummery = ({ project }) => {
  return(
    <div className="card z-depth-1 project-summery">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>{project.content}</p>
        <p className="grey-text">{formatDateTime(project.createdAt.seconds)}</p>
      </div>
    </div>
  );
}

function formatDateTime(input) {
  var epoch = new Date(0);
  epoch.setSeconds(parseInt(input));
  var date = epoch.toISOString();
  date = date.replace('T', ' ');
  return date.split('.')[0].split(' ')[0] + ' ' + epoch.toLocaleTimeString();
};

export default ProjectSummery;