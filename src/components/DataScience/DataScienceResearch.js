// src/components/DataScienceResearch.js

import React from 'react'
import Media from 'react-bootstrap/Media'
import mini_schlmkt from '../../imgs/mini_school_markets_3.png';
import itam20_mods from '../../imgs/itam20_mods.png';
import itam20_rec from '../../imgs/itam20_rec.png';
import sp_img_map from '../../imgs/sp_img_map.png';
import sp_img_ex from '../../imgs/sp_img_ex.png';

function DataScienceResearch({ darkMode }) {
  const textStyle = {
    color: darkMode ? '#f5f5f5' : '#808880',
  };
  return (
    <ul className="list-unstyled">

        <Media as="li">
        <div>
        <br />
        <img
          width={120}
          height={120}
          className="mr-3"
          src={sp_img_ex}
          alt="Generic placeholder"
        />
        <br />
        <br />
        <img
          width={120}
          height={120}
          className="mr-3"
          src={sp_img_map}
          alt="Generic placeholder"
        />     
        </div>
        <Media.Body>
          <a href="https://arxiv.org/abs/2305.14588" style={textStyle}> 
          <h5 class="colored_heading_h5">Evaluating end-to-end entity linking on domain-specific knowledge bases:
          Learning about ancient technologies from museum collections</h5>
          </a>
          <p>[With <a href='https://jmboehm.github.io/'>Johannes Boehm</a> ; <a href='https://sites.google.com/site/thomaschaney/'>Thomas Chaney</a> ; <a href='https://sites.google.com/view/danial-lashkari/home'>Danial Lashkari</a> ; Daniel Simig; Khalil Kacem; and Rafael A. Martins Frade, 2023]</p>
          <p className="p_ind" style={textStyle}>
          To study social, economic, and historical questions, researchers in the social sciences and humanities have started to use increasingly large unstructured textual datasets. While
          recent advances in NLP provide many tools to efficiently process such data, most existing approaches rely on generic solutions whos performance and suitability for domain-specific
          tasks is not well understood. This work presents an attempt to bridge this domain gap by exploring the use of modern Entity Linking approaches for the enrichment of museum collection data.
          We collect a dataset comprising of more than 1,700 texts annotated with 7,510 mention-entity pairs, evaluate some off-the-shelf solutions in detail using this dataset and finally fine-tune a
          recent end-to-end EL model on this data. We show that our fine-tuned model significantly outperforms other approaches currently available in this domain and present a proof-of-concept use case of this model.
          </p>
        </Media.Body>
      </Media>
      
      <Media as="li">
        <div>
        <br />
        <br />
        <img
          width={120}
          height={120}
          className="mr-3"
          src={mini_schlmkt}
          alt="Generic placeholder"
        />
         </div>
        <Media.Body>
          <br />
          {/* <a href="#research/school_markets" style={textStyle}>  */}
          <a href="#research/school_markets" style={textStyle}> 
          <h5 class="colored_heading_h5">Schooling Markets in Mexico</h5>
          </a>
          <p className="p_ind" style={textStyle}>
          We proposed a methodology for identifying commuting zones and schooling markets in Mexico using geospatial analysis and graph algorithms for community detection. Public policy programs could use school markets to target interventions towards enhancing education quality through school competition mechanisms. 
          This work was done with <a href='https://mauricio-romero.com'>Mauricio Romero</a> and Paola Mejía <a href="https://www.epfl.ch/en/">(EPFL)</a>, at the Center for Economic Research <a href="http://cie.itam.mx/">(CIE)</a>.
          </p>
        </Media.Body>
      </Media>

      <Media as="li">
      <div>
      <br />
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
        <br />
          <h5 class="colored_heading_h5">Early Warning System of Dropouts at Undergraduate Levels</h5>
          <p><i> Manuscript in preparation</i></p>
          <p className="p_ind" style={textStyle}>
          Using Machine Learning techniques and longitudinal data, we are developing an Early Warning System that identifies undergraduate students at high risk of abandoning their studies. Every semester, nearly 5% (about 250 students) of ITAM’s undergraduates abandon their studies. Not finishing their studies in the long term affects their economic productivity, workforce skills, and human capital formation. We compute predictions for the next two years to provide enough time for assistive interventions. We use metrics based on assistive actions to optimize the models, perform temporal cross-validation, and use existing methodologies based on randomized scores for analyzing algorithmic bias and fairness among student groups. We are currently performing exercises to provide senses of interpretability of our algorithms to decision-makers.
          This work was done with Adolfo De Unánue, Liliana Millán, Paola Mejía, and Elizabeth Rodriguez, at the <a href="https://ccdatos.itam.mx/">Center for Data Cience Research</a> of ITAM.          
          </p>
        </Media.Body>
      </Media>

    </ul>
  )
}


export default DataScienceResearch;
