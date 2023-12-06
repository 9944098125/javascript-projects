const form = document.getElementById("form");
const idDiv = document.getElementById("idDiv");
const nameDiv = document.getElementById("nameDiv");
const departmentDiv = document.getElementById("departmentDiv");
const designationDiv = document.getElementById("designationDiv");
const vehicleDiv = document.getElementById("vehicleDiv");

const idError = document.querySelector("#idError");
const nameError = document.querySelector("#nameError");
const departmentError = document.querySelector("#departmentError");
const designationError = document.querySelector("#designationError");
const vehicleError = document.querySelector("#vehicleError");

const idInput = document.getElementById("employeeId");
const nameInput = document.getElementById("name");
const departmentOptions = document.getElementById("department");
const designationOptions = document.getElementById("designation");

idError.textContent = "";
nameError.textContent = "";
departmentError.textContent = "";
designationError.textContent = "";
vehicleError.textContent = "";

idInput.addEventListener("blur", () => {
	if (idInput.value === "") {
		idError.textContent = "An Employee must have some ID";
		idError.style.color = "red";
	} else {
		idError.textContent = "";
	}
});

nameInput.addEventListener("blur", () => {
	if (nameInput.value === "") {
		nameError.textContent = "Name is required";
		nameError.style.color = "red";
	} else {
		nameError.textContent = "";
	}
});

departmentOptions.addEventListener("blur", () => {
	// console.log(form.elements.department.value);
	if (form.elements.department.value === "") {
		departmentError.textContent = "Select the department of the employee !";
		departmentError.style.color = "red";
	} else {
		departmentError.textContent = "";
	}
});

designationOptions.addEventListener("blur", () => {
	if (form.elements.designation.value === "") {
		designationError.textContent = "Select the designation of the employee !";
		designationError.style.color = "red";
	} else {
		designationError.textContent = "";
	}
});

form.addEventListener("submit", (event) => {
	event.preventDefault();

	const vehiclesSelected = Array.from(
		document.querySelectorAll("input[name=vehicle]:checked"),
	);
	if (idInput.value === "") {
		idError.textContent = "An Employee must have some ID";
		idError.style.color = "red";
	} else {
		idError.textContent = "";
	}

	if (nameInput.value === "") {
		nameError.textContent = "Name is required";
		nameError.style.color = "red";
	} else {
		nameError.textContent = "";
	}

	if (form.elements.department.value === "") {
		departmentError.textContent = "Select the department of the employee !";
		departmentError.style.color = "red";
	} else {
		departmentError.textContent = "";
	}

	if (form.elements.designation.value === "") {
		designationError.textContent = "Select the designation of the employee !";
		designationError.style.color = "red";
	} else {
		designationError.textContent = "";
	}

	if (vehiclesSelected.length === 0) {
		vehicleError.textContent = "Select Any one option !";
		vehicleError.style.color = "red";
		return;
	} else {
		vehicleError.textContent = "";
	}

	let vehicles = [];
	let departmentSelected = "";
	let designationOfTheEmp = "";
	const selectedVehicles = vehiclesSelected
		.map((vehicle) => vehicle.value)
		.join(", ");
	vehicles.push(`I have the vehicle(s) - ${selectedVehicles}`);
	departmentSelected = `Department - ${form.elements.department.value}`;
	designationOfTheEmp = `Designation - ${form.elements.designation.value}`;

	if (
		idInput.value &&
		nameInput.value &&
		departmentSelected &&
		designationOfTheEmp &&
		vehicles.length !== 0
	) {
		idDiv.textContent = `EmployeeID - ${idInput.value}`;
		nameDiv.textContent = `Employee Name - ${nameInput.value}`;
		departmentDiv.textContent = departmentSelected;
		designationDiv.textContent = designationOfTheEmp;
		vehicleDiv.textContent = vehicles.join("\n");

		const modal = new bootstrap.Modal(document.getElementById("modal"));
		modal.show();
	}
});
