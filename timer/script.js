let start = document.getElementById("start")
let timeInSec;
let timeIntervalId;
let pause = document.getElementById("pause")
let reset = document.getElementById("reset")






start.addEventListener("click",function(){
    getData()
})


function getData(){
    
    clearInterval(timeIntervalId)

    let hrs = Number(document.getElementById("hrs").value)
    let mins = Number(document.getElementById("mins").value)
    let secs = Number(document.getElementById("secs").value)

    timeInSec = (hrs*3600)+(mins*60)+secs;
    timeIntervalId = setInterval(function(){

        timeInSec--;
        let newHrs = Math.floor(timeInSec/3600)
        let newMins = Math.floor((timeInSec%3600)/60)
        let newSecs = Math.floor(timeInSec%60)


         Number(document.getElementById("hrs").value = newHrs)
        Number(document.getElementById("mins").value = newMins)
        Number(document.getElementById("secs").value = newSecs)

        if(timeInSec<=0){
            alert("time is up")
            clearInterval(timeIntervalId)
            reset()
        }
    },1000)
}

pause.addEventListener("click",function(){
    clearInterval(timeIntervalId)
    timeIntervalId = null
})

reset.addEventListener("click",function(){
    clearInterval(timeIntervalId)
    timeIntervalId = null
    document.getElementById("hrs").value = 0
    document.getElementById("mins").value = 0
    document.getElementById("secs").value = 0
})

