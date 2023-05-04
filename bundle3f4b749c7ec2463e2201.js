/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/getEditedInputs.js":
/*!********************************!*\
  !*** ./src/getEditedInputs.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _projectFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectFunctions */ "./src/projectFunctions.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var TodoEditor = /*#__PURE__*/function () {
  function TodoEditor() {
    _classCallCheck(this, TodoEditor);
  }

  _createClass(TodoEditor, null, [{
    key: "editTodo",
    value: function editTodo(event) {
      if (event.target.getAttribute('id') === 'edit-btn') {
        _projectFunctions__WEBPACK_IMPORTED_MODULE_0__["default"].editProject(event);
        document.getElementById('name-input').value = _projectFunctions__WEBPACK_IMPORTED_MODULE_0__["default"].getExistingValues.proj;
        document.getElementById('desc-input').value = _projectFunctions__WEBPACK_IMPORTED_MODULE_0__["default"].getExistingValues.desc;
        document.getElementById('date-input').value = _projectFunctions__WEBPACK_IMPORTED_MODULE_0__["default"].getExistingValues.date;
        document.getElementById('priority-input').value = _projectFunctions__WEBPACK_IMPORTED_MODULE_0__["default"].getExistingValues.priority;
        document.getElementById('todo-name-input').value = _projectFunctions__WEBPACK_IMPORTED_MODULE_0__["default"].getExistingValues.todoName;
        _projectFunctions__WEBPACK_IMPORTED_MODULE_0__["default"].clearGetExistingValues();
      }
    }
  }]);

  return TodoEditor;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoEditor);

/***/ }),

/***/ "./src/getUserInput.js":
/*!*****************************!*\
  !*** ./src/getUserInput.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var proj = document.getElementById('name-input').value;
  var desc = document.getElementById('desc-input').value;
  var date = document.getElementById('date-input').value;
  var priority = document.getElementById('priority-input').value;
  var todoName = document.getElementById('todo-name-input').value;
  return {
    proj: proj,
    desc: desc,
    date: date,
    priority: priority,
    todoName: todoName
  };
});

/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _projectFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectFunctions */ "./src/projectFunctions.js");
/* harmony import */ var _modifyDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifyDOM */ "./src/modifyDOM.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var localStorage = /*#__PURE__*/function () {
  function localStorage() {
    _classCallCheck(this, localStorage);
  }

  _createClass(localStorage, null, [{
    key: "getLocalStorage",
    value: function getLocalStorage(projects, event) {
      var storedProjects = [];

      for (var i = 0; i < window.localStorage.length; i++) {
        var key = window.localStorage.key(i);
        var value = window.localStorage.getItem(key);

        if (value) {
          var project = JSON.parse(value);
          storedProjects.push({
            key: key,
            project: project
          });
        }
      }

      storedProjects.sort(function (a, b) {
        return a.project.projName.localeCompare(b.project.projName);
      });
      storedProjects.forEach(function (storedProject) {
        _projectFunctions__WEBPACK_IMPORTED_MODULE_0__["default"].addedProject(event, storedProject.key, JSON.stringify(storedProject.project));
        (0,_modifyDOM__WEBPACK_IMPORTED_MODULE_1__.addDOMSidebarProject)();
      });
      console.log(projects);
    }
  }, {
    key: "setLocalStorage",
    value: function setLocalStorage(projects) {
      projects.sort(function (a, b) {
        return a.projName.localeCompare(b.projName);
      });

      for (var i = 0; i < projects.length; i += 1) {
        this.key = projects[i].projName;
        this.value = JSON.stringify(projects[i]);
        console.log("".concat(this.key, ": ").concat(this.value));
        window.localStorage.setItem(this.key, this.value);
      }
    }
  }]);

  return localStorage;
}(); // const localStorageArray = [];
// for (let i = 0; i <= localStorage.length; i += 1) {
//   for (let x = 0; x <= projects.length; x += 1) {
//     if (window.localStorage.length !== 0) {
//       const value = window.localStorage.getItem(projects[x].projName);
//       localStorageArray.push(value);
//       console.log(localStorageArray);
//     } else {
//       break;
//     }
//   }
// }
// return localStorageArray;


_defineProperty(localStorage, "key", '');

_defineProperty(localStorage, "value", '');

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localStorage); // Project.projects.find(
// 	(project) => project.id === Project.locatedProject.id
// });

/***/ }),

/***/ "./src/modalWindowProject.js":
/*!***********************************!*\
  !*** ./src/modalWindowProject.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  // Get the modal
  var modal = document.getElementById('myModal'); // Get form

  var form = document.getElementById('form-div'); // Get the button that opens the modal

  var btn = document.getElementById('addBtn'); // Get the button that submits the form

  var submitButton = document.getElementById('submit-project'); // Get the <span> element that closes the modal

  var span = document.getElementsByClassName('close')[0]; // When the user clicks on the button, open the modal

  btn.onclick = function () {
    modal.style.display = 'block';
  }; // When the user clicks on <span> (x), close the modal


  span.onclick = function () {
    modal.style.display = 'none';
    form.reset();
  }; // When user clicks submit, submit the data


  submitButton.onclick = function () {
    modal.style.display = 'none';
    form.reset();
  }; // When the user clicks anywhere outside of the modal, close it


  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
      form.reset();
    }
  };
});

/***/ }),

