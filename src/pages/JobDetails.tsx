import React, { FunctionComponent } from "react";
import styled from "styled-components";

const JobDetails: FunctionComponent = () => {
  return (
    <PageContainer>
      <ContentContainer>
        <JobDetailsContainer>
          <Since>منذ 3 أيام</Since>
          <Title>مسؤول مبيعات و علاقات عامة</Title>
        </JobDetailsContainer>
      </ContentContainer>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f7f5fa;
`;

const ContentContainer = styled.div`
  margin: 11px 200px 165px 200px;
`;

const JobDetailsContainer = styled.div`
  width: 688px;
  background: #ffffff;
  border-radius: 12px;
  padding: 32px;
`;

const Since = styled.p`
  font-size: 12px;
  line-height: 23px;
  color: #9891a3;
`;

const Title = styled.p`
  width: 368px;
  font-size: 28px;
  line-height: 53px;
  color: #242227;
`;

export default JobDetails;
