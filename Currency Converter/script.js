const currencyFirstEl = document.getElementById("currency-first");

const currencySecondEl = document.getElementById("currency-second");

const worthFirstEl = document.getElementById("worth-first");

const worthSecondEl = document.getElementById("worth-second");

const exchangeRateEl = document.getElementById("exchange-rate");

updateRate();

const API_KEY = "0f0f8ee280e70e84916c31c3"

async function updateRate() {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/0f0f8ee280e70e84916c31c3/latest/${currencyFirstEl.value}`);

    const data = await response.json();

    const rate = data.conversion_rates[currencySecondEl.value];

    exchangeRateEl.textContent = ` 1 ${currencyFirstEl.value} = ${rate} ${currencySecondEl.value}`;

    worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2);


}

currencyFirstEl.addEventListener("change", updateRate);

currencySecondEl.addEventListener("change", updateRate);

worthFirstEl.addEventListener("input", updateRate);