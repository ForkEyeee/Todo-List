import Project from './projectFunctions';

class TodoEditor {
  static editTodo(event) {
    if (event.target.getAttribute('id') === 'edit-btn') {
      Project.editProject(event);
      document.getElementById('name-input').value =
        Project.getExistingValues.proj;
      document.getElementById('desc-input').value =
        Project.getExistingValues.desc;
      document.getElementById('date-input').value =
        Project.getExistingValues.date;
      document.getElementById('priority-input').value =
        Project.getExistingValues.priority;
      document.getElementById('todo-name-input').value =
        Project.getExistingValues.todoName;
      Project.clearGetExistingValues();
    }
  }
}
export default TodoEditor;
