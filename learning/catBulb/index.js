function switchOff() {
	document.getElementById("bulb").src =
		"https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
	document.getElementById("cat").src =
		"https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
	document.getElementById("status").textContent = "Switched Off";
	document.querySelector("#off-switch").style.backgroundColor = "black";
	document.querySelector("#on-switch").style.backgroundColor = "green";
}

function switchOn() {
	document.getElementById("bulb").src =
		"https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
	document.getElementById("cat").src =
		"https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
	document.getElementById("status").textContent = "Switched On";
	document.querySelector("#off-switch").style.backgroundColor = "red";
	document.querySelector("#on-switch").style.backgroundColor = "black";
}
