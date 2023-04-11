// collection.js
import { v4 as uuidv4 } from 'uuid';
import { getValues } from './getUserInput';


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
  const getValue = getValues()
  projects.push(
    new Project(
      getValue.nameInput,
      getValue.descInput,
      getValue.dateInput,
      getValue.priorityInput
    )
  ); // This would be an input value
  console.log(projects);
};

const getProjects = function () {
  return projects;
};

export { addProject, getProjects };
