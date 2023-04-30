import Project from './projectFunctions';
import { addDOMSidebarProject } from './modifyDOM';

class localStorage {
  static key = '';

  static value = '';

  static getLocalStorage(projects, event) {
    const storedProjects = [];

    for (let i = 0; i < window.localStorage.length; i++) {
      const key = window.localStorage.key(i);
      const value = window.localStorage.getItem(key);
      if (value) {
        const project = JSON.parse(value);
        storedProjects.push({ key, project });
      }
    }

    storedProjects.sort((a, b) =>
      a.project.projName.localeCompare(b.project.projName)
    );

    storedProjects.forEach((storedProject) => {
      Project.addedProject(
        event,
        storedProject.key,
        JSON.stringify(storedProject.project)
      );
      addDOMSidebarProject();
    });

    console.log(projects);
  }

  static setLocalStorage(projects) {
    projects.sort((a, b) => a.projName.localeCompare(b.projName));

    for (let i = 0; i < projects.length; i += 1) {
      this.key = projects[i].projName;
      this.value = JSON.stringify(projects[i]);
      console.log(`${this.key}: ${this.value}`);
      window.localStorage.setItem(this.key, this.value);
    }
  }
}

// const localStorageArray = [];
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

export default localStorage;

// Project.projects.find(
// 	(project) => project.id === Project.locatedProject.id

// });
