import { getDatosCuentaService } from "@/services/datosCuenta/getDatosCuentaService";
import { useQuery } from "@tanstack/react-query";

export const useGetDatosCuenta = () =>
  useQuery({
    queryKey: ["account-info"],
    queryFn: () => getDatosCuentaService(),
  });
