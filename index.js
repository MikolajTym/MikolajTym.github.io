function getDateFromImportant() {
    var currentDate = new Date();
    var specificDate = new Date("2022-08-25 11:32:00");
    
    var milliseconds = currentDate - specificDate;
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

window.onload = function() {
    getDateFromImportant();
    setInterval(getDateFromImportant, 1000)
}
