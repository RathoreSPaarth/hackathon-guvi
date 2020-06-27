document.body.setAttribute('style',"background-image: url('bg.jpg'); height: 100%; width: 100%")

let start = document.createElement('button')
let link = document.createElement('a')
link.setAttribute('href','game.html')
start.innerHTML = "START"
let btn = document.createElement('div')
btn.setAttribute('id','btn')
let title = document.createElement('h1')
title.innerHTML = "MINESWEEPER GAME"
// //start.setAttribute('style',"height: 20%; width: 50%; border: none; border-radius: 2%; background-color: #7295cc; z-index:1; position: absolute;")
// start.setAttribute('onclick',"href = 'game.html'")

let heading = document.createElement('div')
heading.appendChild(title)
link.appendChild(start)
btn.appendChild(link)
document.body.appendChild(heading)
document.body.appendChild(btn)
