import { JobDetails, JobRequirements } from "../pages/OfferJobPage";
import { Company, JobAdDetails, JobAdPreview } from "../types";
import { jobAdDetailsRef, jobAdPreviewsRef } from "./firestoreRefs";
import firebase from "firebase";

export async function submitJobAd({
  companyDetails,
  jobDetails,
  jobRequirements,
  currentUser,
}: {
  companyDetails: Company;
  jobDetails: JobDetails;
  jobRequirements: JobRequirements;
  currentUser: firebase.User;
}) {
  let companyId = companyDetails.id;
  if (!companyId) {
    companyDetails.ownerId = currentUser.uid;
    companyId = await submitCompany(companyDetails);
  }

  const nowTimestampInSeconds = +new Date() / 1000;
  const datePosted = new firebase.firestore.Timestamp(nowTimestampInSeconds, 0);
  const jobAdPreview: JobAdPreview = {
    title: jobDetails.title,
    companyId,
    companyName: companyDetails.name,
    datePosted,
    tags: [jobDetails.field, jobDetails.type, jobDetails.salaryPeriod],
    area: jobDetails.area,
    ownerId: currentUser.uid,
  };
  const submittedJobAdPreview = await submitJobAdPreview(jobAdPreview);

  const jobAdDetails: JobAdDetails = {
    ...jobRequirements,
    salaryLowerEnd: jobDetails.salaryLowerEnd!,
    salaryHigherEnd: jobDetails.salaryHigherEnd!,
    jobAdPreview: submittedJobAdPreview,
    company: companyDetails,
  };
  await submitJobAdDetails(jobAdDetails);
}

async function submitCompany(companyDetails: Company) {
  const ref = firebase.firestore();
  const newCompanyDoc = ref.collection("companies").doc();
  await newCompanyDoc.set({ ...companyDetails, id: newCompanyDoc.id });
  return newCompanyDoc.id;
}

async function submitJobAdPreview(jobAdPreview: JobAdPreview) {
  const ref = firebase.firestore();
  const newPreviewDoc = ref.collection("jobAdPreviews").doc();
  const newPreviewObject = { ...jobAdPreview, id: newPreviewDoc.id };
  await newPreviewDoc.set(newPreviewObject);
  return newPreviewObject;
}

async function submitJobAdDetails(jobAdDetails: JobAdDetails) {
  await firebase.firestore().collection("jobAdDetails").doc(`${jobAdDetails.jobAdPreview.id}`).set(jobAdDetails);
}

export async function removeJob(jobId: string) {
  const ref = firebase.firestore();
  const batch = ref.batch();

  const adPreviewDoc = jobAdPreviewsRef.doc(jobId);
  batch.delete(adPreviewDoc);

  const adDetailsDoc = jobAdDetailsRef.doc(jobId);
  batch.delete(adDetailsDoc);

  try {
    await batch.commit();
  } catch (err) {
    alert("Something went wrong please try again."); //Todo convert this to toast message
  }
}
