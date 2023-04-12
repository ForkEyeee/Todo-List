import {
  getAllProjects,
  addProject,
  getSelectedProject,
} from './projectFunctions';

const projects = getAllProjects();

const addDOMSidebar = () => {
  const createP = document.createElement('p');
  createP.addEventListener('click', getSelectedProject);
  const addBtn = document.getElementById('all-projects');
  if (projects.length !== 0) {
    createP.innerHTML = projects[projects.length - 1].projName;
    addBtn.appendChild(createP);
    createP.dataset.id = projects[projects.length - 1].id;
  }
};

const addSubmitEvents = () => {
  const submitBtn = document.getElementById('submit');
  submitBtn.addEventListener('click', addProject);
  submitBtn.addEventListener('click', addDOMSidebar);
};

export { addDOMSidebar, addSubmitEvents };
