import { addTodo } from "./createTodo";

const initializeEvents = (function () {
  const addBtn = document.getElementById('addBtn');
  addBtn.addEventListener('click', addTodo);
})();

export { initializeEvents };
