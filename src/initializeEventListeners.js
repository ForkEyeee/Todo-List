// initializeevents.js
import { addProject } from './projectFunctions';
import { addDOMSidebar } from './modifyDOM';

const initializeEvents = function () {
  // const addBtn = document.getElementById('addBtn');
  // addBtn.addEventListener('click', addProject);
  const submitBtn = document.getElementById('submit');
  submitBtn.addEventListener('click', addProject);
  submitBtn.addEventListener('click', addDOMSidebar);
};

export { initializeEvents };
