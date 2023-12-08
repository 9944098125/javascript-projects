window.addEventListener("load", () => {
	allTodo = JSON.parse(localStorage.getItem("all-todo")) || [];
	const todoForm = document.getElementById("create-todo-form");
	todoForm.addEventListener("submit", (event) => {
		event.preventDefault();
		// console.log(e);
		const newTodo = {
			item: event.target.elements.content.value,
			done: false,
			createdAt: new Date(),
		};
		allTodo.push(newTodo);
		localStorage.setItem("all-todo", JSON.stringify(allTodo));
		displayTodo();
		event.target.reset();
	});
	displayTodo();
});

function displayTodo() {
	const todoItemsList = document.getElementById("todo-items-list");
	todoItemsList.innerHTML = "";

	allTodo.forEach((eachTodo) => {
		const todoItemContainer = document.createElement("div");
		const label = document.createElement("label");
		const checkboxInput = document.createElement("input");
		const checkboxReplacement = document.createElement("span");
		const content = document.createElement("div");
		const actions = document.createElement("div");
		const editBtn = document.createElement("button");
		const deleteBtn = document.createElement("button");

		checkboxInput.type = "checkbox";
		checkboxInput.checked = eachTodo.done;
		content.innerHTML = `<input type='text' value="${eachTodo.item}" readonly />`;
		editBtn.innerHTML = "EDIT";
		deleteBtn.innerHTML = "DELETE";

		todoItemContainer.classList.add("todo-item");
		checkboxReplacement.classList.add("checkbox-replacement");
		content.classList.add("content");
		actions.classList.add("actions-row");
		editBtn.classList.add("btn");
		deleteBtn.classList.add("btn");
		editBtn.classList.add("btn-primary");
		deleteBtn.classList.add("btn-danger");

		label.appendChild(checkboxInput);
		label.appendChild(checkboxReplacement);
		actions.appendChild(editBtn);
		actions.appendChild(deleteBtn);
		todoItemContainer.appendChild(label);
		todoItemContainer.appendChild(content);
		todoItemContainer.appendChild(actions);

		todoItemsList.appendChild(todoItemContainer);

		if (eachTodo.done) {
			todoItemContainer.classList.add("done");
		}
		checkboxInput.addEventListener("change", (event) => {
			// console.log(event);
			eachTodo.done = event.target.checked;
			localStorage.setItem("all-todo", JSON.stringify(allTodo));
			if (eachTodo.done) {
				todoItemContainer.classList.add("done");
			} else {
				todoItemContainer.classList.remove("done");
			}
			displayTodo();
		});

		editBtn.addEventListener("click", () => {
			const editInput = content.querySelector("input");
			editInput.removeAttribute("readonly");
			editInput.focus();
			editInput.addEventListener("blur", (event) => {
				editInput.setAttribute("readonly", true);
				// console.log(event);
				eachTodo.item = event.target.value;
				localStorage.setItem("all-todo", JSON.stringify(allTodo));
				displayTodo();
			});
		});

		deleteBtn.addEventListener("click", () => {
			allTodo = allTodo.filter((each) => each.item !== eachTodo.item);
			localStorage.setItem("all-todo", JSON.stringify(allTodo));
			displayTodo();
		});
	});
}
// Recurring functions
