let [seconds, minutes, hours, digit] = [0, 0, 0, 0];
let timeDisplay = document.querySelector(".time-display");
let int = null;

document.getElementById("start-btn").addEventListener("click", () => {
    if (int !== null){
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
});

document.getElementById("pause-btn").addEventListener("click", () => {
    clearInterval(int);
});

document.getElementById("reset-btn").addEventListener("click", () => {
    clearInterval(int);
    [seconds, minutes, hours] = [0, 0, 0];
    timeDisplay.innerHTML = "00 : 00 : 00";
});

function displayTimer(){
    digit += 1;
    if(digit == 60) {
        digit = 0;
        seconds++;
        if(seconds == 60) {
            seconds = 0;
            minutes++;
            if(minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    timeDisplay.innerHTML = `${h} : ${m} : ${s}`;
}