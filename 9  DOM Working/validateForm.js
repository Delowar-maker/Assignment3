function validateForm(event) {
  event.preventDefault();

  clearErrors();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (!name || !/^[a-zA-Z]+$/.test(name)) {
    document.getElementById("nameError").textContent =
      "Name should not be empty and should contain only letters.";
  }

  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    document.getElementById("emailError").textContent =
      "Invalid email address.";
  }

  if (
    !password ||
    password.length < 8 ||
    !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)
  ) {
    document.getElementById("passwordError").textContent =
      "Password should have a minimum length of 8 characters and contain at least one uppercase letter, one lowercase letter, and one digit.";
  }

  if (password !== confirmPassword) {
    document.getElementById("confirmPasswordError").textContent =
      "Passwords do not match.";
  }

  if (!document.querySelector(".error")) {
    document.getElementById("myForm").submit();
  }
}

function clearErrors() {
  const errorElements = document.querySelectorAll(".error");
  errorElements.forEach(function (element) {
    element.textContent = "";
  });
}
