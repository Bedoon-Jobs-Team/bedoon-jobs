import React, { FunctionComponent } from "react";
import { ReactComponent as LogoSmall } from "../assets/icons/LogoSmall.svg";
import styled from "styled-components";
import Link from "../utils/UnstyledLink";

const Header: FunctionComponent = (props) => {
  return (
    <Container>
      <RightContainer>
        <StyledLogo />
        <StyledLink>بحث عن الوظائف</StyledLink>
        <StyledLink>الشركات</StyledLink>
      </RightContainer>
      <LeftContainer>
        <Link to="/offer-job">
          <ButtonTrans>أعلن عن وظيفة</ButtonTrans>
        </Link>
        <Button>تسجيل الدخول</Button>
      </LeftContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 1044px;
  display: flex;
  align-items: center;
  margin-top: 40px;
  padding: 0;
`;

const LeftContainer = styled.div`
  padding: 0;
  display: flex;
  align-items: center;
`;

const RightContainer = styled(LeftContainer)`
  flex-grow: 1;
`;

const StyledLogo = styled(LogoSmall)`
  margin-left: 40px;
`;

const StyledLink = styled.p`
  font-size: 16px;
  color: #ffffff;
  margin-left: 40px;
  margin-top: 0;
  margin-bottom: 0;
`;

const ButtonTrans = styled.div`
  color: #ffffff;
  border-radius: 6px;
  border: 1px solid #ffffff;
  float: left;
  margin-right: 29px;
  padding: 8px 20px;
  font-size: 12px;
  line-height: 23px;
  font-weight: bold;
`;

const Button = styled(ButtonTrans)`
  color: #643f9f;
  background-color: #ffffff;
`;

export default Header;
