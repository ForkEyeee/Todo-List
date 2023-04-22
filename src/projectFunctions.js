import { v4 as uuidv4 } from 'uuid';
import getUserInput from './getUserInput';
import getEditedInputs from './getEditedInputs';

let locatedProject = {}; // Holds the project
let attribute = '';
let getExistingValues = {};

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
      getValue.proj,
      getValue.desc,
      getValue.date,
      getValue.priority,
      getValue.todoName
    )
  );
  console.log(projects);
};

const addTodo = function (event) {
  const userInput = getUserInput();
  event.preventDefault();
  if (
    projects.find((project) => project.id === locatedProject.id) !== undefined
  ) {
    if (
      locatedProject.hasOwnProperty.call(locatedProject, 'todoItems') === false
      // && // if we dont have todoitems, then create them ||
      // Object.keys(getExistingValues).length === 0
    ) {
      locatedProject.todoItems = [
        {
          name: userInput.todoName, // create todo items
          desc: userInput.desc,
          date: userInput.date,
          priority: userInput.priority,
          id: uuidv4(),
        },
      ];
    } else {
      locatedProject.todoItems.push({
        name: userInput.todoName, // edit todo items
        desc: userInput.desc,
        date: userInput.date,
        priority: userInput.priority,
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

const editProject = (event) => {
  for (let i = 0; i < projects.length; i += 1) {
    if (attribute === projects[i].id) {
      for (let x = 0; x <= projects[i].todoItems.length; x += 1) {
        if (event.target.dataset.id === projects[i].todoItems[x].id) {
          getExistingValues = getUserInput();
          getExistingValues.todoName = projects[i].todoItems[x].name;
          getExistingValues.desc = projects[i].todoItems[x].desc;
          getExistingValues.date = projects[i].todoItems[x].date;
          getExistingValues.priority = projects[i].todoItems[x].priority;
          getExistingValues.proj = projects[i].projName;
          break;
        }
      }
    }
  }
};

const clearGetExistingValues = () => {
  getExistingValues = {};
};

export {
  addProject,
  addTodo,
  getAllProjects,
  getSelectedProject,
  locatedProject,
  attribute,
  removeProject,
  editProject,
  getExistingValues,
  clearGetExistingValues,
};
