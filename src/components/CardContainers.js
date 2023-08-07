import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import CV from '../pdfs/SCS_CV.pdf';
import '../App.css';

const CardsContainer = ({ darkMode }) => { 
  const history = useHistory();
  const handleCardClick = (path) => {
    history.push(path);
  };

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center">
        <Card className="left-spacer card-custom card-hover" onClick={() => window.open(CV, "_blank")}>
          <Card.Body>
            <Card.Text className="card-text">
              /CV
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card-custom card-hover" onClick={() => handleCardClick('/research')}>
          <Card.Body>
            <Card.Text className="card-text">
              /research
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default CardsContainer;
