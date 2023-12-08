const form = document.getElementById("survey-form");
const fruitsAnswerContainer = document.querySelector(".fruits-answer");
const ageAnswerContainer = document.querySelector(".age-answer");
const timesAnswerContainer = document.querySelector(".times-answer");
const nameAnswerContainer = document.querySelector(".name-answer");
const fruitsError = document.getElementById("fruits-error");
const ageError = document.getElementById("age-error");
const timesError = document.getElementById("times-error");
const nameError = document.getElementById("name-error");

// console.log(form);
form.addEventListener("submit", (event) => {
	event.preventDefault();
	fruitsError.textContent = "";
	ageError.textContent = "";
	timesError.textContent = "";
	nameError.textContent = "";

	let fruitsAnswer = [];
	let ageAnswer = "";
	let timesAnswer = "";

	const fruitsArray = Array.from(
		document.querySelectorAll("input[name=fruits]:checked"),
	);
	const ageSelected = document.querySelector("input[name=age]:checked").value;
	const timesSelected = form.elements.times.value;
	const nameInput = document.getElementById("nameInput").value;

	if (fruitsArray.length === 0) {
		fruitsError.textContent = "Select at least one fruit !";
	}
	if (!ageSelected) {
		ageError.textContent = "Age is required !";
	}
	if (!timesSelected) {
		timesError.textContent = "Select one Option";
	}
	if (!nameInput) {
		nameError.textContent = "Name is required !";
	}

	const selectedFruits = fruitsArray
		.map((eachFruit) => eachFruit.value)
		.join(",");
	fruitsAnswer.push(`Selected Fruits - ${selectedFruits}`);
	ageAnswer = `Age Selected - ${ageSelected}`;
	timesAnswer = `I eat ${timesSelected} times per day`;

	fruitsAnswerContainer.innerHTML = fruitsAnswer;
	ageAnswerContainer.textContent = ageAnswer;
	timesAnswerContainer.textContent = timesAnswer;
	nameAnswerContainer.textContent = `Name ${nameInput}`;
});
