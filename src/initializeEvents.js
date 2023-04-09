import { addProjects } from "./createProject";

const initializeEvents = (function () {
  const addBtn = document.getElementById('addBtn');
  addBtn.addEventListener('click', addProjects);
})();

export { initializeEvents };
