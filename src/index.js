import './styles/main.css';
import localStorage from './localStorage';
import modifyDOM from './modifyDOM';
import modalWindowProject from './modalWindowProject';
import modalWindowTodo from './modalWindowTodo';

localStorage.getLocalStorage()
modifyDOM();
modalWindowProject();
modalWindowTodo();
