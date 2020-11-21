import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import JobAdCard from "../components/JobAdCard";
import ScrollMenu from "../components/ScrollMenu";
import { useJobAds } from "../hooks/useJobAds";
import InfiniteScroll from "react-infinite-scroll-component";
import { CircularProgress } from "@material-ui/core";
import { devices, fields } from "../constants";
import Footer from "../components/Footer";

const MainPage: FunctionComponent = (props) => {
  const [activeFieldIndex, setActiveFieldIndex] = useState(0);
  const { jobAds, fetchJobAds, hasMoreAds } = useJobAds(fields[activeFieldIndex - 1]); //fields[-1] == undefined -> no filter

  return (
    <PageContainer>
      <TopSectionContainer>
        <Header />
        <BigText>المكان المناسب للعثور على وظيفة في الكويت</BigText>
        <ScrollMenu activeIndex={activeFieldIndex} onSelectIndex={setActiveFieldIndex} />
      </TopSectionContainer>
      <ContentContainer>
        <CardsContainer>
          <InfiniteScroll
            style={{ overflow: "hidden" }}
            dataLength={jobAds.length}
            next={fetchJobAds}
            hasMore={hasMoreAds}
            loader={<CircularProgress color="secondary" />}
          >
            {jobAds.map((jobAd) => (
              <JobAdCard key={jobAd.id!} jobAd={jobAd} />
            ))}
          </InfiniteScroll>
        </CardsContainer>
      </ContentContainer>
      <Footer />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  flex: 0 0 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
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

  @media ${devices.mobile} {
    font-size: 24px;
    width: 80vw;
  }
`;

const ContentContainer = styled.div`
  background-color: #f7f5fa;
  display: flex;
  justify-content: center;
  padding: 95px 200px 80px 200px;
  flex-grow: 1;

  @media ${devices.mobile} {
    padding: 95px 0;
  }
`;

const CardsContainer = styled.div`
  width: 1042px;
  flex-shrink: 1;
  margin-bottom: 28px;

  @media ${devices.mobile} {
    width: auto;
  }
`;

export default MainPage;
