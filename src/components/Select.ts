import styled from "styled-components";
import Input from "./Input";

const Select = styled(Input).attrs({ as: "select" })`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none; /* Remove default arrow */
`;

export default Select;
