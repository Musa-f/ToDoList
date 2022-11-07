const section = document.querySelector('section');
const addTask = document.querySelector('button');

function add(){
    const boxTask = document.createElement('div');
    boxTask.classList.add('box-style');
    
    const inputTask = document.getElementById('inputTask').value;
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    const rmTask = document.createElement('div');
    rmTask.classList.add('rm-task-style')
    rmTask.innerText = "✖";

    boxTask.append(checkbox, inputTask, rmTask);
    section.append(boxTask);

    rmTask.addEventListener('click', function(){
        boxTask.remove();
    });
}

addTask.addEventListener('click', add);




