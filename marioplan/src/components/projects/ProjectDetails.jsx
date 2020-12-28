import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

const ProjectDetails = (props) => {
  const { project } = props;
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-1">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{project.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {project.autherFirstName} {project.autherLastName}</div>
            <div>{formatDateTime(project.createdAt.seconds)}</div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading...</p>
      </div>
    )
  }
}

function formatDateTime(input) {
  var epoch = new Date(0);
  epoch.setSeconds(parseInt(input));
  var date = epoch.toISOString();
  date = date.replace('T', ' ');
  return date.split('.')[0].split(' ')[0] + ' ' + epoch.toLocaleTimeString();
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project
  }
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(ProjectDetails);
