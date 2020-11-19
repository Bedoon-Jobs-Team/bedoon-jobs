import { CircularProgress, LinearProgress } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as CompanyIcon } from "../assets/icons/CompanyIcon.svg";
import { ReactComponent as MoneyIcon } from "../assets/icons/MoneyIcon.svg";
import { ReactComponent as WebsiteIcon } from "../assets/icons/WebsiteIcon.svg";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useJobDetails } from "../hooks/useJobDetails";

const JobDetailsPage: FunctionComponent = () => {
  const { id } = useParams<{ id: string }>();
  const jobDetails = useJobDetails(id);

  return (
    <PageContainer>
      <Header alternative />
      <ContentContainer>
        <Breadcrumbs>
          <Grey>الصفحة الرئيسية&nbsp;&nbsp;/&nbsp; فرص &nbsp;/&nbsp;&nbsp;</Grey>فرص عمل
        </Breadcrumbs>
        {jobDetails ? (
          <DetailsAndCompanyContainer>
            <JobDetailsContainer>
              <Since>منذ 3 أيام</Since>
              <Title>{jobDetails.jobAdPreview.title}</Title>
              <CompanyName>
                <StyledCompanyIcon />
                شركة <Red>&nbsp;{jobDetails.company.name}</Red>
              </CompanyName>
              <Salary>
                <StyledMoneyIcon />
                {`بين ${jobDetails.salaryLowerEnd} و ${jobDetails.salaryHigherEnd} راتب شهري`}
              </Salary>
              <Tags>
                {jobDetails.jobAdPreview.tags.map((tag) => (
                  <Tag>{tag}</Tag>
                ))}
              </Tags>
              <Description>{jobDetails.description + jobDetails.description}</Description>
            </JobDetailsContainer>
            <CompanyContainer>
              <CompanyName bold>
                شركة <Red>&nbsp;{jobDetails.company.name}</Red>
              </CompanyName>
              <CompanyDescription>{jobDetails.company.description}</CompanyDescription>
              {jobDetails.company.website && (
                <a href={`https://www.${jobDetails.company.website}`} style={{ textDecoration: "none" }}>
                  <CompanyWebsite>
                    <StyledWebsiteIcon />
                    {jobDetails.company.website}
                  </CompanyWebsite>
                </a>
              )}
            </CompanyContainer>
          </DetailsAndCompanyContainer>
        ) : null}
      </ContentContainer>
      <Footer />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #f7f5fa;
  flex: 0 0 100%;
`;

const ContentContainer = styled.div`
  margin: 77px 0 165px 0;
  width: 1044px;
  align-self: center;
  flex-grow: 1;
`;

const Breadcrumbs = styled.div`
  margin-bottom: 11px;
  font-size: 15px;
  line-height: 36px;
  color: #242227;
`;

const Grey = styled.span`
  color: #8f879b;
`;

const DetailsAndCompanyContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
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

const CompanyName = styled.p<{ bold?: boolean }>`
  font-size: 14px;
  line-height: 27px;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
`;

const Red = styled.span`
  color: #d1365d;
`;

const StyledCompanyIcon = styled(CompanyIcon)`
  height: 18px;
  width: 20px;
  margin-left: 8px;
`;

const Salary = styled(CompanyName)``;

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

const CompanyContainer = styled(JobDetailsContainer)`
  width: 332px;
  margin-right: 24px;
`;

const CompanyDescription = styled(Description)`
  font-size: 12px;
  line-height: 28px;
`;

const CompanyWebsite = styled.span`
  padding: 6px 12px;
  background: #f4f2f8;
  font-size: 12px;
  line-height: 18px;
  color: #332d3c;
  border-radius: 8px;
`;

const StyledWebsiteIcon = styled(WebsiteIcon)`
  height: 20px;
  width: 20px;
  margin-left: 12px;
  margin-bottom: -6px; //Don't judge me.
`;

export default JobDetailsPage;
