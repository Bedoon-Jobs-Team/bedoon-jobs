import React, { FunctionComponent, useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { JobAdPreview } from "../types";
import JobAdCard from "../components/JobAdCard";
import PaginationButtons from "../components/PaginationButtons";
import ScrollMenu from "../components/ScrollMenu";
import { useJobAds } from "../hooks/useJobAds";

const MainPage: FunctionComponent = (props) => {
  const jobAds = useJobAds();

  return (
    <PageContainer>
      <TopSectionContainer>
        <Header />
        <BigText>المكان المناسب للعثور على وظيفة في الكويت</BigText>
        <ScrollMenu />
      </TopSectionContainer>
      <ContentContainer>
        <CardsContainer>
          <PageCount>صفحة 1 من 120 صفحة</PageCount>
          {jobAds.map((jobAd) => (
            <JobAdCard jobAd={jobAd} />
          ))}
          <PaginationButtons currentPage={1} />
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

const TopSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #6c46ab 0%, #3d206c 100%);
  height: 426px;
  flex-shrink: 0;
  align-items: center;
`;

const BigText = styled.p`
  color: #ffffff;
  font-size: 40px;
  line-height: 61px;
  font-weight: bold;
  text-align: center;
  margin-top: 93px;
  width: 650px;
`;

const ContentContainer = styled.div`
  background-color: #f7f5fa;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 95px 200px 80px 200px;
`;

const CardsContainer = styled.div`
  width: 1042px;
  flex-shrink: 1;
  margin-bottom: 28px;
`;

const PageCount = styled.p`
  font-size: 14px;
  line-height: 27px;
  color: #9891a3;
  margin-bottom: 16px;
`;

export default MainPage;
