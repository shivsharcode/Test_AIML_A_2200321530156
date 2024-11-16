
    const apiURL2 = 'https://open.er-api.com/v6/latest/USD'

    const amount = document.getElementById('amount');
    const fromCurrency = document.getElementById('fromCurrency');
    const toCurrency = document.getElementById('toCurrency');
    const convertBtn = document.getElementById('convert-amount-btn-id');

    const result = document.getElementById('result');
    async function loadCurrencies() {
        try {
            let response = await fetch(apiURL2);
            let data = await response.json()
            const currencies = Object.keys(data.rates);
            console.log(currencies);


            currencies.forEach(currency =>{
                const option1 = document.createElement('option');
                option1.value = currency;
                option1.textContent = currency;
                fromCurrency.appendChild(option1);

                const option2 = document.createElement('option');
                option2.value = currency
                option2.textContent = currency
                toCurrency.appendChild(option2)
            })
        } catch (error) {
            console.error("Error fetching currencies : ", error)
        }
    }

    async function convertCurrency(){
        const fromVal = fromCurrency.value;
        const toVal = toCurrency.value ;
        const amountVal = amount.value ;

        try{
            const response = await fetch(apiURL2);
            const data = await response.json();
            const rate = data.rates[toVal]/data.rates[fromVal] ;

            const convertedAmount = amountVal * rate ;
            result.innerText = `${amountVal} ${fromCurrency.value} = ${convertedAmount} ${toCurrency.value}`
        }
        catch(error){
            console.log("Error converting currency : ", error);
        }
    }

    loadCurrencies();
    convertBtn.addEventListener("click", convertCurrency);

    


