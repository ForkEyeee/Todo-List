import { addProject } from './createProject';

const initializeEvents = (function () {
  const addBtn = document.getElementById('addBtn');
  addBtn.addEventListener('click', addProject);
})();

export { initializeEvents };
