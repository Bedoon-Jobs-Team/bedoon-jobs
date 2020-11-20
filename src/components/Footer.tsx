import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { ReactComponent as InstagramIcon } from "../assets/icons/InstagramIcon.svg";
import { ReactComponent as TwitterIcon } from "../assets/icons/TwitterIcon.svg";
import { ReactComponent as FacebookIcon } from "../assets/icons/SocialFacebookIcon.svg";

const Footer: FunctionComponent = () => {
  return (
    <Container>
      <ContentContainer>
        <SocialContainer>
          <StyledInstagramIcon />
          <StyledTwitterIcon />
          <FacebookIcon />
        </SocialContainer>
        <CopyrightContainer>جميع الحقوق محفوظة ٢٠٢٠. Coded.Itd</CopyrightContainer>
        <MadeByContainer>صنع بشغف و حب من قبل فريق CODED</MadeByContainer>
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  padding: 29px;
`;

const ContentContainer = styled.div`
  width: 1044px;
  display: flex;
  justify-content: center;
`;

const SocialContainer = styled.div`
  display: flex;
  flex-grow: 1;
`;

const CopyrightContainer = styled(SocialContainer)`
  justify-content: center;
  font-size: 12px;
  line-height: 23px;
  color: #242227;
`;

const MadeByContainer = styled(CopyrightContainer)`
  justify-content: flex-end;
`;

const StyledInstagramIcon = styled(InstagramIcon)`
  margin-left: 28px;
`;

const StyledTwitterIcon = styled(TwitterIcon)`
  margin-left: 28px;
`;

export default Footer;
