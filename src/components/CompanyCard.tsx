import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { ReactComponent as Web } from "../assets/icons/Web.svg";
const ComponyCard: FunctionComponent = props => {
  return (
    <Container>
      <Picture />
      <Name>شركة blue light</Name>
      <Detail>
        تقدم Nestle فرصة عمل في الكويت بمنصب مدير مبيعات. سيقوم المتقدم الناجح
        بالعمل على تكييف استراتيجيات الفئات الموجودة في الشركة مع احتياجات
        البلد.
      </Detail>
      <SiteContainer>
        <IconWeb />
        <SiteURL>truculture.com</SiteURL>
      </SiteContainer>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 12px;
  width: 332px;
  height: 380px;
`;

const Picture = styled.div`
  display: flex;
  margin-top: 31px;
  margin-right: 36px;
  border-radius: 6px;
  width: 260px;
  height: 97px;
  background-color: #f7f5fa;
`;

const Name = styled.p`
  display: flex;
  margin-right: 36px;
  margin-top: 16px;
  color: #d1365d;
  font-size: 14px;
  text-align: right;
  text-transform: capitalize;
`;

const Detail = styled.div`
  display: flex;
  margin-right: 36px;
  width: 260px;
  font-size: 12px;
  line-height: 28px;
`;

const SiteContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 145px;
  height: 32px;
  left: 1061px;
  margin-top: 16px;
  margin-right: 36px;
  background-color: #f4f2f8;
  border-radius: 8px;
  align-items: center;
`;

const IconWeb = styled(Web)`
  width: 20px;
  margin-right: 12px;
`;

const SiteURL = styled.p`
  margin-right: 12px;
  font-size: 12px;
  align-self: center;
  width: 91px;
`;

export default ComponyCard;
