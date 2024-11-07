document.addEventListener('DOMContentLoaded', () => {
    const apiURL = 'https://api.exchangerate-api.com/v4/latest/USD';
    const fromCurrency = document.getElementById('fromCurrency');
    const toCurrency = document.getElementById('toCurrency');
    const amount = document.getElementById('amount');
    const result = document.getElementById('result');

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            const currencies = Object.keys(data.rates);
            currencies.forEach(currency => {
                const option1 = document.createElement('option');
                option1.value = currency;
                option1.textContent = currency;
                fromCurrency.appendChild(option1);

                const option2 = document.createElement('option');
                option2.value = currency;
                option2.textContent = currency;
                toCurrency.appendChild(option2);
            });
        });

    window.convertCurrency = () => {
        const fromValue = fromCurrency.value;
        const toValue = toCurrency.value;
        const amountValue = amount.value;

        fetch(`${apiURL}`)
            .then(response => response.json())
            .then(data => {
                const rate = data.rates[toValue] / data.rates[fromValue];
                const convertedAmount = (amountValue * rate).toFixed(2);
                result.textContent = `${amountValue} ${fromValue} = ${convertedAmount} ${toValue}`;
            });
    };
});
