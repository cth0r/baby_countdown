const days_div = document.getElementById('days');
const hours_div = document.getElementById('hours');
const minutes_div = document.getElementById('mins');
const seconds_div = document.getElementById('seconds');

const babyTime = "Nov 11, 2021";

function countdown() {
    const babyTimeDate = new Date(babyTime);
    const currentDate = new Date();

    const totalSeconds = (babyTimeDate - currentDate) / 1000;

    const minutes = Math.floor(totalSeconds / 60) % 60;
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const seconds = Math.floor(totalSeconds % 60);

    days_div.innerHTML = timeFormat(days);
    hours_div.innerHTML = timeFormat(hours);
    minutes_div.innerHTML = timeFormat(minutes);
    seconds_div.innerHTML = timeFormat(seconds);
    //console.log(days, hours, minutes, seconds);
}

function timeFormat(time) {
    return time < 10 ? (`0${time}`) : time;
}

countdown();
timeFormat();

setInterval(countdown, 1000);

