import { editProject, getExistingValues } from './projectFunctions';
import { clearGetExistingValues } from './projectFunctions';
export default function (event) {
  if (event.target.getAttribute('id') === 'edit-btn') {
    editProject(event);
    document.getElementById('name-input').value = getExistingValues.proj;
    document.getElementById('desc-input').value = getExistingValues.desc;
    document.getElementById('date-input').value = getExistingValues.date;
    document.getElementById('priority-input').value =
      getExistingValues.priority;
    document.getElementById('todo-name-input').value =
      getExistingValues.todoName;
			clearGetExistingValues()
  }
}
