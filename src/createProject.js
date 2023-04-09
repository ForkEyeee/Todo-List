const projects = (function () {
  return [];
})();

const addProjects = function () {
  projects.push('');
	const newProjectInput = document.createElement('input')
	const projectsText = document.getElementById('projects-text')
	projectsText.appendChild(newProjectInput)
	console.log(projects)
};
const addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', addProjects);





export { projects };
