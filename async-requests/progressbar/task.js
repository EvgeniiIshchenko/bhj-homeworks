"use strict";

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const progress = document.getElementById("progress");

  const xhr = new XMLHttpRequest();

  xhr.upload.onprogress = function (event) {
    const { loaded, total } = event;
    progress.value = Math.round(loaded / total);
  };

  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
  const formData = new FormData(form);
  xhr.send(formData);
});
