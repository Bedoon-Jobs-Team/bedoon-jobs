import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Header from "../components/Header";

const MainPage: FunctionComponent = (props) => {
  return (
    <PageContainer>
      <Header />
      <Container>
        <BigText>المكان المناسب للعثور على وظيفة في الكويت</BigText>
      </Container>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  height: 100vh;
  display: flex;
`;

const Container = styled.div`
  height: 40%;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(180deg, #6c46ab 0%, #3d206c 100%);
`;

const BigText = styled.p`
  color: #ffffff;
  font-weight: bold;
  font-size: 40px;
  width: 742px;
`;

export default MainPage;
