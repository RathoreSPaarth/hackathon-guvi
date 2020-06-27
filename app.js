window.onload = alert("PLEASE SWITCH TO FULL SCREEN MODE ON A DESKTOP FOR BEST EXPERIENCE")

document.body.setAttribute('style',"background-image: url('bg.jpg'); height: 100%; width: 100%")
//easy
let startEasy = document.createElement('button')
let linkEasy = document.createElement('a')
linkEasy.setAttribute('href','easy.html')//chose easy, medium hard
startEasy.innerHTML = "EASY"
//medium
let startMedium = document.createElement('button')
let linkMedium = document.createElement('a')
linkMedium.setAttribute('href','game.html')//chose easy, medium hard
startMedium.innerHTML = "MEDIUM"
//hard
let startHard = document.createElement('button')
let linkHard = document.createElement('a')
linkHard.setAttribute('href','hard.html')//chose easy, medium hard
startHard.innerHTML = "HARD"

//
let btn = document.createElement('div')
btn.setAttribute('id','btn')
let title = document.createElement('h1')
title.innerHTML = "MINESWEEPER GAME"
// //start.setAttribute('style',"height: 20%; width: 50%; border: none; border-radius: 2%; background-color: #7295cc; z-index:1; position: absolute;")
// start.setAttribute('onclick',"href = 'game.html'")

let heading = document.createElement('div')
heading.appendChild(title)

linkEasy.appendChild(startEasy)
linkMedium.appendChild(startMedium)
linkHard.appendChild(startHard)

btn.appendChild(linkEasy)
btn.appendChild(linkMedium)
btn.appendChild(linkHard)

document.body.appendChild(heading)
document.body.appendChild(btn)
