import React, { FunctionComponent } from "react";
import { ReactComponent as Arrow } from "../assets/icons/arrow.svg";
import styled from "styled-components";

const ScrollMenu: FunctionComponent = props => {
  return (
    <Menu>
      <Container>
                <JobButton active={true}>جميع الوظائف</JobButton>
                <JobButton active={false}>هندسة</JobButton>
                <JobButton active={false}>طب وتمريض</JobButton>
                <JobButton active={false}>مناديب</JobButton>
                <JobButton active={false}>أمن وسلامة</JobButton>
                <JobButton active={false}>سكرتارية</JobButton>
                <JobButton active={false}>رياضة</JobButton>
                <JobButton active={false}>وظائف إدارية</JobButton>
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
    display: none;
  }
`;

const JobButton = styled.div<{ active?: boolean }>`
  background: ${({ active }) => (active ? "#F8507B" : "#EBE3F6")};
  color: ${({ active }) => (active ? "#FFFFFF" : "#332D3C")};
  border-radius: 12px;
  border: 1px solid #ffffff;
  float: right;
  padding: 10px 28px;
  margin-top: 10px;
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

const StyledArrow = styled(Arrow)`
  margin-top: 0px;
`;

export default ScrollMenu;
