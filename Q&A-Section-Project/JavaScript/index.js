let buttons = document.querySelectorAll('.open')
let information = document.querySelector('.panel')

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        let paragraph = buttons[i].nextElementSibling
        paragraph.classList.toggle('active')
        buttons[i].classList.toggle('line')
        
    })
}

