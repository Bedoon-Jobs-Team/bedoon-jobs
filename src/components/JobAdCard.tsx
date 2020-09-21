import React, { FunctionComponent } from "react";
import { JobAdPreview } from "../types";
import { ReactComponent as CompanyIcon } from "../assets/icons/CompanyIcon.svg";
import { ReactComponent as LocationIcon } from "../assets/icons/LocationIcon.svg";
import styled from "styled-components";

const JobAdCard: FunctionComponent<{ jobAd: JobAdPreview }> = ({ jobAd }) => {
  function calculateSince(datePosted: Date) {
    return "منذ 3 أيام"; // TODO: really do the calculations
  }

  return (
    <Container>
      <JobDetailsContainer>
        <JobTitle>{jobAd.title}</JobTitle>
        <Tags>
          {jobAd.tags.map((tag) => (
            <Tag>{tag}</Tag>
          ))}
        </Tags>
      </JobDetailsContainer>
      <CompanyAndLocationContainer>
        <Company>
          <StyledCompanyIcon />
          شركة {jobAd.company}
        </Company>
        <Location>
          <StyledLocationIcon />
          {jobAd.governorate}: {jobAd.area}
        </Location>
      </CompanyAndLocationContainer>
      <SinceContainer>
        <Since>{calculateSince(jobAd.datePosted)}</Since>
      </SinceContainer>
    </Container>
  );
};

const Container = styled.div`
  background-color: #ffffff;
  border: 1px solid #f7f7fa;
  border-radius: 11px;
  margin-bottom: 20px;
  height: 120px;
  display: flex;
`;

const JobDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 27px 25px 29px 25px;
  flex-grow: 1;
`;

const JobTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #242227;
  margin-top: 0;
  margin-bottom: 8px;
`;

const Tags = styled.div`
  display: flex;
  padding: 0;
`;

const Tag = styled.p`
  background: #f4f2f8;
  border-radius: 8px;
  flex-grow: 0;
  padding: 4px 10px;
  margin-left: 8px;
  font-size: 12px;
  margin-top: 0;
  margin-bottom: 0;
`;

const CompanyAndLocationContainer = styled(JobDetailsContainer)`
  margin-top: 32px;
`;

const Company = styled.p`
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 23px;
  color: #d1365d;
  margin-top: 0;
  margin-bottom: 8px;
`;

const StyledCompanyIcon = styled(CompanyIcon)`
  margin-left: 7px;
`;

const Location = styled.p`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #242227;
  margin: 0;
`;

const StyledLocationIcon = styled(LocationIcon)`
  margin-left: 7px;
`;

const SinceContainer = styled(CompanyAndLocationContainer)``;

const Since = styled.p`
  font-size: 12px;
  color: #9891a3;
  margin: 0;
`;

export default JobAdCard;
