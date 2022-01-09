
const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')

const dolar = 0.1774
const euro = 0.1562
const bitcoin = 235270.98


const convertValue = () => {
    const inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')

    realValueText.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency', currency: 'BRL'
    }).format(inputReais);

    if (select.value === 'US$ Dólar americano') {
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency', currency: 'USD'
        }).format (inputReais * dolar)
    }

    if (select.value === '€ Euro') {
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency', currency: 'EUR'

        }).format(inputReais * euro)
    }

    if (select.value === 'BitCoin') {
        currencyValueText.innerHTML = `₿ ${new Intl.NumberFormat({
            style: 'currency', currency: 'BTC'
        }).format((inputReais / bitcoin).toFixed(2))}`
    }
}

changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')

    if (select.value === 'US$ Dólar americano') {
        currencyName.innerHTML = 'Dólar americano'
        currencyImg.src = 'assets/estados-unidos.svg'
    }

    if (select.value === '€ Euro') {
        currencyName.innerHTML = 'Euro'
        currencyImg.src = 'assets/euro.svg'
    }

    if (select.value === 'BitCoin') {
        currencyName.innerHTML = 'BitCoin'
        currencyImg.src = 'assets/bitcoin.svg'
    }

    convertValue()

}

button.addEventListener('click', convertValue)
select.addEventListener('change', changeCurrency)