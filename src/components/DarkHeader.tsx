import React, { FunctionComponent } from "react";
import { ReactComponent as DarkLogoSmall } from "../assets/icons/DarkLogoSmall.svg";
import styled from "styled-components";

const DarkHeader: FunctionComponent = props => {
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

const StyledLogo = styled(DarkLogoSmall)`
  margin-left: 40px;
`;

const Link = styled.p`
  font-size: 16px;
  color: #8357ca;
  margin-left: 40px;
  margin-top: 0;
  margin-bottom: 0;
`;

const ButtonTrans = styled.div`
  color: #8357ca;
  border-radius: 6px;
  border: 1px solid #8357ca;
  float: left;
  margin-left: 40px;
  padding: 8px 20px;
`;

const Button = styled(ButtonTrans)`
  color: #ffffff;
  background: linear-gradient(138.12deg, #a783e2 -0.01%, #7749c2 94.77%);
`;

export default DarkHeader;
