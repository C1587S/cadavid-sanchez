// src/components/ResearchList.js

import React from 'react';
import DataScienceResearch from './DataScience/DataScienceResearch';
import EconomicsResearch from './Economics/EconomicsResearch';

function Research() {
  return (
    <div>
      <h1 align="justify">Research Interests</h1>
      <p>My research focuses on Computational Social Sciences for Economic and Social Development.</p>

      <DataScienceResearch />
      <EconomicsResearch />
    </div>
  )
}

export default Research;