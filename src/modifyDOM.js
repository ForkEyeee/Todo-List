import {
  getAllProjects,
  addProject,
  getSelectedProject,
  attribute,
  addTodo,
  locatedProject,
} from './projectFunctions';

const projects = getAllProjects();

const addDOMTodoList = (event) => {
	const todoContainer = document.getElementById('todo-container');

  const projectList = locatedProject;
  if (projectList.hasOwnProperty.call(projectList, 'todoItems') === false) {
		todoContainer.innerHTML = ""
    return;
  }
  let JSONArray = '';
  for (let i = 0; i < projectList.todoItems.length; i += 1) {
    JSONArray += JSON.stringify(projectList.todoItems[i]);
  }
  const JSONString = JSONArray.replace(/[{}"]/g, '')
    .replace(/,/g, ' ')
    .replace(/:/g, (match) => `${match} `);
  todoContainer.innerHTML = JSONString;
  console.log(JSONArray);
  console.log(JSONString);
};

const addDOMProjectName = () => {
  const projectDiv = document.getElementById('project-div');
  const createDiv = document.createElement('div');
  const createProjectPara = document.createElement('p');
  createProjectPara.innerHTML = locatedProject.projName;
  projectDiv.innerHTML = '';
  createDiv.appendChild(createProjectPara);
  projectDiv.appendChild(createDiv);
};

const addParaEvents = () => {
  const allPEleHTMLCollection = document.getElementsByClassName('project-p');
  const AllPEleArray = Array.from(allPEleHTMLCollection);
  AllPEleArray.forEach((element) => {
    element.addEventListener('click', addDOMProjectName);
    element.addEventListener('click', addDOMTodoList);
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
  submitBtnTodo.addEventListener('click', addDOMTodoList);
};

export {
  addDOMSidebar,
  addSubmitEvents,
  addDOMProjectName,
  addParaEvents,
  addDOMTodoList,
};
