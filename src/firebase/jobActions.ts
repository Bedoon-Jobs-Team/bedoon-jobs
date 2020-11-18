import { JobDetails, JobRequirements } from "../pages/OfferJobPage";
import { Company, JobAdDetails, JobAdPreview } from "../types";
import firebase from "./firebase";

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

  const datePosted = new Date();
  const jobAdPreview: JobAdPreview = {
    ...jobDetails,
    companyId,
    companyName: companyDetails.name,
    datePosted,
    tags: [], //Todo: implement this.
    area: "الشرق", //Todo: implement this.
    ownerId: currentUser.uid,
  };
  const submittedJobAdPreview = await submitJobAdPreview(jobAdPreview);

  const jobAdDetails: JobAdDetails = {
    ...jobDetails,
    ...jobRequirements,
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
  await firebase.firestore().collection("jobAdDetails").add(jobAdDetails);
}
