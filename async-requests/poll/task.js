"use strict";

const xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === xhr.DONE) {
    const pollTitle = document.getElementById("poll__title");
    const pollAnswers = document.getElementById("poll__answers");
    pollTitle.innerText = xhr.response.data.title;

    xhr.response.data.answers.forEach((item) => {
      pollAnswers.insertAdjacentHTML(
        "afterbegin", `
          <button class="poll__answer">
            ${item}
          </button>`
      );
    });

    const answers = document.querySelectorAll(".poll__answer");

    answers.forEach((answer) => {
      answer.addEventListener("click", () => {
        alert("Спасибо, ваш голос засчитан!");
      });
    });
  }
});

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
xhr.responseType = "json";
xhr.send();