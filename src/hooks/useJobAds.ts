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
    fetchJobAds();
    // eslint-disable-next-line
  }, [fieldFilter]);

  async function fetchJobAds(fetchingMore?: boolean) {
    try {
      let query = jobAdPreviewsRef.orderBy("datePosted", "desc").limit(AdsPerFetch);
      if (fieldFilter) query = query.where("tags", "array-contains", fieldFilter);
      if (fetchingMore && lastAdDoc) query = query.startAfter(lastAdDoc);

      const jobAdsSnapshot = await query.get();
      handleJobAdsSnapshot(jobAdsSnapshot, fetchingMore);
    } catch (err) {
      console.log(err);
      alert("Something went wrong please try again."); //Todo convert this to toast message
    }
  }

  function handleJobAdsSnapshot(jobAdsSnapshot: QuerySnapshot, fetchingMore?: boolean) {
    const fetchedJobAds: JobAdPreview[] = jobAdsSnapshot.docs.map((doc) => doc.data() as JobAdPreview);

    if (!fetchedJobAds.length) {
      setHasMoreAds(false);
    } else {
      setLastAdDoc(jobAdsSnapshot.docs[jobAdsSnapshot.docs.length - 1]);
    }

    if (fetchingMore) {
      setJobAds((prevAds) => [...prevAds, ...fetchedJobAds]);
    } else {
      setJobAds(fetchedJobAds);
    }
  }

  async function fetchMoreJobAds() {
    fetchJobAds(true);
  }

  return { jobAds, fetchMoreJobAds, hasMoreAds };
}
