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
let id = 0;
function square( left,top){
    let newSquare = document.createElement('div')
    newSquare.style.left = left*2 + "px";
    newSquare.style.top = top*2 + "px"
    newSquare.setAttribute('class','boxes')
    newSquare.setAttribute('id',`${id}`)
    base.appendChild(newSquare)
    id++
}

box()

//setting bombs

window.onload = function setBombs(){
    let arr = [];
    for(let i = 0; i<40; i++){
        arr.push(Math.floor(Math.random()*256))
    }

    for(let i = 0; i<40; i++){
        document.getElementById(`${arr[i]}`).innerHTML = 'X'
        
    }
    }


//set values in cells as per no. of X
function setValues(){
let count;
for(let i = 0; i<256; i++){
    count = 0;
    let bb = document.getElementById(`${i}`)
    if(bb.innerHTML!='X')
    // continue;

    // else
    {
        if(document.getElementById(`${i-17}`) != null && document.getElementById(`${i-17}`).innerHTML =='X')
            count++;
        if(document.getElementById(`${i-16}`) != null && document.getElementById(`${i-16}`).innerHTML =='X')
            count++;
        if(document.getElementById(`${i-15}`) != null && document.getElementById(`${i-15}`).innerHTML =='X')
            count++;
        if(document.getElementById(`${i-1}`) != null && document.getElementById(`${i-1}`).innerHTML =='X')
            count++; 
        if(document.getElementById(`${i+1}`) != null && document.getElementById(`${i+1}`).innerHTML =='X')
            count++; 
        if(document.getElementById(`${i+15}`) != null && document.getElementById(`${i+15}`).innerHTML =='X')
            count++; 
        if(document.getElementById(`${i+16}`) != null && document.getElementById(`${i+16}`).innerHTML =='X')
            count++;
        if(document.getElementById(`${i+17}`) != null && document.getElementById(`${i+17}`).innerHTML =='X')
            count++;
            
        
    }
    if(count!=0)
    bb.innerHTML = count
}

}

setTimeout(setValues,1000)





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
//document.body.appendChild(countDown);
