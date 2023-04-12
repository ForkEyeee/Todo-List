import { getProjects } from './projectFunctions';

const projects = getProjects();

const addDOMSidebar = function () {
  const addBtn = document.getElementById('all-projects');
  const createP = document.createElement('p');
  createP.innerHTML = projects[projects.length - 1].projName;
  addBtn.appendChild(createP);
};

// const addDOMContainer = function () {
//   const cardContainer = document.getElementById('card-container');
//   const createCard = document.createElement('div');
//   createCard.innerHTML =
//     projects[projects.length - 1].todoItems[0].desc +
//     projects[projects.length - 1].todoItems[1].duedate +
//     projects[projects.length - 1].todoItems[2].priority;
//   cardContainer.appendChild(createCard);
// };

export { addDOMSidebar };
