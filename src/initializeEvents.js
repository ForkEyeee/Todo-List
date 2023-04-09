import { ProjectsManager } from './createProject';

const getAddMethods = ProjectsManager

const initializeEvents = (function () {
  const addBtn = document.getElementById('addBtn');
  addBtn.addEventListener('click', getAddMethods.addProject);
})();

export { initializeEvents };
