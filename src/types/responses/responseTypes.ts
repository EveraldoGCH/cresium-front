//SERVICES RESPONSES
import { UnitType } from "dayjs";

export interface ChartResponse {
    type: UnitType;
    date: string;
    amount: number;
}

export interface Currency {
    symbol: string;
    code: string;
    image: string;
    decimals: number;
}

export interface BalanceResponse {
    id: number;
    balance: number;
    lockedBalance: number;
    currency: Currency;
    companyId: number;
}

export interface AccountResponse {
    type: string;
    value: string;
    currencyId: number;
  }

// END SERVICES RESPONSE