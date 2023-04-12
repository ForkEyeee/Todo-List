import { getAllProjects } from './projectFunctions';

const projects = getAllProjects();
const createP = document.createElement('p');

let findProject;
let attribute;

const addDOMSidebar = () => {
  const addBtn = document.getElementById('all-projects');
  if (projects.length !== 0) {

    createP.innerHTML = projects[projects.length - 1].projName;
    addBtn.appendChild(createP);
    createP.dataset.id = projects[projects.length - 1].id;
    return { createP };
  }
  return { createP };
};
// findProject = projects.find(
// 	(project) => project.target.getAttribute('data-id') === attribute
// );

//
// }

// const addDOMContainer = function () {
//   const cardContainer = document.getElementById('card-container');
//   const createCard = document.createElement('div');
//   createCard.innerHTML =
//     projects[projects.length - 1].todoItems[0].desc +
//     projects[projects.length - 1].todoItems[1].duedate +
//     projects[projects.length - 1].todoItems[2].priority;
//   cardContainer.appendChild(createCard);
// };

export { addDOMSidebar, attribute, findProject, createP };
