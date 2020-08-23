import React, { FunctionComponent } from "react";
import { ReactComponent as LogoSmall } from "../assets/icons/LogoSmall.svg";
import styled from "styled-components";

const Header: FunctionComponent = (props) => {
  return (
    <Container>
      <StyledLogo />
      <Link>بحث عن الوظائف</Link>
      <Link>الشركات</Link>
      {/* <p>تسجيل</p> */}
    </Container>
  );
};

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

export default Header;
