// initializeevents.js
import { addProject } from './projectFunctions';
import { addDOMSidebar } from './modifyDOM';

const initializeEvents = function () {
  const addBtn = document.getElementById('addBtn');
  addBtn.addEventListener('click', addProject);
  addBtn.addEventListener('click', addDOMSidebar);
};

export { initializeEvents };
