const form = document.querySelector(".form");
const submitBtn = document.querySelector(".submitBtn");
const resetBtn = document.querySelector(".resetBtn");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const phoneNumber = document.getElementById("phone");
const city = document.getElementById("city");
const result = document.querySelector(".result");
const warning = document.querySelector(".warning");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    firstName.value == "" ||
    lastName.value == "" ||
    phoneNumber.value == ""
  ) {
    warning.style.display = "block";
  } else {
    result.innerText = `His name is ${firstName.value} ${lastName.value}, his phone number is ${phoneNumber.value}, he lives in ${city.value}.`;
    firstName.value = "";
    lastName.value = "";
    phoneNumber.value = "";
    city.value = "";
    warning.style.display = "none";
  }
});

resetBtn.addEventListener("click", function (e) {
  e.preventDefault();
  result.innerText = "";
  firstName.value = "";
  lastName.value = "";
  phoneNumber.value = "";
  city.value = "";
  warning.style.display = "none";
});
