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
    const todoParaDiv = document.createElement('div');
    const createTodoParaDesc = document.createElement('p');
    const createTodoParaDueDate = document.createElement('p');
    const createTodoParaPriority = document.createElement('p');
    todoParaDiv.setAttribute('class', 'todo-div');
    todoContainer.appendChild(todoParaDiv);
    const JSONArrayDesc = JSON.stringify(projectTodos.todoItems[i].desc);
    const JSONArrayDueDate = JSON.stringify(projectTodos.todoItems[i].date);
    const JSONArrayPriority = JSON.stringify(
      projectTodos.todoItems[i].priority
    );
    const cleanJSONArrayDesc = JSONArrayDesc.replace(/[{}"]/g, '')
      .replace(/,/g, ' ')
      .replace(/:/g, (match) => `${match} `);
    const cleanJSONArrayDueDate = JSONArrayDueDate.replace(/[{}"]/g, '')
      .replace(/,/g, ' ')
      .replace(/:/g, (match) => `${match} `);
    const cleanJSONArrayPriority = JSONArrayPriority.replace(/[{}"]/g, '')
      .replace(/,/g, ' ')
      .replace(/:/g, (match) => `${match} `);

    createTodoParaDesc.innerHTML = `Desc: ${cleanJSONArrayDesc}`;
    createTodoParaDueDate.innerHTML = `Due Date: ${cleanJSONArrayDueDate}`;
    createTodoParaPriority.innerHTML = `Priority: ${cleanJSONArrayPriority}`;
    todoParaDiv.appendChild(createTodoParaDesc);
    todoParaDiv.appendChild(createTodoParaDueDate);
    todoParaDiv.appendChild(createTodoParaPriority);
		todoParaDiv.addEventListener('click', () => {
			console.log('heeeey')
		})
    console.log(createTodoParaDesc);
    console.log(cleanJSONArrayDueDate);
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
