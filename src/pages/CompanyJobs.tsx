import React, { FunctionComponent } from "react";
import styled from "styled-components";
import DarkHeader from "../components/DarkHeader";
import Footer from "../components/Footer";

const CompanyJobs: FunctionComponent = props => {
  return (
    <PageContainer>
      <DarkHeader />
      <Footer />
      <NavContainer>
        <NavPath>الصفحة الرئيسية/ الشركات </NavPath>
        <ActVavPath>/ True Culture</ActVavPath>
      </NavContainer>
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

export default CompanyJobs;
