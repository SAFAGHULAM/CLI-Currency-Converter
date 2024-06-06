#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgCyan("***CURRENCY CONVERTER***"));
const currency = {
    USD: 1, //base currency
    PKR: 278.55,
    INR: 83.26,
    EUR: 0.93,
    MYR: 4.78,
    KRW: 1373.78,
    SGD: 1.36,
    RUB: 93.77,
    ZAR: 19.10,
    SAR: 3.75,
    NZD: 1.68,
};
let userSelection = await inquirer.prompt([
    {
        name: "From",
        message: "SELECT YOUR CURRENCY WHICH YOU WANT TO CONVERT",
        type: "list",
        choices: ['USD', 'PKR', 'INR', 'EUR', 'MYR', 'KRW', 'SGD', 'RUB', 'ZAR', 'SAR', 'NZD'],
    },
    {
        name: "To",
        message: "SELECT YOUR CURRENCY IN WHICH YOU WANT TO CONVERT",
        type: "list",
        choices: ['USD', 'PKR', 'INR', 'EUR', 'MYR', 'KRW', 'SGD', 'RUB', 'ZAR', 'SAR', 'NZD'],
    },
    {
        name: "Amount",
        message: "HOW MUCH AMOUNT YOU WANT TO CONVERT",
        type: "number",
    }
]);
let fromlist = currency[userSelection.From];
let toList = currency[userSelection.To];
let amount = userSelection.Amount;
let BaseAmount = amount / fromlist;
let convertedAmount = BaseAmount * toList;
let result = Math.round(convertedAmount);
console.log(chalk.bgMagenta(result));
