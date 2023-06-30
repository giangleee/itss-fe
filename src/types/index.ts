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
  company_exp: number;
  total_exp: number;
  skill: string[] | string;
};

export type GenderType = "Male" | "Female" | "Other";
export type AgeType = 30 | 45 | 60;
export type StarType = 1 | 2 | 3 | 4 | 5;
export type FilterType = {
  gender?: GenderType;
  age?: AgeType;
  star?: StarType;
};

export type RatingType = {
  user_id?: string;
  staff_id?: string;
  request_id?: string;
  data?: any;
};

export type ReviewType = {
  _id: string;
  user: {
    fullname: string;
    avatar: string;
    address: string;
  };
  ratting: number;
  comment: string;
  updatedAt: string;
  createdAt: string;
};
export type User = {
  _id: string;
  fullname: string;
  email: string;
  phone_number: string;
  avatar?: string;
  date_of_birth: string;
}