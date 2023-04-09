import { addProjects } from './createProject';

const addTodo = function () {
  const myTodos = addProjects();
	myTodos.projects[myTodos.projects.length - 1].projDesc = "testing"
	myTodos.projects[myTodos.projects.length - 1].projDueDate = "testing2"
	myTodos.projects[myTodos.projects.length - 1].projPriority = "testing3"

	  console.log(myTodos);
  return { myTodos };
};

export { addTodo };

// const myTodos = [];

// const getInputValues = function () {
//   // Private Variables/ properties
//   const titleValue = document.getElementById('input-title').value;
//   const descValue = document.getElementById('input-desc').value;
//   const dueDateValue = document.getElementById('input-date').value;
//   const priorityValue = document.getElementById('input-priority').value;

//   return {
//     titleValue,
//     descValue,
//     dueDateValue,
//     priorityValue,
//   };
// };

// function pushArray(event, array) {
//   event.preventDefault();
//   array.push(getInputValues());
//   console.log(myTodos);
// }

// (function () {
//   const submitBtn = document.getElementById('submit-btn');
//   submitBtn.addEventListener('click', (event) => {
//     pushArray(event, myTodos);
//   });
// })();

// export { myTodos };
