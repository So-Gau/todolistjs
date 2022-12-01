//selecteurs
const todoInput = document.querySelector(".todo-input")
const todoButton = document.querySelector(".todo-button")
const todoList = document.querySelector(".todo-list")

//ecouteurs
todoButton.addEventListener("click", addTodo);

//fonctions
function addTodo(event) {
    event.preventDefault();
    
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // créer le li
    const newTodo = document.createElement("li");
    newTodo.innerText = "Hey";
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    // bouton check
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
     // bouton supprimer
     const trashButton = document.createElement("button");
     trashButton.innerHTML = '<i class="fas fa-trash"></i>';
     trashButton.classList.add("trash-btn");
     todoDiv.appendChild(trashButton);
     // AJOUTER NOTRE TODO à TODO-LIST
    todoList.appendChild(todoDiv);
}