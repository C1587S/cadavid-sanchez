import React from 'react';
import Button from 'react-bootstrap/Button'
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import {GoFileCode} from "react-icons/go";
import Iframe from 'react-iframe'
import MathJax from 'react-mathjax';
import ReactMarkdown from 'react-markdown';
import Table from 'react-bootstrap/Table'

import header from "./imgs/sm_header2.png"
import intro from "./intro.md"
import methodology from "./methodology.md"
import summary from "./summary.md"

// Icon options
const style = { color: "gray", fontSize: "0.7em", justifyContent: 'space-between' }
// Formula
const WeightFormula = `weight_{i, j} = \\frac{\\Delta_\\text{i to j} + \\Delta_\\text{j to i}}{\\nabla_i + \\nabla_j}`;

class SchoolMarketsP extends React.Component { 
    constructor(props) { 
        super(props);
        this.state = {
            summary: null,
            intro: null,
            methodology: null,
            // example_cz: null
        }
    }

    componentDidMount() {
        Promise.all([
            fetch(summary).then((res) => res.text()).then((text) => {this.setState({summary: text})}),
            fetch(intro).then((res) => res.text()).then((text) => {this.setState({intro: text})}),
            fetch(methodology).then((res) => res.text()).then((text) => {this.setState({methodology: text})}),
            // fetch(example_cz).then((res) => res.text()).then((text) => {this.setState({example_cz: text})})
        ])
    }

    content(key) { 
        return <ReactMarkdown source={this.state[key]} allowDangerousHtml/>
    }

    render = () => <div className = "fullwidth landing-right" style = {{height: "100%!important"}}>
    <Jumbotron fluid style = {{width:"100%", height:"30vh", backgroundImage: `url(${header})`, backgroundPosition: "center", opacity:0.6}}/>

    <Container fluid  style={{ paddingLeft: "10vw", paddingRight: "10vw", paddingBottom: "15vh"}}>
    
    <div id="left"><Button href="#/" variant="outline-dark">Home</Button></div>
    <br></br>
    <h1>Schooling Markets in Mexico <a href="https://github.com/C1587S/school_markets_dsp"><GoFileCode style={style} className="h_space"/></a></h1>
    <br/>
    {this.content("summary")}
    {/* <hr/> */}
    {this.content("intro")}
    {this.content("methodology")}
    <br/>
    <Row>
        <Col fluid> 
        <p style = {{paddingTop: "2vh", display: "inline-block"}}>
        To illustrate CZ calculations, consider the figure to the right, which uses simulated data for 33 points
        (you can interact with it by controlling each layer element using the collapsed panel). 
        
        <br/><br/>
        In the figure, each blue pin represents the coordinates of a hypothetic school. The gray lines and grey shaded
        area represent buffers. There are five buffers, with minimum and maximum sizes of 1 and 12 units, respectively. 
        Shaded green sections outline the convex hull areas associated with each buffer. As one buffer has less than 
        three units, we only can compute four convex hulls. Finally, convex hull unions are represented by the area 
        inside solid blue lines. As two convex hulls areas intersect with each other, we only have three unions.
        Following the definition as mentioned earlier, for this simulated example, we have four CZ. 
        </p>
        </Col>
        <Col>
        <div class="centerH">
        <Iframe url="https://webpageuns.s3.amazonaws.com/map_uns_geom_X.html"
        
            width="80%px"
            height="280px"
            id="geometries"
            className="myClassname"
            display="initial"
            position="center"/>
        </div>
        </Col>

    </Row>
    <br/>
    <p style = {{paddingTop: "2vh", display: "inline-block"}}>
    Geometric approaches for defining CZ may exclude some dynamics of people who transit them daily. In this sense, future Human validation (by potential members of each market) must be required to validate our results. 
    In the map below, there is an example of 4500 mexican primary schools and their associated CZ. In the next section details how SM is identified within each CZ by using graph algorithms for community detection.

    </p>
    <div class="centerH">
        {/* Commuting zones in a map */}
        <Iframe url="https://webpagecommz.s3.amazonaws.com/map_commuting_zones.html"
            width="80%px"
            height="500px"
            id="geometries"
            className="myClassname"
            display="initial"
            position="center"/>
        </div>

    <h2 style = {{paddingTop: "2vh", display: "inline-block"}}>Identifying Schooling Markets</h2>
    <p>
    Within CZs, different SMs can be identified as many academic institutions could co-exist in the same geographic unit but may target students with diverse preferences. Identifying which institutions belong to the same market using supply-side data implies collecting information from recruitment departments from each school, which could be cumbersome, and, in some cases, information may not be available. However, it is possible to identify SM by using the behavioral data of students. In particular, analyzing their migrations from one school to another could help determine how common and strong links are between schools competing in the same market. Using this information, we apply graph algorithms for identifying SMs. This section explains how graphs were constructed and which algorithms were used for community detection. 
    </p>
    <h2 style = {{paddingTop: "2vh", display: "inline-block"}}>Graphs</h2>
    <p>
    To compute non-directed graphs inside CZs, we defined nodes as schools and edges as students flow among schools. We utilized data from almost 2 million switchers (5%) for primary school and 3 million switchers for high school (6%). The registers were aggregated as in the following example:
    </p>

