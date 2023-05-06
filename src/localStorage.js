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
  }

  static setLocalStorage(projects) {
    projects.sort((a, b) => a.projName.localeCompare(b.projName));

    for (let i = 0; i < projects.length; i += 1) {
      this.key = projects[i].projName;
      this.value = JSON.stringify(projects[i]);
      window.localStorage.setItem(this.key, this.value);
    }
  }
}

export default localStorage;
