import { getBalanceService } from "@/services/balance/getBalanceService";
import { useQuery } from "@tanstack/react-query";


export const useGetBalance = () =>
  useQuery({
    queryKey: ['balance-chart'],
    queryFn: () => getBalanceService(),
  });