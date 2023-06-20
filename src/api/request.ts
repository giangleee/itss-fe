import { RatingType, Staff } from "../types";
import instance from "./instance";

export const getListApplyStaff = (_requestId: string) => {
  const url = `/request/list-apply-staff/${_requestId}`;
  return instance.get(url);
};

export const getStaffById = (_id: string) => {
  const url = `/staff?_id=${_id}`;
  return instance.get(url);
};

export const getListProgress = () => {
  const url = `/request/list-progess`;
  return instance.get(url);
};

export const createReview = (review: RatingType) => {
  const url = `/ratting/create`;
  return instance.post(url, review)
}


export const getListStaff = async ({ gender, age, star }: { gender?: string; age?: number; star?: number }) => {
  const url = "/staff/list-staff?";
  const res = await instance.get(url);
  const getAge = (date: string) => {
    const today = new Date();
    const birthDate = new Date(date);
    const age = today.getFullYear() - birthDate.getFullYear();
    return age;
  };
  const data = (<Staff[]>res.data.data)
    .filter((staff) => {
      staff.age = staff.age ?? getAge(staff.date_of_birth);
      const cond1 = gender ? staff.gender === gender : true;
      const cond2 = age ? staff.age <= age && staff.age > age - 15 : true;
      const cond3 = star ? staff.rating_avg >= star : true;
      return cond1 && cond2 && cond3;
    })
    .sort((a, b) => b.rating_avg - a.rating_avg);
  return data;
};
