import { useEffect, useRef, useState } from "react";
import { jobAdPreviewsRef } from "../firebase/firestoreRefs";
import { JobAdPreview } from "../types";
import { QuerySnapshot, QueryDocumentSnapshot } from "@firebase/firestore-types";

const AdsPerFetch = 7;

export function useJobAds(fieldFilter?: string) {
  const [jobAds, setJobAds] = useState<JobAdPreview[]>([]);
  const [hasMoreAds, setHasMoreAds] = useState(false);
  const lastAdDoc = useRef<QueryDocumentSnapshot>();

  useEffect(() => {
    lastAdDoc.current = undefined;
    setHasMoreAds(false);
    setJobAds([]);
    fetchJobAds();
    // eslint-disable-next-line
  }, [fieldFilter]);

  async function fetchJobAds() {
    try {
      let query = jobAdPreviewsRef.orderBy("datePosted", "desc").limit(AdsPerFetch);
      if (fieldFilter) query = query.where("tags", "array-contains", fieldFilter);
      if (lastAdDoc.current) query = query.startAfter(lastAdDoc.current);

      const jobAdsSnapshot = await query.get();
      handleJobAdsSnapshot(jobAdsSnapshot);
    } catch (err) {
      console.log(err);
      alert("Something went wrong please try again."); //Todo convert this to toast message
    }
  }

  function handleJobAdsSnapshot(jobAdsSnapshot: QuerySnapshot) {
    const fetchedJobAds: JobAdPreview[] = jobAdsSnapshot.docs.map((doc) => doc.data() as JobAdPreview);

    if (!fetchedJobAds.length) {
      setHasMoreAds(false);
    } else {
      lastAdDoc.current = jobAdsSnapshot.docs[jobAdsSnapshot.docs.length - 1];
      setHasMoreAds(true);
    }

    setJobAds((prevAds) => [...prevAds, ...fetchedJobAds]);
  }

  return { jobAds, fetchJobAds, hasMoreAds };
}
