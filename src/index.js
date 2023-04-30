import './styles/main.css';
import localStorage from './localStorage';
import modifyDOM from './modifyDOM';
import modalWindowProject from './modalWindowProject';
import modalWindowTodo from './modalWindowTodo';
import Project from './projectFunctions'; // Import Project class
import { addDOMTodo } from './modifyDOM';

localStorage.getLocalStorage(Project.projects)
addDOMTodo()
modifyDOM();
modalWindowProject();
modalWindowTodo();
