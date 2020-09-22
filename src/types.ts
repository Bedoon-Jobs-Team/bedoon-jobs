export type JobAdPreview = {
  id: string;
  title: string;
  tags: string[];
  companyId: string;
  companyName: string;
  governorate: string;
  area: string;
  datePosted: Date;
};

export type JobAdDetails = {
  description: string;
  responsibilities: string;
  qualifications: string;
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
};
