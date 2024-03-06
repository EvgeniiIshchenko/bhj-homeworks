"use strict";

const list = document.querySelector(".dropdown__list");
const value = document.querySelector(".dropdown__value");
const links = Array.from(document.querySelectorAll(".dropdown__link"));

value.addEventListener("click", function (event) {
  list.classList.toggle("dropdown__list_active");
});

links.forEach((item) => {
  item.addEventListener("click", function (event) {
    value.textContent = item.textContent;
    list.classList.remove("dropdown__list_active");
    event.preventDefault();
  });
});
