let addTask = document.querySelector('button');

function add(){
    let section = document.querySelector('section');
    let inputTask = document.getElementById('inputTask').value;
    let boxTask = document.createElement('div');
    boxTask.setAttribute('class', 'box-style');

    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";

    let rmTask = document.createElement('div');
    rmTask.setAttribute('class', 'rm-task-style');
    rmTask.innerText = "✖";
    rmTask.setAttribute('onclick', 'removeTask(this)');

    boxTask.append(checkbox, inputTask, rmTask);
    section.append(boxTask);
}

addTask.addEventListener('click', add)


function removeTask(b){
    b.parentNode.remove();
    console.log(b)
}
