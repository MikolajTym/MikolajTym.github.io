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
    var years = milliseconds / (1000 * 60 * 60 * 24 * 365);

    years = Math.floor(years);
    days = Math.floor((milliseconds % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
    days = days < 10 ? "0" + days : days;
    hours = Math.floor((milliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    hours = hours < 10 ? "0" + hours : hours;
    minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);
    seconds = seconds < 10 ? "0" + seconds : seconds;
    $("#years").html(years);
    $("#days").html(days);
    $("#hours").html(hours);
    $("#minutes").html(minutes);
    $("#seconds").html(seconds);
}

var interval;

window.onload = function() {
    $("#image-container").hide();
    getDateFromImportant(new Date("2022-08-25 11:32:00"));
    interval = setInterval(function() {getDateFromImportant(new Date("2022-08-25 11:32:00")); }, 1000);
}

function button1(date=new Date("2022-08-25 11:32:00")) {
    clearInterval(interval);

    $("#image-container").hide();
    $("#counter-box").show();
    $("#years").parent().show();
    $("#days").parent().show();
    $(".counter-box").css("height", "75%");

    getDateFromImportant(date, countdown=false);
    interval = setInterval(function() { getDateFromImportant(date, countdown=false); }, 1000);
}

function button2(date=new Date("2025-07-05 00:00:00")) {
    clearInterval(interval);

    $("#image-container").hide();
    $("#counter-box").show();
    $("#years").parent().show();
    $("#days").parent().show();
    $(".counter-box").css("height", "75%");

    getDateFromImportant(date, countdown=true);
    interval = setInterval(function() { getDateFromImportant(date, countdown=true); }, 1000);
}

var imageSchedule = {
    "07:00": "imgs/07:00.png",
    "09:15": "imgs/09:15.png",
    "10:30": "imgs/10:30.png",
    "11:00": "imgs/11:00.png",
    "12:00": "imgs/12:00.png",
    "12:05": "imgs/12:05.png",
    "12:30": "imgs/12:30.png",
    "13:00": "imgs/13:00.png",
    "14:00": "imgs/14:00.png",
    "14:05": "imgs/14:05.png",
    "15:00": "imgs/15:00.png",
    "17:38": "imgs/17:38.png",
};

function getClosestImage() {
    var currentTime = new Date();
    var closestTime = null;
    var closestImagePath = null;

    for (var time in imageSchedule) {
        var [hours, minutes] = time.split(':');
        var scheduledTime = new Date();
        scheduledTime.setHours(hours, minutes, 0, 0);

        if (scheduledTime > currentTime) {
            if (closestTime === null || scheduledTime < closestTime) {
                closestTime = scheduledTime;
                closestImagePath = imageSchedule[time];
            }
        }
    }

    return { imagePath: closestImagePath, timeUntil: closestTime - currentTime };
}

function updateCountdownToImage(timeUntil) {
    var seconds = Math.floor((timeUntil / 1000) % 60);
    var minutes = Math.floor((timeUntil / (1000 * 60)) % 60);
    var hours = Math.floor((timeUntil / (1000 * 60 * 60)) % 24);

    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    hours = hours < 10 ? "0" + hours : hours;

    $("#hours").html(hours);
    $("#minutes").html(minutes);
    $("#seconds").html(seconds);
}

function button3() {
    clearInterval(interval);
    $("#image-container").show();
    $("#years").parent().hide();
    $("#days").parent().hide();
    $(".counter-box").css("height", "auto");
    var closestImage = getClosestImage();
    var imagePath = closestImage.imagePath;
    var timeUntil = closestImage.timeUntil;

    $("#image-container").html('<img src="' + imagePath + '" class="responsive-image">');

    interval = setInterval(function() {
        timeUntil -= 1000;
        if (timeUntil <= 0) {
            location.reload();
        } else {
            updateCountdownToImage(timeUntil);
        }
    }, 1000);
}
