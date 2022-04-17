import { stripeCurrencyFormat } from 'stripe-currency-format';

console.log(stripeCurrencyFormat(10000, 'USD'));

console.log(stripeCurrencyFormat(10000, 'JPY'));

console.log(stripeCurrencyFormat(114514, 'CNY'));
