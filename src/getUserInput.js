export default () => {
  const proj = document.getElementById('name-input').value;
  const desc = document.getElementById('desc-input').value;
  const date = document.getElementById('date-input').value;
  const priority = document.getElementById('priority-input').value;
  const todoName = document.getElementById('todo-name-input').value;
  return {
    proj,
    desc,
    date,
    priority,
    todoName,
  };
}
