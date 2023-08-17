const timerEl = document.getElementById("timer");
const startButtonEl = document.getElementById("start");
const stopButtonEl = document.getElementById("stop");
const resetButtonEl = document.getElementById("reset");

let startTime = 0;
let elapsedTime = 0;
let timerInterval;


function startTimer(){
    startTime = Date.now() - elapsedTime;

    timerInterval = setInterval(()=>{
        elapsedTime = Date.now() - startTime;
        timerEl.textContent = formatTime(elapsedTime);
    },10);

}

function formatTime(){
    const miliseconds = Math.floor((elapsedTime % 1000)/10);

    const seconds = Math.floor(((elapsedTime % 1000 ) * 60) / 1000);
    return (
        (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
        +"."+
        (miliseconds > 9 ? miliseconds : "0" + miliseconds));
}

function stopTimer(){
    console.log("Stop")
}

function resetTimer(){
    console.log("Reset")
}


startButtonEl.addEventListener("click" , startTimer);
stopButtonEl.addEventListener("click" , stopTimer);
resetButtonEl.addEventListener("click" , resetTimer);

