// src/components/AboutMe.js

import React from 'react';
// import { Row, Container } from 'react-bootstrap'

const aboutMeStyleGray = { color: "#808880", fontSize: "1.8em", justifyContent: 'space-between' };

function AboutMe({ darkMode }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2 className="colored_heading_h1" style={{ color: darkMode ? 'white' : '#808880' }}>About me</h2>
      <p style={{ textAlign: 'justify' }}>
        I am a Data Scientist and Economist. My interests lie broadly in developing and deploying responsible AI tools to address complex societal problems.
        I am interested in using Data Science tools to positively impact users, including explainability and bias analysis of model inputs.
      </p>
      <p style={{ textAlign: 'justify' }}>
        I hold a B.A. and a M.A. in Economics from Universidad de los Andes and a M.S. in Data Science from Instituto Tecnológico Autónomo de México (ITAM).
        From 2019 to 2021, I was a fellow at the Center for Data Science and the Center for Economic Research at ITAM.
        I have more than four years of experience developing data analysis and machine learning techniques in the public and private sectors to solve problems at the intersection of social impact, social sciences, and Biology.
      </p>
    </div>
  );
}

export default AboutMe;