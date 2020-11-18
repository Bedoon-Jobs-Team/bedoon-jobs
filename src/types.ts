export type JobAdPreview = {
  id?: string;
  title: string;
  tags: string[];
  companyId: string;
  companyName: string;
  area: string;
  datePosted: Date;
  ownerId: string;
};

export type JobAdDetails = {
  id?: string;
  jobAdPreview: JobAdPreview;
  company: Company;
  description: string;
  salaryLowerEnd: number;
  salaryHigherEnd: number;
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
};
