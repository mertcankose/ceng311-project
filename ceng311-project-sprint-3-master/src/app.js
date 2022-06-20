var topics = ["Event", "Register", "Meeting", "Just Hello", "Photo", "Blog"];

$("#topic").autocomplete({
  source: topics,
});

//forms
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const topic = document.getElementById("topic");
const message = document.getElementById("message");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  successMessage.style.display = "block";
  successMessage.innerText = `The process is completed ${username.value.toUpperCase()} :) Your message was sent successfully. You will receive a return on the subject of the ${topic.value.toUpperCase()} as soon as possible.`;
});
