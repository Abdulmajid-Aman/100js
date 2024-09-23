// Fetching DOM elements
// Bill input value
let billEl = document.querySelector('#bill-el')

// Tip input value
let tipEl = document.querySelector('#tip-el')

// Getting the button
let btnEl = document.querySelector('button')

// Getting the display
let totalEl = document.querySelector('#total-el')

// Adding event listener to the btn
btnEl.addEventListener('click', calculate)

// Getting the percentage
function calculate() {
    let tipValue = parseInt(tipEl.value, 10)
    let tip = tipValue / 100
    let billValue = parseInt(billEl.value, 10)
    let total = tip * billValue
    let fullAmount = billValue + total
    return totalEl.textContent =  `Total: ${fullAmount.toFixed(2).toString()}`
}