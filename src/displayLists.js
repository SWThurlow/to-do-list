//Retrieving To Do List.
import { toDoList } from "./addToDo.js";
//Retrieving form elements to be able to edit to do's/projects.
import { addToDoForm } from "./addToDo.js";
//Retrieving icons.
import Expand from './imgs/expand.png';
import Shrink from './imgs/shrink.png';
import Edit from './imgs/edit.png';
import Tick from './imgs/tick.png';


//Key for priority colours.
const key = (()=>{
    const div = document.createElement('div');
    div.classList.add('priorityKey');

    const keyLabel = document.createElement('p');
    keyLabel.textContent = 'Priority Colours:';
    div.appendChild(keyLabel);

    const five = document.createElement('p');
    five.textContent = '5';
    five.classList.add('five');
    div.appendChild(five);

    const four = document.createElement('p');
    four.textContent = '4';
    four.classList.add('four');
    div.appendChild(four);

    const three = document.createElement('p');
    three.textContent = '3';
    three.classList.add('three');
    div.appendChild(three);

    const two = document.createElement('p');
    two.textContent = '2';
    two.classList.add('two');
    div.appendChild(two);

    const one = document.createElement('p');
    one.textContent = '1';
    one.classList.add('one');
    div.appendChild(one);

    return { div }
})()

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
        expand.src = Expand;
        div.appendChild(expand);

        //Elements to be shown in expanded view
        const priority = document.createElement('p');
        priority.textContent = `Priority: ${item.priority}`

        const description = document.createElement('p');
        description.textContent = item.desc;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            display.removeChild(div);
            toDoList.splice(toDoList.indexOf(item), 1);
        });

        //To edit to do.
        const complete = new Image(24, 24);
        complete.src = Tick;
        complete.addEventListener('click', () => {
            let toDoEdit = toDoList[toDoList.indexOf(item)];
            toDoEdit.title = addToDoForm.titleInput.value;
            toDoEdit.desc = addToDoForm.descriptionInput.value;
            toDoEdit.due = addToDoForm.dueInput.value;
            toDoEdit.priority = addToDoForm.priorityInput.value;

            div.removeChild(addToDoForm.titleInput);
            div.removeChild(addToDoForm.descriptionInput);
            div.removeChild(addToDoForm.dueInput);
            div.removeChild(addToDoForm.priorityInput);

            title.textContent = item.title;
            div.appendChild(title);
            due.textContent = item.due;
            div.appendChild(due);
            priority.textContent = `Priority: ${item.priority}`
            div.appendChild(priority);
            description.textContent = item.desc;
            div.appendChild(description);

            div.appendChild(edit);
            div.appendChild(deleteBtn);
            div.appendChild(shrink);
            div.appendChild(edit);
        });

        const edit = new Image(24, 24);
        edit.src = Edit;
        edit.addEventListener('click', () => {
            div.removeChild(title);
            div.appendChild(addToDoForm.titleInput);
            addToDoForm.titleInput.value = item.title;
            div.removeChild(description);
            div.appendChild(addToDoForm.descriptionInput);
            addToDoForm.descriptionInput.value = item.desc;
            div.removeChild(due);
            div.appendChild(addToDoForm.dueInput);
            addToDoForm.dueInput.value = item.due;
            div.removeChild(priority);
            div.appendChild(addToDoForm.priorityInput);
            addToDoForm.priorityInput.value = item.priority;
            div.removeChild(deleteBtn);
            div.removeChild(shrink);
            div.removeChild(edit);
            div.appendChild(complete)

            div.classList.add('toDoForm');
        });

        //To navigate out of the expanded view.
        const shrink = new Image(24, 24);
        shrink.src = Shrink;
        shrink.addEventListener('click', () => {
            div.removeChild(priority);
            div.removeChild(description);
            div.removeChild(edit);
            div.removeChild(deleteBtn);
            div.appendChild(expand);
            div.removeChild(shrink);
        });

        expand.addEventListener('click', () => {
            div.appendChild(priority);
            div.appendChild(description);
            div.appendChild(edit);
            div.appendChild(deleteBtn);
            div.removeChild(expand);
            div.appendChild(shrink);
            div.appendChild(edit);
        });

        switch(item.priority){
            case '1': 
                div.setAttribute('data-priority', 1);
                break;
            case '2':
                div.setAttribute('data-priority', 2);
                break;
            case '3':
                div.setAttribute('data-priority', 3);
                break;
            case '4':
                div.setAttribute('data-priority', 4);
                break;
            case '5':
                div.setAttribute('data-priority', 5);
                break;
        }
        
        display.appendChild(div);
    });
}

const toDoDisplay = (() => {
    let h2 = document.createElement('h2');
    h2.textContent = "To Do's";

    let display = document.createElement('section');
    displayToDoList(display);

    return { h2, display } 
})();

export { key, toDoDisplay }