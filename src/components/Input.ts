import styled from "styled-components";
import { devices } from "../constants";

const Input = styled.input`
  width: 378px;
  height: 46px;
  border: 2px solid #e3dfe8;
  box-sizing: border-box;
  border-radius: 6px;
  font-size: 14px;
  line-height: 27px;
  color: #37333e;
  padding: 9.5px 16px;
  font-family: inherit;

  /* Remove Arrows from type="number" fields */
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  @media ${devices.mobile} {
    width: 100%;
  }
`;

export default Input;
