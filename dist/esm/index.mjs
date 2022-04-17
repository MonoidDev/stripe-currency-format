// src/index.ts
var zeroDecimalCurrencies = new Set([
  "BIF",
  "CLP",
  "DJF",
  "GNF",
  "JPY",
  "KMF",
  "KRW",
  "MGA",
  "PYG",
  "RWF",
  "UGX",
  "VND",
  "VUV",
  "XAF",
  "XOF",
  "XPF",
  "UGX"
]);
var stripeCurrencyFormat = (amount, currency) => {
  const isZeroDecimal = zeroDecimalCurrencies.has(currency.toUpperCase());
  return new Intl.NumberFormat("en-US", {
    currency,
    style: "currency"
  }).format(isZeroDecimal ? amount : amount / 100);
};
export {
  stripeCurrencyFormat
};
