import React, { FunctionComponent, useMemo } from "react";
import { JobAdDetails } from "../types";

interface Props {
  jobDetails: JobAdDetails;
}

const Mailto: FunctionComponent<Props> = ({ jobDetails, children }) => {
  const email = jobDetails.company.email;

  const subject = `التقديم على وظيفة '${jobDetails.jobAdPreview.title}'`;
  const body = "Some message goes here"; //Todo

  const url = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <a href={url} style={{ textDecoration: "none" }}>
      {children}
    </a>
  );
};

export default Mailto;
