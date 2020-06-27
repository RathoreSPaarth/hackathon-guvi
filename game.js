let base = document.createElement("div");
let countDown = document.createElement("div");
countDown.setAttribute("id", "countdown");
base.setAttribute("style", "height:75%; width: 75%");

for (let row = 1; row <= 16; row++) {
  let x = document.createElement("div");
  x.setAttribute("id", `row-${row}`);
  x.setAttribute("class", "row");
  x.setAttribute("style", "border: 1px solid black; height: 10%; width:80%");
  x.innerHTML = "check";
  base.appendChild(x);
}

for (let col = 1; col <= 16; col++) {
  let x = document.createElement("div");
  x.setAttribute("id", `row-1-col-${col}`);
  x.setAttribute("class", "col");
  x.setAttribute("style", "border: 1px solid black; height: 10%; width:80%");
}

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
