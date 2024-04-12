"use strict";

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const progress = document.getElementById("progress");

  const xhr = new XMLHttpRequest();

  xhr.addEventListener("readystatechange", () => {
    switch (xhr.readyState) {
      case xhr.OPENED:
        progress.value = 0.25;
        break;
      case xhr.HEADERS_RECEIVED:
        progress.value = 0.5;
        break;
      case xhr.LOADING:
        progress.value = 0.75;
        break;
      case xhr.DONE:
        progress.value = 1;
        break;
    }
  });

  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
  const formData = new FormData(form);
  xhr.send(formData);
});
