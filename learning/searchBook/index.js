const books = [
	{
		title: "The Silent Patient",
		author: "Alex Michael",
		price: "Rs. 150/-",
		image: "https://m.media-amazon.com/images/I/5177eLEs+YL._SY445_SX342_.jpg",
		description:
			"A description summarizes a book's content to give readers a glimpse into what the book is about. Some authors place the description on the back of the book cover, but you'll find it mostly on retailer websites, such as Amazon or Barnes & Noble.",
	},
	{
		title: "All Time Favorites",
		author: "Ruskin Bond",
		price: "Rs. 170/-",
		description:
			"A description summarizes a book's content to give readers a glimpse into what the book is about. Some authors place the description on the back of the book cover, but you'll find it mostly on retailer websites, such as Amazon or Barnes & Noble.",
		image: "https://m.media-amazon.com/images/I/51fnKED0JJL.AC_SX250.jpg",
	},
	{
		title: "Harry Potter",
		author: "J K Rowling",
		price: "Rs. 220/-",
		description:
			"A description summarizes a book's content to give readers a glimpse into what the book is about. Some authors place the description on the back of the book cover, but you'll find it mostly on retailer websites, such as Amazon or Barnes & Noble.",
		image: "https://m.media-amazon.com/images/I/51BTfQsu58L.AC_SX250.jpg",
	},
	{
		title: "Elon Musk",
		author: "Walter Isaacson",
		price: "Rs. 150/-",
		description:
			"A description summarizes a book's content to give readers a glimpse into what the book is about. Some authors place the description on the back of the book cover, but you'll find it mostly on retailer websites, such as Amazon or Barnes & Noble.",
		image:
			"https://images-eu.ssl-images-amazon.com/images/I/41YMXMqcqtL._AC_SX184_.jpg",
	},
	{
		title: "Hindus In Hindu Rashtra",
		author: "Anand Ranganatham",
		price: "Rs. 150/-",
		description:
			"A description summarizes a book's content to give readers a glimpse into what the book is about. Some authors place the description on the back of the book cover, but you'll find it mostly on retailer websites, such as Amazon or Barnes & Noble.",
		image: "https://m.media-amazon.com/images/I/51TdFGla--L.AC_SX250.jpg",
	},
	{
		title: "The Gruffalo",
		author: "Julia Donaldson",
		price: "Rs. 250/-",
		description:
			"A description summarizes a book's content to give readers a glimpse into what the book is about. Some authors place the description on the back of the book cover, but you'll find it mostly on retailer websites, such as Amazon or Barnes & Noble.",
		image: "https://m.media-amazon.com/images/I/51qJCaDWtKL.AC_SX250.jpg",
	},
	{
		title: "Nothing But the truth",
		author: "Rishab shah",
		price: "Rs. 180/-",
		description:
			"A description summarizes a book's content to give readers a glimpse into what the book is about. Some authors place the description on the back of the book cover, but you'll find it mostly on retailer websites, such as Amazon or Barnes & Noble.",
		image: "https://m.media-amazon.com/images/I/5158etzi0dL.AC_SX250.jpg",
	},
	{
		title: "Traitors Gate",
		author: "Jeffrey Archer",
		price: "Rs. 450/-",
		description:
			"A description summarizes a book's content to give readers a glimpse into what the book is about. Some authors place the description on the back of the book cover, but you'll find it mostly on retailer websites, such as Amazon or Barnes & Noble.",
		image: "https://m.media-amazon.com/images/I/51LTsgz6BQL.AC_SX250.jpg",
	},
	{
		title: "Percy Jackson",
		author: "Rick Riordan",
		price: "Rs. 430/-",
		description:
			"A description summarizes a book's content to give readers a glimpse into what the book is about. Some authors place the description on the back of the book cover, but you'll find it mostly on retailer websites, such as Amazon or Barnes & Noble.",
		image:
			"https://images-eu.ssl-images-amazon.com/images/I/51NsJhoYCqL._AC_SX184_.jpg",
	},
	{
		title: "The Running Grave",
		author: "Robert Galbrath",
		price: "Rs. 350/-",
		description:
			"A description summarizes a book's content to give readers a glimpse into what the book is about. Some authors place the description on the back of the book cover, but you'll find it mostly on retailer websites, such as Amazon or Barnes & Noble.",
		image:
			"https://images-eu.ssl-images-amazon.com/images/I/51ROoKC0-HL._AC_SX184_.jpg",
	},
	{
		title: "Modi: The challenge of 2024",
		author: "Minhaz merchant",
		price: "Rs. 455/-",
		description:
			"A description summarizes a book's content to give readers a glimpse into what the book is about. Some authors place the description on the back of the book cover, but you'll find it mostly on retailer websites, such as Amazon or Barnes & Noble.",
		image:
			"https://images-eu.ssl-images-amazon.com/images/I/410LjJgnZmL._AC_SX184_.jpg",
	},
	{
		title: "The Power of your mind",
		author: "Advent Pillar",
		price: "Rs. 330/-",
		description:
			"A description summarizes a book's content to give readers a glimpse into what the book is about. Some authors place the description on the back of the book cover, but you'll find it mostly on retailer websites, such as Amazon or Barnes & Noble.",
		image:
			"https://images-eu.ssl-images-amazon.com/images/I/41+CqNWoutS._SX342_SY445_.jpg",
	},
	{
		title: "You Can",
		author: "Paper back",
		price: "Rs. 110/-",
		description:
			"A description summarizes a book's content to give readers a glimpse into what the book is about. Some authors place the description on the back of the book cover, but you'll find it mostly on retailer websites, such as Amazon or Barnes & Noble.",
		image: "https://m.media-amazon.com/images/I/514fD3oqIFL._SX342_SY445_.jpg",
	},
	{
		title: "The Hidden Hindu",
		author: "Akshat Gupta",
		price: "Rs. 340/-",
		description:
			"A description summarizes a book's content to give readers a glimpse into what the book is about. Some authors place the description on the back of the book cover, but you'll find it mostly on retailer websites, such as Amazon or Barnes & Noble.",
		image:
			"https://images-eu.ssl-images-amazon.com/images/I/51Na+IacyeL._AC_SX184_.jpg",
	},
	{
		title: "Diary of a Whimpy kid",
		author: "Jennifer Kol",
		price: "Rs. 250/-",
		description:
			"A description summarizes a book's content to give readers a glimpse into what the book is about. Some authors place the description on the back of the book cover, but you'll find it mostly on retailer websites, such as Amazon or Barnes & Noble.",
		image:
			"https://images-eu.ssl-images-amazon.com/images/I/51MqocDcH3L._AC_SX184_.jpg",
	},
	{
		title: "The Diary of a CEO",
		author: "Steven Barlett",
		price: "Rs. 450/-",
		description:
			"A description summarizes a book's content to give readers a glimpse into what the book is about. Some authors place the description on the back of the book cover, but you'll find it mostly on retailer websites, such as Amazon or Barnes & Noble.",
		image:
			"https://images-eu.ssl-images-amazon.com/images/I/41hpet8rmqL._AC_SX184_.jpg",
	},
	{
		title: "Culture",
		author: "Deepinder Goyal",
		price: "Rs. 230/-",
		description:
			"A description summarizes a book's content to give readers a glimpse into what the book is about. Some authors place the description on the back of the book cover, but you'll find it mostly on retailer websites, such as Amazon or Barnes & Noble.",
		image:
			"https://images-eu.ssl-images-amazon.com/images/I/41Xkfc-Oc6L._AC_SX184_.jpg",
	},
	{
		title: "You must know your constitution",
		author: "Fali R Nerman",
		price: "Rs. 340/-",
		description:
			"A description summarizes a book's content to give readers a glimpse into what the book is about. Some authors place the description on the back of the book cover, but you'll find it mostly on retailer websites, such as Amazon or Barnes & Noble.",
		image:
			"https://images-eu.ssl-images-amazon.com/images/I/51NhsG7qBkL._AC_SX184_.jpg",
	},
	{
		title: "Murder in the family",
		author: "Cara Hunter",
		price: "Rs. 233/-",
		description:
			"A description summarizes a book's content to give readers a glimpse into what the book is about. Some authors place the description on the back of the book cover, but you'll find it mostly on retailer websites, such as Amazon or Barnes & Noble.",
		image:
			"https://images-eu.ssl-images-amazon.com/images/I/51zn8scX3gL._AC_SX184_.jpg",
	},
	{
		title: "World's worst best Girlfrient",
		author: "Gurjos Datta",
		price: "Rs. 250/-",
		description:
			"A description summarizes a book's content to give readers a glimpse into what the book is about. Some authors place the description on the back of the book cover, but you'll find it mostly on retailer websites, such as Amazon or Barnes & Noble.",
		image:
			"https://images-eu.ssl-images-amazon.com/images/I/51HAb4KeAdL._AC_SX184_.jpg",
	},
	{
		title: "Ashoka",
		author: "Patrick olivelle",
		price: "Rs. 350/-",
		description:
			"A description summarizes a book's content to give readers a glimpse into what the book is about. Some authors place the description on the back of the book cover, but you'll find it mostly on retailer websites, such as Amazon or Barnes & Noble.",
		image:
			"https://images-eu.ssl-images-amazon.com/images/I/51OEnlv1DwL._AC_SX184_.jpg",
	},
];

