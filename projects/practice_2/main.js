window.addEventListener("load" , function(){
    todos = JSON.parse(localStorage.getItem("todos")) || []

     // Get DOM elements
   const nameInput = document.getElementById("name");
   const newInputForm = document.querySelector("#new-todo-form");


   const username = localStorage.getItem("username") || " ";

   nameInput.value = username;


   nameInput.addEventListener("change" , function(e){
  
    localStorage.setItem("username" , e.target.value)

   }) 


 newInputForm.addEventListener("submit",function(e){
    e.preventDefault();

      // Create todo object from form input
      let todo = {
        content: e.target.elements.content.value,
        category: e.target.elements.category.value,
        done: false,
        createdAt: new Date().getTime()
     };



     todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
    e.target.reset();
    DisplayTodos()

 })
 
 DisplayTodos()



})



function DisplayTodos()
{
     // Get todo list element
   const todoList = document.querySelector('#todo-list');
   todoList.innerHTML = ""; // Clear existing todo items

    // Retrieve todos from local storage
    let todos = JSON.parse(localStorage.getItem('todos')) || [];

    todos.forEach((todo, index)=>{
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-item');

// Create elements for todo item
        const label = document.createElement('label');
        const input = document.createElement('input');
        const span = document.createElement('span');
        const content = document.createElement('div');
        const actions = document.createElement('div');
        const edit = document.createElement('button');
        const deleteButton = document.createElement('button');

          // Set attributes and classes for elements
      input.type = 'checkbox';
      input.checked = todo.done;

       
      span.classList.add('bubble');

      if (todo.category == 'personal') {
        span.classList.add('personal');
     } else {
        span.classList.add('business');
     }

     content.classList.add('todo-content');
     actions.classList.add('actions');

     edit.classList.add('edit');
     deleteButton.classList.add('delete');

       // Set content and text for elements
       content.innerHTML = `<input type="text" value="${todo.content}" readonly>`;
       edit.innerHTML = 'Edit';
       deleteButton.innerHTML = 'Delete';

       
      // Append elements to todo item
      label.appendChild(input);
      label.appendChild(span);
      actions.appendChild(edit);
      actions.appendChild(deleteButton);
      todoItem.appendChild(label);
      todoItem.appendChild(content);
      todoItem.appendChild(actions);
 // Append todo item to todo list
 todoList.appendChild(todoItem);


    })



}
