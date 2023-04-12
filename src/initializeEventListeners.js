// initializeevents.js
import { addProject } from './projectFunctions';
import { addDOMSidebar, createP } from './modifyDOM';
import { getSelectedProject } from './projectFunctions';
import { modalWindow } from './modalWindow';

// const modalWindow2 = modalWindow

const getSelectedProjects = getSelectedProject;
const getCreateP = addDOMSidebar();

const initializeEvents = (function () {
  // const addBtn = document.getElementById('addBtn');
  // addBtn.addEventListener('click', addProject);
  const submitBtn = document.getElementById('submit');
  submitBtn.addEventListener('click', addProject);
  submitBtn.addEventListener('click', addDOMSidebar);
  createP.addEventListener('click', getSelectedProjects);
})();

export { initializeEvents };
