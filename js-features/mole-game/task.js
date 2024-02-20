"use strict";

const holes = Array.from(document.querySelectorAll('.hole'));
const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

const getHole = (index) => document.getElementById(`hole${index}`);

holes.forEach((hole, index) => {
    hole.addEventListener('click', function(event) {
        if (getHole(index + 1).classList.contains('hole_has-mole')) {
            dead.textContent ++;

            if (dead.textContent === '10') {
                alert('Победа!');
                dead.textContent = '0';
                lost.textContent = '0';
            }

        } else if (!getHole(index + 1).classList.contains('hole_has-mole')) {
            lost.textContent ++;

            if (lost.textContent === '5') {
                alert('Поражение(');
                dead.textContent = '0';
                lost.textContent = '0';
            }

        }
    });
});