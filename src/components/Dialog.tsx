import { Dialog as MuiDialog, DialogActions, DialogContent } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import styled from "styled-components";

interface Props {
  open: boolean;
  message: string;
  confirmMessage: string;
  onConfirm: () => void;
  onClose: () => void;
}

const Dialog: FunctionComponent<Props> = ({ open, message, confirmMessage, onConfirm, onClose }) => {
  return (
    <MuiDialog onClose={onClose} open={open}>
      <Content>
        <Message>{message}</Message>
      </Content>
      <DialogActions>
        <ButtonTrans onClick={onClose}>الغاء</ButtonTrans>
        <ButtonFilled onClick={onConfirm}>{confirmMessage}</ButtonFilled>
      </DialogActions>
    </MuiDialog>
  );
};

export default Dialog;

const Content = styled(DialogContent)`
  padding: 40px;
`;

const Message = styled.p`
  color: #643f9f;
  font-size: 16px;
  margin-left: 20px;
  margin-bottom: 20px;
`;

const ButtonTrans = styled.div`
  color: #643f9f;
  border-radius: 6px;
  border: 1px solid #643f9f;
  float: left;
  margin-right: 10px;
  padding: 8px 20px;
  font-size: 12px;
  line-height: 23px;
  font-weight: bold;
  cursor: pointer;
`;

const ButtonFilled = styled(ButtonTrans)`
  color: #ffffff;
  background: #7749c2;
  border: none;
`;
