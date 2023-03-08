function getDateFromImportant(specificDate, countdown) {
    var currentDate = new Date();
    if (countdown) {
        var milliseconds = specificDate - currentDate;
    } else {
        var milliseconds = currentDate - specificDate;
    }
    var seconds = milliseconds / 1000;
    var minutes = milliseconds / (1000 * 60);
    var hours = milliseconds / (1000 * 60 * 60);
    var days = milliseconds / (1000 * 60 * 60 * 24);

    days = days < 10 ? "0" + days : days;
    days = Math.floor(days);
    hours = Math.floor((milliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    hours = hours < 10 ? "0" + hours : hours;
    minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);
    seconds = seconds < 10 ? "0" + seconds : seconds;
    $("#days").html(days);
    $("#hours").html(hours);
    $("#minutes").html(minutes);
    $("#seconds").html(seconds);
}

var interval;

window.onload = function() {
    getDateFromImportant(new Date("2022-08-25 11:32:00"));
    interval = setInterval(function() {getDateFromImportant(new Date("2022-08-25 11:32:00")); }, 1000);
}

function button1(date=new Date("2022-08-25 11:32:00")) {
    clearInterval(interval);
    getDateFromImportant(date, countdown=false);
    interval = setInterval(function() { getDateFromImportant(date, countdown=false); }, 1000);
}

function button2(date=new Date("2027-10-23 00:00:00")) {
    clearInterval(interval);
    getDateFromImportant(date, countdown=true);
    interval = setInterval(function() { getDateFromImportant(date, countdown=true); }, 1000);
}