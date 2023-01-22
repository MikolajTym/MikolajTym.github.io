function getDateFromImportant() {
    var currentDate = new Date();
    var specificDate = new Date("2022-08-25 11:32:00");
    
    var milliseconds = currentDate - specificDate;
    var seconds = milliseconds / 1000;
    var minutes = milliseconds / (1000 * 60);
    var hours = milliseconds / (1000 * 60 * 60);
    var days = milliseconds / (1000 * 60 * 60 * 24);
    var diffInWeeks = milliseconds / (1000 * 60 * 60 * 24 * 7);

    days = days < 10 ? "0" + days : days;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    
    $("#days").html(Math.floor(days));
    $("#hours").html(Math.floor(hours-Math.floor(days)*24))
    $("#minutes").html(Math.floor(minutes-Math.floor(hours)*60))
    $("#seconds").html(Math.floor(seconds-Math.floor(minutes)*60))
}

window.onload = function() {
    getDateFromImportant;
    setInterval(getDateFromImportant, 1000)
}