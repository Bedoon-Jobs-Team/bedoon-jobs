import React, { FunctionComponent } from "react";
import { Link as RouterLink } from "react-router-dom";

const Link: FunctionComponent<{ to: string }> = ({ children, to }) => (
  <RouterLink style={{ textDecoration: "none" }} to={to}>
    {children}
  </RouterLink>
);

export default Link;
