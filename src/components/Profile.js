import '../App.css';
import React from 'react';
import photo from '../profile_bw1.png';
import Container from 'react-bootstrap/Container';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const aboutMeStyleGray = { color: "#808880", fontSize: "1.8em", justifyContent: 'space-between' };
const aboutMeStyleBlueText = { color: "#81a1c1", fontSize: "1em", justifyContent: 'space-between' };

const Profile = ({ darkMode }) => {
    return (
        <Container className="mt-1">
            <h1 className="text-center" style={{ color: darkMode ? 'white' : 'black' }}>Sebastián Cadavid-Sánchez</h1>
            <img src={photo} className="profile-image" alt="Profile" />
            <div className="text-center">
                <div>
                    <a href="https://github.com/C1587S"><FaGithub style={aboutMeStyleGray} className="h_space"/></a>
                    <a href="https://www.linkedin.com/in/s-cadavid-sanchez/"><FaLinkedin style={aboutMeStyleGray} className="h_space"/></a>
                    <a href="https://twitter.com/cadavid_sanchez"><FaTwitter style={aboutMeStyleGray} className="h_space"/></a>
                </div>
                <div style={{ margin: "10px 0" }}>
                    <a href="mailto:s.cadavid1587@gmail.com" style={aboutMeStyleBlueText}>s.cadavid1587@gmail.com</a>
                </div>
            </div>
        </Container>
    );
}

export default Profile;
