import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './Setup.css';
import styled from 'styled-components';

interface SetupProps {
  handleSelection: (numOfPlayers: number) => void;
}

const Setup: React.FC<SetupProps> = ({ handleSelection }) => {

  return (
   
    <StyledContainer>
     <Row>
        <Col xs={12} md={4}>
         <h1 className="mainheader">JIGDISE</h1>
          <p className="para1">How many players?</p>
          <StyledButton onClick={() => handleSelection(1)}>1</StyledButton>
          <StyledButton onClick={() => handleSelection(2)}>2</StyledButton>
          <StyledButton onClick={() => handleSelection(3)}>3</StyledButton>
          <StyledButton onClick={() => handleSelection(4)}>4</StyledButton>
          </Col>
      </Row>
      <h1 className="header1">Instructions</h1>
      <p className="para1"> 1. Roll up to 3 times each turn to rack up the best possible score.</p>
      <p className="para1">2. Decide which dice combo you're going for.</p>
      <p className="para1">3.After each turn, see your score on the score card.</p>
      <p className="para1">4. One, with the highest score wins.</p>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  margin-top: 1em;
`



const StyledButton = styled(Button)`
  margin-right: 2em;
`;

export default Setup;