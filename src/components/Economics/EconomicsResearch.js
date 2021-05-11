// src/components/EconomicsResearch.js

import React from 'react'
// import Eco_CO20 from './Eco_CO20'
// import Eco_CS18 from './Eco_CS18'
// import Eco_COM18 from './Eco_COM18'
// import Eco_COR18 from './Eco_COR18'
import Media from 'react-bootstrap/Media'
import co20_img_front from '../../imgs/co20_img_front.png';
import co20_img_int from '../../imgs/co20_img_int.png';
// import cs18_img_front from '../../imgs/cs18_img_front.png';
// import cs18_img_front_w from '../../imgs/cs18_img_front_w.png';
import cs18_img_front_alt from '../../imgs/cs18_img_front_alt.png';
import cs18_img_irfs from '../../imgs/cs18_img_irfs.png';
// import com18_img_srs from '../../imgs/com18_img_srs.png';
import com18_img_cfs from '../../imgs/com18_img_cfs.png';
import cor18_img_front from '../../imgs/cor18_img_front.png';
import cor18_img_srs from '../../imgs/cor18_img_srs.png';

function EconomicsResearch() {
  return (
    <ul className="list-unstyled">
      <Media as="li">
      <div>
      <br />
        <img
          width={120}
          height={190}
          className="mr-3"
          src={co20_img_front}
          alt="Generic placeholder"
        />
        <br />
        <br />
        <img
          width={120}
          height={120}
          className="mr-3"
          src={co20_img_int}
          alt="Generic placeholder"
        />     
        </div>
        <Media.Body>
          <br />
          <a href="https://www.cemla.org/PDF/ic/2020-08-jrp-inflation-expectations/2020-08-jrp-inflation-expectations-11.pdf" target="_blank"> 
          <h5 class="colored_heading_h5">Did the Introduction of Inflation Targeting Represent a Regime Switch of Monetary Policy in Latin America?</h5>
          </a>
          
          <p className="p_ind">
          In the 1990s, after experiencing high levels of inflation, several countries in Latin America passed constitutional 
          amendments providing greater autonomy to their central banks. A few years later, many central banks increased their 
          exchange rate flexibility and later adopted inflation targeting frameworks. These institutional changes coincided with 
          sharp reductions in inflation and its variability. In this paper, we ask if the observed reduction of inflation is possibly 
          related to changes in monetary policy. To answer this question, we build and estimate a Markov-Switching DSGE model for an 
          open economy with monetary factors for Brazil, Chile, Colombia, Mexico, and Peru, all of whom formally adopted inflation 
          targeting regimes between 1999 and 2002. Regimes are classified according to their relative weights of inflation in an 
          interest rate reaction function. Although ex-ante these regimes need not be associated with introducing the inflation-targeting 
          framework, the coincidence of a regime switch with a more responsive interest rate - inflation relationship is striking.
          Furthermore, the Markov-Switching Dsge model allows us to generate counterfactuals of what could have happened if the observed 
          change towards a more aggressive fight against inflation had not occurred. In general, we observe that if monetary policy had 
          remained dovish, these countries would have experienced higher and more variable levels of inflation and more pronounced 
          variations in GDP with small gains in average economic growth. Therefore, we conclude that the introduction of inflation 
          targeting represented a favorable regime switch in implementing monetary policy in Latin America.
          </p>
        </Media.Body>
      </Media>

      <Media as="li">
        <div>
        <br />
        <img
          width={120}
          height={190}
          className="mr-3"
          src={cs18_img_front_alt}
          alt="Generic placeholder"
        />
        <br />
        <br />
        <img
          width={120}
          height={120}
          className="mr-3"
          src={cs18_img_irfs}
          alt="Generic placeholder"
        />     
        </div>
        <Media.Body>
          <br />
          <a href="https://repositorio.uniandes.edu.co/handle/1992/41059" target="_blank">  
          <h5 class="colored_heading_h5">Monetary Policy and Structural Changes in Colombia: A Markov Switching Approach</h5>
          </a>
          <p className="p_ind">
          This paper analyzes the Colombian economic context between 1990Q1-2016Q4, using a 
          Markov-Switching Dynamic Stochastic General Equilibrium Model (MS-DSGE) to identify 
          regime switches in the driven mechanisms of the economy. 
          Bayesian methods are applied, allowing for changes in the monetary policy rule, nominal
          rigidities, and shock volatilities of the model. The results support evidence of shifts
          in the structural parameters of several equations that define the dynamics of the economy.
          The best fit specification of the MSDSGE model allows for independent switches in the Taylor
          rule, parameters, coefficients of the domestic Phillips curve, and changes in volatilities.
          Estimations from the DSGE model suggest a regime switching in monetary policy from a low to
          high inflation response, which coincides with the adoption of inflation targeting in 1999Q3,
          and with a lower Phillips curve slope in the Economy since 1998Q3. Historical decomposition 
          analysis and counterfactual exercises show that regime switches were crucial when the Central
          Bank adopted an Inflation Targeting regime, and, by themselves, these regime changes could be
          interpreted as disinflationary shocks. These phenomena are not identifiable when using linear 
          models.
          </p>
        </Media.Body>
      </Media>

      <Media as="li">
      <div>
        <br />
        <img
          width={120}
          height={190}
          className="mr-3"
          src={cor18_img_front}
          alt="Generic placeholder"
        />
        <br />
        <br />
        <img
          width={120}
          height={120}
          className="mr-3"
          src={cor18_img_srs}
          alt="Generic placeholder"
        />     
        </div>
        <Media.Body>
          <a href="https://ideas.repec.org/h/cml/incocp/5en-6.html" target="_blank">  
          <h5 class="colored_heading_h5">Targeting Long-term Rates in a Model with Financial Frictions and Regime Switching</h5>
          </a>
          <p className="p_ind">
          Decreases (increases) in long-term interest rates caused by compressions (dilations) of term premiums could be 
          financially expansive (contractive) and might require monetary policy restraints (stimulus). This paper uses 
          measures of the term premium calculated by Adrian et al. (2013) to perform Bayesian estimations of a Markov-switching 
          vector autoregression (MS-VAR) model as Hubrich and Tetlow (2015), finding evidence of the importance of allowing 
          for switching parameters (nonlinearities) and switching variance (non-Gaussian) when analyzing macrofinancial linkages 
          in the United States. Using the specification with the best fit to the data of two Markov states for parameters and 
          three Markov states for variances, we estimate a Markov-switching dynamic stochastic general equilibrium (MS-DSGE) 
          macroeconomic model with financial frictions in long-term debt instruments developed by Carlstrom et al. (2017) to 
          provide evidence on how financial conditions have evolved in the us since 1962 and how the Federal Reserve Bank has 
          responded to the evolution of term premiums. 
          <br></br><br></br>
          Using the estimated model, we perform a counterfactual analysis of the 
          potential evolution of macroeconomic and financial variables under alternative financial conditions and monetary policy 
          responses. We analyze six episodes with the presence of high financial frictions and/or medium and high shocks volatility. 
          In three of them there was a high monetary policy response to financial factors: 1978Q4-1983Q4 which helped to mitigate 
          inflation at the cost of economic activity, and the 1990Q2-1993Q4 and 2010Q1-2011Q4 episodes in which the high response 
          served to mitigate economic contractions. Meanwhile, in the three episodes where low response to financial factors is 
          observed, if the monetary authority had responded more aggressively, from 1971Q1-1978Q3 it could have attained lower 
          inflation at the cost of lower GDP, from 2000Q4-2004Q4 it could have delayed the GDP contraction to 2002Q3, but this 
          would have been deeper and inflation larger, and in 2006Q1-2009Q4 it might have precipitated the GDP contraction. 
          The presence of high financial frictions and high shock volatility makes recessions deeper and recoveries more sluggish 
          showing the importance of the financial-macroeconomic nexus.
          </p>
        </Media.Body>
      </Media>

      <Media as="li">
        <div>
        <br />
        <img
          width={140}
          height={140}
          className="mr-3"
          src={com18_img_cfs}
          alt="Generic placeholder"
        />
        {/* <br />
        <img
          width={120}
          height={120}
          className="mr-3"
          src={com18_img_cfs}
          alt="Generic placeholder"
        /> */}
        </div>

        <Media.Body>
          <br />
          <a href="https://albertoortiznet.files.wordpress.com/2018/03/monetary_and_fiscal_policies_interactions_in_mexico_1981_-_2016___march022018.pdf" target="_blank">  
          <h5 class="colored_heading_h5">Monetary and Fiscal Policy Interactions in Mexico, 1981-2016</h5>
          </a>
          <p className="p_ind">
          This paper analyzes the role of fiscal and monetary policies in the determination of inflation and government debt 
          in Mexico during the 1981-2016 period. A Markov-switching DSGE model estimation allows us to identify five different 
          periods of fiscal and monetary policy interactions congruent with a historical account of the Mexican monetary and 
          fiscal policy mix during the past 35 years. Counterfactual exercises show that the low-frequency evolution of inflation 
          is mainly determined by the monetary policy stance, while the fiscal policy stance mainly determines the low-frequency 
          evolution of debt. We show that if monetary dominance prevailed throughout the whole period, the average inflation would 
          have been 13.2% rather than the 20.4% observed. On the other hand, complete fiscal dominance would have implied average 
          inflation of 42% and an average debt five times larger than the observed.
          </p>
        </Media.Body>
      </Media>
    </ul>
  )
}

export default EconomicsResearch;
