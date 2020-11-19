import React, { FunctionComponent, useState } from "react";
import { ReactComponent as Arrow } from "../assets/icons/LeftArrowIcon.svg";
import styled from "styled-components";
import { fields } from "../constants";
import ScrollContainer from "react-indiana-drag-scroll";

interface Props {
  activeIndex: number;
  onSelectIndex: (index: number) => void;
}

const ScrollMenu: FunctionComponent<Props> = ({ activeIndex, onSelectIndex }) => {
  return (
    <Menu>
      <ItemsContainer>
        {["جميع الوظائف", ...fields].map((field, index) => (
          <Button key={field} active={index === activeIndex} onClick={() => onSelectIndex(index)}>
            {field}
          </Button>
        ))}
      </ItemsContainer>
      <ArrowContainer>
        <Arrow />
      </ArrowContainer>
    </Menu>
  );
};

const Menu = styled.div`
  position: absolute;
  margin-top: 392px;
  width: 1044px;
  align-items: center;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0px 34px 74px rgba(39, 52, 107, 0.12);
  padding: 0 10px 0 29px;
`;

const ItemsContainer = styled(ScrollContainer)`
  display: flex;
`;

const Button = styled.div<{ active: boolean }>`
  background-color: ${(props) => (props.active ? "#f8507b" : "#ebe3f6")};
  color: ${(props) => (props.active ? "#ffffff" : "#332d3c")};
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  font-size: 14px;
  line-height: 27px;
  border-radius: 12px;
  border: 1px solid #ffffff;
  padding: 10px 28px;
  margin: 10px 0 10px 10px;
  flex: 1 0 auto;
  cursor: pointer;
`;

const ArrowContainer = styled.div`
  position: absolute;
  width: 29px;
  height: 100%;
  left: 0px;
  top: 0px;
  background-color: #ffffff;
  box-shadow: 20px 4px 40px rgba (22,  8,  46,  0.1);
  border-radius: 12px 0px 0px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ScrollMenu;
