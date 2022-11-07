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

/*function removeTask(){
    div.remove()
}*/

//faire un array qui contient mes éléments

/*EN BONUS
- condition if si l'input est vide > afficher un warning, sinon afficher la div s'il y a du texte
- retour à la ligne si le texte est trop long
- effacer le texte à l'intérieur de l'input quand la tâche est envoyée
- sauvegarder la to do sur la session
- permettre à l'utilisateur de gérer le visuel de sa to do list (sobre, coloré, sombre,)
*/






