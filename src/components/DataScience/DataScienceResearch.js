// src/components/DataScienceResearch.js

import React from 'react'
// import DS_CMR from './DS_CMR'
// import DS_ITAM from './DS_ITAM'
import Media from 'react-bootstrap/Media'
import mini_schlmkt from '../../imgs/mini_school_markets_3.png';
import itam20_mods from '../../imgs/itam20_mods.png';
import itam20_rec from '../../imgs/itam20_rec.png';

function DataScienceResearch() {
  return (
    <ul className="list-unstyled">
      <Media as="li">
        <img
          width={120}
          height={120}
          className="mr-3"
          src={mini_schlmkt}
          alt="Generic placeholder"
        />
        <Media.Body>
          <h5 class="colored_heading_h5">Community Detection for Identifying School Markets in Mexico</h5>
          <p className="p_ind">
          Research  assistance  to  generate  school  markets  to  understand  the  migration  mechanisms  
          of  stu-dents  among  institutions.   Responsabilities  included:  constructing  andvalidating  
          master  databasecontaining geographical information about nearly 230,000 Mexican schools With this 
          database, we generated spatial geometry analysis to construct commuting zones. Using graph algorithms,  
          we detected communities by utilizing bidirectional migration data of more than one million students.
          </p>
        </Media.Body>
      </Media>

      <Media as="li">
      <div>
        <img
          width={120}
          height={120}
          className="mr-3"
          src={itam20_mods}
          alt="Generic placeholder"
        />
        <br />
        <br />
        <img
          width={120}
          height={120}
          className="mr-3"
          src={itam20_rec}
          alt="Generic placeholder"
        />     
        </div>
        <Media.Body>
          <h5 class="colored_heading_h5">Early Warning System of Dropouts at Undergraduate Levels</h5>
          <p className="p_ind">
          Research  assistance  to  generate  school  markets  to  understand  the  migration  mechanisms  
          of  students  among  institutions.   Responsabilities  included:  constructing  andvalidating  
          master  databasecontaining geographical information about nearly 230,000 Mexican schools With this 
          database, wegenerated spatial geometry analysis to construct commuting zones. Using graph algorithms,  
          we detected communities by utilizing bidirectional migration data of more than one million students.
          </p>
        </Media.Body>
      </Media>

    </ul>
  )
}


export default DataScienceResearch;
