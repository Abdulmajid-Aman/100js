let rock = document.querySelector('.rock').textContent
let paper = document.querySelector('.paper').textContent
let scissors = document.querySelector('.scissors').textContent

let gameIcons = document.querySelector('.game-icons')

let gameIconsArray = [rock, paper, scissors]

let userWins = 0
let computerWins = 0

let message = document.querySelector('.game-info')
let scoreboard = document.querySelector('.score')


gameIcons.addEventListener('click', (e) => {
    let user = e.target.textContent
    let computer = gameIconsArray[Math.floor(Math.random() * 3)]
    

    // User win circumstances
     if(user === paper && computer === rock || 
        user === rock && computer === scissors ||
        user === scissors && computer === paper
     ) {
         userWins++
         message.textContent = `You win! ${user} beats ${computer}`
         scoreboard.textContent = `Your score: ${userWins} Computer score: ${computerWins}`
     } else if (user === rock && computer === paper ||
                user === scissors && computer === rock ||
                user === paper && computer === scissors
     ) {
        computerWins++
        message.textContent = `You lose! ${computer} beats ${user}`
        scoreboard.textContent = `Your score: ${userWins} Computer score: ${computerWins}`
     } else {
         message.textContent = "It's a tie!"
     }
})

