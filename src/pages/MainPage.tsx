import React, { FunctionComponent, useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { JobAd } from "../types";
import JobAdCard from "../components/JobAdCard";
import PaginationButtons from "../components/PaginationButtons";
import ScrollMenu from "../components/ScrollMenu";

const MainPage: FunctionComponent = props => {
  const [jobAds, setJobAds] = useState<JobAd[]>([]);

  useEffect(() => {
    async function fetchJobAds() {
      //TODO: make it fetch real data when we have a data source
      const fetchedJobAds = [];

      const fakeJobAd: JobAd = {
        title: "مسؤول مبيعات و علاقات عامة",
        tags: ["هندسة", "راتب شهري"],
        company: "Light Blue",
        provenance: "مدينة الكويت",
        area: "الشرق",
        datePosted: new Date()
      };

      for (let i = 0; i < 8; i++) {
        fetchedJobAds.push(fakeJobAd);
      }

      setJobAds(fetchedJobAds);
    }

    fetchJobAds();
  }, []);

  return (
    <PageContainer>
      <Header />
      <BigTextContainer>
        <BigText>المكان المناسب للعثور على وظيفة في الكويت</BigText>
        <ScrollMenu />
      </BigTextContainer>
      <ContentContainer>
        <CardsContainer>
          <PageCount>صفحة 1 من 120 صفحة</PageCount>
          {jobAds.map(jobAd => (
            <JobAdCard jobAd={jobAd} />
          ))}
          <PaginationButtons currentPage={1} />
        </CardsContainer>
      </ContentContainer>
      <Footer />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const BigTextContainer = styled.div`
  height: 426px;
  flex-shrink: 0;
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
  margin-bottom: -28px;
`;

const PageCount = styled.p`
  position: absolute;
  width: 277px;
  left: 965px;
  top: 16.17%;
  bottom: 80.1%;
`;

export default MainPage;
