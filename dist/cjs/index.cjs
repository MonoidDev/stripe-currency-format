var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};

// src/index.ts
__markAsModule(exports);
__export(exports, {
  stripeCurrencyFormat: () => stripeCurrencyFormat
});
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  stripeCurrencyFormat
});
