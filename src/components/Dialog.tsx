import { Dialog as MuiDialog, DialogActions, DialogContent } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { devices } from "../constants";

interface Props {
  open: boolean;
  message: string;
  confirmMessage: string;
  onConfirm: () => void;
  onClose: () => void;
  alternative?: boolean;
}

const Dialog: FunctionComponent<Props> = ({ open, message, confirmMessage, onConfirm, onClose, alternative }) => {
  return (
    <MuiDialog onClose={onClose} open={open}>
      <Content>
        <Message>{message}</Message>
      </Content>
      <DialogActions>
        <ButtonTrans onClick={onClose}>الغاء</ButtonTrans>
        <ButtonFilled alternative={alternative} onClick={onConfirm}>
          {confirmMessage}
        </ButtonFilled>
      </DialogActions>
    </MuiDialog>
  );
};

export default Dialog;

const Content = styled(DialogContent)`
  margin-left: 40px;

  @media ${devices.mobile} {
    margin-left: 0;
  }
`;

const Message = styled.p`
  color: #37333e;
  font-size: 16px;
  line-height: 24px;
  font-weight: normal;
  margin-left: 20px;
  margin-bottom: 20px;

  @media ${devices.mobile} {
    font-size: 14px;
    margin-left: 0;
  }
`;

const ButtonTrans = styled.div`
  color: #643f9f;
  border-radius: 6px;
  border: 1px solid #643f9f;
  margin-right: 10px;
  margin-bottom: 5px;
  padding: 8px 20px;
  font-size: 12px;
  line-height: 23px;
  font-weight: bold;
  cursor: pointer;

  @media ${devices.mobile} {
    font-size: 10px;
  }
`;

const ButtonFilled = styled(ButtonTrans)<{ alternative?: boolean }>`
  color: #ffffff;
  background: ${(props) =>
    props.alternative
      ? "linear-gradient(138.12deg, #f87495 -0.01%, #f8507b 94.77%)"
      : "linear-gradient(138.12deg, #a783e2 -0.01%, #7749c2 94.77%)"};
  border: none;
`;