/***/ "./src/modalWindowTodo.js":
/*!********************************!*\
  !*** ./src/modalWindowTodo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _projectFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectFunctions */ "./src/projectFunctions.js");
// import { attribute } from './projectFunctions';

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  // Get the modal
  var modal = document.getElementById('myModalTodo'); // Get form

  var formTodo = document.getElementById('form-div-todo'); // Get the button that opens the modal

  var btn = document.getElementById('add-todo'); // Get the button that submits the form

  var submitBtn = document.getElementById('submit-todo'); // Get the <span> element that closes the modal

  var span = document.getElementsByClassName('close-todo')[0];
  var editBtn = document.getElementById('edit-btn'); // When the user clicks on the button, open the modal

  if (editBtn !== null) {
    var editBtnArray = document.querySelectorAll('#edit-btn');
    editBtnArray.forEach(function (element) {
      element.onclick = function () {
        modal.style.display = 'block';
      };
    });
  }

  btn.onclick = function () {
    if (_projectFunctions__WEBPACK_IMPORTED_MODULE_0__["default"].attribute === '') {
      alert('Select a project to add a Todo');
    } else {
      modal.style.display = 'block';
    }
  }; // When the user clicks on <span> (x), close the modal


  span.onclick = function () {
    modal.style.display = 'none';
    formTodo.reset();
  };

  submitBtn.onclick = function () {
    modal.style.display = 'none';
    formTodo.reset();
  }; // When the user clicks anywhere outside of the modal, close it


  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
      formTodo.reset();
    }
  };
});

/***/ }),

/***/ "./src/modifyDOM.js":
/*!**************************!*\
  !*** ./src/modifyDOM.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addDOMSidebarProject": () => (/* binding */ addDOMSidebarProject),
/* harmony export */   "addDOMTodo": () => (/* binding */ addDOMTodo),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _projectFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectFunctions */ "./src/projectFunctions.js");
/* harmony import */ var _modalWindowTodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalWindowTodo */ "./src/modalWindowTodo.js");
/* harmony import */ var _todoCollapsible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoCollapsible */ "./src/todoCollapsible.js");
/* harmony import */ var _getEditedInputs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getEditedInputs */ "./src/getEditedInputs.js");




var addDOMTodo = function addDOMTodo(event) {
  if (event !== undefined) {
    event.preventDefault();
  }

  var todoContainer = document.getElementById('todo-container');
  todoContainer.innerHTML = '';
  var projectTodos = _projectFunctions__WEBPACK_IMPORTED_MODULE_0__["default"].locatedProject;

  if (projectTodos.hasOwnProperty.call(projectTodos, 'todoItems') === false) {
    todoContainer.innerHTML = '';
    return;
  }

  for (var i = 0; i < projectTodos.todoItems.length; i += 1) {
    var todoParaDiv = document.createElement('div');
    var createTodoName = document.createElement('p');
    var createTodoParaDesc = document.createElement('p');
    var createTodoParaDueDate = document.createElement('p');
    var createTodoParaPriority = document.createElement('p');
    var deleteBtn = document.createElement('button');
    var editBtn = document.createElement('button');
    var collapsibleBtn = document.createElement('button');
    collapsibleBtn.setAttribute('class', 'collapsible');
    var collapsibleContent = document.createElement('div');
    collapsibleContent.setAttribute('class', 'content');
    deleteBtn.innerHTML = 'Remove';
    deleteBtn.setAttribute('class', 'delete-btn');
    editBtn.setAttribute('id', 'edit-btn');
    todoParaDiv.setAttribute('class', 'todo-div');
    todoContainer.appendChild(todoParaDiv);
    var JSONArrayDesc = JSON.stringify(projectTodos.todoItems[i].desc);
    var JSONArrayDueDate = JSON.stringify(projectTodos.todoItems[i].date);
    var JSONArrayPriority = JSON.stringify(projectTodos.todoItems[i].priority);
    var JSONArrayName = JSON.stringify(projectTodos.todoItems[i].name);
    var cleanJSONArrayName = JSONArrayName.replace(/[{}"]/g, '').replace(/,/g, ' ').replace(/:/g, function (match) {
      return "".concat(match, " ");
    });
    var cleanJSONArrayDesc = JSONArrayDesc.replace(/[{}"]/g, '').replace(/,/g, ' ').replace(/:/g, function (match) {
      return "".concat(match, " ");
    });
    var cleanJSONArrayDueDate = JSONArrayDueDate.replace(/[{}"]/g, '').replace(/,/g, ' ').replace(/:/g, function (match) {
      return "".concat(match, " ");
    });
    var cleanJSONArrayPriority = JSONArrayPriority.replace(/[{}"]/g, '').replace(/,/g, ' ').replace(/:/g, function (match) {
      return "".concat(match, " ");
    });
    createTodoName.innerHTML = "Name: ".concat(cleanJSONArrayName);
    createTodoParaDesc.innerHTML = "Desc: ".concat(cleanJSONArrayDesc);
    createTodoParaDueDate.innerHTML = "Due Date: ".concat(cleanJSONArrayDueDate);
    createTodoParaPriority.innerHTML = "Priority: ".concat(cleanJSONArrayPriority);
    editBtn.innerHTML = 'Edit';
    todoParaDiv.appendChild(createTodoParaDesc);
    todoParaDiv.appendChild(createTodoParaDueDate);
    todoParaDiv.appendChild(createTodoParaPriority);
    deleteBtn.addEventListener('click', _projectFunctions__WEBPACK_IMPORTED_MODULE_0__["default"].removeProject);
    deleteBtn.addEventListener('click', addDOMTodo);
    editBtn.addEventListener('click', _getEditedInputs__WEBPACK_IMPORTED_MODULE_3__["default"].editTodo);
    todoParaDiv.appendChild(deleteBtn);
    todoParaDiv.appendChild(editBtn);
    todoParaDiv.appendChild(collapsibleBtn);
    collapsibleBtn.innerHTML = createTodoName.innerHTML;
    collapsibleContent.appendChild(createTodoParaDesc);
    collapsibleContent.appendChild(createTodoParaDueDate);
    collapsibleContent.appendChild(createTodoParaPriority);
    todoParaDiv.appendChild(collapsibleContent);
    deleteBtn.setAttribute('data-id', projectTodos.todoItems[i].id);
    collapsibleBtn.setAttribute('data-id', deleteBtn.dataset.id);
    editBtn.setAttribute('data-id', deleteBtn.dataset.id);
    console.log(_projectFunctions__WEBPACK_IMPORTED_MODULE_0__["default"].projects);
    collapsibleBtn.addEventListener('click', _todoCollapsible__WEBPACK_IMPORTED_MODULE_2__["default"]);
    (0,_modalWindowTodo__WEBPACK_IMPORTED_MODULE_1__["default"])();
  }
};

