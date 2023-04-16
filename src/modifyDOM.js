import {
  getAllProjects,
  addProject,
  getSelectedProject,
  locatedProject,
  addTodo,
} from './projectFunctions';

const projects = getAllProjects();

const addDOMProjectName = () => {
  const projectDiv = document.getElementById('project-div');
  const createDiv = document.createElement('div');
  const createProjectPara = document.createElement('p');
  createProjectPara.innerHTML = `${locatedProject.projName}`;
  projectDiv.innerHTML = '';
  createDiv.appendChild(createProjectPara);
  projectDiv.appendChild(createDiv);
  console.log('test');
};

const addParaEvents = () => {
  const allPEleHTMLCollection = document.getElementsByClassName('project-p');
  const AllPEleArray = Array.from(allPEleHTMLCollection);
  AllPEleArray.forEach((element) => {
    element.addEventListener('click', addDOMProjectName);
  });
};

const addDOMSidebar = (event) => {
  event.preventDefault();
  const createP = document.createElement('p');
  createP.setAttribute('class', 'project-p');
  createP.addEventListener('click', getSelectedProject);
  const addBtn = document.getElementById('all-projects');
  if (projects.length !== 0) {
    createP.innerHTML = projects[projects.length - 1].projName;
    addBtn.appendChild(createP);
    createP.dataset.id = projects[projects.length - 1].id;
    addParaEvents();
  }
};

const addSubmitEvents = () => {
  const submitBtn = document.getElementById('submit');
  const submitBtnTodo = document.getElementById('submit-todo');
  submitBtn.addEventListener('click', addProject);
  submitBtn.addEventListener('click', addDOMSidebar);
  submitBtnTodo.addEventListener('click', addTodo);
};

export { addDOMSidebar, addSubmitEvents, addDOMProjectName, addParaEvents };
