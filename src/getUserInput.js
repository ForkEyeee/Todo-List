export default () => {
  const projectNameInput = document.getElementById('name-input').value;
  const descInput = document.getElementById('desc-input').value;
  const dateInput = document.getElementById('date-input').value;
  const priorityInput = document.getElementById('priority-input').value;
  const todoNameInput = document.getElementById('todo-name-input').value;
  return {
    projectNameInput,
    descInput,
    dateInput,
    priorityInput,
    todoNameInput,
  };
};
