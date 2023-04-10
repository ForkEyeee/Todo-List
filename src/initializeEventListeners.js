// initializeevents.js
import { addProject } from './projectFunctions';

const initializeEvents = function () {
  const addBtn = document.getElementById('addBtn');
  addBtn.addEventListener('click', addProject);
};

export { initializeEvents };
