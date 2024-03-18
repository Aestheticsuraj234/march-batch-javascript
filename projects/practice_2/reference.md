 *****Here is a step-by-step breakdown of the provided code along with explanations*****

1. **Event Listener for Window Load:**
   - When the window loads, the code inside this event listener executes.
   - It initializes some variables and retrieves data from local storage.
   - It sets up event listeners for input change and form submission.
   - Finally, it calls the `DisplayTodos` function to display the todos.

```javascript
window.addEventListener("load", () => {
   // Retrieve todos from local storage or initialize an empty array
   todos = JSON.parse(localStorage.getItem("todos")) || [];

   // Get DOM elements
   const nameInput = document.getElementById("name");
   const newInputForm = document.querySelector("#new-todo-form");

   // Retrieve or set username from/in local storage
   const username = localStorage.getItem("username") || " ";
   nameInput.value = username;

   // Event listener for name input change
   nameInput.addEventListener("change", (e) => {
      localStorage.setItem("username", e.target.value);
   });

   // Event listener for new todo form submission
   newInputForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Create todo object from form input
      let todo = {
         content: e.target.elements.content.value,
         category: e.target.elements.category.value,
         done: false,
         createdAt: new Date().getTime()
      };

      // Add todo to todos array and save to local storage
      todos.push(todo);
      localStorage.setItem("todos", JSON.stringify(todos));

      // Reset form and display todos
      e.target.reset();
      DisplayTodos();
   });

   // Display initial todos
   DisplayTodos();
});
```

2. **DisplayTodos Function:**
   - This function is responsible for displaying the todos on the webpage.
   - It retrieves todos from local storage, iterates through them, and creates HTML elements to represent each todo.
   - Event listeners for checkbox change, edit button click, and delete button click are also set up here (HomeWork)

```javascript
function DisplayTodos() {
   // Get todo list element
   const todoList = document.querySelector('#todo-list');
   todoList.innerHTML = ""; // Clear existing todo items

   // Retrieve todos from local storage
   let todos = JSON.parse(localStorage.getItem('todos')) || [];

   // Loop through todos and create HTML elements for each
   todos.forEach((todo, index) => {
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

      // Add 'done' class if todo is marked as done
      if (todo.done) {
         todoItem.classList.add('done');
      }

      // Event listener for checkbox change
      input.addEventListener('change', (e) => {
         todo.done = e.target.checked;
         localStorage.setItem('todos', JSON.stringify(todos));
         if (todo.done) {
            todoItem.classList.add('done');
         } else {
            todoItem.classList.remove('done');
         }
         DisplayTodos();
      });

      // Event listener for edit button click
      edit.addEventListener('click', (e) => {
         const input = content.querySelector('input');
         input.removeAttribute('readonly');
         input.focus();
      });

      // Event listener for input blur (editing done)
      content.querySelector('input').addEventListener('blur', (e) => {
         const inputValue = e.target.value;
         todos[index].content = inputValue;
         localStorage.setItem('todos', JSON.stringify(todos));
         DisplayTodos();
      });

      // Event listener for delete button click
      deleteButton.addEventListener('click', (e) => {
         const index = todos.indexOf(todo);
         if (index !== -1) {
            todos.splice(index, 1);
            localStorage.setItem('todos', JSON.stringify(todos));
            DisplayTodos(); // Refresh display
            location.reload(); // Reload page (optional)
         }
      });
   });
}
```
