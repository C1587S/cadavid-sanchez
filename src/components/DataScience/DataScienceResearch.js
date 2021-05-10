// src/components/DataScienceResearch.js

import React from 'react'
import DS_CMR from './DS_CMR'
import DS_ITAM from './DS_ITAM'
import Media from 'react-bootstrap/Media'

function DataScienceResearch() {
  return (
    <ul className="list-unstyled">
      <Media as="li">
        <img
          width={64}
          height={64}
          className="mr-3"
          src="holder.js/64x64"
          alt="Generic placeholder"
        />
        <Media.Body>
          <h5>Community Detection for finding School Markets in Mexico</h5>
          <p className="p_ind">
          Research  assistance  to  generate  school  markets  to  understand  the  migration  mechanisms  
          of  stu-dents  among  institutions.   Responsabilities  included:  constructing  andvalidating  
          master  databasecontaining geographical information about nearly 230,000 Mexican schools With this 
          database, wegenerated spatial geometry analysis to construct commuting zones. Using graph algorithms,  
          we detected communities by utilizing bidirectional migration data of more than one million students.
          </p>
        </Media.Body>
      </Media>

      <Media as="li">
        <img
          width={64}
          height={64}
          className="mr-3"
          src="holder.js/64x64"
          alt="Generic placeholder"
        />
        <Media.Body>
          <h5>Early Warning System of Dropouts at Undergraduate Levels</h5>
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
