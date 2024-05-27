import { BalanceResponse } from "@/types/responses/responseTypes";
import axiosInstance from "@/utils/axiosInstance";

export const getBalanceService = async (): Promise<BalanceResponse[]> => {
  const response = await axiosInstance.get("/balance");

  return response.data.data;
};
