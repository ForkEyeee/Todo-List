// collection.js
import { v4 as uuidv4 } from 'uuid';

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
  projects.push(new Project('Enter project name', 'testing', 'testing2', 'testing3')); // This would be an input value
  console.log(projects);
};

const getProjects = function () {
  return projects;
};

export { addProject, getProjects };
