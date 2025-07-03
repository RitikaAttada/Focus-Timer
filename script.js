const start = document.getElementById('start');
const startt = document.getElementById('startt');
const timer = document.getElementById('timer');
const heading = document.getElementById('heading');
const stopit = document.getElementById('stop');
const reset = document.getElementById('reset');
const min = document.getElementById('min');
const alarm = new Audio('alarm_audio.wav');
let interval = null;
let minFocused = 0;
let secFocused = 0;
function startTimer(){

    if (interval!=null) return;

    interval = setInterval(function(){
    let [minutes, seconds] = timer.innerHTML.split(":").map(Number);
    if (seconds === 0 && minutes === 0) {
        alert("Time's up");
        clearInterval(interval); 
        alarm.play();
        return;
    }
    if (seconds === 0) {
        minutes = minutes-1;
        seconds=59; 
    }
    else {
        seconds -=1;
    }
    secFocused+=1;
    localStorage.setItem('second', JSON.stringify(secFocused));
    timer.innerHTML = `${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;
    },1000);
}

function stopTimer(){
    clearInterval(interval);
    interval=null;
}

start.addEventListener('click', ()=>{
    heading.style.display = "block";
    heading.innerHTML='FOCUS';
    startTimer();
    startt.style.display = "none";
});

stopit.addEventListener('click', ()=>{
    heading.innerHTML = 'PAUSED';
    stopTimer();
    startt.style.display = "flex";
    
});

reset.addEventListener('click', ()=>{
    heading.innerHTML=`TIMER`;
    heading.style.display = "block";
    timer.innerHTML = '25:00';
    clearInterval(interval);
    interval = null;
    startt.style.display = "flex";
    let second = JSON.parse(localStorage.getItem('second'));
    minFocused += Math.floor(second/60); 
    min.innerHTML = `minutes focused: ${minFocused}`;
});
window.onload = function(){
   let second = JSON.parse(localStorage.getItem('second'));
   if (!second) second=0;
   minFocused += Math.floor(second/60); 
   min.innerHTML = `minutes focused: ${minFocused}`;
} 
