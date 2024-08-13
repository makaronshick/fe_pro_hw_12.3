"use strict";

function createToDoList() {
  const listElement = document.createElement("ul");
  const inputElement = document.createElement("input");
  inputElement.setAttribute("type", "text");

  const addBtnElement = createButton("Add task", ["add_btn"]);

  addBtnElement.addEventListener("click", () => {
    if (inputElement.value.trim()) {
      const itemElement = document.createElement("li");
      itemElement.textContent = inputElement.value.trim();
      const delBtnElement = createButton("Delete task", ["del_btn"]);
      listElement.append(itemElement, delBtnElement);
      inputElement.value = "";
    } else {
      alert("Task can't be empty");
    }
  });

  listElement.addEventListener("click", (event) => {
    if (event.target.className !== "del_btn") {
      return;
    }

    event.target.previousSibling.remove();
    event.target.remove();
  });

  document.body.append(listElement);
  document.body.append(inputElement);
  document.body.append(addBtnElement);
}

function createButton(buttonText, classes = null) {
  const button = document.createElement("button");
  button.textContent = buttonText;
  
  if (classes !== null) {
    classes.forEach(element => {
      button.classList.add(element);
    });
  }

  return button;
}

createToDoList();
