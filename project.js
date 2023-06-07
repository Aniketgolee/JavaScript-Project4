//variables for buttons
let startstopBtn = document.querySelector("#startstopBtn");
let reset = document.querySelector("#resetBtn");

//Variables for time values
let second = 0;
let minute = 0;
let hour = 0;

let leadingSecond = 0;
let leadingMinute = 0;
let leadingHour =0;

//variables for set interval and timerstatus

let timerInterval = null;
let timerStatus = "stopped";

//stop watch Function
function stopwatch(){
    second++
    if(second/60===1){
        second=0;
        minute++;
    }
    if(minute/60===1){
        minute=0;
        hour++;
    }
    if(second<10){
        leadingSecond = "0"+second.toString();

    }
    else{
        leadingSecond = second;
    }
    if(minute<10){
        leadingMinute = "0"+minute.toString();

    }
    else{
        leadingMinute = minute;
    }
    if(hour<10){
        leadingHour = "0"+hour.toString();

    }
    else{
        leadingHour = hour;
    }

    let displyTimer = document.getElementById("timer").innerText =
    leadingHour + ":" + leadingMinute + ":" + leadingSecond;
}


startstopBtn.addEventListener('click',function(){
    if(timerStatus ==="stopped"){
        timerInterval = window.setInterval(stopwatch,1000);
        document.getElementById('startstopBtn').innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
        timerStatus = "started";
    }else{
        window.clearInterval(timerInterval);
        document.getElementById("startstopBtn").innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
        timerStatus= "stopped";
    }
})


//reset button

reset.addEventListener('click',function(){
    window.clearInterval(timerInterval);
    second =0;
    minute = 0;
    hour =0;
    document.getElementById('timer').innerHTML ="00:00:00"
})

