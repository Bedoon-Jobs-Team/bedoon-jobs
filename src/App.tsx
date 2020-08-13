import React from "react";
import { ReactComponent as CaseIcon } from "./assets/icons/CaseIcon.svg";
import "./App.css";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Title>وظيفة</Title>
      <CaseIcon width="20px" style={{ transform: "scale(1.5)" }} />
    </Container>
  );
}

let Container = styled.div`
  background: linear-gradient(180deg, #6c46ab 0%, #3d206c 100%);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

let Title = styled.p`
  color: white;
  margin-right: 12px;
  font-family: "Noto";
  font-size: 30px;
`;

export default App;
