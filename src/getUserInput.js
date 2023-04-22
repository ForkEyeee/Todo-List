export default function (
  projectNameInput,
  descInput,
  dateInput,
  priorityInput,
  todoNameInput
) {
  let proj = projectNameInput;
  let desc = descInput;
  let date = dateInput;
  let priority = priorityInput;
  let todoName = todoNameInput;
  proj = document.getElementById('name-input').value;
  desc = document.getElementById('desc-input').value;
  date = document.getElementById('date-input').value;
  priority = document.getElementById('priority-input').value;
  todoName = document.getElementById('todo-name-input').value;

  return {
    proj,
    desc,
    date,
    priority,
    todoName,
  };
}
