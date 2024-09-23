// Getting the DOM elements
let container = document.querySelectorAll('.container')
let count = 0

function changeSlider() {
    container[count].classList.remove('active')
    count ++
    if(count === container.length) {
        count = 0
    }
    container[count].classList.add('active')
}


setInterval(changeSlider, 5000)
