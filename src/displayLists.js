//Retrieving To Do List.
import { toDoList } from "./addToDo.js";

//Displaying list on screen.
function displayToDoList(display) {
    toDoList.forEach(item => {
        const div = document.createElement('div');
        div.setAttribute('class', 'toDoContainer');
        const title = document.createElement('h3');
        title.textContent = item.title;
        div.appendChild(title);
        const due = document.createElement('p');
        due.textContent = item.due;
        div.appendChild(due);
        const expand = new Image(24, 24);
        expand.src = './imgs/expand.png';
        div.appendChild(expand);
        /*const priority = document.createElement('p')
        priority.textContent = item.priority;
        div.appendChild(priority);*/
        display.appendChild(div);

        let priorityValue;
        switch(item.priority){
            case '1': 
                priorityValue = 1;
                break;
            case '2':
                priorityValue = 2;
                break;
            case '3':
                priorityValue = 3;
                break;
            case '4':
                priorityValue = 4;
                break;
            case '5':
                priorityValue = 5;
                break;
        }
        div.setAttribute('data-priority', priorityValue);
        /*
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            display.removeChild(div);
            toDoList.splice(toDoList.indexOf(item), 1);
        });
        div.appendChild(deleteBtn);
        display.appendChild(div);*/
    });
}

const toDoDisplay = (() => {
    let h2 = document.createElement('h2');
    h2.textContent = "To Do's";

    let display = document.createElement('section');
    displayToDoList(display);

    return { h2, display } 
})();

export { toDoDisplay }