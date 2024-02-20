"use strict";

const counter = document.getElementById('clicker__counter');

const cookie = document.getElementById('cookie');

cookie.onclick = function() {
    counter.textContent ++;
    cookie.width = 220;
    cookie.height = 160;
    if (!(counter.textContent % 2)) {
      cookie.width = 200;
      cookie.height = 129;
    }
};

