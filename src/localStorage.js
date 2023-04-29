import Project from './projectFunctions';

class localStorage {
  static getLocalStorage = () => {
    const localStorageArray = [];
    for (let i = 0; i <= localStorage.length; i += 1) {
      for (let x = 0; x <= Project.projects.length; x += 1) {
        if (window.localStorage.length !== 0) {
          const value = window.localStorage.getItem(Project.projects[x].projName);
          localStorageArray.push(value);
					console.log(localStorageArray)
        } else {
          break;
        }
      }
    }
    return localStorageArray;
  };

  static setLocalStorage() {
    for (let i = 0; i < Project.projects.length; i += 1) {
      const key = Project.projects[i].projName;
      const value = Project.projects[i].id;
      console.log(`${key}: ${value}`);
      window.localStorage.setItem(key, value);
    }
  }
}

export default localStorage;

// Project.projects.find(
// 	(project) => project.id === Project.locatedProject.id

// });
