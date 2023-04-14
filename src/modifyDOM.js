import {
  getAllProjects,
  addProject,
  getSelectedProject,
  findProject,
} from './projectFunctions';
import { modalWindowProject } from './modalWindow';

const projects = getAllProjects();
// const currentPara = getSelectedProject()
const addDOMContainer = () => {
  const project = findProject;
  const cardContainer = document.getElementById('card-container');
  const addTodoDiv = document.createElement('div');
  addTodoDiv.setAttribute('class', 'fa-solid fa-plus fa-beat');
  addTodoDiv.setAttribute('id', 'add-todo');
  const createDiv = document.createElement('div');
  const createProjectPara = document.createElement('p');
  addTodoDiv.addEventListener('click', () => {
    console.log(project.id);
  });
  createDiv.setAttribute('id', 'project-div');
  createProjectPara.innerHTML = `${project.projName} ${project.todoItems[0].desc} ${project.todoItems[1].duedate} ${project.todoItems[2].priority}`;
  cardContainer.innerHTML = '';
  createDiv.appendChild(createProjectPara);
  createDiv.appendChild(addTodoDiv);
  cardContainer.appendChild(createDiv);
	modalWindowProject()
  console.log('test');
};

const addParaEvents = () => {
  const allPEleHTMLCollection = document.getElementsByClassName('project-p');
  const AllPEleArray = Array.from(allPEleHTMLCollection);
  AllPEleArray.forEach((element) => {
    element.addEventListener('click', addDOMContainer);
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
  submitBtn.addEventListener('click', addProject);
  submitBtn.addEventListener('click', addDOMSidebar);
};

export { addDOMSidebar, addSubmitEvents, addDOMContainer, addParaEvents };
