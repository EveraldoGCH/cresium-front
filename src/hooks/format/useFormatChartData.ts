import { ChartResponse } from "@/types/responses/responseTypes";
import dayjs from "dayjs";
import { useMemo } from "react";

export const useFormatChartData = (data: ChartResponse[] | undefined) => {
  const formattedResponse = useMemo(() => {
    console.log("LLAMADO");
    let formatted: { name: string; value: number }[] = [];
    if (data) {
      data.forEach((elm) => {
        let date = dayjs(elm.date).get(elm.type).toLocaleString();
        formatted.push({ name: date, value: elm.amount });
      });
    }
    return formatted;
  }, [data]);

  return formattedResponse;
};
