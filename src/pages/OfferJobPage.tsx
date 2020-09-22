import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/icons/Logo.svg";
import AboutCompanyForm from "../components/Forms/OfferJob/AboutCompanyForm";
import JobDetailsForm from "../components/Forms/OfferJob/JobDetailsForm";
import { Company } from "../types";

export type JobDetails = {
  title: string;
  type: string;
  salaryLowerEnd?: number;
  salaryHigherEnd?: number;
  salaryPeriod: string;
  employeesNeeded: number;
  urgency: string;
};

const defaultCompany: Company = { name: "", description: "", size: "", phone: "", email: "" };
const defaultJobDetails: JobDetails = {
  title: "",
  type: "دوام كامل",
  salaryPeriod: "شهرياً",
  employeesNeeded: 1,
  urgency: "1 - 3 أيام",
};

const OfferJobPage: FunctionComponent = () => {
  const [currentStep, setCurrentStep] = useState(2);
  const [companyDetails, setCompanyDetails] = useState<Company>(defaultCompany);
  const [jobDetails, setJobDetails] = useState<JobDetails>(defaultJobDetails);

  const steps = new Map<number, JSX.Element>([
    [
      1,
      <AboutCompanyForm
        onSubmit={(values) => {
          setCompanyDetails(values);
          setCurrentStep(currentStep + 1);
        }}
        initialValues={companyDetails}
      />,
    ],
    [
      2,
      <JobDetailsForm
        onSubmit={(values) => {
          setJobDetails(values);
          setCurrentStep(currentStep + 1);
        }}
        initialValues={jobDetails}
      />,
    ],
  ]);

  return (
    <PageContainer>
      <Logo />
      <SubContainer>
        <StepsContainer>
          <Step>
            <StepNumber>1</StepNumber>
            <StepTitle>عن الشركة</StepTitle>
          </Step>
          <Step>
            <StepNumber>2</StepNumber>
            <StepTitle>تفاصيل الوظيفة</StepTitle>
          </Step>
          <Step>
            <StepNumber>3</StepNumber>
            <StepTitle>المتطلبات</StepTitle>
          </Step>
        </StepsContainer>
        <FormContainer>{steps.get(currentStep)}</FormContainer>
      </SubContainer>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #efebf5;
  align-items: center;
  padding: 55px 0 55px 0;
  flex: 1 1 0;
`;

const SubContainer = styled.div`
  display: flex;
  margin-top: 38px;
`;

const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Step = styled.div`
  background: #ffffff;
  box-shadow: 0px 34px 74px rgba(39, 52, 107, 0.12);
  border-radius: 12px;
  padding: 14px 28px;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const StepNumber = styled.div`
  background: linear-gradient(136.99deg, #a783e2 0%, #7749c2 96.75%);
  border-radius: 20px;
  padding: 3px 11px;
  font-weight: bold;
  font-size: 12px;
  line-height: 23px;
  color: #ffffff;
  margin-left: 10px;
`;

const StepTitle = styled.div`
  font-size: 12px;
  line-height: 23px;
  color: #37333e;
`;

const FormContainer = styled.div`
  display: flex;
  padding: 40px 58px;
  background: #ffffff;
  box-shadow: 0px 34px 74px rgba(39, 52, 107, 0.12);
  border-radius: 20px;
  margin-right: 24px;
`;

export default OfferJobPage;
