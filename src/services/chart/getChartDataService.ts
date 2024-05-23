import { ChartResponse } from "@/types/responses/responseTypes";
import axiosInstance from "@/utils/axiosInstance";

export const getDataChartService = async (type: string): Promise<ChartResponse[]> => {
  const response = await axiosInstance.get(`/chart/${type}`);

  return response.data.data;
};