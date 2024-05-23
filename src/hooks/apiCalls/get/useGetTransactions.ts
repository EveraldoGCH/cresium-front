import { getTransactionsService } from "@/services/transactions/getTransactionsService";
import { useQuery } from "@tanstack/react-query";


export const useGetTransactions = (type: string) =>
  useQuery({
    staleTime: 1000 * 60 * 1, // 1 minuto
    queryKey: ['transactions', type],
    queryFn: () => getTransactionsService(type),
  });