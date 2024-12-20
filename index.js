const arrowRight = document.getElementById('arrow-right')
const arrowLeft = document.getElementById("arrow-left")
const currencyTable = document.getElementById("currency-table")
const comisionTable = document.getElementById("comision-table")

arrowRight.addEventListener("click", showComision)
arrowLeft.addEventListener("click", showCurrency)

function showComision () {
    currencyTable.style.display = "none";
    comisionTable.style.display = "block";
}

function showCurrency () {
    currencyTable.style.display = "block";
    comisionTable.style.display = "none";
}