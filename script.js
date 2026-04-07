document.addEventListener("DOMContentLoaded", function () {

  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const checkbox = document.getElementById("checkbox");
  const form = document.getElementById("loginForm");
  const existingBtn = document.getElementById("existing");

  // Show button if saved
  const savedUser = localStorage.getItem("username");
  const savedPass = localStorage.getItem("password");

  if (savedUser && savedPass) {
    existingBtn.style.display = "block";
  }

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const user = username.value;
    const pass = password.value;

    // ✅ IMPORTANT: use window.alert
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

  existingBtn.addEventListener("click", function() {
    const storedUser = localStorage.getItem("username");

    if (storedUser) {
      window.alert("Logged in as " + storedUser);
    }
  });

});