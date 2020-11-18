import { useEffect, useState } from "react";
import { jobAdDetailsRef } from "../firebase/firestoreRefs";
import { JobAdDetails } from "../types";

export function useJobDetails(jobAdId: string) {
  const [jobDetails, setJobDetails] = useState<JobAdDetails>();

  useEffect(() => {
    fetchJobDetails();
  }, []);

  async function fetchJobDetails() {
    try {
      const jobDetailsDoc = await jobAdDetailsRef.doc(`${jobAdId}`).get();
      setJobDetails(jobDetailsDoc.data() as JobAdDetails);
    } catch (err) {
      //   alert("Something went wrong please try again."); //Todo convert this to toast message
    }
  }

  return jobDetails;
}
