let startBtn = document.querySelector('#startBtn')
let stopBtn = document.querySelector('#pauseBtn')
let resetBtn= document.querySelector('#resetBtn')
let displayTime = document.querySelector('.DisplayTime')

let msec = 0;
let sec = 0;
let min = 0;

let timerId = null;
startBtn.addEventListener("click", function(){
    if(timerId!=null){
        clearInterval(timerId)
    }
    timerId = setInterval(startTime,10)
})
stopBtn.addEventListener("click", function(){
    clearInterval(timerId)
})
resetBtn.addEventListener("click", function(){
    clearInterval(timerId)
    msec = sec = min = 0
    displayTime.innerHTML = "00 : 00 : 00"
})

function startTime(){
    msec++;
    if(msec==100){
        msec= 0;
        sec++;
        if(sec==60){
            sec = 0;
            min++;
        }
    }

    let msecString = msec<10 ? `0${msec}` : msec
    let secString = sec<10 ? `0${sec}` : sec
    let minString = min<10 ? `0${min}` : min

    displayTime.innerHTML = `${minString}m : ${secString}s : ${msecString}ms`
}