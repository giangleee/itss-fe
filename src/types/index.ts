/* eslint-disable @typescript-eslint/no-explicit-any */
export type Staff = {
  _id: string;
  fullname: string;
  intro?: string;
  avatar?: string;
  date_of_birth: string;
  age: number;
  phone_number: string;
  rating_avg: number;
  facebook?: string;
  twitter?: string;
  zalo?: string;
  gender: "Male" | "Female" | "Other";
  city: string;
  district: string;
  address: string;
  company_exp: any;
  total_exp: any;
};

export type GenderType = "Male" | "Female" | "Other";
export type AgeType = 30 | 45 | 60;
export type StarType = 1 | 2 | 3 | 4 | 5;
