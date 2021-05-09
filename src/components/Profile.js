import { render } from '@testing-library/react';
import { Row, Col, Container } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import photo from '../profile.jpg';
import Card from 'react-bootstrap/Card'

const Profile = ({size}) => {
    return(
    <Card style={{ width: '20rem' }} className="mt-1">
    <Card.Img variant="top" src={photo} rounded />
    <Card.Body>
        {/* <Image src={photo} rounded fluid/> */}
        <Card.Title>Sebastián Cadavid-Sánchez</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">MS in Data Science & MA in Economics</Card.Subtitle>
        <Card.Text className="text-center">
        </Card.Text>
    </Card.Body>
    </Card>
    );


}




export default Profile;