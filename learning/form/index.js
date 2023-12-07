const surveyForm = document.getElementById("survey");

const nameError = document.getElementById("nameError");
const rollNoError = document.getElementById("rollNoError");
const groupError = document.getElementById("groupError");
const sscError = document.getElementById("sscError");
const booksError = document.getElementById("booksError");

const nameInput = document.getElementById("name");
const rollNoInput = document.getElementById("rollNo");

// console.log("coming");
// console.log(surveyForm);
const selectedGroup = document.getElementById("group");
const selectedSSCMarks = document.querySelector("input[name=ssc]:checked");
const booksRead = Array.from(
	document.querySelectorAll("input[name=books]:checked"),
);

// function changeName() {
// 	console.log("blurred");
// 	if (nameInput.value === "") {
// 		alert("Name required");
// 	}
// }

nameInput.addEventListener("blur", () => {
	if (nameInput.value === "") {
		nameError.textContent = "Name is required !";
		nameError.style.color = "red";
	} else {
		nameError.textContent = "";
	}
});

rollNoInput.addEventListener("blur", () => {
	if (rollNoInput.value === "") {
		rollNoError.textContent = "Roll Number is required !";
		rollNoError.style.color = "red";
	} else {
		rollNoError.textContent = "";
	}
});

selectedGroup.addEventListener("blur", () => {
	if (surveyForm.elements.group.value === "") {
		groupError.textContent = "Group is required !";
		groupError.style.color = "red";
	} else {
		groupError.textContent = "";
	}
});

surveyForm.addEventListener("submit", (event) => {
	event.preventDefault();
	if (nameInput.value === "") {
		nameError.textContent = "Name is required !";
		nameError.style.color = "red";
	} else {
		nameError.textContent = "";
	}

	if (rollNoInput.value === "") {
		rollNoError.textContent = "Roll Number is required !";
		rollNoError.style.color = "red";
	} else {
		rollNoError.textContent = "";
	}

	if (surveyForm.elements.group.value === "") {
		groupError.textContent = "Group is required !";
		groupError.style.color = "red";
	} else {
		groupError.textContent = "";
	}

	if (!selectedSSCMarks) {
		sscError.textContent = "Select One Option !";
		sscError.style.color = "red";
	} else {
		sscError.textContent = "";
	}

	if (booksRead.length === 0) {
		booksError.textContent = "Select at least one Book";
		booksError.style.color = "red";
	} else {
		booksError.textContent = "";
	}
});
