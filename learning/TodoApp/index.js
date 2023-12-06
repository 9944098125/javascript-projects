window.addEventListener("load", () => {
	allTodo = JSON.parse(localStorage.getItem("all-todo")) || [];
	const createForm = document.getElementById("create-form");
	createForm.addEventListener("submit", (event) => {
		event.preventDefault();
		// console.log("Event", event.target);
		const newTodo = {
			content: document.getElementById("content").value,
			done: false,
			createdAt:
				new Date().getDate().toString() +
				"/" +
				new Date().getMonth().toString() +
				"/" +
				new Date().getFullYear().toString(),
		};
		allTodo.push(newTodo);
		localStorage.setItem("all-todo", JSON.stringify(allTodo));
		displayAllTodo();
		event.target.reset();
	});
	displayAllTodo();
});

function displayAllTodo() {
	const items = document.getElementById("items");
	items.innerHTML = "";

	allTodo.forEach((eachTodo) => {
		const eachTodoContainer = document.createElement("div");
		const checkboxInput = document.createElement("input");
		const content = document.createElement("div");
		const actionsContainer = document.createElement("div");
		const editBtn = document.createElement("button");
		const deleteBtn = document.createElement("button");
		const label = document.createElement("label");
		const checkboxReplacement = document.createElement("span");
		const createdAt = document.createElement("p");

		checkboxInput.type = "checkbox";
		checkboxInput.checked = eachTodo.done;
		createdAt.textContent = eachTodo.createdAt;
		content.innerHTML = `<input type="text" class="each-todo-content-input" value="${eachTodo.content}"  readonly />`;
		editBtn.innerHTML = "Edit";
		deleteBtn.innerHTML = "Delete";

		eachTodoContainer.classList.add("each-todo");
		checkboxInput.classList.add("checkbox-input");
		content.classList.add("each-todo-content-container");
		actionsContainer.classList.add("actions");
		editBtn.classList.add("edit-btn");
		deleteBtn.classList.add("delete-btn");
		checkboxReplacement.classList.add("checkbox-replacement");
		createdAt.classList.add("created-at");

		label.appendChild(checkboxInput);
		label.appendChild(checkboxReplacement);
		actionsContainer.appendChild(editBtn);
		actionsContainer.appendChild(deleteBtn);
		eachTodoContainer.appendChild(label);
		eachTodoContainer.appendChild(content);
		eachTodoContainer.appendChild(createdAt);
		eachTodoContainer.appendChild(actionsContainer);

		items.appendChild(eachTodoContainer);

		if (eachTodo.done) {
			eachTodoContainer.classList.add("done");
		}

		checkboxInput.addEventListener("change", (event) => {
			// console.log(event.target);
			eachTodo.done = event.target.checked;
			localStorage.setItem("all-todo", JSON.stringify(allTodo));
			if (eachTodo.done) {
				eachTodoContainer.classList.add("done");
			} else {
				eachTodoContainer.classList.remove("done");
			}
			displayAllTodo();
		});

		editBtn.addEventListener("click", () => {
			const contentInput = content.querySelector("input");
			contentInput.removeAttribute("readonly");
			contentInput.focus();
			contentInput.addEventListener("blur", (event) => {
				contentInput.setAttribute("readonly", true);
				eachTodo.content = event.target.value;
				localStorage.setItem("all-todo", JSON.stringify(allTodo));
				displayAllTodo();
			});
		});

		deleteBtn.addEventListener("click", () => {
			allTodo = allTodo.filter((each) => each !== eachTodo);
			localStorage.setItem("all-todo", JSON.stringify(allTodo));
			displayAllTodo();
		});
	});
}

// with hoisting even if the variable or function can be called or used before their declaration
