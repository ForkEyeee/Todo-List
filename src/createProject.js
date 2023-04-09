const Project = function (projName, projDesc, projDueDate, projPriority) {
  this.projName = projName;
  this.projDesc = projDesc;
  this.projDueDate = projDueDate;
  this.projPriority = projPriority;
};
const projects = [];

const addProjects = function () {
  projects.push(new Project('Enter Project Name')); //This would be an input value
//  console.log(projects);
  return { projects };
};

export { addProjects };
