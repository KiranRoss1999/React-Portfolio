import React from 'react';
import Project from '../components/Project';
import fetchFeederImage from '../assets/images/fetchfeeder2.png';

const Portfolio = () => {
  const projects = [
    {
      title: 'Fetch Feeder',
      image: fetchFeederImage,
      deployedLink: 'https://fetch-feeder-1.onrender.com',
      repoLink: 'https://github.com/KiranRoss1999/Fetch-Feeder'
    },
  ];

  return (
    <section id="portfolio">
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          image={project.image}
          deployedLink={project.deployedLink}
          repoLink={project.repoLink}
        />
      ))}
    </section>
  );
};

export default Portfolio;
