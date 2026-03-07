const username = document.getElementById("username");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const form = document.getElementById("loginForm");
const existingBtn = document.getElementById("existing");

// check saved credentials
const savedUsername = localStorage.getItem("username");

if (savedUsername) {
  existingBtn.style.display = "block";
}

// form submit
form.addEventListener("submit", function (e) {

  e.preventDefault();

  const user = username.value;
  const pass = password.value;

  alert(`Logged in as ${user}`);

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

// login existing user
existingBtn.addEventListener("click", function () {

  const storedUser = localStorage.getItem("username");

  if (storedUser) {
    alert(`Logged in as ${storedUser}`);
  }

});