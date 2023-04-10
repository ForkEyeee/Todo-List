// index.js
import './styles/main.css';
// import { initializeEvents } from './initializeEventListeners';
import { addProject } from './projectFunctions';
import { addDOMSidebar, addDOMContainer } from './modifyDOM';


addProject()
addDOMSidebar()
addDOMContainer()

// initializeEvents();
