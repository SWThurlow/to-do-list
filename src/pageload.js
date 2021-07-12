//Imports.
import { addToDoForm } from './addToDo.js'; 

//Page elements object.
const pageElements = (() => {
    const h1 = document.createElement('h1');
    h1.textContent = 'Get It Done!';

    const main = document.createElement('main');

    const addToDos = document.createElement('section');
    addToDos.classList.add('addToDos');
    main.appendChild(addToDos);

    const addBtn = document.createElement('button');
    addBtn.textContent = 'Add';
    addBtn.addEventListener('click', () => {
        toDoForm.classList.add('revealForm');
    })
    addToDos.appendChild(addBtn);

    const toDoForm = addToDoForm();
    addToDos.appendChild(toDoForm); 

    const toDos = document.createElement('section');
    main.appendChild(toDos);

    return {h1, main}
})();

function pageload(){
    document.body.appendChild(pageElements.h1);

    document.body.appendChild(pageElements.main);
}

export { pageload, pageElements };