import { v4 as uuidv4 } from 'uuid';
import { getInputValues } from './getUserInput';

let findProject;
const projects = [];
const Project = function (projName, projDesc, projDueDate, projPriority) {
  this.projName = projName;
  this.id = uuidv4();
  // this.todoItems = [projDesc, projDueDate, projPriority];
};

const addProject = function (event) {
  event.preventDefault();
  const getValue = getInputValues();
  projects.push(
    new Project(
      getValue.nameInput,
      getValue.descInput,
      getValue.dateInput,
      getValue.priorityInput,
    )
  );
  console.log(projects)

};

const addProjectTodo = function (event) {
  event.preventDefault();
  const getValue = getInputValues();
  const found = projects.find((project) => project.id === findProject.id);
  if (found.hasOwnProperty('todoItems') === false) {
    found.todoItems = [
      {
        desc: getValue.descInput,
        date: getValue.dateInput,
        priority: getValue.priorityInput,
      },
    ];
  } else {
    found.todoItems.push(
      {
        desc: getValue.descInput,
        date: getValue.dateInput,
        priority: getValue.priorityInput,
      },
    );
  }
  console.log(projects);
};

const getAllProjects = function () {
  return projects;
};

// Gets the information for selected project
const getSelectedProject = (event) => {
  let attribute = '';
  attribute = event.target.getAttribute('data-id');
  for (let i = 0; projects.length; i++) {
    if (projects[i].id === attribute) {
      console.log(i);
      findProject = projects[i];
      console.log(findProject);
      break;
    }
  }
};

export {
  addProject,
  addProjectTodo,
  getAllProjects,
  getSelectedProject,
  findProject,
  Project,
};
