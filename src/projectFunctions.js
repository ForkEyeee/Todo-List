import { v4 as uuidv4 } from 'uuid';
import getUserInput from './getUserInput';
import todoCollapsible from './todoCollapsible';

let locatedProject = {}; // Holds the project
let attribute = '';

const projects = [];

const Project = function (projName) {
  this.projName = projName;
  this.id = uuidv4();
}; // Project Constructor function

const addProject = function (event) {
  event.preventDefault();
  const getValue = getUserInput();
  projects.push(
    new Project(
      getValue.projectNameInput,
      getValue.descInput,
      getValue.dateInput,
      getValue.priorityInput,
      getValue.todoNameInput
    )
  );
  console.log(projects);
};

const addTodo = function (event) {
  const getValue = getUserInput();

  event.preventDefault();
  if (
    projects.find((project) => project.id === locatedProject.id) !== undefined
  ) {
    if (
      locatedProject.hasOwnProperty.call(locatedProject, 'todoItems') === false
    ) {
      locatedProject.todoItems = [
        {
          name: getValue.todoNameInput,
          desc: getValue.descInput,
          date: getValue.dateInput,
          priority: getValue.priorityInput,
          id: uuidv4(),
        },
      ];
    } else {
      locatedProject.todoItems.push({
        name: getValue.todoNameInput,
        desc: getValue.descInput,
        date: getValue.dateInput,
        priority: getValue.priorityInput,
        id: uuidv4(),
      });
    }
  }
  console.log(projects);
};
const getAllProjects = function () {
  return projects;
};

// Gets the information for selected project
const getSelectedProject = (event) => {
  attribute = event.target.getAttribute('data-id');
  for (let i = 0; projects.length; i += 1) {
    if (projects[i].id === attribute) {
      locatedProject = projects[i];
      console.log(locatedProject);
      console.log(i);
      console.log(projects);
      break;
    }
  }
};

const removeProject = (event) => {
  // getSelectedProject()
  for (let i = 0; i < projects.length; i += 1) {
    if (attribute === projects[i].id) {
      for (let x = 0; x <= projects[i].todoItems.length; x += 1) {
        if (event.target.dataset.id === projects[i].todoItems[x].id) {
          const arr = projects[i].todoItems;
          arr.splice(x, 1);
          break;
        }
      }
    }
  }
};

export {
  addProject,
  addTodo,
  getAllProjects,
  getSelectedProject,
  locatedProject,
  attribute,
  removeProject,
};
