const username = document.getElementById("username");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const form = document.getElementById("loginForm");
const existingBtn = document.getElementById("existing");

// show button if user already saved
const savedUser = localStorage.getItem("username");

if (savedUser) {
  existingBtn.style.display = "block";
}

// FORM SUBMIT EVENT
form.addEventListener("submit", function(e) {

  e.preventDefault();

  const user = username.value;
  const pass = password.value;

  // Cypress expects this alert
  window.alert("Logged in as " + user);

  if (checkbox.checked) {
    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);
    existingBtn.style.display = "block";
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    existingBtn.style.display = "none";
  }

});

// existing user login
existingBtn.addEventListener("click", function() {

  const storedUser = localStorage.getItem("username");

  if (storedUser) {
    window.alert("Logged in as " + storedUser);
  }

});