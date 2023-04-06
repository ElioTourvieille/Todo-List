// Global Variable
const todoInput = document.querySelector(".todo-input")
const todoBtn = document.querySelector(".todo-button")
const todoList = document.querySelector(".todo-list")

// Events
todoBtn.addEventListener("click", addTodo)
todoList.addEventListener("click", deleteCheck)

// Functions
function addTodo(event) {  // To create a new case with a task
    event.preventDefault()

    const todoDiv = document.createElement("div") // Create a new div with class="todo"
    todoDiv.classList.add("todo")

    const newTodo = document.createElement("li") // Create a li with class="todo-item"
    newTodo.innerText = todoInput.value
    newTodo.classList.add("todo-item")
    todoDiv.appendChild(newTodo)

    const completedBtn = document.createElement("button") // Create a new button "completed"
    completedBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    completedBtn.classList.add("complete-btn")
    todoDiv.appendChild(completedBtn)
 
    const trashBtn = document.createElement("button") // Create a new button "delete"
    trashBtn.innerHTML = '<i class="fa-solid fa-trash"></i>' 
    trashBtn.classList.add("trash-btn")
    todoDiv.appendChild(trashBtn)

    todoList.appendChild(todoDiv)
    todoInput.value = ""          // Refresh the text in add case
}

function deleteCheck(e) { // To delete or check a Todo
    const item = e.target
    if (item.classList[0] === "trash-btn"){  // Delete a Todo
        const todo = item.parentElement;
    todo.classList.add("fall")
    todo.addEventListener("transitionend", function () {
      todo.remove()
    })
}

if (item.classList[0] === "complete-btn"){ // Check a Todo
    item.parentElement.classList.toggle("completed");
}
}