"use strict";

const sizes = Array.from(document.querySelectorAll(".font-size"));
const book = document.getElementById("book");

sizes.forEach((size) => {
  function active(id) {
    for (let i = 0; i < sizes.length; i++) {
      size.classList.add("font-size_active");
      if (i !== id) {
        sizes[i].classList.remove("font-size_active");
      }
    }

    book.classList.remove("book_fs-big");
    book.classList.remove("book_fs-small");

    if (
      size.classList.contains("font-size_active") &&
      size.classList.contains("font-size_small")
    ) {
      book.classList.add("book_fs-small");
    } else if (
      size.classList.contains("font-size_active") &&
      size.classList.contains("font-size_big")
    ) {
      book.classList.add("book_fs-big");
    }
  }

  size.addEventListener("click", function (event) {
    let id = sizes.indexOf(size);
    event.preventDefault();
    active(id);
  });
});
