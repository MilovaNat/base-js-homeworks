function convert(sum, sourceCurrency, targetCurrency) {
    const exchangeRates = new Map([
        ["RUB/USD", 0.012],
        ["USD/RUB", 82.00],
        ["USD/EUR", 0.86],
        ["EUR/USD", 1.16],
        ["EUR/RUB", 94.95],
        ["RUB/EUR", 0.011],
    ]);

    const rate = exchangeRates.get(`${sourceCurrency}/${targetCurrency}`);
    return rate ? rate * sum : null;
}

console.log(convert(1000, 'RUB', 'USD'));
console.log(convert(1000, 'USD', 'RUB'));
console.log(convert(1000, 'JPY', 'RUB'));
