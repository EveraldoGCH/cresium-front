import { TransactionsResponse } from "@/types/responses/responseTypes";
import axiosInstance from "@/utils/axiosInstance";

export const getTransactionsService = async (
  type: string,
): Promise<TransactionsResponse> => {
  const response = await axiosInstance.get(`/transactions/${type}`);

  return response.data.data;
};
