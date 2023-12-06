const users = [
	{ username: "user1", password: "pass1" },
	{ username: "user2", password: "pass2" },
];

const shoes = [
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/a/ae/An_Adidas_shoe.jpg",
		price: 5000,
	},
	{
		image:
			"https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/8/e/g/-original-imaghkpgx5w3hkz4.jpeg?q=90",
		price: 3500,
	},
	// Add more shoe objects here
];

const loginButton = document.getElementById("login-button");

loginButton.addEventListener("click", () => {
	const username = document.getElementById("username").value;
	const password = document.getElementById("password").value;

	const user = users.find(
		(u) => u.username === username && u.password === password,
	);

	if (user) {
		// Hide the login form
		document.getElementById("login").style.display = "none";
		// Show the home screen
		const homeDiv = document.getElementById("home");
		homeDiv.style.display = "block";

		// Display the username on the home screen
		const userSpan = document.getElementById("user");
		userSpan.textContent = username;

		// Display the shoe list
		const shoeListDiv = document.getElementById("shoe-list");
		shoeListDiv.innerHTML = "";

		shoes.forEach((shoe) => {
			const shoeItem = document.createElement("div");
			shoeItem.innerHTML = `
              <img src="${shoe.image}" alt="${shoe.title}" class="image" />
              <h3>Rs. ${shoe.price}/-</h3>
          `;
			shoeListDiv.appendChild(shoeItem);
		});
	} else {
		alert("Login failed. Please check your credentials.");
	}
});
