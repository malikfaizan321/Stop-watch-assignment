var hours = 5;
var minutes = 5;
var seconds = 5;
var miliseconds = 100;

var getHours = document.getElementById("hours");
var getMinutes = document.getElementById("minutes");
var getSeconds = document.getElementById("seconds");
var getMiliseconds = document.getElementById("miliseconds");

var interval;

function stopWatch() {
    miliseconds--;
    getMiliseconds.innerHTML = miliseconds;
    if (miliseconds <= 0) {
        seconds--;
        getSeconds.innerHTML = seconds;
        miliseconds = 100;
    } else if (seconds <= 0) {
        minutes--;
        getMinutes.innerHTML = minutes;
        seconds = 5;
    } else if (minutes <= 0) {
        hours--;
        getHours.innerHTML = hours;
        minutes = 5;
    } else if (hours <= 0) {
        hours--;
        getHours.innerHTML = hours;
        resetTime();
    }
}

function startTime() {
    interval = setInterval(stopWatch, 10);
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
    document.getElementById("reset").disabled = false;
}

function stopTime() {
    clearInterval(interval);
    document.getElementById("stop").disabled = true;
    document.getElementById("start").disabled = false;
    document.getElementById("reset").disabled = false;
}

function resetTime() {
    hours = 5;
    minutes = 5;
    seconds = 5;
    miliseconds = 100;

    getHours.innerHTML = hours;
    getMinutes.innerHTML = minutes;
    getSeconds.innerHTML = seconds;
    getMiliseconds.innerHTML = miliseconds;

    stopTime();

    document.getElementById("reset").disabled = true;
    document.getElementById("stop").disabled = false;
    document.getElementById("start").disabled = false;
}