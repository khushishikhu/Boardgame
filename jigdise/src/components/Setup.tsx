import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

interface SetupProps {
  handleSelection: (numOfPlayers: number) => void;
}

const Setup: React.FC<SetupProps> = ({ handleSelection }) => {

  return (
    <StyledContainer>
      <Row>
        <Col xs={12} md={4}>
          <StyledHeader>Jigdise</StyledHeader>
          <p>How many players?</p>
          <StyledButton onClick={() => handleSelection(1)}>1</StyledButton>
          <StyledButton onClick={() => handleSelection(2)}>2</StyledButton>
          <StyledButton onClick={() => handleSelection(3)}>3</StyledButton>
          <StyledButton onClick={() => handleSelection(4)}>4</StyledButton>
        </Col>
      </Row>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  margin-top: 1em;
`

const StyledHeader = styled.h1`
  text-align: center;
`;

const StyledButton = styled(Button)`
  margin-right: 2em;
`;

export default Setup;