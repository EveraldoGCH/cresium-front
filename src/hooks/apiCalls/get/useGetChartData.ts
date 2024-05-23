import { getDataChartService } from "@/services/chart/getChartDataService";
import { useQuery } from "@tanstack/react-query";


export const useGetChartData = (type: string) =>
  useQuery({
    staleTime: 1000 * 60 * 1, // 1 minuto
    queryKey: ['chart', type],
    queryFn: () => getDataChartService(type),
  });