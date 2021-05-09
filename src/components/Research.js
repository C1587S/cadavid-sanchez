// src/components/ResearchList.js

import React from 'react';
import DataScienceResearch from './DataScience/DataScienceResearch';
import EconomicsResearch from './Economics/EconomicsResearch';

function Research() {
  return (
    <div>
      <DataScienceResearch />
      <EconomicsResearch />
    </div>
  )
}

export default Research;