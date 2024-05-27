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

//Empieza TRANSACCIONES

interface From {
  id: number;
  type: string;
  value: string;
}

interface To {
  id: number;
  type: string;
  value: string;
}

interface Collaborator {
  id: number;
  email: string;
  enabled: boolean;
  firstName: string;
  lastName: any;
  image: any;
  phone: string;
  birthDate: any;
}

export interface Transaction {
  id: number;
  type: string;
  status: string;
  currencyId: number;
  currency: Currency;
  fromId: number;
  toId: number;
  from: From;
  to: To;
  companyId: number;
  collaboratorId: number;
  collaborator: Collaborator;
  walletId: number;
  createdAt: string;
  totalAmount: number;
  netAmount: number;
  externalId: any;
  tag?: string;
}

export interface TransactionsResponse {
  transactions: Transaction[];
  pageSize: number;
  cursor: number;
}

//TERMINA TRANSACCIONES

// END SERVICES RESPONSE
