import {
  getAllProjects,
  addProject,
  getSelectedProject,
  findProject,
	addProjectTodo
} from './projectFunctions';

const projects = getAllProjects();
const addDOMContainer = () => {
  const project = findProject;
  const projectDiv = document.getElementById('project-div');
  const createDiv = document.createElement('div');
  const createProjectPara = document.createElement('p');
  createProjectPara.innerHTML = `${project.projName}`;
  //  ${project.todoItems[0].desc} ${project.todoItems[1].duedate} ${project.todoItems[2].priority}`;
  projectDiv.innerHTML = '';
  createDiv.appendChild(createProjectPara);
  projectDiv.appendChild(createDiv);
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
	const submitBtnTodo = document.getElementById('submit-todo')
  submitBtn.addEventListener('click', addProject);
  submitBtn.addEventListener('click', addDOMSidebar);
	submitBtnTodo.addEventListener('click', addProjectTodo)
};

export { addDOMSidebar, addSubmitEvents, addDOMContainer, addParaEvents };
