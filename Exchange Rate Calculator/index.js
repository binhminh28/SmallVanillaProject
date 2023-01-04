const CODE = [
    "USD",
    "AED",
    "AFN",
    "ALL",
    "AMD",
    "ANG",
    "AOA",
    "ARS",
    "AUD",
    "AWG",
    "AZN",
    "BAM",
    "BBD",
    "BDT",
    "BGN",
    "BHD",
    "BIF",
    "BMD",
    "BND",
    "BOB",
    "BRL",
    "BSD",
    "BTN",
    "BWP",
    "BYN",
    "BZD",
    "CAD",
    "CDF",
    "CHF",
    "CLP",
    "CNY",
    "COP",
    "CRC",
    "CUP",
    "CVE",
    "CZK",
    "DJF",
    "DKK",
    "DOP",
    "DZD",
    "EGP",
    "ERN",
    "ETB",
    "EUR",
    "FJD",
    "FKP",
    "FOK",
    "GBP",
    "GEL",
    "GGP",
    "GHS",
    "GIP",
    "GMD",
    "GNF",
    "GTQ",
    "GYD",
    "HKD",
    "HNL",
    "HRK",
    "HTG",
    "HUF",
    "IDR",
    "ILS",
    "IMP",
    "INR",
    "IQD",
    "IRR",
    "ISK",
    "JEP",
    "JMD",
    "JOD",
    "JPY",
    "KES",
    "KGS",
    "KHR",
    "KID",
    "KMF",
    "KRW",
    "KWD",
    "KYD",
    "KZT",
    "LAK",
    "LBP",
    "LKR",
    "LRD",
    "LSL",
    "LYD",
    "MAD",
    "MDL",
    "MGA",
    "MKD",
    "MMK",
    "MNT",
    "MOP",
    "MRU",
    "MUR",
    "MVR",
    "MWK",
    "MXN",
    "MYR",
    "MZN",
    "NAD",
    "NGN",
    "NIO",
    "NOK",
    "NPR",
    "NZD",
    "OMR",
    "PAB",
    "PEN",
    "PGK",
    "PHP",
    "PKR",
    "PLN",
    "PYG",
    "QAR",
    "RON",
    "RSD",
    "RUB",
    "RWF",
    "SAR",
    "SBD",
    "SCR",
    "SDG",
    "SEK",
    "SGD",
    "SHP",
    "SLE",
    "SLL",
    "SOS",
    "SRD",
    "SSP",
    "STN",
    "SYP",
    "SZL",
    "THB",
    "TJS",
    "TMT",
    "TND",
    "TOP",
    "TRY",
    "TTD",
    "TVD",
    "TWD",
    "TZS",
    "UAH",
    "UGX",
    "UYU",
    "UZS",
    "VES",
    "VND",
    "VUV",
    "WST",
    "XAF",
    "XCD",
    "XDR",
    "XOF",
    "XPF",
    "YER",
    "ZAR",
    "ZMW",
    "ZWL"
]
const URL = "https://v6.exchangerate-api.com/v6/cfc32163bca8035fa7140f3e/latest/"

function populateSelect(params) {
    let currencyOne = document.getElementById("currency-one")
    let currencyTwo = document.getElementById("currency-two")

    currencyOne.appendChild(createSelectCurrencyElement())
    currencyTwo.appendChild(createSelectCurrencyElement())
}

function createSelectCurrencyElement() {
    let fragment = document.createDocumentFragment()

    for (let i = 0; i < CODE.length; i++) {
        let opt = document.createElement('option')
        opt.value = CODE[i]
        opt.innerHTML = CODE[i]

        fragment.appendChild(opt)
    }
    return fragment
}

function httpGet(url, callback) {
    let xmlHttpReq = new XMLHttpRequest()

    xmlHttpReq.open("GET", url, false)
    xmlHttpReq.send(null)

    return xmlHttpReq.responseText
}

function onChangeAmountOne() {
    calcAmount()
}

function changeCurrencyOne() {
    calcAmount()
}

function onSwap() {
    let temp1, temp2 
    [temp1, temp2] = [
        document.getElementById("currency-one").value, 
        document.getElementById("currency-two").value
    ]

    document.getElementById("currency-one").value = temp2
    document.getElementById("currency-two").value = temp1
}

function calcAmount() {
    let amountOne = document.getElementById("amount-one")
    let amountTwo = document.getElementById("amount-two")
    let codeOne = document.getElementById("currency-one").value
    let codeTwo = document.getElementById("currency-two").value

    let data = JSON.parse(httpGet(URL + codeOne))
    let exchangeRate = data.conversion_rates[codeTwo]
    let exchangeRateStr = `1 ${codeOne} = ${exchangeRate} ${codeTwo}`

    document.getElementById("exchange-rate").innerHTML = exchangeRateStr
    amountTwo.value = (exchangeRate*+amountOne.value).toFixed(2)
}

function changeCurrencyTwo() {
    
}

populateSelect()
