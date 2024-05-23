import { ChartResponse } from "@/types/responses/responseTypes";
import dayjs from 'dayjs';


export const useFormatChartData = (data: ChartResponse[] | undefined) => {
    let formattedResponse: {name: string, value:number}[] = []
    if (data) {
        data.map((elm) => {
            let date = dayjs(elm.date).get(elm.type).toLocaleString()
            formattedResponse.push({ name: date, value: elm.amount })
        })
    }

    return formattedResponse;
}