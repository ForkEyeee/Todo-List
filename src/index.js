import './styles/main.css';

const Project = function (projName, projDesc, projDueDate, projPriority) {
  this.projName = projName;
  this.projDesc = projDesc;
  this.projDueDate = projDueDate;
  this.projPriority = projPriority;
};

const addProjects = function () {
  const projects = [];
  projects.push(new Project('Enter Project Name'));
  console.log(projects);
  return { projects };
};

const addTodo = function () {
  const myTodos = addProjects();
  console.log(myTodos);
  return { myTodos };
};

const initializeEvents = (function () {
  const addBtn = document.getElementById('addBtn');
  addBtn.addEventListener('click', addProjects);
})();

// This is to store input values in an object
// myProjects.push(getInputValues);
// const projectsDiv = document.getElementById('projects-text');
// const projectNameDiv = document.createElement('div')
// projectNameDiv.innerHTML = JSON.stringify(myProjects[myProjects.length - 1].projName)
// projectsDiv.appendChild(projectNameDiv);
