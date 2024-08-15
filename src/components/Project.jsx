import React from 'react';

const Project = ({ title, image, deployedLink, repoLink }) => {
  return (
    <div className="project">
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <a href={deployedLink} target="_blank" rel="noopener noreferrer">View Deployed App</a>
      <a href={repoLink} target="_blank" rel="noopener noreferrer">View Repo</a>
    </div>
  );
};

export default Project;
