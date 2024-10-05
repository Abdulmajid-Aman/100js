let navHeader = document.querySelector('.nav-bar').children
console.log(navHeader);

for (let i = 0; i < navHeader.length; i++) {
    navHeader[i].addEventListener('click', (e) => {
        let index = i
        displayText(index)
    })
}


function displayText(index) {
    let divText = document.querySelector('.content-container').children
    for (let i = 0; i < divText.length; i++) {
        divText[i].classList.remove('active')
    }
    divText[index].classList.add('active')
    
}