// Add this code to your existing JavaScript

// Function to display book details in the modal
function displayBookDetails(book) {
	const modalBody = document.getElementById("modalBody");
	modalBody.innerHTML = "";

	const title = document.createElement("h2");
	const author = document.createElement("h6");
	const image = document.createElement("img");
	const price = document.createElement("p");
	const description = document.createElement("p");

	title.textContent = book.title;
	title.classList.add("fs-5");
	title.classList.add("text-dark");
	author.textContent = `Author: ${book.author}`;
	author.classList.add("fs-6");
	author.classList.add("text-dark");
	image.src = book.image;
	image.style.height = "300px"; // Adjust the height as needed
	image.style.width = "100%";
	image.classList.add("rounded");
	price.textContent = `Price: ${book.price}`;
	price.classList.add("text-dark");
	description.textContent = book.description;

	modalBody.appendChild(image);
	modalBody.appendChild(title);
	modalBody.appendChild(author);
	modalBody.appendChild(price);
	modalBody.appendChild(description);
}

// Function to display books
function displayBooks(bookList) {
	const bookListElement = document.getElementById("books");
	bookListElement.innerHTML = "";

	bookList.forEach((book) => {
		const bookContainer = document.createElement("div");
		const title = document.createElement("h2");
		const author = document.createElement("h6");
		const image = document.createElement("img");
		const price = document.createElement("p");
		bookContainer.style.height = "250px";
		bookContainer.style.width = "170px";
		bookContainer.style.padding = "5px 10px";
		title.textContent = book.title;
		title.classList.add("fs-5");
		title.classList.add("text-white");
		image.src = book.image;
		image.style.height = "70%";
		image.style.width = "100%";
		image.classList.add("rounded");
		image.classList.add("mb-2");
		bookContainer.classList.add("mb-3");
		bookContainer.style.cursor = "pointer";

		bookContainer.appendChild(image);
		bookContainer.appendChild(title);
		bookContainer.appendChild(author);
		bookContainer.appendChild(price);
		bookListElement.appendChild(bookContainer);

		// Attach click event to each book
		bookContainer.onclick = function () {
			displayBookDetails(book);
			// Show the modal
			const bookModal = new bootstrap.Modal(
				document.getElementById("bookModal"),
			);
			bookModal.show();
		};
	});
}

// Initialize the page by displaying all books
displayBooks(books);
