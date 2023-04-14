import { v4 as uuidv4 } from 'uuid';
import { getInputValues } from './getUserInput';

let findProject;
const projects = [];
const Project = function (projName) {
  this.projName = projName;
  this.id = uuidv4();
  // this.todoItems = [
  //   { desc: projDesc },
  //   { duedate: projDueDate },
  //   { priority: projPriority },
  // ];
};

const addProject = function (event) {
  event.preventDefault();
  const getValue = getInputValues();
  projects.push(
    new Project(
      getValue.nameInput,

    )
  );
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

export { addProject, getAllProjects, getSelectedProject, findProject, Project };
