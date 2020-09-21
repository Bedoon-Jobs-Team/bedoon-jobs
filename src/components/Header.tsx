import React, { FunctionComponent } from "react";
import { ReactComponent as LogoSmall } from "../assets/icons/LogoSmall.svg";
import styled from "styled-components";

const Header: FunctionComponent = (props) => {
  return (
    <Container>
      <RightContainer>
        <StyledLogo />
        <Link>بحث عن الوظائف</Link>
        <Link>الشركات</Link>
      </RightContainer>

      <LeftContainer>
        <ButtonTrans>أعلن عن وظيفة</ButtonTrans>
        <Button>تسجيل الدخول</Button>
      </LeftContainer>
    </Container>
  );
};

const LeftContainer = styled.div`
  padding: 0;
  display: flex;
  align-items: center;
`;

const RightContainer = styled(LeftContainer)`
  flex-grow: 1;
`;

const Container = styled.div`
  position: fixed;
  width: 1044px;
  display: flex;
  align-items: center;
  margin-top: 40px;
  left: 50%;
  transform: translate(-50%, 0);
  padding: 0;
`;

const StyledLogo = styled(LogoSmall)`
  margin-left: 40px;
`;

const Link = styled.p`
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
