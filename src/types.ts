import { Timestamp } from "@firebase/firestore-types";

export type JobAdPreview = {
  id?: string;
  title: string;
  tags: string[];
  companyId: string;
  companyName: string;
  area: string;
  datePosted: Timestamp;
  ownerId: string;
  isVerified: boolean;
};

export type JobAdDetails = {
  id?: string;
  jobAdPreview: JobAdPreview;
  company: Company;
  description: string;
  salaryLowerEnd?: number;
  salaryHigherEnd?: number;
};

export type Company = {
  id?: string;
  name: string;
  description: string;
  size: "" | "small" | "medium" | "large";
  phone: string;
  email: string;
  website?: string;
  trademarkURL?: string;
  ownerId?: string;
  isVerified?: boolean;
};
