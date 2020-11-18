import { useEffect, useState } from "react";
import { jobAdPreviewsRef } from "../firebase/firestoreRefs";
import { JobAdPreview } from "../types";

export function useJobAds() {
  const [jobAds, setJobAds] = useState<JobAdPreview[]>([]);

  useEffect(() => {
    fetchJobAds();
  }, []);

  async function fetchJobAds() {
    try {
      const jobAdsSnapshot = await jobAdPreviewsRef.get();
      const fetchedJobAds: JobAdPreview[] = jobAdsSnapshot.docs.map((doc) => doc.data() as JobAdPreview);
      setJobAds(fetchedJobAds);
    } catch (err) {
      alert("Something went wrong please try again."); //Todo convert this to toast message
    }
  }

  return jobAds;
}
