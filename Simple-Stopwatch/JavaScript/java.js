let time = 0

// Getting the HTML elements
let startBtn = document.querySelector('.start')
let stopBtn = document.querySelector('.stop')
let resetBtn = document.querySelector('.reset')
let displayTime = document.querySelector('.timer')

// Initializing the time variable
let sec = 0
let min = 0
let hours = 0

// Calculates the time
function timer() {
    time += 1
    console.log(time);
    if(time === 100) {
        sec += 1
        time = 0
        
    }

    if(sec === 60) {
        min += 1
        sec = 0
        
    }

    if(min === 60) {
        hours += 1
        min = 0
    }

    displayTime.textContent = `${checkTime(hours)}: ${checkTime(min)}: ${checkTime(sec)}: ${checkTime(time)}`
}


// Function to check if the time is less than 10
function checkTime(time) {
    if(time < 10) {
        return `0${time}`
    } else {
        return time
    }
}

// Making the buttons function
let start = null

startBtn.addEventListener('click', () => {
    start = setInterval(timer, 10)
    startBtn.disabled = true
    stopBtn.disabled = false
})

// Stopping the timer
stopBtn.addEventListener('click', () => {
    clearInterval(start)
    startBtn.disabled = false
    stopBtn.disabled = true
})

// Resetting the timer
resetBtn.addEventListener('click', () => {
    clearInterval(start)
    time = 0
    sec = 0
    min = 0
    hours = 0
    displayTime.textContent = `${checkTime(hours)}: ${checkTime(min)}: ${checkTime(sec)}: ${checkTime(time)}`
})


