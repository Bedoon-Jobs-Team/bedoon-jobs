import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { ReactComponent as LeftArrowIcon } from "../assets/icons/LeftArrowIcon.svg";

const PaginationButtons: FunctionComponent<{ currentPage: number }> = ({ currentPage }) => {
  return (
    <Container>
      {[1, 2, 3, 4, Math.max(5, currentPage)].map((pageCount) => (
        <PageButton active={pageCount === currentPage}>{pageCount}</PageButton>
      ))}
      <PageButton>
        <LeftArrowIcon />
      </PageButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const PageButton = styled.div<{ active?: boolean }>`
  font-size: 20px;
  border: none;
  padding: 7px 20px;
  background: ${({ active }) => (active ? "linear-gradient(136.99deg, #A783E2 0%, #7749C2 96.75%)" : "#E8E3EF")};
  color: ${({ active }) => (active ? "#F5F6FA" : "#242227")};
  border-radius: 8px;
  margin-left: 12px;
`;

export default PaginationButtons;
