import { v4 as uuidv4 } from 'uuid';
import getUserInput from './getUserInput';
// import { addDOMTodoList } from './modifyDOM';

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
      getValue.nameInput,
      getValue.descInput,
      getValue.dateInput,
      getValue.priorityInput
    )
  );
  console.log(projects);
};

const addTodo = function (event) {
  event.preventDefault();
  const getValue = getUserInput();
  if (
    projects.find((project) => project.id === locatedProject.id) !== undefined
  ) {
    if (
      locatedProject.hasOwnProperty.call(locatedProject, 'todoItems') === false
    ) {
      locatedProject.todoItems = [
        {
          desc: getValue.descInput,
          date: getValue.dateInput,
          priority: getValue.priorityInput,
        },
      ];
    } else {
      locatedProject.todoItems.push({
        desc: getValue.descInput,
        date: getValue.dateInput,
        priority: getValue.priorityInput,
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
      // addTodo(event)
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
};
