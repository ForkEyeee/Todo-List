import { ProjectsManager } from './createProject';

const initializeEvents = (function () {
  const addBtn = document.getElementById('addBtn');
  addBtn.addEventListener('click', ProjectsManager);
})();

export { initializeEvents };
