import { LibManifestPlugin } from "webpack";

//Storing the to do list.
let toDoList = [];

//Function to generate form to add a to do.
const addToDoForm = (() =>{
    const toDoForm = document.createElement('form');
    toDoForm.classList.add('toDoForm');

    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Title:';
    titleLabel.setAttribute('for', 'titleInput')
    toDoForm.appendChild(titleLabel);
    const titleInput = document.createElement('input');
    titleInput.setAttribute('name', 'titleInput');
    toDoForm.appendChild(titleInput);

    const descriptionLabel = document.createElement('label');
    descriptionLabel.textContent = 'Description:';
    descriptionLabel.setAttribute('for', 'descInput')
    toDoForm.appendChild(descriptionLabel);
    const descriptionInput = document.createElement('textarea');
    descriptionInput.setAttribute('name', 'descInput');
    toDoForm.appendChild(descriptionInput);

    const dueLabel = document.createElement('label');
    dueLabel.textContent = 'Due By:';
    dueLabel.setAttribute('for', 'dueDate')
    toDoForm.appendChild(dueLabel);
    const dueInput = document.createElement('input');
    dueInput.setAttribute('name', 'dueDate');
    dueInput.setAttribute('type', 'date');
    toDoForm.appendChild(dueInput);

    const priorityLabel = document.createElement('label');
    priorityLabel.textContent = 'Priority 1-5:';
    priorityLabel.setAttribute('for', 'priority')
    toDoForm.appendChild(priorityLabel);
    priorityLabel.textContent = 'Priority 1-5:';
    priorityLabel.setAttribute('for', 'priority')
    toDoForm.appendChild(priorityLabel);
    const priorityInput = document.createElement('input');
    priorityInput.setAttribute('name', 'priority');
    priorityInput.setAttribute('type', 'number');    
    priorityInput.setAttribute('min', '1');    
    priorityInput.setAttribute('max', '5');    
    priorityInput.setAttribute('value', '3');        
    toDoForm.appendChild(priorityInput);

    const addToDo = document.createElement('button');
    addToDo.classList.add('addToDo');
    addToDo.textContent = 'Add';
    toDoForm.appendChild(addToDo);

    return { toDoForm, titleInput, descriptionInput, dueInput, priorityInput, addToDo}
})()


//Pushing to dos to list.
addToDoForm.addToDo.addEventListener('click', () => {
    toDoList.push({
        title: addToDoForm.titleInput.value,
        desc: addToDoForm.descriptionInput.value,
        due: addToDoForm.dueInput.value,
        priority: addToDoForm.priorityInput.value,
    });
    const main = document.querySelector('main');
    main.appendChild(addToDoForm.toDoForm);
    console.log(toDoList);
});

export { addToDoForm, toDoList }