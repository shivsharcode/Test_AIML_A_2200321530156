document.addEventListener('DOMContentLoaded', ()=>{
    const currencyConverterBtn = document.getElementById('currency-converter-id');
    const screenDiv = document.getElementById('screen-div-id');

    const load_currency_converter = async ()=>{
        try {
            let response = await fetch('../currency-convert/index.html');
            if (!response.ok){
                throw new Error("Response Not Ok");
            }

            let htmlContent = await response.text()
            screenDiv.innerHTML = htmlContent

            //LOAD the external script file dynamically
            const convertScript = document.createElement('script')
            convertScript.src = '../currency-convert/script.js' ;
            convertScript.type = 'text/javascript';
            convertScript.onload = ()=>{
                console.log("Currency conversion script loaded success");
            }
            convertScript.onerror = ()=>{
                console.log("Error loading the currency  conversion script : ", error);
            }
            document.body.appendChild(convertScript);
            
        } catch (error) {
            console.log("There was an error : ", error)
            screenDiv.innerHTML = '<p>Failed to load Html Document</p>';
        }
    }

    currencyConverterBtn.addEventListener("click", load_currency_converter);
})