import React, { FunctionComponent, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as CompanyIcon } from "../assets/icons/CompanyIcon.svg";
import { ReactComponent as MoneyIcon } from "../assets/icons/MoneyIcon.svg";
import { ReactComponent as WebsiteIcon } from "../assets/icons/WebsiteIcon.svg";
import Dialog from "../components/Dialog";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Mailto from "../components/Mailto";
import { removeJob } from "../firebase/jobActions";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { useJobDetails } from "../hooks/useJobDetails";

const JobDetailsPage: FunctionComponent = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const jobDetails = useJobDetails(id);
  const currentUser = useCurrentUser();
  const isOwner = currentUser?.uid === jobDetails?.jobAdPreview.ownerId;
  const [openDeleteConfirmation, setOpenDeleteConfirmation] = useState(false);

  async function onRemoveJob() {
    await removeJob(id);
    history.replace("/");
  }

  return (
    <>
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
                <ButtonContainer>
                  {isOwner ? (
                    <Button alternative onClick={() => setOpenDeleteConfirmation(true)}>
                      إزالة الوظيفة
                    </Button>
                  ) : (
                    <Mailto jobDetails={jobDetails}>
                      <Button>تقديم على الوظيفة</Button>
                    </Mailto>
                  )}
                </ButtonContainer>
              </JobDetailsContainer>
              <CompanyContainer>
                <CompanyName bold>
                  شركة <Red>&nbsp;{jobDetails.company.name}</Red>
                </CompanyName>
                <CompanyDescription>{jobDetails.company.description}</CompanyDescription>
                {jobDetails.company.website && (
                  <OutsideLink href={`https://www.${jobDetails.company.website}`}>
                    <CompanyWebsite>
                      <StyledWebsiteIcon />
                      {jobDetails.company.website}
                    </CompanyWebsite>
                  </OutsideLink>
                )}
              </CompanyContainer>
            </DetailsAndCompanyContainer>
          ) : null}
        </ContentContainer>
        <Footer />
      </PageContainer>
      <Dialog
        alternative
        open={openDeleteConfirmation}
        message="هل انت متأكد من إزالة الاعلان؟"
        confirmMessage="إزالة الاعلان"
        onConfirm={onRemoveJob}
        onClose={() => setOpenDeleteConfirmation(false)}
      />
    </>
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
  margin-bottom: 28px;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled.p<{ alternative?: boolean }>`
  font-size: 12px;
  line-height: 23px;
  color: #ffffff;
  background: ${(props) =>
    props.alternative
      ? "linear-gradient(138.12deg, #f87495 -0.01%, #f8507b 94.77%)"
      : "linear-gradient(138.12deg, #a783e2 -0.01%, #7749c2 94.77%)"};
  border-radius: 6px;
  padding: 15px 40px;
  font-weight: bold;
  cursor: pointer;
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

const OutsideLink = styled.a`
  text-decoration: none;
`;

const StyledWebsiteIcon = styled(WebsiteIcon)`
  height: 20px;
  width: 20px;
  margin-left: 12px;
  margin-bottom: -6px; //Don't judge me.
`;

export default JobDetailsPage;
