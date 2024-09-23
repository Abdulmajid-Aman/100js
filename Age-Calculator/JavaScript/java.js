// Fetching the DOM elements
// The input 
let inputDate = document.getElementById('date-input')

// The button
let btn = document.querySelector('button')

// The age display
let display = document.querySelector('#calculated-age')

btn.addEventListener('click', () => {
    let inputValue = new Date(inputDate.value)
    console.log(inputValue);
    let inputYear = inputValue.getFullYear()
    console.log(inputYear);
    let currentYear = new Date().getFullYear()
    let age = currentYear - inputYear
    display.textContent = `Your age is ${age} years old` 
})