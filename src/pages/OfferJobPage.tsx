import React, { FunctionComponent, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/icons/Logo.svg";
import Dialog from "../components/Dialog";
import AboutCompanyForm from "../components/Forms/OfferJob/AboutCompanyForm";
import JobDetailsForm from "../components/Forms/OfferJob/JobDetailsForm";
import JobRequirementsForm from "../components/Forms/OfferJob/JobRequirementsForm";
import { devices } from "../constants";
import { verifyUser } from "../firebase/authentication";
import { submitJobAd } from "../firebase/jobActions";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { Company } from "../types";

export type JobDetails = {
  title: string;
  type: string;
  field: string;
  salaryLowerEnd?: number;
  salaryHigherEnd?: number;
  salaryPeriod: string;
  area: string;
  employeesNeeded: number;
  urgency: string;
};

export type JobRequirements = {
  description: string;
};

const defaultCompany: Company = { name: "", description: "", size: "", phone: "", email: "" };
const defaultJobDetails: JobDetails = {
  title: "",
  type: "دوام كامل",
  field: "هندسة",
  salaryPeriod: "شهرياً",
  employeesNeeded: 1,
  urgency: "1 - 3 أيام",
  area: "عمل عن بعد",
};
const defaultJobRequirements = { description: "" };

const OfferJobPage: FunctionComponent = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [highestStep, setHighestStep] = useState(1);
  const [companyDetails, setCompanyDetails] = useState<Company>(defaultCompany);
  const [jobDetails, setJobDetails] = useState<JobDetails>(defaultJobDetails);
  const [jobRequirements, setJobRequirements] = useState<JobRequirements>(defaultJobRequirements);
  const [openValidationNotice, setOpenValidationNotice] = useState(false);

  const currentUser = useCurrentUser();
  const history = useHistory();

  useEffect(() => {
    setHighestStep((oldHighestStep) => Math.max(oldHighestStep, currentStep));
  }, [currentStep, setHighestStep]);

  const steps = [
    undefined,
    <AboutCompanyForm
      onSubmit={(values) => {
        setCompanyDetails(values);
        setCurrentStep(currentStep + 1);
      }}
      initialValues={companyDetails}
    />,
    <JobDetailsForm
      onSubmit={(values) => {
        setJobDetails(values);
        setCurrentStep(currentStep + 1);
      }}
      initialValues={jobDetails}
    />,
    <JobRequirementsForm
      onSubmit={(values) => {
        setJobRequirements(values);
      }}
      initialValues={jobRequirements}
    />,
  ];

  useEffect(() => {
    //Because setState is async we need to wait for jobRequirements to be set before calling onSubmit
    if (jobRequirements) onSubmit();
    // eslint-disable-next-line
  }, [jobRequirements]);

  async function onSubmit() {
    try {
      if (currentUser) {
        const isVerified = await verifyUser(currentUser);
        await submitJobAd({ companyDetails, jobDetails, jobRequirements, currentUser }, isVerified);

        if (!isVerified) {
          setOpenValidationNotice(true);
        }
      }
    } catch (err) {
      console.log(err);
      alert("Something went wrong, please try again."); // Todo: make it show a toast message instead
    }
  }

  return (
    <PageContainer>
      <Link to="/">
        <Logo />
      </Link>
      <SubContainer>
        <StepsContainer>
          <Step active={highestStep >= 1} onClick={() => highestStep > 1 && setCurrentStep(1)}>
            <StepNumber active={highestStep >= 1}>1</StepNumber>
            <StepTitle active={highestStep >= 1}>عن الشركة</StepTitle>
          </Step>
          <Step active={highestStep >= 2} onClick={() => highestStep >= 2 && setCurrentStep(2)}>
            <StepNumber active={highestStep >= 2}>2</StepNumber>
            <StepTitle active={highestStep >= 2}>تفاصيل الوظيفة</StepTitle>
          </Step>
          <Step active={highestStep >= 3} onClick={() => highestStep >= 3 && setCurrentStep(3)}>
            <StepNumber active={highestStep >= 3}>3</StepNumber>
            <StepTitle active={highestStep >= 3}>المتطلبات</StepTitle>
          </Step>
        </StepsContainer>
        <FormContainer>{steps[currentStep]}</FormContainer>
      </SubContainer>
      <Dialog
        open={openValidationNotice}
        isNotice
        message="شكراً لاعلانك عن وظيفة! اعلانك حالياً تحت التوثيق، سنعود اليك في اقرب وقت"
        confirmMessage="حسناً"
        onConfirm={() => history.replace("/")}
        onClose={() => history.replace("/")}
      />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #efebf5;
  align-items: center;
  padding: 55px 0 55px 0;
  flex: 0 0 100%;
  min-height: 100vh;
`;

const SubContainer = styled.div`
  display: flex;
  margin-top: 38px;

  @media ${devices.mobile} {
    flex-direction: column;
    width: 90vw;
  }
`;

const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${devices.mobile} {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const Step = styled.div<{ active: boolean }>`
  background: #ffffff;
  box-shadow: 0px 34px 74px rgba(39, 52, 107, 0.12);
  border-radius: 12px;
  padding: 14px 28px;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  cursor: ${(props) => (props.active ? "pointer" : "default")};

  @media ${devices.mobile} {
    padding: 12px 24px;
  }
`;

const StepNumber = styled.div<{ active: boolean }>`
  background: ${(props) => (props.active ? "linear-gradient(136.99deg, #a783e2 0%, #7749c2 96.75%)" : "#EFEBF5")};
  border-radius: 20px;
  padding: 3px 11px;
  font-weight: bold;
  font-size: 12px;
  line-height: 23px;
  color: #ffffff;
  margin-left: 10px;

  @media ${devices.mobile} {
    margin-left: 0;
  }
`;

const StepTitle = styled.div<{ active: boolean }>`
  font-size: 12px;
  line-height: 23px;
  color: ${(props) => (props.active ? "#37333e" : "#C5BECF")};

  @media ${devices.mobile} {
    display: none;
    font-size: 10px;
  }
`;

const FormContainer = styled.div`
  display: flex;
  padding: 40px 58px;
  background: #ffffff;
  box-shadow: 0px 34px 74px rgba(39, 52, 107, 0.12);
  border-radius: 20px;
  margin-right: 24px;

  @media ${devices.mobile} {
    margin-right: 0;
    padding: 30px 39px;
  }
`;

export default OfferJobPage;
