"use strict";

const tabs = Array.from(document.querySelectorAll(".tab"));
const contents = Array.from(document.querySelectorAll(".tab__content"));

tabs.forEach((tab) => {
  function active(id) {
    for (let i = 0; i < tabs.length; i++) {
      if (i !== id) {
        tabs[i].classList.remove("tab_active");
      }
      tab.classList.add("tab_active");
    }

    contents.forEach((content, index) => {
      content.classList.remove("tab__content_active");
      if (index === id) {
        content.classList.add("tab__content_active");
      }
    });
  }

  tab.addEventListener("click", function () {
    let id = tabs.indexOf(tab);

    active(id);
  });
});
