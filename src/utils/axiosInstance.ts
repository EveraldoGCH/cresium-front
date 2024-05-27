import axios, { AxiosInstance } from "axios";

const isMock = process.env.NEXT_PUBLIC_MOCK === "true";

const axiosInstance: AxiosInstance = axios.create({
  // eslint-disable-next-line
  baseURL: isMock
    ? process.env.NEXT_PUBLIC_BASE_URL_MOCK
    : window.location.origin,
});

export default axiosInstance;
