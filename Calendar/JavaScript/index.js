let d= new Date
let month = d.getMonth()
let day = d.getDay()
let date = d.getDate()
let year = d.getFullYear()

let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']

let today = days[day]
let this_month = months[month]
let short = today.split(0, 3)

let all_days = document.querySelectorAll('td')

let h1 = document.querySelector('.month')
let p = document.querySelector('p')
p.textContent = short + " " + this_month+ " " + date + " " + year
h1.textContent = this_month.toUpperCase()

for (let i = 0; i < all_days.length; i ++) {
    if (all_days[i].textContent == date) {
        all_days[i].classList.add('active')
    }
}

