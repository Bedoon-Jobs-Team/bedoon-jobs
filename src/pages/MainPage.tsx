import React, { FunctionComponent, useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { JobAdPreview } from "../types";
import JobAdCard from "../components/JobAdCard";
import ScrollMenu from "../components/ScrollMenu";
import { useJobAds } from "../hooks/useJobAds";
import InfiniteScroll from "react-infinite-scroll-component";
import { CircularProgress } from "@material-ui/core";
import { fields } from "../constants";
import Footer from "../components/Footer";

const MainPage: FunctionComponent = (props) => {
  const [activeFieldIndex, setActiveFieldIndex] = useState(0);
  const { jobAds, fetchMoreJobAds, hasMoreAds } = useJobAds(fields[activeFieldIndex - 1]); //fields[-1] == undefined -> no filter

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
            dataLength={jobAds.length} //This is important field to render the next data
            next={fetchMoreJobAds}
            hasMore={hasMoreAds}
            loader={<CircularProgress color="secondary" />}
          >
            {jobAds.map((jobAd) => (
              <JobAdCard jobAd={jobAd} />
            ))}
          </InfiniteScroll>
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
  padding: 95px 200px 80px 200px;
  flex-grow: 1;
`;

const CardsContainer = styled.div`
  width: 1042px;
  flex-shrink: 1;
  margin-bottom: 28px;
`;

export default MainPage;
