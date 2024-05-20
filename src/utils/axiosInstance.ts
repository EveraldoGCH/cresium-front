import axios, {
    AxiosInstance
  } from 'axios';

  const axiosInstance: AxiosInstance = axios.create({
    // eslint-disable-next-line
    baseURL:process.env.NEXT_PUBLIC_MOCK?process.env.NEXT_PUBLIC_BASE_URL_MOCK:"http://localhost:3500/real"
  });

  export default axiosInstance;