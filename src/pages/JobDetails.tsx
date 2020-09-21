import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { ReactComponent as CompanyIcon } from "../assets/icons/CompanyIcon.svg";
import { ReactComponent as MoneyIcon } from "../assets/icons/MoneyIcon.svg";

const JobDetails: FunctionComponent = () => {
  return (
    <PageContainer>
      <ContentContainer>
        <JobDetailsContainer>
          <Since>منذ 3 أيام</Since>
          <Title>مسؤول مبيعات و علاقات عامة</Title>
          <Company>
            <StyledCompanyIcon />
            شركة <Red>&nbsp;True Culture</Red>
          </Company>
          <Salary>
            <StyledMoneyIcon />
            بين ٣٤٤٥ و ٣٤٤٢ راتب شهري
          </Salary>
          <Tags>
            <Tag>هندسة</Tag>
            <Tag>راتب شهري</Tag>
          </Tags>
          <Description>
            تقدم Nestle فرصة عمل في الكويت بمنصب مدير مبيعات. سيقوم المتقدم الناجح بالعمل على تكييف استراتيجيات الفئات
            الموجودة في الشركة مع احتياجات البلد، ومن ثم قيادة هذه المنتجات وإدارتها عبر العملاء المختلفين. بالإضافة إلى
            متابعة تنفيذ خطط العلامة التجارية لتحقيق مؤشرات الأداء الرئيسية.
          </Description>
          <SubTitle>مسؤوليات الوظيفة:</SubTitle>
          <P>
            سيكون المتقدم الناجح مسؤولًا عن ضمان تحقيق قيمة إضافية للمنتج والعمل على زيادة نمو المنتج الداخلي حسب البلد
            والميزانية الموجود فيها.
          </P>
          <SubTitle>معايير أهلية الوظيفة:</SubTitle>
          <P>امتلاك 3 سنوات من الخبرة في مجال المبيعات/ التسويق التجاري </P>
          <ButtonContainer>
            <Button>تقديم على الوظيفة</Button>
          </ButtonContainer>
        </JobDetailsContainer>
      </ContentContainer>
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
`;
export default JobDetails;
