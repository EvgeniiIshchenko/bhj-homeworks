"use strict";

const cases = Array.from(document.querySelectorAll(".rotator__case"));

let i = 0;

setInterval(() => {
  if (i === cases.length - 1) {
    cases[i].classList.remove("rotator__case_active");
    i = 0;
  }

  if (cases[i].classList.contains("rotator__case_active")) {
    cases[i].classList.remove("rotator__case_active");
    cases[i].nextElementSibling.classList.add("rotator__case_active");
    i++;
  }

  cases[i].classList.add("rotator__case_active");
}, 1000);
