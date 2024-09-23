const container = document.querySelector(".container");

const careers = ["Abdulmajid Aman", "Student", "Web Developer",]

let careerIndex = 0

let characterIndex = 0
// updateText()

// function updateText() {
// //     characterIndex ++
// container.innerHTML = `
// <h1> I am ${careers[careerIndex].slice(0,1) === "A" ? "" : "a"} ${careers[careerIndex].slice(0, characterIndex)} </h1>
//  `
//  if (characterIndex === careers[careerIndex].length) {
//    careerIndex ++
//    characterIndex = 0
//  }

//  if (careerIndex === careers.length) {
//    careerIndex = 0
//  }

//  setTimeout(updateText, 200)
// }

let time = new Date()
let hour = time.getHours()
let minute = time.getMinutes()
let second = time.getSeconds()

const p = document.createElement('p')
container.appendChild(p)



function tn() {
  p.textContent = `Time: ${hour} : ${minute} : ${second}`

}

setInterval(tn, 1000)



