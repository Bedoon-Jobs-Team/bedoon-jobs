import React, { FunctionComponent } from "react";
import { JobAdPreview } from "../types";
import { ReactComponent as CompanyIcon } from "../assets/icons/CompanyIcon.svg";
import { ReactComponent as LocationIcon } from "../assets/icons/LocationIcon.svg";
import styled from "styled-components";
import Link from "../utils/UnstyledLink";

const JobAdCard: FunctionComponent<{ jobAd: JobAdPreview }> = ({ jobAd }) => {
  function calculateSince(datePosted: Date) {
    return "منذ 3 أيام"; // TODO: really do the calculations
  }

  return (
    <Link to={`/listings/${jobAd.id}`}>
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
            شركة {jobAd.companyName}
          </Company>
          <Location>
            <StyledLocationIcon />
            {jobAd.area}
          </Location>
        </CompanyAndLocationContainer>
        <SinceContainer>
          <Since>{calculateSince(jobAd.datePosted)}</Since>
        </SinceContainer>
      </Container>
    </Link>
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
  margin: 27px 24px 29px 27px;
  flex: 2 0 0;
`;

const JobTitle = styled.p`
  font-size: 16px;
  line-height: 30px;
  font-weight: bold;
  color: #242227;
  margin-bottom: 8px;
`;

const Tags = styled.div`
  display: flex;
`;

const Tag = styled.p`
  background: #f4f2f8;
  border-radius: 8px;
  flex-grow: 0;
  padding: 4px 10px;
  margin-left: 8px;
  font-size: 12px;
  line-height: 18px;
  color: #332d3c;
`;

const CompanyAndLocationContainer = styled(JobDetailsContainer)`
  margin-top: 32px;
  flex-grow: 2;
`;

const Company = styled.p`
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 23px;
  color: #d1365d;
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
`;

const StyledLocationIcon = styled(LocationIcon)`
  margin-left: 7px;
`;

const SinceContainer = styled(CompanyAndLocationContainer)`
  margin-top: 33px;
  flex: 1 0 0;
`;

const Since = styled.p`
  font-size: 12px;
  line-height: 23px;
  color: #9891a3;
`;

export default JobAdCard;
