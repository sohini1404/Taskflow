function addTask() {
  let input = document.getElementById("taskInput");
  let task = input.value.trim();

  if (task === "") {
    alert("Please enter a task");
    return;
  }

  let li = document.createElement("li");
  li.innerText = task;

  document.getElementById("taskList").appendChild(li);

  input.value = "";

  // Update task count
  document.getElementById("count").innerText =
    document.getElementById("taskList").children.length;
}

// Button click
document.getElementById("addBtn").addEventListener("click", addTask);