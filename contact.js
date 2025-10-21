const form = document.getElementById("contact-form");
const successMsg = document.querySelector(
  "[data-testid='test-contact-success']"
);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  successMsg.textContent = "";

  const name = form.querySelector("#name");
  const email = form.querySelector("#email");
  const subject = form.querySelector("#subject");
  const message = form.querySelector("#message");

  const errors = {
    name: form.querySelector("#error-name"),
    email: form.querySelector("#error-email"),
    subject: form.querySelector("#error-subject"),
    message: form.querySelector("#error-message"),
  };

  let valid = true;
  Object.values(errors).forEach((el) => (el.textContent = "")); // clear old errors

  if (!name.value.trim()) {
    errors.name.textContent = "Full name is required";
    valid = false;
  }
  if (!email.value.trim()) {
    errors.email.textContent = "Email is required";
    valid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    errors.email.textContent = "Enter a valid email address";
    valid = false;
  }
  if (!subject.value.trim()) {
    errors.subject.textContent = "Subject is required";
    valid = false;
  }
  if (message.value.trim().length < 10) {
    errors.message.textContent = "Message must be at least 10 characters";
    valid = false;
  }

  if (valid) {
    successMsg.textContent = "✅ Your message was sent successfully!";
    form.reset();
  }
});
