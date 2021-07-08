//Put in a seperate function as it may be usefull to export seperately.
function addToDo() {
    console.log('hi');

    const toDoForm = document.createElement('form');

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
    const priorityInput = document.createElement('input');
    priorityInput.setAttribute('name', 'priority');
    priorityInput.setAttribute('type', 'number');    
    priorityInput.setAttribute('min', '1');    
    priorityInput.setAttribute('max', '5');    
    toDoForm.appendChild(priorityInput);

    const addToDo = document.createElement('btn');
    addToDo.textContent = 'Add';
    addToDo.classList.add('addToDo');
    toDoForm.appendChild(addToDo);

    return toDoForm
}

function pageload(){
    const h1 = document.createElement('h1');
    h1.textContent = 'Get It Done!';
    document.body.appendChild(h1);

    const main = document.createElement('main');
    document.body.appendChild(main);

    const addToDos = document.createElement('section');
    addToDos.classList.add('addToDos');
    main.appendChild(addToDos);

    const addBtn = document.createElement('btn');
    addBtn.textContent = 'Add';
    addToDos.appendChild(addBtn);

    const toDoForm = addToDo();
    addToDos.appendChild(toDoForm); 

}

export { pageload };