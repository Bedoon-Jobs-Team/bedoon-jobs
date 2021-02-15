import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { ReactComponent as InstagramIcon } from "../assets/icons/InstagramIcon.svg";
import { ReactComponent as TwitterIcon } from "../assets/icons/TwitterIcon.svg";
import { ReactComponent as FacebookIcon } from "../assets/icons/SocialFacebookIcon.svg";
import { devices } from "../constants";

const Footer: FunctionComponent = () => {
  return (
    <Container>
      <ContentContainer>
        <SocialContainer>
          <StyledInstagramIcon />
          <StyledTwitterIcon />
          <StyledFacebookIcon />
        </SocialContainer>
        <CopyrightContainer>جميع الحقوق محفوظة ٢٠٢١</CopyrightContainer>
        <MadeByContainer>صنع بشغف و حب من قبل فريق وظايف</MadeByContainer>
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  padding: 29px;

  @media ${devices.mobile} {
    padding: 20px;
  }
`;

const ContentContainer = styled.div`
  width: 1044px;
  display: flex;
  justify-content: center;

  @media ${devices.mobile} {
    width: 100vw;
    flex-wrap: wrap;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  flex-grow: 1;

  @media ${devices.mobile} {
    width: 100vw;
    justify-content: center;
    margin-bottom: 20px;
  }
`;

const StyledInstagramIcon = styled(InstagramIcon)`
  margin-left: 28px;

  @media ${devices.mobile} {
    margin: 0 10px;
  }
`;

const StyledTwitterIcon = styled(StyledInstagramIcon).attrs({ as: TwitterIcon })``;

const StyledFacebookIcon = styled(StyledInstagramIcon).attrs({ as: FacebookIcon })``;

const CopyrightContainer = styled(SocialContainer)`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  font-size: 12px;
  line-height: 23px;
  color: #242227;

  @media ${devices.mobile} {
    font-size: 10px;
    margin-bottom: 10px;
  }
`;

const MadeByContainer = styled(CopyrightContainer)`
  justify-content: flex-end;

  @media ${devices.mobile} {
    justify-content: center;
    margin-bottom: 0;
  }
`;

export default Footer;
