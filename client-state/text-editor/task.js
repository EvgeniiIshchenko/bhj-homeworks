"use strict";

const editor = document.getElementById('editor');
const storedText = localStorage.getItem('text')

editor.value = storedText;

editor.addEventListener('input', () => {
    localStorage.setItem('text', editor.value);
})