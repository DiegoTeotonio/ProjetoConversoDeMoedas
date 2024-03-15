const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelect1 = document.querySelector(".currency-select1")

function convertValues() {


  const inputCurrencyValue = document.querySelector(".input-currency").value

  const currencyValueToConvert = document.querySelector(".currency-value-to-convert")

  const currencyValueToConverted = document.querySelector(".currency-value")

  console.log(currencySelect.value)

  const dolarToday = 5.2
  const euroToday = 6.2
  const yeneToday = 7.2
  const bitcoinToday = 8.2
  const libraToday = 9.2
  const realToday = 5.1


  if (currencySelect.value == "dolar") {
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(inputCurrencyValue / dolarToday)
   
  }
  if (currencySelect.value == "euro") {
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(inputCurrencyValue / euroToday)

  }

  if (currencySelect.value == "yene") {
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(inputCurrencyValue / yeneToday)
  }

  if (currencySelect.value == "bitcoin") {
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(inputCurrencyValue / bitcoinToday)
  }
  if (currencySelect.value == "libra") {
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(inputCurrencyValue / libraToday)

  }

  if (currencySelect.value == "real") {
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(inputCurrencyValue / realToday)

  }


  





}

function changeCurrency() {

  const currencyName = document.getElementById("currency-name")
  const currencyImage = document.querySelector(".currency-imagem")

  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dolar Americano"
    currencyImage.src = "./assets/Dolar.png"
  }

  if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro"
    currencyImage.src = "./assets/euro.png"
  }

  if (currencySelect.value == "yene") {
    currencyName.innerHTML = "yene Japones"
    currencyImage.src = "./assets/japao1.png"
  }

  if (currencySelect.value == "bitcoin") {
    currencyName.innerHTML = "bitcoin"
    currencyImage.src = "./assets/bitcoin.png"
  }

  if (currencySelect.value == "libra") {
    currencyName.innerHTML = "libra"
    currencyImage.src = "./assets/libra.png"
  }

  if (currencySelect.value == "real") {
    currencyName.innerHTML = "Real Brasileiro"
    currencyImage.src = "./assets/Real.png"
  }
 


  convertValues()

}


convertButton.addEventListener("click", convertValues)
currencySelect.addEventListener("change", changeCurrency)


