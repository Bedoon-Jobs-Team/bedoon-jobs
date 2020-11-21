import { useEffect, useState } from "react";
import { jobAdPreviewsRef } from "../firebase/firestoreRefs";
import { JobAdPreview } from "../types";
import { QuerySnapshot, QueryDocumentSnapshot } from "@firebase/firestore-types";

const AdsPerFetch = 7;

export function useJobAds(fieldFilter?: string) {
  const [jobAds, setJobAds] = useState<JobAdPreview[]>([]);
  const [lastAdDoc, setLastAdDoc] = useState<QueryDocumentSnapshot>();
  const [hasMoreAds, setHasMoreAds] = useState(true);

  useEffect(() => {
    setLastAdDoc(undefined);
    setHasMoreAds(true);
    setJobAds([]);
    fetchJobAds();
    // eslint-disable-next-line
  }, [fieldFilter]);

  async function fetchJobAds() {
    try {
      let query = jobAdPreviewsRef.orderBy("datePosted", "desc").limit(AdsPerFetch);
      if (fieldFilter) query = query.where("tags", "array-contains", fieldFilter);
      if (lastAdDoc) query = query.startAfter(lastAdDoc);

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
      setLastAdDoc(jobAdsSnapshot.docs[jobAdsSnapshot.docs.length - 1]);
    }

    setJobAds((prevAds) => [...prevAds, ...fetchedJobAds]);
  }

  return { jobAds, fetchJobAds, hasMoreAds };
}
