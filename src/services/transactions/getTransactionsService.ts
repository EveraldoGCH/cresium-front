import { ChartResponse } from "@/types/responses/responseTypes";
import axiosInstance from "@/utils/axiosInstance";

//TODO: typar la respuesta de transacciones
interface TransactionsResponse {
    [key: string]: any;
}

export const getTransactionsService = async (type: string): Promise<TransactionsResponse[]> => {
  const response = await axiosInstance.get(`/transactions/${type}`);

  return response.data.data;
};