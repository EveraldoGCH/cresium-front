import currency from 'currency.js';

export const formatCurrency = (
  value: currency.Any,
  options?: currency.Options
) => {
  return currency(value, {
    symbol: options?.symbol ?? '$',
    separator: options?.separator ?? '.',
    precision: options?.precision ?? 0,
  }).format();
};