var addDOMProject = function addDOMProject() {
  var projectDiv = document.getElementById('project-div');
  var createDiv = document.createElement('div');
  var createProjectPara = document.createElement('p');
  createProjectPara.innerHTML = _projectFunctions__WEBPACK_IMPORTED_MODULE_0__["default"].locatedProject.projName;
  projectDiv.innerHTML = '';
  createDiv.appendChild(createProjectPara);
  projectDiv.appendChild(createDiv);
};

var addProjectEvents = function addProjectEvents() {
  var paraElementsHTMLCollection = document.getElementsByClassName('project-p');
  var paraElementsArray = Array.from(paraElementsHTMLCollection);
  paraElementsArray.forEach(function (para) {
    para.addEventListener('click', addDOMProject);
    para.addEventListener('click', addDOMTodo);
  });
};

var addDOMSidebarProject = function addDOMSidebarProject(event) {
  if (_projectFunctions__WEBPACK_IMPORTED_MODULE_0__["default"].attribute !== '') {
    event.preventDefault();
  }

  var createP = document.createElement('p');
  createP.setAttribute('class', 'project-p');
  createP.addEventListener('click', _projectFunctions__WEBPACK_IMPORTED_MODULE_0__["default"].getSelectedProject);
  var projectsDiv = document.getElementById('all-projects');

  if (_projectFunctions__WEBPACK_IMPORTED_MODULE_0__["default"].projects.length !== 0) {
    createP.innerHTML = _projectFunctions__WEBPACK_IMPORTED_MODULE_0__["default"].projects[_projectFunctions__WEBPACK_IMPORTED_MODULE_0__["default"].projects.length - 1].projName;
    projectsDiv.appendChild(createP);
    createP.dataset.id = _projectFunctions__WEBPACK_IMPORTED_MODULE_0__["default"].projects[_projectFunctions__WEBPACK_IMPORTED_MODULE_0__["default"].projects.length - 1].id;
    addProjectEvents();
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var submitBtnProject = document.getElementById('submit-project');
  var submitBtnTodo = document.getElementById('submit-todo');
  submitBtnProject.addEventListener('click', _projectFunctions__WEBPACK_IMPORTED_MODULE_0__["default"].addedProject);
  submitBtnProject.addEventListener('click', addDOMSidebarProject);
  submitBtnTodo.addEventListener('click', _projectFunctions__WEBPACK_IMPORTED_MODULE_0__["default"].addTodo);
  submitBtnTodo.addEventListener('click', addDOMTodo);
});

/***/ }),

/***/ "./src/projectFunctions.js":
/*!*********************************!*\
  !*** ./src/projectFunctions.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _getUserInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getUserInput */ "./src/getUserInput.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");
