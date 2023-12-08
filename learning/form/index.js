const surveyForm = document.getElementById("survey");

const nameError = document.getElementById("nameError");
const rollNoError = document.getElementById("rollNoError");
const groupError = document.getElementById("groupError");
const sscError = document.getElementById("sscError");
const booksError = document.getElementById("booksError");

const nameInput = document.getElementById("name");
const rollNoInput = document.getElementById("rollNo");

const nameDiv = document.querySelector(".nameDiv");
const rollNoDiv = document.querySelector(".rollNoDiv");
const groupDiv = document.querySelector(".groupDiv");
const sscMarksDiv = document.querySelector(".sscMarksDiv");
const booksDiv = document.querySelector(".booksDiv");

// console.log("coming");
// console.log(surveyForm);
const selectedGroup = document.getElementById("group");

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
	const selectedSSCMarks = document.querySelector("input[name=ssc]:checked");
	const booksRead = Array.from(
		document.querySelectorAll("input[name=books]:checked"),
	);
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

	let books = [];
	let selectedBooks = booksRead.map((book) => book.value).join(", ");
	books.push(`Selected Books - ${selectedBooks}`);

	if (
		nameInput.value &&
		rollNoInput &&
		surveyForm.elements.group.value &&
		selectedSSCMarks.value &&
		booksRead.length > 0
	) {
		nameDiv.textContent = "Name: " + nameInput.value;
		rollNoDiv.textContent = "Roll Number: " + rollNoInput.value;
		groupDiv.textContent = "Group: " + surveyForm.elements.group.value;
		sscMarksDiv.textContent = "SSC CGPA: " + selectedSSCMarks.value;
		booksDiv.textContent = books.join("\n");
		const surveyModal = new bootstrap.Modal(
			document.getElementById("surveyModal"),
		);
		surveyModal.show();
		event.target.reset();
	}
});
