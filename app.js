let inputTask = document.getElementById("task");
let addTask = document.getElementById("addTask");
let ul = document.querySelector(".tasks");

addTask.addEventListener("click", function () {
  if (inputTask.value.trim() !== "") {
    let li = document.createElement("li");
    li.innerHTML = inputTask.value;
    let deleteBtn = document.createElement("button");
    let editBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    editBtn.textContent = "Edit";
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
    ul.appendChild(li);
    inputTask.value = "";

    deleteBtn.addEventListener("click", function () {
      ul.removeChild(li);
    });

    editBtn.addEventListener("click", function () {
      let newTaskText = prompt(
        "Enter a new task",
        li.textContent.replace("EditDelete", "")
      );
      if (newTaskText) {
        li.firstChild.textContent = newTaskText; // Update the task's text
      }
    });
  } else {
    alert("Please enter a task");
  }
});
