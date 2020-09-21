import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/icons/Logo.svg";

const OfferJobPage: FunctionComponent = () => {
  return (
    <PageContainer>
      <StyledLogo />
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
        <FormContainer>
          <FormTitle>
            أعلن عن وظيفة /<Grey> عن الشركة</Grey>
          </FormTitle>
        </FormContainer>
      </SubContainer>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #efebf5;
  align-items: center;
  height: 100vh;
`;

const StyledLogo = styled(Logo)`
  margin-top: 60px;
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
  flex-direction: column;
  padding: 40px 58px;
  background: #ffffff;
  box-shadow: 0px 34px 74px rgba(39, 52, 107, 0.12);
  border-radius: 20px;
  margin-right: 24px;
`;

const FormTitle = styled.div`
  font-size: 22px;
  line-height: 42px;
  color: #37333e;
`;

const Grey = styled.span`
  color: #afa9b8;
`;

export default OfferJobPage;
