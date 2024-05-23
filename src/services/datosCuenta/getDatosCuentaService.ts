import { AccountResponse } from "@/types/responses/responseTypes";
import axiosInstance from "@/utils/axiosInstance";

export const getDatosCuentaService = async (): Promise<AccountResponse[]> => {
  const response = await axiosInstance.get('/account');

  return response.data.data;
};