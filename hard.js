window.onload = alert("PLEASE SWITCH TO FULL SCREEN MODE ON A DESKTOP FOR BEST EXPERIENCE")

let base = document.createElement("div");
let countDown = document.createElement("div");
let panel = document.createElement('div')
let scoreBoard = document.createElement('div')
let heading = document.createElement('div')
let main = document.createElement('div')

//assigning ID
base.setAttribute("id", "base");
countDown.setAttribute("id", "countdown");
panel.setAttribute("id", "panel");
scoreBoard.setAttribute("id", "scoreboard");
heading.setAttribute('id','heading')
main.setAttribute('id','main')


heading.innerHTML = "MINESWEEPER (HARD!)"
base.setAttribute("style", "height:75%; width: 75%");


//making layout

function box() {
  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 30; j++) {
      square(i * 16, j * 30);
    }
  }
}
let id = 0;
function square(left, top) {
  let newSquare = document.createElement("div");
  newSquare.style.left = left * 3.5 + "px";
  newSquare.style.top = top * 2 + "px";
  newSquare.setAttribute("class", "boxes");
  newSquare.setAttribute("id", `${id}`);
  base.appendChild(newSquare);
  id++;
}

box();

//setting bombs

window.onload = function setBombs() {
  let arr = [];
  for (let i = 0; i < 100; i++) {
    arr.push(Math.floor(Math.random() * 480));
  }

  for (let i = 0; i < 100; i++) {
    document.getElementById(`${arr[i]}`).value = "X";
  }
};

//set values in cells as per no. of X
function setValues() {
  let count;
  for (let i = 0; i < 480; i++) {
    count = 0;
    let bb = document.getElementById(`${i}`);
    if (bb.value != "X") {
     
      if (
        document.getElementById(`${i - 31}`) != null &&
        document.getElementById(`${i - 31}`).value == "X"
      )
        count++;
      if (
        document.getElementById(`${i - 30}`) != null &&
        document.getElementById(`${i - 30}`).value == "X"
      )
        count++;
      if (
        document.getElementById(`${i - 29}`) != null &&
        document.getElementById(`${i - 29}`).value == "X"
      )
        count++;
      if (
        document.getElementById(`${i - 1}`) != null &&
        document.getElementById(`${i - 1}`).value == "X"
      )
        count++;
      if (
        document.getElementById(`${i + 1}`) != null &&
        document.getElementById(`${i + 1}`).value == "X"
      )
        count++;
      if (
        document.getElementById(`${i + 29}`) != null &&
        document.getElementById(`${i + 29}`).value == "X"
      )
        count++;
      if (
        document.getElementById(`${i + 30}`) != null &&
        document.getElementById(`${i + 30}`).value == "X"
      )
        count++;
      if (
        document.getElementById(`${i + 31}`) != null &&
        document.getElementById(`${i + 31}`).value == "X"
      )
        count++;
    }
    if (count != 0) bb.value = count;
  }
}

setTimeout(setValues, 500);

//recursive cleaning of minebox
function addClick() {
  for (let i = 0; i < 480; i++) {
    document.getElementById(`${i}`).addEventListener("click", (e) => {
    
      if (document.getElementById(`${i}`).value == "X") {
        document.getElementById(`${i}`).innerHTML = document.getElementById(`${i}`).value
        document.getElementById(`${i}`).style.backgroundColor = "red"
        alert("Game Over | Well Played | Your score is : " + score  );
        location.reload();
      }

      clean(i)
      points()
    });
  }
}

// pseudo code! main beast code took 5 hours! i am dumb kill me!
function clean(i){

    if(document.getElementById(`${i}`).value == 'X'){
        document.getElementById(`${i}`).innerHTML = document.getElementById(`${i}`).value
        return;
    }
    

    if( document.getElementById(`${i}`).value!=undefined){
        document.getElementById(`${i}`).style.backgroundColor = "green"
        document.getElementById(`${i}`).innerHTML = document.getElementById(`${i}`).value
        return
    }
    
  //
  if(document.getElementById(`${i}`).style.backgroundColor == "green")
  return
    if(document.getElementById(`${i}`).value==undefined){
       
        document.getElementById(`${i}`).style.backgroundColor = "green"
        if(document.getElementById(`${i}`).value==undefined)
        document.getElementById(`${i}`).innerHTML = ""
        if(i%30==0){
            clean(i-30)
            clean(i-29)
            clean(i+30)
            clean(i+31)
            clean(i+1)
            return
        }

        if((i+1)%30 == 0 ){
            clean(i+30)
            clean(i-30)
            clean(i-31)
            clean(i-1)
            clean(i+29)
            return
        }
        if(i>=1 && i<=28)
        {
            clean(i+30)
            clean(i+31)
            clean(i+1)
            clean(i-1)
            clean(i+29)
            return
        }

        if(i>=463 && i<=479){
            clean(i-30)
            clean(i-31)
            clean(i+1)
            clean(i-1)
            clean(i-29)
            return
        }
        else
        {
            clean(i+1)
            clean(i-1)
            clean(i+30)
            clean(i-30)
            clean(i-31)
            clean(i+31)
            clean(i+29)
            clean(i-29)
            
        }
 

    }
  
}


setTimeout(addClick, 1000);




let score = 0;
// add points

function points(){
    score = 0;
    for(let i = 0; i<480; i++){
        let green = document.getElementById(`${i}`)
        if(green.style.backgroundColor == "green")
        score++
    }
    scoreBoard.innerHTML = "SCORE: " + score;

    if(score == 380)
    alert("CONGRATS! YOU'VE WON THE GAME!")
}

scoreBoard.innerHTML = "SCORE: 0"

//countdown
countDown.innerHTML = 005 + ":" + 002;
startTimer();

function startTimer() {
  var presentTime = countDown.innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond(timeArray[1] - 1);
  if (s == 59) {
    m = m - 1;
  }

  countDown.innerHTML = m + ":" + s;
  //console.log(m);
  setTimeout(startTimer, 1000);
  if(m==0 && s==0){
      alert("Game Over! |" + " Your final Score is : " + score)

      location.reload()
  }
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {
    sec = "0" + sec;
  }
  if (sec < 0) {
    sec = "59";
  }
  return sec;
}

//side panel DOM

panel.appendChild(countDown)
panel.appendChild(scoreBoard)
main.appendChild(base)
main.appendChild(panel)
document.body.appendChild(heading)
document.body.appendChild(main)