/* harmony import */ var _modifyDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modifyDOM */ "./src/modifyDOM.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Project = /*#__PURE__*/function () {
  function Project(projName, value) {
    _classCallCheck(this, Project);

    this.projName = projName;
    this.id = value !== null ? (0,uuid__WEBPACK_IMPORTED_MODULE_3__["default"])() : value;
    this.todoItems = [];
  }

  _createClass(Project, null, [{
    key: "addedProject",
    value: function addedProject(event, key, value) {
      var getValues = (0,_getUserInput__WEBPACK_IMPORTED_MODULE_0__["default"])();

      if (event !== undefined) {
        event.preventDefault();
        Project.projects.push(new Project(getValues.proj));
        _localStorage__WEBPACK_IMPORTED_MODULE_1__["default"].setLocalStorage(Project.projects);
      } else if (key !== null) {
        Project.projects.push(new Project(key, value));
      } else {
        return;
      }

      console.log(Project.projects);
    }
  }, {
    key: "getSelectedProject",
    value: function getSelectedProject(event, key, value) {
      if (event !== undefined) {
        Project.attribute = event.target.getAttribute('data-id');

        for (var i = 0; Project.projects.length; i += 1) {
          if (Project.projects[i].id === Project.attribute) {
            Project.locatedProject = window.localStorage.getItem(Project.projects[i].projName);
            Project.locatedProject = JSON.parse(Project.locatedProject);
            Project.projects[i].todoItems = Project.locatedProject.todoItems;
            Project.locatedProject.id = Project.attribute;
            console.log(Project.locatedProject);
            console.log(i);
            console.log(Project.projects);
            (0,_modifyDOM__WEBPACK_IMPORTED_MODULE_2__.addDOMTodo)();
            break;
          }
        }
      } // else {
      //   for (let u = 0; u <= Project.projects.length; u++) {
      //     if (Project.projects[u].id === value) {
      //       Project.locatedProject = Project.projects[u];
      //       break;
      //     }
      //   }
      //   Project.attribute = value;
      // }

    }
  }, {
    key: "getTodoLocalStorage",
    value: function getTodoLocalStorage() {}
  }, {
    key: "addTodo",
    value: function addTodo(event, key, value) {
      if (event !== undefined) {
        event.preventDefault();
      }

      var userInput = (0,_getUserInput__WEBPACK_IMPORTED_MODULE_0__["default"])();

      if (Project.projects.find(function (project) {
        return project.id === Project.locatedProject.id;
      }) !== undefined // check if the project exists
      ) {
        if (Project.isEditMode === false) {
          if (Project.locatedProject.hasOwnProperty.call(Project.locatedProject, 'todoItems') === // if we are not in edit mode,
          // check if the project has todoItems
          false) {
            Project.locatedProject.todoItems = [{
              name: userInput.todoName,
              desc: userInput.desc,
              date: userInput.date,
              priority: userInput.priority,
              id: (0,uuid__WEBPACK_IMPORTED_MODULE_3__["default"])()
            }];
            _localStorage__WEBPACK_IMPORTED_MODULE_1__["default"].setLocalStorage(Project.projects);
          } else {
            Project.locatedProject.todoItems.push({
              name: userInput.todoName,
              desc: userInput.desc,
              date: userInput.date,
              priority: userInput.priority,
              id: (0,uuid__WEBPACK_IMPORTED_MODULE_3__["default"])()
            });
            _localStorage__WEBPACK_IMPORTED_MODULE_1__["default"].setLocalStorage(Project.projects);
          }
        } else {
          // if we are in edit mode,
          // Update the existing todoItem instead of overwriting it
          var todoItem = Project.locatedProject.todoItems.find(function (item) {
            return item.id === Project.editTodoId;
          });

          if (todoItem !== undefined) {
            todoItem.name = userInput.todoName;
            todoItem.desc = userInput.desc;
            todoItem.date = userInput.date;
            todoItem.priority = userInput.priority;
            _localStorage__WEBPACK_IMPORTED_MODULE_1__["default"].setLocalStorage(Project.projects);
          } // Reset the edit mode and editTodoId after updating the todoItem


          Project.isEditMode = false;
          Project.editTodoId = null;
        }
      } else {
        console.log('Project not found');
      }
    }
  }, {
    key: "removeProject",
    value: function removeProject(event) {
      for (var i = 0; i < Project.projects.length; i += 1) {
        if (Project.attribute === Project.projects[i].id) {
          for (var x = 0; x <= Project.projects[i].todoItems.length; x += 1) {
            if (event.target.dataset.id === Project.projects[i].todoItems[x].id) {
              var arr = Project.projects[i].todoItems;
              var todoToRemove = window.localStorage.getItem(Project.projects[i].projName);
              var localStorageObject = JSON.parse(todoToRemove);
              var localStorageArray = localStorageObject.todoItems;
              localStorageArray.splice(x, 1); // Update localStorage with the modified localStorageObject

              window.localStorage.setItem(Project.projects[i].projName, JSON.stringify(localStorageObject));
              arr.splice(x, 1);
              break;
            }
          }
        }
      }
    }
  }, {
    key: "editProject",
    value: function editProject(event) {
      for (var i = 0; i < Project.projects.length; i += 1) {
        if (Project.attribute === Project.projects[i].id) {
          for (var x = 0; x <= Project.projects[i].todoItems.length; x += 1) {
            if (event.target.dataset.id === Project.projects[i].todoItems[x].id) {
              Project.isEditMode = true;
              Project.editTodoId = Project.projects[i].todoItems[x].id;
              Project.getExistingValues = (0,_getUserInput__WEBPACK_IMPORTED_MODULE_0__["default"])();
              Project.getExistingValues.todoName = Project.projects[i].todoItems[x].name;
              Project.getExistingValues.desc = Project.projects[i].todoItems[x].desc;
              Project.getExistingValues.date = Project.projects[i].todoItems[x].date;
              Project.getExistingValues.priority = Project.projects[i].todoItems[x].priority;
              Project.getExistingValues.proj = Project.projects[i].projName;
              break;
            }
          }
        }
      }
    }
  }, {
    key: "clearGetExistingValues",
    value: function clearGetExistingValues() {
      Project.getExistingValues = {};
    }
  }]);

  return Project;
}();

