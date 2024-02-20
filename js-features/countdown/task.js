"use strict";

const timerReduce = function() {
    const timer = document.getElementById('timer');
    timer.textContent -= 1;

    if (timer.textContent === '0') {
        alert('Вы победили в конкурсе!')
        clearInterval(intervalId);
    }

};

const intervalId = setInterval(timerReduce, 1000);