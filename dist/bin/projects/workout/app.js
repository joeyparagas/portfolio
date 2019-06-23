// Define UI Vars
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// Load all event listeners
loadEventListeners();
function loadEventListeners() {
  // Load any data in local storage
  document.addEventListener("DOMContentLoaded", getTasks);

  // Add a task to the list
  form.addEventListener("submit", addTask);

  // Delete a task from the list by clicking the X icon
  taskList.addEventListener("click", removeTask);

  // Clear task event
  clearBtn.addEventListener("click", clearTasks);

  // Filter tasks
  filter.addEventListener("keyup", filterTasks);
}

// Get tasks from local stroage and put it into array to push into DOM
function getTasks() {
  let tasks;

  // Check to see if data in lc and tasks array exists, if not create
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    // Local storage can only store strings!!!!
    // If items exist in lc, you need to parse it (JSON.parse) so you can put it into tasks array
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  // Take tasks array and output it back into DOM
  tasks.forEach(function(task) {
    // Create li element
    const li = document.createElement("li");
    // Add a class to li created
    li.className = "collection-item";
    // Create text node and append to li
    li.appendChild(document.createTextNode(task));
    // Create new link element
    const link = document.createElement("a");
    // Add a class to new a tag element
    link.className = "delete-item secondary-content";
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link);
    // Append li to ul
    taskList.appendChild(li);
  });
}

// Add a new tasks
function addTask(e) {
  if (taskInput.value === "") {
    alter("Add a task");
  }
  // Create li element
  const li = document.createElement("li");
  // Add a class to li created
  li.className = "collection-item";
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement("a");
  // Add a class to new a tag element
  link.className = "delete-item secondary-content";
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append the link to li
  li.appendChild(link);
  // Append li to ul
  taskList.appendChild(li);
  // Store to local storage
  storeTaskInLocalStorage(taskInput.value);
  // Clear input
  taskInput.value = "";
  e.preventDefault();
}

// Remove a Task
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    // Set an alert for confirming deleteing
    if (confirm("Delete this workout?")) {
      e.target.parentElement.parentElement.remove();
      // Remove from local stroage (calls function using li element as parameter)
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

// Places task into local stroage
function storeTaskInLocalStorage(task) {
  let tasks;
  // Check to see if data in lc and tasks array exists, if not create
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    // Local storage can only store strings!!!!
    // If items exist in lc, you need to parse it (JSON.parse) so you can put it into tasks array
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  // Push new task into tasks array
  tasks.push(task);
  // Convert back into string (JSON.stringify) and push tasks array back into lc
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Remove task from local storage when clicking the X icon
function removeTaskFromLocalStorage(taskItem) {
  let tasks;

  // Check to see if data in lc and tasks array exists, if not create
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    // Local storage can only store strings!!!!
    // If items exist in lc, you need to parse it (JSON.parse) so you can put it into tasks array
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.forEach(function(task, index) {
    // Check for content, if so, delete that index number in tasks array
    if (taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });
  // Convert back into string (JSON.stringify) and push tasks array back into lc
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Clear Task button function
function clearTasks() {
  // 2 methods to clear out the list
  // Method 1: Set the taskList = empty li tags
  // taskList.innerHTML = "";

  // Method 2: While loop to delete each first child (FASTER method)
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  // Calls function to clear task from local stroage
  clearTasksFromLocalStroage();
}

// Function that clears local storage
function clearTasksFromLocalStroage() {
  localStorage.clear();
}

// Filter Task function
function filterTasks(e) {
  // capture and set input value to lowercase for easier comparison
  const text = e.target.value.toLowerCase();

  // ForEach loop to compare each li tag to text input
  document.querySelectorAll(".collection-item").forEach(function(task) {
    // First li item
    const item = task.firstChild.textContent;

    // Compare text input with first li content
    if (item.toLowerCase().indexOf(text) != -1) {
      // If it exists, display
      task.style.display = "block";
    } else {
      // Else hide it
      task.style.display = "none";
    }
  });
}
