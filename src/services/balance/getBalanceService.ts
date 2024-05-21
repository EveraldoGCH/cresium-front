import axiosInstance from "@/utils/axiosInstance";

export const getBalanceService = async (): Promise<any> => {
  const response = await axiosInstance.get('/balance');

  return response.data.data;
};