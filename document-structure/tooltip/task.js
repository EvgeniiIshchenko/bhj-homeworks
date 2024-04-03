"use strict";

const tooltips = Array.from(document.querySelectorAll(".has-tooltip"));

tooltips.forEach((item) => {
  const tooltip = document.createElement("div");
  item.insertAdjacentElement("afterend", tooltip);
  tooltip.classList.add("tooltip");
  tooltip.textContent = item.title;

  item.addEventListener("click", (e) => {
    e.preventDefault();
    const coords = item.getBoundingClientRect();
    tooltip.style.left = coords.left + "px";
    tooltip.style.top = coords.bottom + "px";
    tooltip.classList.toggle("tooltip_active");
  });
});
