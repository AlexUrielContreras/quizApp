var buttonEl = document.querySelector(".start-btn")
var timerEl = document.querySelector(".timer")


var countDown = function () {
    var timeLeft = 60

    var timer = setInterval(function() {
        if (timeLeft > 0) {
        timerEl.textContent = timeLeft;
        timeLeft--
        }
    }, 1000)
};

    
























buttonEl.addEventListener("click" , countDown);