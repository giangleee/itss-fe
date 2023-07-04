import type { RatingType, ReviewType, Staff, User } from "../types";
import instance from "./instance";
/**
 * tra ve token
 */
export const login = async (email: string, password: string) => {
  const url = "/auth/login";
  const data = await instance.post(url, { email, password });
  return data.data as string;
};
export const register = async (body: unknown) => {
  const url = "/auth/signup";
  const data = await instance.post(url, body);
  return data.data as string;
};
export const checkValidEmail = async (email: string) => {
  const url = `/auth/check-valid-email?email=${email}`;
  const data = await instance.get(url);
  return data.data as string;
};
export const getMe = async () => {
  const url = "/auth";
  const res = await instance.get(url);
  const data = res.data;
  return data.data as User;
};

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
  return instance.post(url, review);
};
export const getListOwnerHistoryRequest = (_id: string) => {
  const url = `/request/user?user_id=${_id}`;
  return instance.get(url);
};

export const getRequestById = (_id: string) => {
  const url = `/request?request_id=${_id}`;
  return instance.get(url);
};

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
export const getStaffReviews = async (staff_id: string) => {
  const url = `/ratting?staff_id=${staff_id}`;
  const res = await instance.get(url);
  // if (!res.data.data || !res.data.data?.length) return reviewsSample;
  return res.data.data as ReviewType[];
};

export const createRequest = async (payload: object) => {
  const url = "/request";

  return instance.post(url, payload);
};
// const reviewsSample = [
//   {
//     _id: "1",
//     user: {
//       fullname: "Nguyễn Văn A",
//       avatar: "https://i.pravatar.cc/300",
//       address: "Hà Nội",
//     },
//     ratting: 4,
//     comment: "熱心で献身的なスタッフ😘",
//     updatedAt: "2021-05-20T14:00:00.000Z",
//     createdAt: "2021-05-20T14:00:00.000Z",
//   },
//   {
//     _id: "2",
//     user: {
//       fullname: "Nguyễn Văn B",
//       avatar: "https://i.pravatar.cc/300",
//       address: "Hà Nội",
//     },
//     ratting: 5,
//     comment: "スタッフさんも綺麗な女性でとても気に入りました😋",
//     updatedAt: "2021-05-20T14:00:00.000Z",
//     createdAt: "2021-05-20T14:00:00.000Z",
//   },
//   {
//     _id: "3",
//     user: {
//       fullname: "Nguyễn Văn C",
//       avatar: "https://i.pravatar.cc/300",
//       address: "Hà Nội",
//     },
//     ratting: 3,
//     comment: "Nhân viên nhiệt tình, tận tâm",
//     updatedAt: "2021-05-20T14:00:00.000Z",
//     createdAt: "2021-05-20T14:00:00.000Z",
//   },
// ];
