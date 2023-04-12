import { v4 as uuidv4 } from 'uuid';
import { getValues } from './getUserInput';
// import { attribute, findProject } from './modifyDOM';

let findProject
let attribute = ""

// Adds a project to the projects object
const projects = [];
const Project = function (projName, projDesc, projDueDate, projPriority) {
  this.projName = projName;
  this.id = uuidv4();
  this.todoItems = [
    { desc: projDesc },
    { duedate: projDueDate },
    { priority: projPriority },
  ];
};

const addProject = function () {
  const getValue = getValues();
  projects.push(
    new Project(
      getValue.nameInput,
      getValue.descInput,
      getValue.dateInput,
      getValue.priorityInput
    )
  );
  console.log(projects);
};

const getAllProjects = function () {
  return projects;
};

// Gets the information for selected project
const getSelectedProject = (event) => {
  attribute = event.target.getAttribute('data-id');
  for (let i = 0; projects.length; i++) {
    if (projects[i].id === attribute) {
      console.log(i);
      findProject = projects[i].id;
      console.log(findProject);
      return;
    }
  }
};

export { addProject, getAllProjects, getSelectedProject };
