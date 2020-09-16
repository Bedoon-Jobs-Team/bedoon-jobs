import React, { FunctionComponent } from "react";
import { ReactComponent as Instasm } from "../assets/icons/Insta-sm.svg";
import { ReactComponent as Twtrsm } from "../assets/icons/Twtr-sm.svg";
import { ReactComponent as FBsm } from "../assets/icons/FB-sm.svg";
import styled from "styled-components";

const Footer: FunctionComponent = props => {
  return (
    <Container>
      <RightContainer>
        <Insta />
        <Twtr />
        <FB />
      </RightContainer>
      <MiddleContainer>
        <Text>جميع الحقوق محفوظة ٢٠١٨ . Coded.Itd</Text>
      </MiddleContainer>
      <LeftContainer>
        <Text>صنع بشغف و حب من قبل فريق CODED</Text>
      </LeftContainer>
    </Container>
  );
};

const Container = styled.div`
  background-color: #ffffff;
  position: fixed;
  width: 100vw;
  height: 170px;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  padding: 0;
`;

const LeftContainer = styled.div`
  padding: 29.5px;
  display: flex;
  align-items: center;
`;

const MiddleContainer = styled(LeftContainer)`
  flex-grow: 1;
`;

const RightContainer = styled(LeftContainer)`
  flex-grow: 1;
`;

const Text = styled.div`
  font-size: 1.15%;
  color: #242227;
`;
const Insta = styled(Instasm)`
  width: 24px;
`;
const Twtr = styled(Twtrsm)`
  padding-right: 28px;
  width: 24px;
`;

const FB = styled(FBsm)`
  padding-right: 28px;
  width: 24px;
`;

export default Footer;
