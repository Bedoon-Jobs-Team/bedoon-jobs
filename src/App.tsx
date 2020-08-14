import React from "react";
import { ReactComponent as Logo } from "./assets/icons/Logo.svg";
import "./App.css";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <StyledLogo />
      <Card>
        <CardContent>
          <Flickering>...</Flickering> قادمون قريباً
        </CardContent>
      </Card>
    </Container>
  );
}

let StyledLogo = styled(Logo)`
  transform: scale(1.25);
  margin: 20px;
`;

let Container = styled.div`
  background: #efebf5;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

let Card = styled.div`
  background: #ffffff;
  box-shadow: 0px 34px 74px rgba(39, 52, 107, 0.12);
  border-radius: 12px;
  padding: 20px 80px;
`;

let CardContent = styled.p`
  font-size: 20px;
  color: #37333e;
`;

let Flickering = styled.span`
  @keyframes flickering {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  animation: flickering 0.7s alternate infinite;
`;

export default App;
