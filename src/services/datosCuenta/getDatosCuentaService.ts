import axiosInstance from "@/utils/axiosInstance";

export const getDatosCuentaService = async (): Promise<any> => {
  const response = await axiosInstance.get('/account');
  console.log(response)

  return response.data.data;
};