import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { toast } from "react-toastify";
const instance = axios.create({
  baseURL: "https://itss-be-production.up.railway.app/api/v1",
});

const onRequest = (config: InternalAxiosRequestConfig) => {
  config.headers.set("Content-Type", "application/json");
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? "Bearer " + localStorage.getItem("token") : undefined;
  return config;
};
const onResponse = (response: AxiosResponse) => {
  if (response.config.url !== "/auth/login") return response;
  const token = response.data.data;
  if (token) {
    localStorage.setItem("token", token);
  }
  return response;
};
const onRejected = (error: AxiosError<{ message: string }>) => {
  const response = error.response;
  if (response?.config.url === "/me") return;
  toast.error(response?.data.message || "何か問題が発生しました");
};
instance.interceptors.request.use(onRequest);
instance.interceptors.response.use(onResponse, onRejected);
export default instance;