_defineProperty(Project, "getExistingValues", {});

_defineProperty(Project, "editTodoId", null);

_defineProperty(Project, "isEditMode", false);

_defineProperty(Project, "projects", []);

_defineProperty(Project, "attribute", '');

_defineProperty(Project, "locatedProject", {});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);

/***/ }),

/***/ "./src/todoCollapsible.js":
/*!********************************!*\
  !*** ./src/todoCollapsible.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var coll = document.getElementsByClassName('collapsible');

function toggleCollapsible(event) {
  var element = event.currentTarget;
  element.classList.toggle('active');
  var content = element.nextElementSibling;

  if (content.style.display === 'block') {
    content.style.display = 'none';
  } else {
    content.style.display = 'block';
  }
}

for (var i = 0; i < coll.length; i += 1) {
  coll[i].addEventListener('click', toggleCollapsible);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleCollapsible);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.css":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.css ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 16px;\n  line-height: 1.6;\n  max-height: 100vh;\n  margin: 0;\n  color: #333;\n  height: 100vh;\n}\n\nh1 {\n  margin: 0;\n  font-size: 2rem;\n  font-weight: 500;\n  line-height: 1.2;\n}\n\np {\n  cursor: default;\n  margin-bottom: 1rem;\n}\n\n.main-content-wrapper {\n  display: flex;\n  height: 100%;\n}\n\n.header {\n  display: flex;\n  background-color: #1089e4;\n  color: white;\n  height: 5rem;\n  justify-content: flex-start;\n  align-items: center;\n  padding-left: 35px;\n  gap: 15px;\n}\n\n#card-container {\n  display: flex;\n  padding: 20px;\n  width: 100vw;\n  justify-content: flex-start;\n  /* flex-wrap: wrap; */\n  background-color: #f5f5f5;\n  word-break: break-all;\n  flex-direction: column;\n  overflow: scroll;\n}\n\ndiv#todo-container {\n  display: flex;\n  gap: 100px;\n  flex-direction: column;\n  /* overflow: hidden; */\n}\n\n.card {\n  display: flex;\n  width: 200px;\n  height: fit-content;\n  border: 3px solid #1089e4;\n  border-radius: 5px;\n  padding: 40px;\n  flex-direction: column;\n  align-items: center;\n  background-color: #e0e0e0;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s;\n}\n\n.card:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);\n}\n\n.wrap-sidebar-content {\n  display: flex;\n  flex-direction: column;\n}\n\n.sidebar {\n  display: flex;\n  flex-direction: column;\n  /* height: 100vh; */\n  justify-content: flex-start;\n  gap: 2rem;\n  align-items: center;\n  width: 400px;\n  background-color: #f0f0f0;\n}\n\n.sidebar-info {\n  margin-right: 50px;\n}\n\n.sidebar-calendar {\n  margin-top: 50px;\n  display: flex;\n  flex-direction: column;\n  height: 200px;\n  justify-content: space-around;\n}\n\n.sidebar-item {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 126px;\n}\n\n.sidebar-item i {\n  padding-right: 10px;\n}\n\n.sidebar-projects h2 {\n  position: relative;\n  left: -20px;\n}\n\ndiv#addBtn {\n  padding: 15px 15px 15px 21px;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n\n#addBtn:hover {\n  background-color: #d9d9d9;\n  border-radius: 10px;\n}\n\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: black;\n  background-color: rgba(0, 0, 0, 0.4);\n  overflow: hidden;\n}\n\n.modal-content {\n  background-color: #fefefe;\n  margin: 15% auto;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 20%;\n  border-radius: 10px;\n}\n\n.close {\n  background-color: #f44336;\n  border-radius: 50%;\n  color: white;\n  display: inline-block;\n  font-size: 16px;\n  font-weight: bold;\n  height: 24px;\n  line-height: 22px;\n  text-align: center;\n  width: 24px;\n  cursor: pointer;\n  text-decoration: none;\n  float: right;\n}\n\n.close:hover {\n  background-color: #d32f2f;\n}\n\n.modal-flex {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.btn-flex {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.sidebar-projects {\n  width: 100px;\n}\n\n.project-div {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  width: 83px;\n}\n\n.project-div p {\n  word-break: break-word;\n}\n\n#add-todo {\n  position: absolute;\n  right: 50px;\n  top: 120px;\n  cursor: pointer;\n}\n\n.modal-todo {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: black;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.modal-content-todo {\n  background-color: #fefefe;\n  margin: 15% auto;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 45%;\n  border-radius: 10px;\n}\n\n.close-todo {\n  background-color: #f44336;\n  border-radius: 50%;\n  color: white;\n  display: inline-block;\n  font-size: 16px;\n  font-weight: bold;\n  height: 24px;\n  line-height: 22px;\n  text-align: center;\n  width: 24px;\n  cursor: pointer;\n  text-decoration: none;\n  float: right;\n  margin-top: -10px;\n  margin-right: -10px;\n}\n\n.close-todo:hover {\n  background-color: #d32f2f;\n}\n\np.project-p {\n  word-break: break-word;\n  margin: 0;\n}\n\n.todo-div > p {\n  width: 220px;\n  pointer-events: none;\n  margin-bottom: 10px;\n}\n\n.collapsible {\n  background-color: #eee;\n  color: #444;\n  cursor: pointer;\n  padding: 18px;\n  width: 100%;\n  border: none;\n  text-align: left;\n  outline: none;\n  font-size: 15px;\n  transition: background-color 0.2s ease-in-out;\n  border-bottom: 1px solid #ddd;\n}\n\n.active,\n.collapsible:hover {\n  background-color: #ccc;\n}\n\n.content {\n  padding: 0 18px;\n  display: none;\n  overflow: hidden;\n  background-color: #f1f1f1;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  margin-top: 10px;\n  transition: max-height 0.2s ease-in-out;\n}\n\n.content > * {\n  padding-bottom: 10px;\n}\n\n.content > *:last-child {\n  padding-bottom: 0;\n}\n\n#submit-project,\n#submit-todo {\n  appearance: none;\n  backface-visibility: hidden;\n  background-color: #2f80ed;\n  border-radius: 10px;\n  border-style: none;\n  box-shadow: none;\n  box-sizing: border-box;\n  color: #fff;\n  cursor: pointer;\n  display: inline-block;\n  font-family: Inter, -apple-system, system-ui, \"Segoe UI\", Helvetica, Arial, sans-serif;\n  font-size: 15px;\n  font-weight: 500;\n  height: 50px;\n  letter-spacing: normal;\n  line-height: 1.5;\n  outline: none;\n  overflow: hidden;\n  padding: 14px 30px;\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  transform: translate3d(0, 0, 0);\n  transition: all 0.3s;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  vertical-align: top;\n  white-space: nowrap;\n  width: auto;\n}\n\n#submit-project:hover,\n#submit-todo:hover {\n  background-color: #1366d6;\n  box-shadow: rgba(0, 0, 0, 0.1) 0 5px 30px, rgba(0, 0, 0, 0.1) 0 1px 4px;\n  opacity: 1;\n  transform: translateY(0);\n  transition-duration: 0.35s;\n}\n\n#submit-project:hover:after,\n#submit-todo:hover::after {\n  opacity: 0.5;\n}\n\n#submit-project:active,\n#submit-todo:active {\n  box-shadow: rgba(0, 0, 0, 0.1) 0 3px 6px 0, rgba(0, 0, 0, 0.1) 0 0 10px 0, rgba(0, 0, 0, 0.1) 0 1px 4px -1px;\n  transform: translateY(2px);\n  transition-duration: 0.35s;\n}\n\n#submit-project:active:after,\n#submit-todo:active::after {\n  opacity: 1;\n}\n\ninput,\nselect {\n  font-size: 16px;\n  padding: 8px 12px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  outline: none;\n  transition: border-color 0.3s, box-shadow 0.3s;\n}\n\ninput:focus,\ninput:hover,\nselect:focus,\nselect:hover {\n  border-color: #66afe9;\n  box-shadow: 0 0 3px rgba(102, 175, 233, 0.5);\n}\n\ninput[type=submit],\ninput[type=button] {\n  background-color: #4caf50;\n  color: white;\n  border: none;\n  cursor: pointer;\n  transition: background-color 0.3s, transform 0.3s;\n}\n\ninput[type=submit]:hover,\ninput[type=button]:hover {\n  background-color: #45a049;\n  transform: translateY(-2px);\n}\n\ninput[type=submit]:active,\ninput[type=button]:active {\n  background-color: #3d8b40;\n  transform: translateY(0);\n}\n\ninput:not(:last-of-type),\nselect:not(:last-of-type) {\n  margin-bottom: 10px;\n}\n\n/* Delete Button */\n.delete-btn {\n  background-color: #f44336;\n  border: none;\n  border-radius: 4px;\n  color: white;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: bold;\n  padding: 8px 12px;\n  text-align: center;\n  text-decoration: none;\n  transition: background-color 0.3s;\n  float: right;\n}\n\n.delete-btn:hover {\n  background-color: #d32f2f;\n}\n\n/* Edit Button */\n#edit-btn {\n  background-color: #4caf50;\n  border: none;\n  border-radius: 4px;\n  color: white;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: bold;\n  padding: 8px 12px;\n  text-align: center;\n  text-decoration: none;\n  transition: background-color 0.3s;\n  float: right;\n}\n\n#edit-btn:hover {\n  background-color: #43a047;\n}\n\n#project-div > div {\n  font-size: 24px;\n  font-weight: bold;\n  color: #333;\n  margin-bottom: 20px;\n}\n\n.project-p {\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n}\n\n.project-p:hover::after {\n  content: \"\";\n  position: absolute;\n  bottom: -2px;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  background-color: #fbbf24;\n  cursor: pointer;\n}\n\n.footer {\n  flex: 0;\n  width: 100vw;\n  text-align: center;\n  color: #e4e3e3;\n  background-color: #332f2f;\n  padding: 15px;\n  cursor: default;\n}\n\n.fa-brands,\n.fab {\n  font-weight: 400;\n}\n\n.header h1 {\n  cursor: default;\n}\n\n.sidebar-projects > h2 {\n  cursor: default;\n}\n\ndiv#all-projects {\n  display: flex;\n  flex-direction: column;\n}", "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\n\nbody {\n  font-family: 'Roboto', sans-serif;\n  font-size: 16px;\n  line-height: 1.6;\n  max-height: 100vh;\n  margin: 0;\n  color: #333;\n  height: 100vh;\n}\n\nh1 {\n  margin: 0;\n  font-size: 2rem;\n  font-weight: 500;\n  line-height: 1.2;\n}\n\np {\n  cursor: default;\n  margin-bottom: 1rem;\n}\n\n.main-content-wrapper {\n  display: flex;\n  height: 100%;\n}\n\n.header {\n  display: flex;\n  background-color: #1089e4;\n  color: white;\n  height: 5rem;\n  justify-content: flex-start;\n  align-items: center;\n  padding-left: 35px;\n  gap: 15px;\n}\n\n#card-container {\n  display: flex;\n  padding: 20px;\n  width: 100vw;\n  justify-content: flex-start;\n  /* flex-wrap: wrap; */\n  background-color: #f5f5f5;\n  word-break: break-all;\n  flex-direction: column;\n  overflow: scroll;\n}\n\ndiv#todo-container {\n  display: flex;\n  gap: 100px;\n  flex-direction: column;\n  /* overflow: hidden; */\n}\n\n.card {\n  display: flex;\n  width: 200px;\n  height: fit-content;\n  border: 3px solid #1089e4;\n  border-radius: 5px;\n  padding: 40px;\n  flex-direction: column;\n  align-items: center;\n  background-color: #e0e0e0;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s;\n}\n\n.card:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);\n}\n\n.wrap-sidebar-content {\n  display: flex;\n  flex-direction: column;\n}\n\n.sidebar {\n  display: flex;\n  flex-direction: column;\n  /* height: 100vh; */\n  justify-content: flex-start;\n  gap: 2rem;\n  align-items: center;\n  width: 400px;\n  background-color: #f0f0f0;\n}\n\n.sidebar-info {\n  margin-right: 50px;\n}\n\n.sidebar-calendar {\n  margin-top: 50px;\n  display: flex;\n  flex-direction: column;\n  height: 200px;\n  justify-content: space-around;\n}\n\n.sidebar-item {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 126px;\n}\n\n.sidebar-item i {\n  padding-right: 10px;\n}\n\n.sidebar-projects h2 {\n  position: relative;\n  left: -20px;\n}\n\ndiv#addBtn {\n  padding: 15px 15px 15px 21px;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n\n#addBtn:hover {\n  background-color: #d9d9d9;\n  border-radius: 10px;\n}\n\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n  overflow: hidden;\n}\n\n.modal-content {\n  background-color: #fefefe;\n  margin: 15% auto;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 20%;\n  border-radius: 10px;\n}\n\n.close {\n  background-color: #f44336;\n  border-radius: 50%;\n  color: white;\n  display: inline-block;\n  font-size: 16px;\n  font-weight: bold;\n  height: 24px;\n  line-height: 22px;\n  text-align: center;\n  width: 24px;\n  cursor: pointer;\n  text-decoration: none;\n  float: right;\n}\n\n.close:hover {\n  background-color: #d32f2f;\n}\n\n.modal-flex {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.btn-flex {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.sidebar-projects {\n  width: 100px;\n}\n\n.project-div {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  width: 83px;\n}\n\n.project-div p {\n  word-break: break-word;\n}\n\n#add-todo {\n  position: absolute;\n  right: 50px;\n  top: 120px;\n  cursor: pointer;\n}\n\n.modal-todo {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.modal-content-todo {\n  background-color: #fefefe;\n  margin: 15% auto;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 45%;\n  border-radius: 10px;\n}\n\n.close-todo {\n  background-color: #f44336;\n  border-radius: 50%;\n  color: white;\n  display: inline-block;\n  font-size: 16px;\n  font-weight: bold;\n  height: 24px;\n  line-height: 22px;\n  text-align: center;\n  width: 24px;\n  cursor: pointer;\n  text-decoration: none;\n  float: right;\n  margin-top: -10px;\n  margin-right: -10px;\n}\n\n.close-todo:hover {\n  background-color: #d32f2f;\n}\n\np.project-p {\n  word-break: break-word;\n  margin: 0;\n}\n\n.todo-div > p {\n  width: 220px;\n  pointer-events: none;\n  margin-bottom: 10px;\n}\n\n.collapsible {\n  background-color: #eee;\n  color: #444;\n  cursor: pointer;\n  padding: 18px;\n  width: 100%;\n  border: none;\n  text-align: left;\n  outline: none;\n  font-size: 15px;\n  transition: background-color 0.2s ease-in-out;\n  border-bottom: 1px solid #ddd;\n}\n\n.active,\n.collapsible:hover {\n  background-color: #ccc;\n}\n\n.content {\n  padding: 0 18px;\n  display: none;\n  overflow: hidden;\n  background-color: #f1f1f1;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  margin-top: 10px;\n  transition: max-height 0.2s ease-in-out;\n}\n\n.content > * {\n  padding-bottom: 10px;\n}\n\n.content > *:last-child {\n  padding-bottom: 0;\n}\n\n#submit-project,\n#submit-todo {\n  appearance: none;\n  backface-visibility: hidden;\n  background-color: #2f80ed;\n  border-radius: 10px;\n  border-style: none;\n  box-shadow: none;\n  box-sizing: border-box;\n  color: #fff;\n  cursor: pointer;\n  display: inline-block;\n  font-family: Inter, -apple-system, system-ui, 'Segoe UI', Helvetica, Arial,\n    sans-serif;\n  font-size: 15px;\n  font-weight: 500;\n  height: 50px;\n  letter-spacing: normal;\n  line-height: 1.5;\n  outline: none;\n  overflow: hidden;\n  padding: 14px 30px;\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  transform: translate3d(0, 0, 0);\n  transition: all 0.3s;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  vertical-align: top;\n  white-space: nowrap;\n  width: auto;\n}\n\n#submit-project:hover,\n#submit-todo:hover {\n  background-color: #1366d6;\n  box-shadow: rgba(0, 0, 0, 0.1) 0 5px 30px, rgba(0, 0, 0, 0.1) 0 1px 4px;\n  opacity: 1;\n  transform: translateY(0);\n  transition-duration: 0.35s;\n}\n\n#submit-project:hover:after,\n#submit-todo:hover::after {\n  opacity: 0.5;\n}\n\n#submit-project:active,\n#submit-todo:active {\n  box-shadow: rgba(0, 0, 0, 0.1) 0 3px 6px 0, rgba(0, 0, 0, 0.1) 0 0 10px 0,\n    rgba(0, 0, 0, 0.1) 0 1px 4px -1px;\n  transform: translateY(2px);\n  transition-duration: 0.35s;\n}\n\n#submit-project:active:after,\n#submit-todo:active::after {\n  opacity: 1;\n}\n\ninput,\nselect {\n  font-size: 16px;\n  padding: 8px 12px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  outline: none;\n  transition: border-color 0.3s, box-shadow 0.3s;\n}\n\ninput:focus,\ninput:hover,\nselect:focus,\nselect:hover {\n  border-color: #66afe9;\n  box-shadow: 0 0 3px rgba(102, 175, 233, 0.5);\n}\n\ninput[type='submit'],\ninput[type='button'] {\n  background-color: #4caf50;\n  color: white;\n  border: none;\n  cursor: pointer;\n  transition: background-color 0.3s, transform 0.3s;\n}\n\ninput[type='submit']:hover,\ninput[type='button']:hover {\n  background-color: #45a049;\n  transform: translateY(-2px);\n}\n\ninput[type='submit']:active,\ninput[type='button']:active {\n  background-color: #3d8b40;\n  transform: translateY(0);\n}\n\ninput:not(:last-of-type),\nselect:not(:last-of-type) {\n  margin-bottom: 10px;\n}\n\n/* Delete Button */\n.delete-btn {\n  background-color: #f44336;\n  border: none;\n  border-radius: 4px;\n  color: white;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: bold;\n  padding: 8px 12px;\n  text-align: center;\n  text-decoration: none;\n  transition: background-color 0.3s;\n  float: right;\n}\n\n.delete-btn:hover {\n  background-color: #d32f2f;\n}\n\n/* Edit Button */\n#edit-btn {\n  background-color: #4caf50;\n  border: none;\n  border-radius: 4px;\n  color: white;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: bold;\n  padding: 8px 12px;\n  text-align: center;\n  text-decoration: none;\n  transition: background-color 0.3s;\n  float: right;\n}\n\n#edit-btn:hover {\n  background-color: #43a047;\n}\n\n#project-div > div {\n  font-size: 24px;\n  font-weight: bold;\n  color: #333;\n  margin-bottom: 20px;\n}\n\n.project-p {\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n}\n\n.project-p:hover::after {\n  content: '';\n  position: absolute;\n  bottom: -2px;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  background-color: #fbbf24;\n  cursor: pointer;\n}\n\n.footer {\n  flex: 0;\n  width: 100vw;\n  text-align: center;\n  color: rgb(228, 227, 227);\n  background-color: rgb(51, 47, 47);\n  padding: 15px;\n  cursor: default;\n}\n\n.fa-brands,\n.fab {\n  font-weight: 400;\n}\n.header h1 {\n  cursor: default;\n}\n\n.sidebar-projects > h2 {\n  cursor: default;\n}\n\ndiv#all-projects {\n\tdisplay: flex;\n\tflex-direction: column;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  randomUUID
});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "unsafeStringify": () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/esm-browser/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");




function v4(options, buf, offset) {
  if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
    return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");
/* harmony import */ var _modifyDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modifyDOM */ "./src/modifyDOM.js");
/* harmony import */ var _modalWindowProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modalWindowProject */ "./src/modalWindowProject.js");
/* harmony import */ var _modalWindowTodo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modalWindowTodo */ "./src/modalWindowTodo.js");
/* harmony import */ var _projectFunctions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projectFunctions */ "./src/projectFunctions.js");





 // Import Project class


_localStorage__WEBPACK_IMPORTED_MODULE_1__["default"].getLocalStorage(_projectFunctions__WEBPACK_IMPORTED_MODULE_5__["default"].projects);
(0,_modifyDOM__WEBPACK_IMPORTED_MODULE_2__.addDOMTodo)();
(0,_modifyDOM__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_modalWindowProject__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_modalWindowTodo__WEBPACK_IMPORTED_MODULE_4__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=bundle3f4b749c7ec2463e2201.js.map