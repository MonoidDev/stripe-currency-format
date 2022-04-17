/**
 * @see: https://stripe.com/docs/currencies#european-credit-cards
 */

const zeroDecimalCurrencies = new Set([
  'BIF',
  'CLP',
  'DJF',
  'GNF',
  'JPY',
  'KMF',
  'KRW',
  'MGA',
  'PYG',
  'RWF',
  'UGX',
  'VND',
  'VUV',
  'XAF',
  'XOF',
  'XPF',
  'UGX',
]);

export const stripeCurrencyFormat = (amount: number, currency: string) => {
  const isZeroDecimal = zeroDecimalCurrencies.has(currency.toUpperCase());

  return new Intl.NumberFormat('en-US', {
    currency,
    style: 'currency',
  }).format(isZeroDecimal ? amount : amount / 100);
};
