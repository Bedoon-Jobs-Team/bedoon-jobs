import React, { FunctionComponent } from "react";
import styled from "styled-components";
import DarkHeader from "../components/DarkHeader";
import Footer from "../components/Footer";

const CompanyJobs: FunctionComponent = props => {
  return (
    <PageContainer>
      <DarkHeader />
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

export default CompanyJobs;
