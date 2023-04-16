import './styles/main.css';
import modalWindowProject from './modalWindowProject';
import modalWindowTodo from './modalWindowTodo';
import { addSubmitEvents } from './modifyDOM';

addSubmitEvents();
modalWindowProject();
modalWindowTodo();
