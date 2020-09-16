import React, { FunctionComponent } from "react";
import styled from "styled-components";
import DarkHeader from "../components/DarkHeader";
import Footer from "../components/Footer";
import ComponyCard from "../components/CompanyCard";

const CompanyJobs: FunctionComponent = props => {
  return (
    <PageContainer>
      <DarkHeader />
      <NavContainer>
        <NavPath>الصفحة الرئيسية/ الشركات </NavPath>
        <ActVavPath>/ True Culture</ActVavPath>
      </NavContainer>
      <CompanyContainer>
        <ComponyCard />
        <JobsContainer>
          <JobsNumber>6 وظائف</JobsNumber>
          <JobAdCard />
          <JobAdCard />
          <JobAdCard /> {/*insert JobAdCard from Componrnts*/}
        </JobsContainer>
      </CompanyContainer>
      <Footer />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  background-color: #f1edf7;
  height: 100vh; /*view point hieght in % */
  display: flex;
  flex-direction: column;
`;

const NavContainer = styled.div`
  position: absolute;
  right: 13.75%;
  top: 10.83%;
  display: flex;
  flex-direction: row;
`;

const NavPath = styled.p`
  bottom: 80.1%;
  font-size: 14px;
  color: #9891a3;
  margin-bottom: 16px;
  font-size: 1.0416%;
`;

const ActVavPath = styled(NavPath)`
  color: #242227;
`;

const CompanyContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 203px;
  margin-right: 13.75vw;
`;

const JobsContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  margin-right: 553px;
`;

const JobsNumber = styled.p`
  font-size: 14px;
`;

const JobAdCard = styled.div`
  background-color: #ffffff;
  border: 1px solid #f7f7fa;
  border-radius: 11px;
  margin-bottom: 20px;
  height: 144px;
  width: 688px;
  display: flex;
  margin-top: 16px;
`;

export default CompanyJobs;
