import React, { FunctionComponent } from "react";
import { ReactComponent as LogoSmall } from "../assets/icons/LogoSmall.svg";
import styled from "styled-components";

const ScrollMenu: FunctionComponent = props => {
  return <Menu></Menu>;
};

const Menu = styled.div`
  position: absolute;
  margin-top: 392px;
  width: 1044px;
  height: 77px;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0px 34px 74px rgba (39,  52,  107,  0.12);
  border-radius: 15px;
  padding: 0px 10px;
`;

export default ScrollMenu;
