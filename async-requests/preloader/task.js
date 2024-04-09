"use strict";
const loader = document.getElementById("loader");
const items = document.getElementById("items");

const xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === xhr.DONE) {
    loader.classList.remove("loader_active");
    const response = xhr.response.response.Valute;
    for (let prop in response) {
      const itemCode = response[prop].CharCode;
      const itemValue = response[prop].Value;

      items.insertAdjacentHTML(
        "afterbegin",
        `
            <div class="item">

                <div class="item__code">
                    ${itemCode}
                </div>

                <div class="item__code">
                    ${itemValue}
                </div>

                <div class="item__currency">
                    <strong>руб.</strong>
                </div>
                
            </div>
            `
      );
    }
  }
});

xhr.open(
  "GET",
  "https://students.netoservices.ru/nestjs-backend/slow-get-courses"
);
xhr.responseType = "json";

xhr.send();
