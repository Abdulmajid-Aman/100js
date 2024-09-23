let time = 1500

let displayTime = document.querySelector('.display-time')

// Getting buttons
let startBtn = document.querySelector('.start')
let stopBtn = document.querySelector('.stop')
let resetBtn = document.querySelector('.reset')

// Getting the minutes and seconds 
let minutes = time / 60
let seconds = time % 60

// Logic for the time to decrement
function updateTimer() {
    time--
    minutes = parseInt(time / 60, 10)
    seconds = time % 60   
    displayTime.textContent = `${minutes}:${formatSeconds(seconds)}`
}

function formatSeconds(seconds) {
    if (seconds < 10 ) {
        return '0' + seconds
    } else {
        return seconds
    }
}

// Starting the timer
let interval = null

startBtn.addEventListener('click', () => {
    interval = setInterval(updateTimer, 1000)
    console.log(interval);
    
})

console.log(interval);


// Stopping the timer
stopBtn.addEventListener('click', () => {
    return clearInterval(interval)
})

// Resetting the timer
resetBtn.addEventListener('click', () => {
    time = 1500
    minutes = time / 60
    seconds = time  % 60
    displayTime.textContent = `${minutes}:${formatSeconds(seconds)}`
    clearInterval(interval)
})

// =================================================================================================================================================================

let p = document.querySelector('.timer-text')

let countdown = new Date('September 7, 2034, 01:00:00').getTime()

let x = setInterval(() => {
    let time = new Date().getTime()

    let timeDiff = countdown - time

    let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24))
    let hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((timeDiff % (1000 * 60)) / 1000)

    p.textContent = `Days: ${days} Hours: ${hours} Minutes: ${minutes} Seconds: ${seconds}`
}, 1000)