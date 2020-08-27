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
      <ContentContainer>
        <CardsContainer>
          <PageCount>صفحة 1 من 120 صفحة</PageCount>
        </CardsContainer>
      </ContentContainer>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  height: 426px;
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

const ContentContainer = styled.div`
  background-color: #f7f5fa;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 200px 80px 200px;
`;

const CardsContainer = styled.div`
  width: 1042px;
  flex-shrink: 1;
`;

const PageCount = styled.p`
  font-size: 14px;
  color: #9891a3;
  margin-bottom: 16px;
`;

export default MainPage;
