//Storing to do's.
let toDoList = [{
    title: 'Hello!',
    desc: 'Howdy Neighbour.',
    due: '15/02/2022',
    priority: '4',
}];

//Function to generate form to add a to do.
const addToDoForm = (() =>{
    const toDoForm = document.createElement('div');
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
    //Pushing to dos to list.
    addToDo.addEventListener('click', (e) => {
        toDoList.push({
            title: addToDoForm.titleInput.value,
            desc: addToDoForm.descriptionInput.value,
            due: addToDoForm.dueInput.value,
            priority: addToDoForm.priorityInput.value,
        });
        addToDoForm.titleInput.value = '';
        addToDoForm.descriptionInput.value = '';
        addToDoForm.dueInput.value = '';
        addToDoForm.priorityInput.value = '3';
    });
    toDoForm.appendChild(addToDo);

    return { toDoForm, titleInput, descriptionInput, dueInput, priorityInput, addToDo}
})()

export { addToDoForm, toDoList }