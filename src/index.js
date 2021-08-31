import './resetstyle.css';
import './style.css';
//Imports.
import { addToDoForm } from './addToDo.js'; 

//Page elements object.
const pageElements = (() => {
    const h1 = document.createElement('h1');
    h1.textContent = 'Get It Done!';

    const main = document.createElement('main');

    const nav = document.createElement('nav');

    const navList = document.createElement('ul');
    nav.appendChild(navList);
    const addToDo = document.createElement('li');
    addToDo.textContent = 'Add To Do';
    navList.appendChild(addToDo);
    addToDo.addEventListener('click', () => {
        main.appendChild(addToDoForm.toDoForm);
    });


    const startProject = document.createElement('li');
    startProject.textContent = 'Start Project';
    navList.appendChild(startProject);

    const displayToDos = document.createElement('li');
    displayToDos.textContent = "To Do's";
    navList.appendChild(displayToDos);
    displayToDos.addEventListener('click', () => {
        main.appendChild(toDoDisplay());
    });


    const displayProjects =  document.createElement('li');
    displayProjects.textContent = "Projects";
    navList.appendChild(displayProjects);
    

    return {h1, main, nav}
})();

//On page load.
function pageLoad() {
    document.body.appendChild(pageElements.h1);
    document.body.appendChild(pageElements.nav);
    document.body.appendChild(pageElements.main);
}

pageLoad();
