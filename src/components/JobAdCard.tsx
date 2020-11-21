import React, { FunctionComponent } from "react";
import { JobAdPreview } from "../types";
import { ReactComponent as CompanyIcon } from "../assets/icons/CompanyIcon.svg";
import { ReactComponent as LocationIcon } from "../assets/icons/LocationIcon.svg";
import styled from "styled-components";
import Link from "../utils/UnstyledLink";
import { calculateSinceTime } from "../utils/DateFunctions";
import { devices } from "../constants";

const JobAdCard: FunctionComponent<{ jobAd: JobAdPreview }> = ({ jobAd }) => {
  return (
    <Link to={`/jobAds/${jobAd.id}`}>
      <Container>
        <JobTitleContainer>
          <JobTitle>{jobAd.title}</JobTitle>
          <Tags>
            {jobAd.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </Tags>
        </JobTitleContainer>
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
          <Since>{calculateSinceTime(jobAd.datePosted)}</Since>
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

  @media ${devices.mobile} {
    flex-wrap: wrap;
    width: 90vw;
    height: auto;
  }
`;

const JobTitleContainer = styled.div`
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

  @media ${devices.mobile} {
    font-size: 14px;
    width: 70vw;
  }
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
  display: flex;
  align-items: center;

  @media ${devices.mobile} {
    font-size: 10px;
  }
`;

const CompanyAndLocationContainer = styled(JobTitleContainer)`
  margin-top: 32px;
  flex-grow: 2;

  @media ${devices.mobile} {
    margin-top: 0;
    margin-left: 10px;
  }
`;

const Company = styled.p`
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 23px;
  color: #d1365d;
  margin-bottom: 8px;

  @media ${devices.mobile} {
    font-size: 10px;
  }
`;

const StyledCompanyIcon = styled(CompanyIcon)`
  margin-left: 7px;
`;

const Location = styled.p`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #242227;

  @media ${devices.mobile} {
    font-size: 10px;
  }
`;

const StyledLocationIcon = styled(LocationIcon)`
  margin-left: 7px;
`;

const SinceContainer = styled(CompanyAndLocationContainer)`
  margin-top: 33px;
  flex: 1 0 0;

  @media ${devices.mobile} {
    margin-top: 0;
  }
`;

const Since = styled.p`
  font-size: 12px;
  line-height: 23px;
  color: #9891a3;

  @media ${devices.mobile} {
    font-size: 10px;
  }
`;

export default JobAdCard;
