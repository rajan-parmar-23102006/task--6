// Get form and fields
const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const successMessage = document.getElementById("success");

// Form Submit Event
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page refresh
  let valid = true;

  // Name Validation
  if (nameInput.value.trim() === "") {
    setError(nameInput, "Name cannot be empty");
    valid = false;
  } else {
    clearError(nameInput);
  }

  // Email Validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (emailInput.value.trim() === "") {
    setError(emailInput, "Email cannot be empty");
    valid = false;
  } else if (!emailPattern.test(emailInput.value.trim())) {
    setError(emailInput, "Enter a valid email");
    valid = false;
  } else {
    clearError(emailInput);
  }

  // Message Validation
  if (messageInput.value.trim() === "") {
    setError(messageInput, "Message cannot be empty");
    valid = false;
  } else {
    clearError(messageInput);
  }

  // Show Success Message if Valid
  if (valid) {
    successMessage.textContent = "Form submitted successfully!";
    form.reset();
  } else {
    successMessage.textContent = "";
  }
});

// Functions for Error Handling
function setError(input, message) {
  const parent = input.parentElement;
  const error = parent.querySelector(".error");
  error.textContent = message;
}

function clearError(input) {
  const parent = input.parentElement;
  const error = parent.querySelector(".error");
  error.textContent = "";
}
