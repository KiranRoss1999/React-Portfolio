import React from 'react';
import profileImage from '../assets/images/profile image.jpeg';

const AboutMe = () => {
  return (
    <section id="about-me">
      <img src={profileImage} alt="Profile Image" />
      <p>This is my React Portfolio!</p>
    </section>
  );
};

export default AboutMe;
