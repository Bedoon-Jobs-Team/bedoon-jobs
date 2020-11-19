import React, { FunctionComponent, useRef, useState } from "react";
import { ReactComponent as LogoSmall } from "../assets/icons/LogoSmall.svg";
import { ReactComponent as LogoSmallAlternative } from "../assets/icons/LogoSmallAlternative.svg";
import styled from "styled-components";
import Link from "../utils/UnstyledLink";
import { useCurrentUser } from "../hooks/useCurrentUser";

import { makeStyles, Popover } from "@material-ui/core";
import LogoutConfirmationDialog from "./LogoutConfirmationDialog";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
  },
}));

interface Props {
  alternative?: boolean;
}

const Header: FunctionComponent<Props> = ({ alternative }) => {
  const currentUser = useCurrentUser();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);
  const [openPopover, setOpenPopover] = useState(false);
  const [openLogoutConfirmation, setOpenLogoutConfirmation] = useState(false);

  function onOpenPopover(event: any) {
    setAnchorEl(event.currentTarget);
    setOpenPopover(true);
  }

  function onClosePopover() {
    setOpenPopover(false);
  }

  function onOpenLogoutConfirmation() {
    setOpenPopover(false);
    setOpenLogoutConfirmation(true);
  }

  return (
    <>
      <Container>
        <RightContainer>
          <LogoContainer>
            <Link to="/">{alternative ? <LogoSmallAlternative /> : <LogoSmall />}</Link>
          </LogoContainer>
          <StyledLink alternative={alternative}>بحث عن الوظائف</StyledLink>
          <StyledLink alternative={alternative}>الشركات</StyledLink>
        </RightContainer>
        <LeftContainer>
          <Link to="/offer-job">
            <ButtonTrans alternative={alternative}>أعلن عن وظيفة</ButtonTrans>
          </Link>
          {currentUser ? (
            <>
              <Button onClick={onOpenPopover}>أهلاً {currentUser.displayName?.split(" ")[0]}!</Button>
              <Popover
                open={openPopover}
                anchorEl={anchorEl}
                classes={{ paper: classes.paper }}
                onClose={onClosePopover}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                transformOrigin={{ vertical: "top", horizontal: "center" }}
              >
                <PopoverItem onClick={onOpenLogoutConfirmation}>تسجيل الخروج</PopoverItem>
              </Popover>
            </>
          ) : (
            <Link to="/login">
              <Button alternative={alternative}>تسجيل الدخول</Button>
            </Link>
          )}
        </LeftContainer>
      </Container>
      <LogoutConfirmationDialog open={openLogoutConfirmation} onClose={() => setOpenLogoutConfirmation(false)} />
    </>
  );
};

const Container = styled.div`
  width: 1044px;
  display: flex;
  align-items: center;
  margin-top: 40px;
  padding: 0;
  align-self: center;
`;

const LeftContainer = styled.div`
  padding: 0;
  display: flex;
  align-items: center;
`;

const RightContainer = styled(LeftContainer)`
  flex-grow: 1;
`;

const LogoContainer = styled.div`
  margin-left: 40px;
`;

const StyledLink = styled.p<{ alternative?: boolean }>`
  font-size: 16px;
  color: ${(props) => (props.alternative ? "#7749C2" : "#ffffff")};
  margin-left: 40px;
  margin-top: 0;
  margin-bottom: 0;
`;

const ButtonTrans = styled.div<{ alternative?: boolean }>`
  color: ${(props) => (props.alternative ? "#7749C2" : "#ffffff")};
  border-radius: 6px;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => (props.alternative ? "#7749C2" : "#ffffff")};
  float: left;
  margin-right: 29px;
  padding: 8px 20px;
  font-size: 12px;
  line-height: 23px;
  font-weight: bold;
`;

const Button = styled(ButtonTrans)`
  color: ${(props) => (props.alternative ? "#ffffff" : "#643f9f")};
  background: ${(props) =>
    props.alternative ? "linear-gradient(138.12deg, #A783E2 -0.01%, #7749C2 94.77%)" : "#ffffff"};
  border: none;

  cursor: pointer;
`;

const PopoverItem = styled.p`
  color: #643f9f;
  font-size: 12px;
  padding: 5px;
  cursor: pointer;
`;

export default Header;
