import React, { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as CompanyIcon } from "../assets/icons/CompanyIcon.svg";
import { ReactComponent as MoneyIcon } from "../assets/icons/MoneyIcon.svg";
import { useJobDetails } from "../hooks/useJobDetails";

const JobDetailsPage: FunctionComponent = () => {
  const { id } = useParams<{ id: string }>();
  const jobDetails = useJobDetails(id);

  return (
    <PageContainer>
      {jobDetails ? (
        <ContentContainer>
          <JobDetailsContainer>
            <Since>منذ 3 أيام</Since>
            <Title>{jobDetails.jobAdPreview.title}</Title>
            <Company>
              <StyledCompanyIcon />
              شركة <Red>&nbsp;{jobDetails.company.name}</Red>
            </Company>
            <Salary>
              <StyledMoneyIcon />
              {`بين ${jobDetails.salaryLowerEnd} و ${jobDetails.salaryHigherEnd} راتب شهري`}
            </Salary>
            <Tags>
              {jobDetails.jobAdPreview.tags.map((tag) => (
                <Tag>{tag}</Tag>
              ))}
            </Tags>
            <Description>{jobDetails.description}</Description>
          </JobDetailsContainer>
        </ContentContainer>
      ) : null}
    </PageContainer>
  );
};

const PageContainer = styled.div`
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
  margin-bottom: 1px;
`;

const Title = styled.p`
  font-size: 28px;
  line-height: 53px;
  color: #242227;
  margin-bottom: 10px;
`;

const Company = styled.p`
  font-size: 14px;
  line-height: 27px;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const Red = styled.span`
  color: #d1365d;
`;

const StyledCompanyIcon = styled(CompanyIcon)`
  height: 18px;
  width: 20px;
  margin-left: 8px;
`;

const Salary = styled(Company)``;

const StyledMoneyIcon = styled(MoneyIcon)`
  margin-left: 8px;
`;

const Tags = styled.div`
  display: flex;
  margin-bottom: 33px;
`;

const Tag = styled.p`
  font-size: 12px;
  line-height: 18px;
  background: #f4f2f8;
  border-radius: 8px;
  padding: 4px 10px;
  margin-left: 8px;
`;

const Description = styled.p`
  width: 88%;
  font-size: 15px;
  line-height: 30px;
  color: #242227;
  margin-bottom: 48px;
`;

const SubTitle = styled.p`
  font-weight: bold;
  font-size: 20px;
  line-height: 38px;
  color: #242227;
  margin-bottom: 12px;
`;

const P = styled(Description)`
  margin-bottom: 32px;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled.p`
  font-size: 12px;
  line-height: 23px;
  color: #ffffff;
  background: linear-gradient(138.12deg, #a783e2 -0.01%, #7749c2 94.77%);
  border-radius: 6px;
  padding: 15px 40px;
  font-weight: bold;
`;

export default JobDetailsPage;
