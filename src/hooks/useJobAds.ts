import { useEffect, useState } from "react";
import { jobAdPreviewsRef } from "../firebase/firestoreRefs";
import { JobAdPreview } from "../types";
import { QuerySnapshot, QueryDocumentSnapshot } from "@firebase/firestore-types";

const AdsPerFetch = 7;

export function useJobAds() {
  const [jobAds, setJobAds] = useState<JobAdPreview[]>([]);
  const [lastAdDoc, setLastAdDoc] = useState<QueryDocumentSnapshot>();
  const [hasMoreAds, setHasMoreAds] = useState(true);

  useEffect(() => {
    fetchJobAds();
  }, []);

  async function fetchJobAds() {
    try {
      const jobAdsSnapshot = await jobAdPreviewsRef.orderBy("datePosted", "desc").limit(AdsPerFetch).get();
      handleJobAdsSnapshot(jobAdsSnapshot);
    } catch (err) {
      alert("Something went wrong please try again."); //Todo convert this to toast message
    }
  }

  function handleJobAdsSnapshot(jobAdsSnapshot: QuerySnapshot) {
    const fetchedJobAds: JobAdPreview[] = jobAdsSnapshot.docs.map((doc) => doc.data() as JobAdPreview);
    if (!fetchedJobAds.length) {
      setHasMoreAds(false);
      return;
    }
    setLastAdDoc(jobAdsSnapshot.docs[jobAdsSnapshot.docs.length - 1]);
    setJobAds((prevAds) => [...prevAds, ...fetchedJobAds]);
  }

  async function fetchMoreJobAds() {
    const jobAdsSnapshot = await jobAdPreviewsRef
      .orderBy("datePosted", "desc")
      .limit(AdsPerFetch)
      .startAfter(lastAdDoc)
      .get();
    handleJobAdsSnapshot(jobAdsSnapshot);
  }

  return { jobAds, fetchMoreJobAds, hasMoreAds };
}
