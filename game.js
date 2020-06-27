let base = document.createElement("div");
base.setAttribute("id", "base");
let countDown = document.createElement("div");
countDown.setAttribute("id", "countdown");
base.setAttribute("style", "height:75%; width: 75%");

//making layout

function box(){
    for(let i = 0; i<16; i++){
        for(let j = 0; j<16 ; j++){
            square(i*16,j*16)
        }
    }
}

function square( left,top){
    let newSquare = document.createElement('div')
    newSquare.style.left = left*2 + "px";
    newSquare.style.top = top*2 + "px"
    newSquare.setAttribute('class','boxes')
    base.appendChild(newSquare)
}

box()

//countdown
countDown.innerHTML =
  005 + ":" + 002;
startTimer();

function startTimer() {
  var presentTime = countDown.innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  
  countDown.innerHTML =
    m + ":" + s;
  console.log(m)
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; 
  if (sec < 0) {sec = "59"};
  return sec;
}


document.body.appendChild(base);
document.body.appendChild(countDown);
