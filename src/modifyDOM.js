import Project from './projectFunctions';
import modalWindowTodo from './modalWindowTodo';
import todoCollapsible from './todoCollapsible';
import TodoEditor from './getEditedInputs';

export const addDOMTodo = (event) => {
  if (event !== undefined) {
    event.preventDefault();
  }
  const todoContainer = document.getElementById('todo-container');
  todoContainer.innerHTML = '';

  const projectTodos = Project.locatedProject;
  if (projectTodos.hasOwnProperty.call(projectTodos, 'todoItems') === false) {
    todoContainer.innerHTML = '';
    return;
  }

  for (let i = 0; i < projectTodos.todoItems.length; i += 1) {
    const todoParaDiv = document.createElement('div');
    const createTodoName = document.createElement('p');
    const createTodoParaDesc = document.createElement('p');
    const createTodoParaDueDate = document.createElement('p');
    const createTodoParaPriority = document.createElement('p');
    const deleteBtn = document.createElement('button');
    const editBtn = document.createElement('button');
    const collapsibleBtn = document.createElement('button');
    collapsibleBtn.setAttribute('class', 'collapsible');
    const collapsibleContent = document.createElement('div');
    collapsibleContent.setAttribute('class', 'content');
    deleteBtn.innerHTML = 'Remove';
    deleteBtn.setAttribute('class', 'delete-btn');
    editBtn.setAttribute('id', 'edit-btn');
    todoParaDiv.setAttribute('class', 'todo-div');
    todoContainer.appendChild(todoParaDiv);
    const JSONArrayDesc = JSON.stringify(projectTodos.todoItems[i].desc);
    const JSONArrayDueDate = JSON.stringify(projectTodos.todoItems[i].date);
    const JSONArrayPriority = JSON.stringify(
      projectTodos.todoItems[i].priority
    );
    const JSONArrayName = JSON.stringify(projectTodos.todoItems[i].name);
    const cleanJSONArrayName = JSONArrayName.replace(/[{}"]/g, '')
      .replace(/,/g, ' ')
      .replace(/:/g, (match) => `${match} `);
    const cleanJSONArrayDesc = JSONArrayDesc.replace(/[{}"]/g, '')
      .replace(/,/g, ' ')
      .replace(/:/g, (match) => `${match} `);
    const cleanJSONArrayDueDate = JSONArrayDueDate.replace(/[{}"]/g, '')
      .replace(/,/g, ' ')
      .replace(/:/g, (match) => `${match} `);
    const cleanJSONArrayPriority = JSONArrayPriority.replace(/[{}"]/g, '')
      .replace(/,/g, ' ')
      .replace(/:/g, (match) => `${match} `);

    createTodoName.innerHTML = `Name: ${cleanJSONArrayName}`;
    createTodoParaDesc.innerHTML = `Desc: ${cleanJSONArrayDesc}`;
    createTodoParaDueDate.innerHTML = `Due Date: ${cleanJSONArrayDueDate}`;
    createTodoParaPriority.innerHTML = `Priority: ${cleanJSONArrayPriority}`;
    editBtn.innerHTML = 'Edit';
    todoParaDiv.appendChild(createTodoParaDesc);
    todoParaDiv.appendChild(createTodoParaDueDate);
    todoParaDiv.appendChild(createTodoParaPriority);
    deleteBtn.addEventListener('click', Project.removeProject);
    deleteBtn.addEventListener('click', addDOMTodo);
    editBtn.addEventListener('click', TodoEditor.editTodo);
    todoParaDiv.appendChild(deleteBtn);
    todoParaDiv.appendChild(editBtn);
    todoParaDiv.appendChild(collapsibleBtn);
    collapsibleBtn.innerHTML = createTodoName.innerHTML;
    collapsibleContent.appendChild(createTodoParaDesc);
    collapsibleContent.appendChild(createTodoParaDueDate);
    collapsibleContent.appendChild(createTodoParaPriority);
    todoParaDiv.appendChild(collapsibleContent);
    deleteBtn.setAttribute('data-id', projectTodos.todoItems[i].id);
    collapsibleBtn.setAttribute('data-id', deleteBtn.dataset.id);
    editBtn.setAttribute('data-id', deleteBtn.dataset.id);
    collapsibleBtn.addEventListener('click', todoCollapsible);
    modalWindowTodo();
  }
};

const addDOMProject = () => {
  const projectDiv = document.getElementById('project-div');
  const createDiv = document.createElement('div');
  const createProjectPara = document.createElement('p');
  createProjectPara.innerHTML = Project.locatedProject.projName;
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

export const addDOMSidebarProject = (event) => {
  if (Project.attribute !== '') {
    event.preventDefault();
  }
  const createP = document.createElement('p');
  createP.setAttribute('class', 'project-p');
  createP.addEventListener('click', Project.getSelectedProject);
  const projectsDiv = document.getElementById('all-projects');
  if (Project.projects.length !== 0) {
    createP.innerHTML = Project.projects[Project.projects.length - 1].projName;
    projectsDiv.appendChild(createP);
    createP.dataset.id = Project.projects[Project.projects.length - 1].id;
    addProjectEvents();
  }
};

export default () => {
  const submitBtnProject = document.getElementById('submit-project');
  const submitBtnTodo = document.getElementById('submit-todo');
  submitBtnProject.addEventListener('click', Project.addedProject);
  submitBtnProject.addEventListener('click', addDOMSidebarProject);
  submitBtnTodo.addEventListener('click', Project.addTodo);
  submitBtnTodo.addEventListener('click', addDOMTodo);
};
