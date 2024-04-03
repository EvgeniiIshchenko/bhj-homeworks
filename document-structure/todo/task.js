"use strict";

const tasksForm = document.getElementById("tasks__form");
const taskInput = document.getElementById("task__input");
const taskAdd = document.getElementById("tasks__add");
const tasksList = document.getElementById("tasks__list");

function workTask(inputedTask) {
  const task = document.createElement("div");
  const taskTitle = document.createElement("div");
  const taskRemove = document.createElement("a");
  task.classList.add("task");
  taskTitle.classList.add("task__title");
  taskTitle.textContent = inputedTask;
  taskRemove.href = "#";
  taskRemove.classList.add("task__remove");
  taskRemove.innerHTML = "&times";
  task.appendChild(taskTitle);
  task.appendChild(taskRemove);
  tasksList.appendChild(task);

  taskRemove.addEventListener("click", (e) => {
    e.preventDefault();
    task.remove();
  });
}

tasksForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputedTask = taskInput.value;
  if (inputedTask) {
    workTask(inputedTask);
  }
  tasksForm.reset();
});
