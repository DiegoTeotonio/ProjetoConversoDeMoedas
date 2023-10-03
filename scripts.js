
const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")



function convestValue() {

  const imputCurrencyValue = document.querySelector(".imput-currency").value
  const currencyValueToCovert = document.querySelector(".currency-value-to-convert")
  const currencyValueConverd = document.querySelector(".currency-value")




  const dolarToday = 5.2
  const euroToday = 6.2
  const yeneToday = 0.034
  const bitcointToday = 130.906
  const libraToday = 7.0


  if (currencySelect.value == "dolar") {
    currencyValueConverd.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(imputCurrencyValue / dolarToday)



  }


  if (currencySelect.value == "euro") {
    currencyValueConverd.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"

    }).format(imputCurrencyValue / euroToday)
  }

  if (currencySelect.value == "yene") {
    currencyValueConverd.innerHTML = new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: "JPY"
    }).format(imputCurrencyValue / dolarToday)
  }

  if (currencySelect.value == "bitcoin") {
    currencyValueConverd.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BTC"
    }).format(imputCurrencyValue / bitcointToday)

    if (currencySelect.value == "libra") {
      currencyValueConverd.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "GBP"
      }).format(imputCurrencyValue / libraToday)
    }





  }






  currencyValueToCovert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(imputCurrencyValue)
}




function changeCurrency() {
  const currencyName = document.getElementById("currency-name")
  const currencyImg = document.querySelector(".currency-imagem")

  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar Americano"
    currencyImg.src = "./assets/Dolar.png"

  }
  if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro"
    currencyImg.src = "./assets/euro.png"
  }
  if (currencySelect.value == "yene") {
    currencyName.innerHTML = "yene japones"
    currencyImg.src = "./assets/japao1.png"
  }

  if (currencySelect.value == "bitcoin") {
    currencyName.innerHTML = "bitcoin"
    currencyImg.src = "./assets/bitcoin.png"
  }
  if (currencySelect.value == "libra") {
    currencyName.innerHTML = "Libra"
    currencyImg.src ="./assets/libra.png"
  }



  convestValue()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convestValue)