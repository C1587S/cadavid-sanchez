import { render } from '@testing-library/react';
import { Row, Col, Container } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import photo from '../profile.jpg';
import Card from 'react-bootstrap/Card'
import '../App.css';

import { Link } from 'react-router-dom';
import {Route, Switch} from "react-router";

import { IconContext } from "react-icons";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const style = { color: "gray", fontSize: "1.8em", justifyContent: 'space-between' }

const Profile = ({size}) => {
    return(
    <Card style={{ width: '20rem' }} className="mt-1">
    <Card.Img variant="top" src={photo} rounded />
    <Card.Body>
        {/* <Image src={photo} rounded fluid/> */}
        <Card.Title>Sebastián Cadavid-Sánchez</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">MS in Data Science & MA in Economics</Card.Subtitle>
        <Card.Text className="text-center">
        <div>
        <a href="https://github.com/C1587S"><FaGithub style={style} className="h_space"/></a>
        <a href="https://twitter.com/cadavid_sanchez"><FaTwitter style={style} className="h_space"/></a>
        <a href="https://www.linkedin.com/in/s-cadavid-sanchez/"><FaLinkedin style={style} className="h_space"/></a>
        <a href="mailto: s.cadavid1587@gmail.com"><SiGmail style={style} className="h_space"/></a>
        </div>
        </Card.Text>
    </Card.Body>
    </Card>
    );


}




export default Profile;