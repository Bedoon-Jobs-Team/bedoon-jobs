import React, { FunctionComponent } from "react";
import { ReactComponent as Arrow } from "../assets/icons/arrow.svg";
import styled from "styled-components";

const ScrollMenu: FunctionComponent = props => {
  return (
    <Menu>
      <Container>
                <ActiveButton>جميع الوظائف</ActiveButton>
                <InactiveButton>هندسة</InactiveButton>
                <InactiveButton>طب وتمريض</InactiveButton>
                <InactiveButton>مناديب</InactiveButton>
                <InactiveButton>أمن وسلامة</InactiveButton>
                <InactiveButton>سكرتارية</InactiveButton>
                <InactiveButton>رياضة</InactiveButton>
                <InactiveButton>وظائف إدارية</InactiveButton>
      </Container>
      <ScrollArow>
                
        <StyledArrow />
              
      </ScrollArow>
    </Menu>
  );
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
`;

const Container = styled.div`
  display: flex;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    width: 0px;
  }
`;

const ActiveButton = styled.div`
  background-color: #f8507b;
  color: #ffffff;
  border-radius: 12px;
  border: 1px solid #ffffff;
  float: right;
  padding: 10px 28px;
  margin-top: 10px;
`;

const InactiveButton = styled(ActiveButton)`
  background-color: #ebe3f6;
  color: #332d3c;
`;

const ScrollArow = styled.div`
  position: absolute;
  width: 29px;
  height: 77px;
  left: 0px;
  top: 0px;
  background-color: #ffffff;
  box-shadow: 20px 4px 40px rgba (22,  8,  46,  0.1);
  border-radius: 12px 0px 0px 12px;
`;

const StyledArrow = styled(Arrow)``;

export default ScrollMenu;
