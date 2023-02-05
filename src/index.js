const formElement = document.querySelector("#create-task-form");

const tasksElement = document.querySelector("#tasks");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const newTask = document.createElement("li");
  newTask.textContent = event.target["new-task-description"].value;
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete this task";
  deleteBtn.addEventListener("click", (event) => {
    event.preventDefault();
    newTask.remove();
  });

  newTask.append(deleteBtn);

  tasksElement.append(newTask);
});

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// const form = document.querySelector("#create-task-form");

// const taskList = document.querySelector("#tasks");

// const newTaskDescript = document.querySelector("#new-task-description");

// form.addEventListener("submit", addTask);

// function addTask(event) {
//   event.preventDefault();
//   renderTask(event.target["new-task-description"].value);
//   form.reset();
// }

// function renderTask(taskString) {
//   const newTask = document.createElement("li");
//   newTask.textContent = taskString;
//   taskList.appendChild(newTask);
//   const deleteButton = document.createElement("button");
//   deleteButton.textContent = "X";
//   newTask.append(deleteButton);
//   deleteButton.addEventListener("click", () => newTask.remove());
// }
