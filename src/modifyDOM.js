import { getProjects } from './projectFunctions';

const projects = getProjects();

const addDOMSidebar = function (event) {
  const addBtn = document.getElementById('all-projects');
  const createForm = document.createElement('form');
  const createInput = document.createElement('input');
  const saveBtn = document.createElement('button');
  createForm.appendChild(createInput);
  createForm.appendChild(saveBtn);
  saveBtn.addEventListener('click', myScript);
  const	createExpression = document.createElement('div')
  function myScript(event) {
		event.preventDefault()
    projects[projects.length - 1].projName = createInput.value;
		createInput.remove()
		saveBtn.remove()
  }
  createInput.value = projects[projects.length - 1].projName;
  addBtn.appendChild(createForm);
};

const addDOMContainer = function () {
  const cardContainer = document.getElementById('card-container');
  const createCard = document.createElement('div');
  createCard.innerHTML =
    projects[projects.length - 1].todoItems[0].desc +
    projects[projects.length - 1].todoItems[1].duedate +
    projects[projects.length - 1].todoItems[2].priority;
  cardContainer.appendChild(createCard);
};

export { addDOMSidebar, addDOMContainer };
