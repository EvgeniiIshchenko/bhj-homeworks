"use strict";

const shownElements = Array.from(document.querySelectorAll(".reveal"));

window.addEventListener("scroll", function () {
  shownElements.forEach((item) => {
    const { top, bottom } = item.getBoundingClientRect();
    if (top < window.innerHeight) {
      item.classList.add("reveal_active");
    }

    if (bottom < 0 || top > window.innerHeight) {
      item.classList.remove("reveal_active");
    }
  });
});
