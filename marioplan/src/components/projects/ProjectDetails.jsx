import React from 'react'

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-1">
        <div className="card-content">
          <span className="card-title">Title - {id}</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quia, delectus maiores debitis ullam aspernatur quod suscipit exercitationem non, facilis atque quas repudiandae! Ullam veritatis esse accusantium voluptas quae labore</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Vinit Chauhan</div>
          <div>14th June, 4PM</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
