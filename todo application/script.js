// script.js

// DOM elements
const addTaskBtn = document.getElementById('add-task-btn');
const taskInput = document.getElementById('task-input');
const todoList = document.getElementById('todo-list');

// Add task event
addTaskBtn.addEventListener('click', function() {
    const taskText = taskInput.value.trim();
    if (taskText) {
        addTask(taskText);
        taskInput.value = ''; // Clear input after adding
    }
});

// Function to add a new task
function addTask(taskText) {
    const li = document.createElement('li');
    li.classList.add('task-item');

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    li.appendChild(taskSpan);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    li.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', function() {
        li.remove(); // Remove task from list
    });

    // Toggle task completion
    taskSpan.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    todoList.appendChild(li);
}