    <Table striped bordered hover size="md">
        <thead>
            <tr>
            <th>From (Origin School)</th>
            <th>To (Destination School)</th>
            <th># <i>switchers</i></th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>A</td>
            <td>B</td>
            <td>20</td>
            </tr>
            <tr>
            <td>B</td>
            <td>A</td>
            <td>4</td>
            </tr>
            <tr>
            <td>C</td>
            <td>B</td>
            <td>2</td>
            </tr>
            <tr>
            <td>B</td>
            <td>C</td>
            <td>7</td>
            </tr>
        </tbody>
    </Table>
    <br/>
    <p>Using the structure above, we compute edge weights as follows:</p>
    <MathJax.Provider>
    <div><p> <MathJax.Node Block formula={WeightFormula}/></p></div>
    </MathJax.Provider>

    <MathJax.Provider>
    <div><p> 
        Where  <MathJax.Node inline formula={`\\nabla_i`}/> and <MathJax.Node inline formula={`\\nabla_j`}/> denote total outsiders for schools <i>i</i>, and <i>j</i>, respectively. &nbsp;
        <MathJax.Node inline formula={`\\Delta_\\text{i to j}`}/> and <MathJax.Node inline formula={`\\Delta_\\text{j to i}`}/> are the student flow from <i>j</i> to <i>i</i>, and from <i>i</i> to <i>j</i>, respectively.
    </p></div>
    </MathJax.Provider>

    <p>
    Once adjacency matrices are defined for each commuting zone we utilized the following algorithms for detecting communities:
    <br/><br/>
        <ul>
            <li>Multi-level <a href="https://arxiv.org/abs/0803.0476">(Blondel et al., 2008)</a> </li>
            <li>Label Propagation <a href="https://arxiv.org/abs/0709.2938">(Raghavanet al., 2007)</a> </li>
            <li>Leading Eigenvector <a href="https://arxiv.org/abs/physics/0605087">(Newman, 2006)</a> </li>
            <li>Fast greedy <a href="https://www.pnas.org/content/99/12/7821">(Girvan and Newman, 2002)</a> </li>
            <li>Walktrap <a href="https://link.springer.com/chapter/10.1007/11569596_31">(Pons and Latapy, 2005)</a> </li>
        </ul>
    
    Once each algorithm identifies communities, we compare their modularity. The algorithm with the higher metric in most cases is selected for identifying SMs (as the higher the modularity, the stronger the division of a network into communities).  In both primary and high school levels, the higher metric was obtained by <i>fast greedy</i>.  Additionally, the metrics were compared using the baseline case for CZ, and for all cases, stronger modularities were obtained by using geometric CZs. 
    </p>

    <p style = {{paddingTop: "1vh", display: "inline-block"}}>
    The map below presents the communities detected by the <i>fast greedy</i> algorithm for the 4,500 schools example mentioned earlier. The obtained modularity is 0.72.
    </p>

    <div class="centerH">
        {/* Communities example*/}
        <Iframe url="https://geometries-schoolmarkets.s3.amazonaws.com/sm_communities.html"
        
            width="80%px"
            height="500px"
            id="markets"
            className="myClassname"
            display="initial"
            position="center"/>
        </div>

    <h2 style = {{paddingTop: "2vh", display: "inline-block"}}> Conclusion and Future Work  </h2>
    <p>
    Schooling Markets detection is crucial as it could be used to target differentiated policy interventions towards improving the quality of education systems. This work proposed a methodology for identifying school markets that use geometric approaches for computing Commuting Zones, graph algorithms, and student migration data for school market detection. This approach allows obtaining higher modularity than topological approaches for defining commuting zones.  
    </p>
    <p>
    However, it is worth noting that there could be dynamics that are not present in student migration data and could omit links among academic institutions. Furthermore, behavioral habits could change for students and their choices or preferences regarding education, such as post-COVID 19 scenarios where educational processes have changed dramatically and redirected towards online methodologies. Additionally, human validation approaches are necessary to understand the results as each scholarly market has intrinsic complexities and dynamics. On the other hand, Schooling Markets could present dynamic factors on its composition, such as variations among their competitors, implying regular updates of their structures. 
    </p>
    
    </Container>
    </div>
}

export default SchoolMarketsP;
