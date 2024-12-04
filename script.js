let payButton = document.getElementById("pay-button");
let zipcode = document.getElementById("zipcode");
let expiration = document.getElementById("expiration");
let cardNumber = document.getElementById("card-number");
let userName = document.getElementById("name");
let cardNumberError = document.getElementById("card-number-error");
let result = document.getElementById("result");
let cvc = document.getElementById("cvc");

const correctInfo = {
	fullName: "Haroon Almadani",
	cardNumber: "1234123412341234",
	expiration: "07/27",
	cvc: "123",
	zipcode: "22039",
};
let given = {
	cardNumber: "",
	zipcode: "",
	expiration: "",
	cvc: "",
	fullName: "",
};

cardNumber.addEventListener("input", cardNumberChange);
zipcode.addEventListener("input", zipcodeChange);
expiration.addEventListener("input", expirationChange);
userName.addEventListener("input", fullNameChange);
payButton.addEventListener("click", onSubmit);
cvc.addEventListener("input", cvcChange);

function cardNumberChange() {
	cardNumber.value = cardNumber.value.replaceAll(" ", "");
	if (cardNumber.value.length < 16 || cardNumber.value.length > 16) {
		cardNumberError.style.display = "block";
	} else {
		cardNumberError.style.display = "none";
	}
	given = { ...given, cardNumber: cardNumber.value };
}

function fullNameChange() {
	given = { ...given, fullName: userName.value };
}

function zipcodeChange() {
	given = { ...given, zipcode: zipcode.value };
}

function expirationChange() {
	{
		given = { ...given, expiration: expiration.value };
	}
}
function cvcChange() {
	given = { ...given, cvc: cvc.value };
}

function onSubmit() {
	result.style.display = "block";
	if (
		given.cardNumber == correctInfo.cardNumber &&
		given.fullName == correctInfo.fullName &&
		given.expiration == correctInfo.expiration &&
		given.zipcode == correctInfo.zipcode &&
		given.cvc == correctInfo.cvc
	) {
		result.style.color = "green";
		result.innerHTML = "Success";
	} else {
		result.innerHTML = "Error, Wrong card info";
		result.style.color = "red";
	}
}
