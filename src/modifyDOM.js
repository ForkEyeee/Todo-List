import { getProjects } from './projectFunctions';

const projects = getProjects();
let findProject;
let attribute;
const addDOMSidebar = function () {
  const addBtn = document.getElementById('all-projects');
  const createP = document.createElement('p');
  createP.innerHTML = projects[projects.length - 1].projName;
  addBtn.appendChild(createP);
  createP.dataset.id = projects[projects.length - 1].id;
  createP.addEventListener('click', (event) => {
    attribute = event.target.getAttribute('data-id');
    for (let i = 0; projects.length; i++) {
      if (projects[i].id === attribute) {
        console.log(i);
				findProject = projects[i].id;
				console.log(findProject)
				return
				
      }

    }

    // findProject = projects.find(
    // 	(project) => project.target.getAttribute('data-id') === attribute
    // );
  }
	
	);

  console.log(attribute);
};

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

export { addDOMSidebar };
