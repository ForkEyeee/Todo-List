import {
  getAllProjects,
  addProject,
  getSelectedProject,
  addTodo,
  locatedProject,
} from './projectFunctions';

const projectsList = getAllProjects();

const addDOMTodo = () => {
  const todoContainer = document.getElementById('todo-container');
  todoContainer.innerHTML = '';

  const projectTodos = locatedProject;
  if (projectTodos.hasOwnProperty.call(projectTodos, 'todoItems') === false) {
    todoContainer.innerHTML = '';
    return;
  }

  for (let i = 0; i < projectTodos.todoItems.length; i += 1) {
    const todoPara = document.createElement('p');
    todoPara.setAttribute('class', 'todo-para');
    todoContainer.appendChild(todoPara);
    const JSONArray = JSON.stringify(projectTodos.todoItems[i]);
    const JSONString = JSONArray.replace(/[{}"]/g, '')
      .replace(/,/g, ' ')
      .replace(/:/g, (match) => `${match} `);
    todoPara.innerHTML = JSONString;
    console.log(JSONArray);
    console.log(JSONString);
  }
};

const addDOMProject = () => {
  const projectDiv = document.getElementById('project-div');
  const createDiv = document.createElement('div');
  const createProjectPara = document.createElement('p');
  createProjectPara.innerHTML = locatedProject.projName;
  projectDiv.innerHTML = '';
  createDiv.appendChild(createProjectPara);
  projectDiv.appendChild(createDiv);
};

const addProjectEvents = () => {
  const paraElementsHTMLCollection =
    document.getElementsByClassName('project-p');
  const paraElementsArray = Array.from(paraElementsHTMLCollection);
  paraElementsArray.forEach((para) => {
    para.addEventListener('click', addDOMProject);
    para.addEventListener('click', addDOMTodo);
  });
};

const addDOMSidebarProject = (event) => {
  event.preventDefault();
  const createP = document.createElement('p');
  createP.setAttribute('class', 'project-p');
  createP.addEventListener('click', getSelectedProject);
  const projectsDiv = document.getElementById('all-projects');
  if (projectsList.length !== 0) {
    createP.innerHTML = projectsList[projectsList.length - 1].projName;
    projectsDiv.appendChild(createP);
    createP.dataset.id = projectsList[projectsList.length - 1].id;
    addProjectEvents();
  }
};

const addSubmitEvents = () => {
  const submitBtnProject = document.getElementById('submit-project');
  const submitBtnTodo = document.getElementById('submit-todo');
  submitBtnProject.addEventListener('click', addProject);
  submitBtnProject.addEventListener('click', addDOMSidebarProject);
  submitBtnTodo.addEventListener('click', addTodo);
  submitBtnTodo.addEventListener('click', addDOMTodo);
};

export {
  addDOMSidebarProject,
  addSubmitEvents,
  addDOMProject,
  addProjectEvents,
  addDOMTodo,
};
